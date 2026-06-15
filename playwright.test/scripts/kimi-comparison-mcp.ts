/**
 * kimi-comparison-mcp.ts
 * Live Kimi comparison using Chrome DevTools MCP for all comparable demos.
 *
 * Architecture:
 * - 3 Chrome instances already running on ports 9225-9227 (profiles 4, 5, 6)
 * - Each worker handles 1/3 of demos
 * - Kimi API calls are queued (sequential, 2s delay between calls)
 * - Retry logic: 3 attempts with exponential backoff
 *
 * Prerequisites:
 * - Chrome profiles 4, 5, 6 running with remote debugging
 * - KIMI_API_KEY in environment
 * - Dev server running at localhost:5174 (or 5175)
 * - Reference screenshots from Plan 03 (116 files)
 *
 * Usage:
 *   export KIMI_API_KEY="sk-..." && npx tsx scripts/kimi-comparison-mcp.ts
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { ALL_DEMOS, CUSTOM_DEMO_IDS } from './demo-list.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const KIMI_API_KEY = process.env.KIMI_API_KEY
const KIMI_ENDPOINT = 'https://api.sfkey.cn/v1/chat/completions'
const KIMI_MODEL = 'kimi-k2.5'

const DEV_SERVER_URL = 'http://localhost:5174'
const THREEJS_BASE = 'https://threejs.org/examples'

const CHROME_PROFILES = [
  { name: 'profile-qmdj-4', port: 9225 },
  { name: 'profile-qmdj-5', port: 9226 },
  { name: 'profile-qmdj-6', port: 9227 }
]

interface KimiVerdict {
  similarity_score: number
  verdict: 'pass' | 'fail' | 'inconclusive'
  reasoning: string
  key_differences: string[]
}

interface DemoResult {
  id: string
  name: string
  status: 'pass' | 'fail' | 'warn' | 'no-reference' | 'reference-load-failed' | 'no-ported-screenshot' | 'error'
  similarity_score: number | null
  verdict: string | null
  reasoning: string | null
  key_differences: string[]
  ported_screenshot: string | null
  reference_screenshot: string | null
  worker_id: number
}

interface KimiComparisonReport {
  generated_at: string
  phase: 'full'
  total_demos: number
  comparable_demos: number
  passed: number
  warned: number
  failed: number
  no_reference: number
  errors: number
  pass_rate: number
  pass_threshold: number
  ci_gate_failed: boolean
  results: DemoResult[]
}

const PORTED_DIR = path.join(ROOT, 'screenshots', 'ported')
const REFERENCE_DIR = path.join(ROOT, 'screenshots', 'reference')
const RESULTS_DIR = path.join(ROOT, 'test-results')
const REPORT_JSON = path.join(RESULTS_DIR, 'kimi-comparison-report.json')
const REPORT_HTML = path.join(RESULTS_DIR, 'kimi-comparison-report.html')

/**
 * Kimi API queue - processes one request at a time with retry and delay
 */
class KimiQueue {
  private queue: Array<{
    demoId: string
    portedPath: string
    referencePath: string
    resolve: (verdict: KimiVerdict | null) => void
    reject: (err: Error) => void
  }> = []
  private processing = false

  async compare(demoId: string, portedPath: string, referencePath: string): Promise<KimiVerdict | null> {
    return new Promise((resolve, reject) => {
      this.queue.push({ demoId, portedPath, referencePath, resolve, reject })
      this.processQueue()
    })
  }

  private async processQueue(): Promise<void> {
    if (this.processing || this.queue.length === 0) return

    this.processing = true
    const item = this.queue.shift()!

    try {
      // Retry Kimi API up to 3 times with exponential backoff
      let lastError: Error | null = null
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          const verdict = await this.callKimiAPI(item.demoId, item.portedPath, item.referencePath)
          item.resolve(verdict)
          return
        } catch (err) {
          lastError = err as Error
          const errMsg = (err as Error).message || ''

          // 504 Gateway Timeout - exponential backoff
          if (errMsg.includes('504') && attempt < 3) {
            const delay = attempt * 5000 // 5s, 10s
            console.log(`[kimi-queue] ${item.demoId}: 504 timeout, retry ${attempt}/3 in ${delay/1000}s...`)
            await new Promise(resolve => setTimeout(resolve, delay))
          }
          // Rate limit - longer delay
          else if (errMsg.includes('429') && attempt < 3) {
            const delay = 10000
            console.log(`[kimi-queue] ${item.demoId}: rate limited, retry in ${delay/1000}s...`)
            await new Promise(resolve => setTimeout(resolve, delay))
          }
          // Other error - retry with standard backoff
          else if (attempt < 3) {
            const delay = attempt * 5000
            console.log(`[kimi-queue] ${item.demoId}: attempt ${attempt} failed, retry in ${delay/1000}s...`)
            await new Promise(resolve => setTimeout(resolve, delay))
          }
        }
      }
      item.reject(lastError!)
    } finally {
      this.processing = false
      // Process next item after 2s delay (avoid rate limits)
      if (this.queue.length > 0) {
        setTimeout(() => this.processQueue(), 2000)
      }
    }
  }

  private async callKimiAPI(demoId: string, portedPath: string, referencePath: string): Promise<KimiVerdict | null> {
    if (!KIMI_API_KEY) {
      throw new Error('KIMI_API_KEY not set')
    }

    const ported64 = fs.readFileSync(portedPath).toString('base64')
    const ref64 = fs.readFileSync(referencePath).toString('base64')

    const prompt = `You are comparing two screenshots of a 3D WebGL rendering.
Image 1 (PORTED): A Three.js example ported to JSX/Woby reactive syntax.
Image 2 (REFERENCE): The original Three.js example from threejs.org.

Respond ONLY with a JSON object (no markdown, no preamble):
{
  "similarity_score": <0.0-1.0>,
  "verdict": "<pass|fail|inconclusive>",
  "reasoning": "<1-2 sentences>",
  "key_differences": ["<difference>"]
}

Pass threshold: similarity_score >= 0.7`

    const body = {
      model: KIMI_MODEL,
      max_tokens: 8192,
      messages: [{
        role: 'user' as const,
        content: [
          { type: 'image_url' as const, image_url: { url: `data:image/png;base64,${ported64}` } },
          { type: 'image_url' as const, image_url: { url: `data:image/png;base64,${ref64}` } },
          { type: 'text' as const, text: prompt }
        ]
      }]
    }

    const res = await fetch(KIMI_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${KIMI_API_KEY}`
      },
      body: JSON.stringify(body)
    })

    if (!res.ok) {
      const err = await res.text()
      throw new Error(`Kimi API ${res.status}: ${err.slice(0, 200)}`)
    }

    const data = await res.json() as any
    const content = data.choices?.[0]?.message?.content ?? null

    if (!content) {
      return null
    }

    // Parse JSON (handle markdown code blocks)
    let jsonStr = content.trim()
    if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim()
    }

    try {
      const parsed = JSON.parse(jsonStr) as KimiVerdict

      // Validate required fields
      if (typeof parsed.similarity_score !== 'number' ||
          !['pass', 'fail', 'inconclusive'].includes(parsed.verdict)) {
        console.warn(`[kimi-queue] ${demoId}: Invalid verdict structure, got:`, jsonStr.slice(0, 100))
        return null
      }

      return parsed
    } catch (parseErr) {
      console.warn(`[kimi-queue] ${demoId}: Failed to parse Kimi response:`, jsonStr.slice(0, 200))
      return null
    }
  }
}

/**
 * Check if dev server is running
 */
async function checkDevServer(): Promise<boolean> {
  try {
    const res = await fetch(DEV_SERVER_URL, { signal: AbortSignal.timeout(3000) })
    return res.ok || res.status < 500
  } catch {
    return false
  }
}

/**
 * Get appropriate wait time for demo
 */
function getWaitMs(demoId: string): number {
  return /^webgl_loader_/.test(demoId) ? 12000 : 8000
}

/**
 * Worker process - captures screenshots via Chrome DevTools MCP and queues Kimi comparisons
 */
async function worker(
  workerId: number,
  demoIds: Array<{ id: string; name: string }>,
  kimiQueue: KimiQueue
): Promise<DemoResult[]> {
  const results: DemoResult[] = []
  const profile = CHROME_PROFILES[workerId]

  console.log(`[worker-${workerId}] Starting with ${demoIds.length} demos on port ${profile.port}`)

  for (const demo of demoIds) {
    const { id, name } = demo
    console.log(`\n[worker-${workerId}] Processing ${id}...`)

    const portedPath = path.join(PORTED_DIR, `${id}.png`)
    const refPath = path.join(REFERENCE_DIR, `${id}.png`)
    const waitMs = getWaitMs(id)

    // Step 1: Check if reference screenshot exists
    if (!fs.existsSync(refPath)) {
      console.warn(`[worker-${workerId}] ${id}: No reference screenshot, skipping`)
      results.push({
        id,
        name,
        status: 'no-reference',
        similarity_score: null,
        verdict: null,
        reasoning: 'Reference screenshot not found',
        key_differences: [],
        ported_screenshot: null,
        reference_screenshot: null,
        worker_id: workerId
      })
      continue
    }

    // Step 2: Capture ported screenshot if missing
    if (!fs.existsSync(portedPath)) {
      console.log(`[worker-${workerId}] ${id}: Capturing ported screenshot from ${DEV_SERVER_URL}...`)

      try {
        // Navigate to ported demo
        await fetch(`http://localhost:${profile.port}/json/new?${DEV_SERVER_URL}/#${id}`)

        // Wait for canvas to render
        await new Promise(resolve => setTimeout(resolve, waitMs))

        // Take screenshot using Chrome DevTools Protocol
        const pagesRes = await fetch(`http://localhost:${profile.port}/json/list`)
        const pages = await pagesRes.json() as any[]

        if (pages.length === 0) {
          throw new Error('No pages found')
        }

        const page = pages[0] // Get the active page
        const screenshotRes = await fetch(`http://localhost:${profile.port}/json`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            id: 1,
            method: 'Page.captureScreenshot',
            params: { format: 'png' }
          })
        })

        const screenshotData = await screenshotRes.json() as any
        if (!screenshotData.result?.data) {
          throw new Error('Screenshot capture failed')
        }

        // Save screenshot
        const buffer = Buffer.from(screenshotData.result.data, 'base64')
        fs.mkdirSync(path.dirname(portedPath), { recursive: true })
        fs.writeFileSync(portedPath, buffer)

        console.log(`[worker-${workerId}] ${id}: ✓ Ported screenshot captured`)
      } catch (err: any) {
        console.error(`[worker-${workerId}] ${id}: ✗ Failed to capture ported screenshot:`, err.message)
        results.push({
          id,
          name,
          status: 'no-ported-screenshot',
          similarity_score: null,
          verdict: null,
          reasoning: `Failed to capture ported screenshot: ${err.message}`,
          key_differences: [],
          ported_screenshot: null,
          reference_screenshot: refPath,
          worker_id: workerId
        })
        continue
      }
    } else {
      console.log(`[worker-${workerId}] ${id}: Ported screenshot exists, skipping capture`)
    }

    // Step 3: Queue Kimi comparison
    console.log(`[worker-${workerId}] ${id}: Queueing Kimi comparison...`)
    const startTime = Date.now()

    try {
      const verdict = await kimiQueue.compare(id, portedPath, refPath)
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)

      if (!verdict) {
        results.push({
          id,
          name,
          status: 'error',
          similarity_score: null,
          verdict: null,
          reasoning: 'Failed to parse Kimi verdict',
          key_differences: [],
          ported_screenshot: portedPath,
          reference_screenshot: refPath,
          worker_id: workerId
        })
        continue
      }

      const status = verdict.verdict === 'pass' ? 'pass' :
                     verdict.verdict === 'inconclusive' ? 'warn' : 'fail'

      console.log(`[worker-${workerId}] ${id}: ✓ Kimi: ${verdict.verdict} (${verdict.similarity_score}) in ${elapsed}s`)

      results.push({
        id,
        name,
        status,
        similarity_score: verdict.similarity_score,
        verdict: verdict.verdict,
        reasoning: verdict.reasoning,
        key_differences: verdict.key_differences,
        ported_screenshot: portedPath,
        reference_screenshot: refPath,
        worker_id: workerId
      })
    } catch (err: any) {
      console.error(`[worker-${workerId}] ${id}: ✗ Kimi error:`, err.message)
      results.push({
        id,
        name,
        status: 'error',
        similarity_score: null,
        verdict: null,
        reasoning: err.message,
        key_differences: [],
        ported_screenshot: portedPath,
        reference_screenshot: refPath,
        worker_id: workerId
      })
    }
  }

  return results
}

/**
 * Generate HTML report
 */
function generateHtmlReport(report: KimiComparisonReport): string {
  const rowBgColor: Record<string, string> = {
    pass: '#f0fdf4',
    warn: '#fffbeb',
    fail: '#fef2f2',
    'no-reference': '#f1f5f9',
    'reference-load-failed': '#fff7ed',
    'no-ported-screenshot': '#faf5ff',
    error: '#fef2f2'
  }

  const statusBadgeColor: Record<string, string> = {
    pass: '#22c55e',
    warn: '#f59e0b',
    fail: '#ef4444',
    'no-reference': '#94a3b8',
    'reference-load-failed': '#f97316',
    'no-ported-screenshot': '#a855f7',
    error: '#dc2626'
  }

  const escapeHtml = (text: string | null | undefined): string => {
    if (text == null) return ''
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  const rows = report.results.map(r => {
    const rowBg = rowBgColor[r.status] ?? '#ffffff'
    const badgeColor = statusBadgeColor[r.status] ?? '#999'
    const score = r.similarity_score != null ? r.similarity_score.toFixed(2) : 'N/A'
    const keyDiffsArr = r.key_differences ?? []
    const keyDiffs = keyDiffsArr.length > 0
      ? `<ul style="margin:0;padding-left:1.2em">${keyDiffsArr.map(d => `<li>${escapeHtml(d)}</li>`).join('')}</ul>`
      : ''
    return `<tr style="background:${rowBg}">
      <td><code>${escapeHtml(r.id)}</code><br><small style="color:#64748b">${escapeHtml(r.name)}</small></td>
      <td><span style="background:${badgeColor};color:#fff;padding:2px 8px;border-radius:4px;font-size:0.85em;white-space:nowrap">${escapeHtml(r.status)}</span></td>
      <td style="text-align:center;font-weight:bold">${score}</td>
      <td style="font-size:0.85em;max-width:200px">${escapeHtml(r.verdict ?? '')}</td>
      <td style="font-size:0.85em;max-width:300px">${escapeHtml(r.reasoning ?? '')}</td>
      <td style="font-size:0.8em">${keyDiffs}</td>
    </tr>`
  }).join('\n')

  const ciStatus = report.ci_gate_failed
    ? '<span style="color:#ef4444;font-weight:bold">FAILED</span>'
    : '<span style="color:#22c55e;font-weight:bold">PASSED</span>'

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Kimi Visual Comparison Report</title>
<style>
  * { box-sizing: border-box; }
  body { font-family: system-ui, sans-serif; margin: 0; padding: 20px; background: #f8fafc; color: #1e293b; }
  h1 { margin-top: 0; }
  .summary {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 12px;
    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 20px;
  }
  .metric { text-align: center; }
  .metric .value { font-size: 1.8em; font-weight: 700; }
  .metric .label { font-size: 0.75em; color: #64748b; margin-top: 2px; }
  table { border-collapse: collapse; width: 100%; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
  th, td { border: 1px solid #e2e8f0; padding: 8px 10px; text-align: left; vertical-align: top; }
  th { background: #f1f5f9; font-weight: 600; font-size: 0.85em; text-transform: uppercase; letter-spacing: 0.03em; }
  td code { font-size: 0.9em; }
  .meta { color: #64748b; font-size: 0.9em; margin-bottom: 16px; }
</style>
</head>
<body>
<h1>Kimi Visual Comparison Report</h1>
<p class="meta">Generated: ${report.generated_at} &nbsp;|&nbsp; Pass threshold: ${(report.pass_threshold * 100).toFixed(0)}% &nbsp;|&nbsp; CI gate: ${ciStatus}</p>
<div class="summary">
  <div class="metric"><div class="value">${report.total_demos}</div><div class="label">Total</div></div>
  <div class="metric"><div class="value">${report.comparable_demos}</div><div class="label">Comparable</div></div>
  <div class="metric"><div class="value" style="color:#22c55e">${report.passed}</div><div class="label">Passed</div></div>
  <div class="metric"><div class="value" style="color:#f59e0b">${report.warned}</div><div class="label">Warned</div></div>
  <div class="metric"><div class="value" style="color:#ef4444">${report.failed}</div><div class="label">Failed</div></div>
  <div class="metric"><div class="value">${report.no_reference}</div><div class="label">No Ref</div></div>
  <div class="metric"><div class="value">${report.errors}</div><div class="label">Errors</div></div>
  <div class="metric"><div class="value">${(report.pass_rate * 100).toFixed(1)}%</div><div class="label">Pass Rate</div></div>
</div>
<table>
<thead>
<tr>
  <th>ID / Name</th>
  <th>Status</th>
  <th>Score</th>
  <th>Verdict</th>
  <th>Reasoning</th>
  <th>Key Differences</th>
</tr>
</thead>
<tbody>
${rows}
</tbody>
</table>
</body>
</html>`
}

/**
 * Main: Run 3 workers in parallel, Kimi calls queued sequentially
 */
async function main(): Promise<void> {
  if (!KIMI_API_KEY) {
    console.error('ERROR: KIMI_API_KEY not set')
    console.error('Usage: export KIMI_API_KEY="sk-..." && npx tsx scripts/kimi-comparison-mcp.ts')
    process.exit(1)
  }

  console.log('[orchestrator] Starting live Kimi comparison with Chrome DevTools MCP')
  console.log('[orchestrator] 3 workers (ports 9225, 9226, 9227), Kimi API queued sequentially\n')

  // Pre-flight check: dev server
  const serverUp = await checkDevServer()
  if (!serverUp) {
    console.warn('[pre-flight] WARNING: Dev server not reachable at', DEV_SERVER_URL)
    console.warn('[pre-flight] Some ported screenshots may be missing. Continuing...')
  } else {
    console.log('[pre-flight] Dev server OK at', DEV_SERVER_URL)
  }

  // Pre-flight check: reference screenshots
  const refCount = fs.readdirSync(REFERENCE_DIR).filter(f => f.endsWith('.png')).length
  console.log(`[pre-flight] Reference screenshots: ${refCount} files`)

  // Build comparable demo list (exclude custom demos)
  const comparableDemos = ALL_DEMOS.filter(d => !CUSTOM_DEMO_IDS.has(d.id))
  console.log(`[orchestrator] Comparable demos (excluding custom): ${comparableDemos.length}\n`)

  if (comparableDemos.length === 0) {
    console.log('[orchestrator] No demos to process. Exiting.')
    process.exit(0)
  }

  const kimiQueue = new KimiQueue()

  // Distribute demos across 3 workers
  const batchSize = Math.ceil(comparableDemos.length / 3)
  const workerDemos = [
    comparableDemos.slice(0, batchSize),
    comparableDemos.slice(batchSize, batchSize * 2),
    comparableDemos.slice(batchSize * 2)
  ]

  console.log('[orchestrator] Worker assignments:')
  workerDemos.forEach((demos, i) => {
    console.log(`  Worker ${i} (port ${CHROME_PROFILES[i].port}): ${demos.length} demos`)
  })
  console.log('')

  const startTime = Date.now()

  // Run workers in parallel
  const workerResults = await Promise.all([
    worker(0, workerDemos[0], kimiQueue),
    worker(1, workerDemos[1], kimiQueue),
    worker(2, workerDemos[2], kimiQueue)
  ])

  const allResults = workerResults.flat()
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1)

  // Sort results: fail first, then warn, then pass, then no-reference/other
  const sortOrder: Record<string, number> = {
    fail: 0,
    warn: 1,
    pass: 2,
    'reference-load-failed': 3,
    error: 4,
    'no-ported-screenshot': 5,
    'no-reference': 6
  }
  allResults.sort((a, b) => (sortOrder[a.status] ?? 7) - (sortOrder[b.status] ?? 7) || a.id.localeCompare(b.id))

  // Calculate stats
  const comparable = allResults.filter(r =>
    r.status !== 'no-reference' &&
    r.status !== 'no-ported-screenshot' &&
    r.status !== 'reference-load-failed'
  )
  const passed = allResults.filter(r => r.status === 'pass').length
  const warned = allResults.filter(r => r.status === 'warn').length
  const failed = allResults.filter(r => r.status === 'fail').length
  const noReference = allResults.filter(r => r.status === 'no-reference').length
  const errors = allResults.filter(r =>
    r.status === 'error' || r.status === 'reference-load-failed' || r.status === 'no-ported-screenshot'
  ).length
  const passRate = comparable.length > 0 ? passed / comparable.length : 0

  const report: KimiComparisonReport = {
    generated_at: new Date().toISOString(),
    phase: 'full',
    total_demos: allResults.length,
    comparable_demos: comparable.length,
    passed,
    warned,
    failed,
    no_reference: noReference,
    errors,
    pass_rate: passRate,
    pass_threshold: 0.7,
    ci_gate_failed: failed > 0,
    results: allResults
  }

  // Write reports
  fs.mkdirSync(RESULTS_DIR, { recursive: true })
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2))
  console.log(`\n[orchestrator] JSON report: ${REPORT_JSON}`)

  const html = generateHtmlReport(report)
  fs.writeFileSync(REPORT_HTML, html)
  console.log(`[orchestrator] HTML report: ${REPORT_HTML}`)

  // Print summary
  console.log('\n=== RESULTS ===\n')
  console.log(`Total: ${report.total_demos}`)
  console.log(`Comparable: ${report.comparable_demos}`)
  console.log(`Passed: ${passed}`)
  console.log(`Warned: ${warned}`)
  console.log(`Failed: ${failed}`)
  console.log(`No Reference: ${noReference}`)
  console.log(`Errors: ${errors}`)
  console.log(`Pass Rate: ${(passRate * 100).toFixed(1)}%`)
  console.log(`\nTotal time: ${elapsed}s`)

  if (failed > 0) {
    console.log('\n=== FAILED DEMOS ===\n')
    allResults.filter(r => r.status === 'fail').forEach(r => {
      console.log(`${r.id}: score ${r.similarity_score?.toFixed(2)}`)
      console.log(`  Reasoning: ${r.reasoning}`)
      if (r.key_differences.length > 0) {
        console.log(`  Key differences:`)
        r.key_differences.forEach(d => console.log(`    - ${d}`))
      }
    })
  }

  // Exit with appropriate code
  process.exit(report.ci_gate_failed ? 1 : 0)
}

main().catch(err => {
  console.error('[orchestrator] Fatal error:', err)
  process.exit(1)
})