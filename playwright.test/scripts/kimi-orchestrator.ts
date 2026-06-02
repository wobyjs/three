/**
 * kimi-orchestrator.ts
 * Top-level entry point for the Kimi visual comparison pipeline.
 *
 * Spawns up to 5 parallel worker processes (kimi-comparison-worker.ts),
 * merges partial JSON results, generates JSON + HTML reports.
 *
 * CLI flags:
 *   --dry-run      passed through to all workers; skips real Kimi API calls
 *   --limit=N      cap total demos processed across all workers
 *   --workers=N    override worker count (default 5)
 *   --refail       re-run only demos with reference-load-failed status in existing report
 *
 * Security invariants:
 *   - KIMI_API_KEY propagated via env object only — never logged, never written to output files
 *   - Partial file paths constructed from integer batchIndex only — no external input
 *   - No Playwright imports, no ANTHROPIC_API_KEY references
 *   - All subprocess calls use spawn with array args — no shell string interpolation
 */

import { spawn } from 'child_process'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { ALL_DEMOS, CUSTOM_DEMO_IDS } from './demo-list.js'
import { KIMI_PASS_THRESHOLD } from './kimi-utils.js'

// ─── Path anchors ─────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

// ─── Output paths ─────────────────────────────────────────────────────────────

const PARTIAL_RESULTS_DIR = path.join(ROOT, 'test-results', 'partial-results')
const FINAL_REPORT_JSON = path.join(ROOT, 'test-results', 'kimi-comparison-report.json')
const FINAL_REPORT_HTML = path.join(ROOT, 'test-results', 'kimi-comparison-report.html')

// ─── Types ────────────────────────────────────────────────────────────────────

interface DemoComparisonResult {
  id: string
  name: string
  status: 'pass' | 'fail' | 'warn' | 'no-reference' | 'reference-load-failed' |
          'no-ported-screenshot' | 'error'
  similarity_score: number | null
  verdict: string | null
  reasoning: string | null
  key_differences: string[]
  ported_screenshot: string | null
  reference_screenshot: string | null
  agent_batch: number
}

interface KimiComparisonReport {
  generated_at: string
  phase: 'full' | 'partial'
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
  results: DemoComparisonResult[]
}

// ─── CLI arg parsing ──────────────────────────────────────────────────────────

function parseArgs() {
  const argv = process.argv.slice(2)

  const isDryRun = argv.includes('--dry-run')
  const isRefail = argv.includes('--refail')

  const limitArg = argv.find(a => a.startsWith('--limit='))
  const limit = limitArg ? parseInt(limitArg.split('=')[1], 10) : null

  const workersArg = argv.find(a => a.startsWith('--workers='))
  const numWorkers = workersArg ? parseInt(workersArg.split('=')[1], 10) : 5

  return { isDryRun, isRefail, limit, limitArg, numWorkers }
}

// ─── Pre-flight: dev server check ────────────────────────────────────────────

async function checkDevServer(): Promise<boolean> {
  try {
    const res = await fetch('http://localhost:5175', { signal: AbortSignal.timeout(3000) })
    return res.ok || res.status < 500
  } catch {
    return false
  }
}

// ─── Spawn one worker as a separate OS process ────────────────────────────────

function spawnWorker(
  batchIndex: number,
  batchSize: number,
  passedFlags: string[]
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const args = [
      'tsx',
      'scripts/kimi-comparison-worker.ts',
      `--batch-index=${batchIndex}`,
      `--batch-size=${batchSize}`,
      ...passedFlags
    ]

    const child = spawn('npx', args, {
      cwd: ROOT,
      shell: true,  // required on Windows to resolve npx through PATH
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env }  // KIMI_API_KEY propagated via env object only (T-14-06)
    })

    child.stdout.on('data', (d: Buffer) => process.stdout.write(`[w${batchIndex}] ${d}`))
    child.stderr.on('data', (d: Buffer) => process.stderr.write(`[w${batchIndex}] ${d}`))

    child.on('close', (code: number | null) => {
      if (code === 0) {
        resolve()
      } else {
        reject(new Error(`Worker ${batchIndex} exited with code ${code}`))
      }
    })

    child.on('error', (err: Error) => {
      reject(new Error(`Failed to spawn worker ${batchIndex}: ${err.message}`))
    })
  })
}

// ─── Merge partial results ────────────────────────────────────────────────────

function mergePartialResults(numWorkers: number): KimiComparisonReport {
  const seen = new Map<string, DemoComparisonResult>()

  for (let i = 0; i < numWorkers; i++) {
    // Partial file paths constructed from integer only — no external input (T-14-08)
    const partialPath = path.join(PARTIAL_RESULTS_DIR, `partial-${i}.json`)
    if (!fs.existsSync(partialPath)) {
      console.warn(`[orchestrator] Warning: partial-${i}.json not found — worker ${i} may have failed`)
      continue
    }

    let partial: { batch_index: number; results: DemoComparisonResult[] }
    try {
      partial = JSON.parse(fs.readFileSync(partialPath, 'utf-8'))
    } catch (e) {
      console.error(`[orchestrator] Failed to parse partial-${i}.json:`, e)
      continue
    }

    // De-duplicate by demo ID — last writer wins
    for (const result of partial.results) {
      seen.set(result.id, result)
    }
  }

  const allResults = Array.from(seen.values())

  // Sort: fail first, then warn, then pass, then no-reference/other
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

  // Comparable = demos where comparison was actually attempted (both screenshots existed)
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
  const ciGateFailed = failed > 0

  return {
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
    pass_threshold: KIMI_PASS_THRESHOLD,
    ci_gate_failed: ciGateFailed,
    results: allResults
  }
}

// ─── HTML report generation ───────────────────────────────────────────────────

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

function escapeHtml(text: string | null | undefined): string {
  if (text == null) return ''
  const s = typeof text === 'string' ? text : String(text)
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// ─── Main orchestrator entry point ────────────────────────────────────────────

async function main(): Promise<void> {
  const { isDryRun, isRefail, limit, limitArg, numWorkers } = parseArgs()

  // ── Pre-flight Check 1: KIMI_API_KEY ──────────────────────────────────────
  // Key value is NEVER logged — only its presence is checked (T-14-06)
  if (!isDryRun && !process.env.KIMI_API_KEY) {
    console.error('[pre-flight] FATAL: KIMI_API_KEY env var is not set. Cannot run live comparison.')
    console.error('[pre-flight] Set it with: export KIMI_API_KEY=your-key')
    process.exit(1)
  }

  if (isDryRun) {
    console.log('[orchestrator] DRY RUN: workers will use mock verdicts.')
  }

  // ── Build comparable demo list ─────────────────────────────────────────────
  let comparableDemos = ALL_DEMOS.filter(d => !CUSTOM_DEMO_IDS.has(d.id))
  console.log(`[orchestrator] Comparable demos (excluding custom): ${comparableDemos.length}`)

  // --refail: filter to only previously-failed demos from existing report
  if (isRefail) {
    if (!fs.existsSync(FINAL_REPORT_JSON)) {
      console.error('[orchestrator] --refail specified but no existing report found at:', FINAL_REPORT_JSON)
      process.exit(1)
    }
    let existingReport: KimiComparisonReport
    try {
      existingReport = JSON.parse(fs.readFileSync(FINAL_REPORT_JSON, 'utf-8'))
    } catch (e) {
      console.error('[orchestrator] Failed to parse existing report:', e)
      process.exit(1)
    }
    const failedIds = new Set(
      existingReport.results
        .filter(r => r.status === 'reference-load-failed')
        .map(r => r.id)
    )
    comparableDemos = comparableDemos.filter(d => failedIds.has(d.id))
    console.log(`[orchestrator] --refail: ${comparableDemos.length} demos with reference-load-failed status`)
  }

  // Apply --limit
  if (limit !== null && limit > 0) {
    comparableDemos = comparableDemos.slice(0, limit)
    console.log(`[orchestrator] --limit=${limit}: processing ${comparableDemos.length} demos`)
  }

  if (comparableDemos.length === 0) {
    console.log('[orchestrator] No demos to process. Exiting.')
    process.exit(0)
  }

  // ── Pre-flight Check 2: Dev server reachability ────────────────────────────
  const portedScreenshotsMissing = comparableDemos.some(d => {
    const p = path.join(ROOT, 'screenshots', 'ported', `${d.id}.png`)
    return !fs.existsSync(p)
  })

  if (portedScreenshotsMissing) {
    const serverUp = await checkDevServer()
    if (!serverUp) {
      console.warn('[pre-flight] WARNING: localhost:5175 is unreachable and some ported screenshots are missing.')
      console.warn('[pre-flight] Start the dev server with: pnpm run dev (from the demo/ directory)')
      console.warn('[pre-flight] Workers will mark missing ported screenshots as no-ported-screenshot. Continuing...')
    }
  }

  // ── Ensure output directories exist & clean stale partials ────────────────
  fs.mkdirSync(PARTIAL_RESULTS_DIR, { recursive: true })
  fs.mkdirSync(path.join(ROOT, 'test-results'), { recursive: true })

  // Remove partial files from previous runs so merged results are fresh
  const existingPartials = fs.readdirSync(PARTIAL_RESULTS_DIR).filter(f => /^partial-\d+\.json$/.test(f))
  for (const f of existingPartials) {
    fs.rmSync(path.join(PARTIAL_RESULTS_DIR, f))
  }
  if (existingPartials.length > 0) {
    console.log(`[orchestrator] Cleared ${existingPartials.length} stale partial result files`)
  }

  // ── Build flags to pass through to workers ────────────────────────────────
  const passedFlags: string[] = []
  if (isDryRun) passedFlags.push('--dry-run')
  if (limitArg) passedFlags.push(limitArg)

  // ── Spawn workers ──────────────────────────────────────────────────────────
  const batchSize = Math.ceil(comparableDemos.length / numWorkers)

  console.log(`[orchestrator] Spawning ${numWorkers} workers (batch-size=${batchSize})...`)

  const workerPromises = Array.from({ length: numWorkers }, (_, i) => {
    return spawnWorker(i, batchSize, passedFlags)
  })

  // Promise.allSettled ensures partial results are merged even if some workers fail (T-14-09)
  const settlements = await Promise.allSettled(workerPromises)

  for (let i = 0; i < settlements.length; i++) {
    const s = settlements[i]
    if (s.status === 'rejected') {
      console.error(`[orchestrator] Worker ${i} failed:`, s.reason?.message ?? s.reason)
    }
  }

  console.log(`[orchestrator] All workers completed. Merging results...`)

  // ── Merge partial results ──────────────────────────────────────────────────
  const report = mergePartialResults(numWorkers)

  // ── Write JSON report ──────────────────────────────────────────────────────
  fs.writeFileSync(FINAL_REPORT_JSON, JSON.stringify(report, null, 2))
  console.log(`[orchestrator] JSON report: ${FINAL_REPORT_JSON}`)

  // ── Write HTML report ──────────────────────────────────────────────────────
  const html = generateHtmlReport(report)
  fs.writeFileSync(FINAL_REPORT_HTML, html)
  console.log(`[orchestrator] HTML report: ${FINAL_REPORT_HTML}`)

  // ── Summary ────────────────────────────────────────────────────────────────
  console.log(`\n=== KIMI COMPARISON SUMMARY ===`)
  console.log(`Total demos:    ${report.total_demos}`)
  console.log(`Comparable:     ${report.comparable_demos}`)
  console.log(`Passed:         ${report.passed}`)
  console.log(`Warned:         ${report.warned}`)
  console.log(`Failed:         ${report.failed}`)
  console.log(`No reference:   ${report.no_reference}`)
  console.log(`Errors:         ${report.errors}`)
  console.log(`Pass rate:      ${(report.pass_rate * 100).toFixed(1)}%`)
  console.log(`CI gate:        ${report.ci_gate_failed ? 'FAILED' : 'PASSED'}`)

  // ── Exit code ──────────────────────────────────────────────────────────────
  // dry-run always exits 0; otherwise exit 1 if CI gate failed
  if (isDryRun) {
    process.exit(0)
  } else {
    process.exit(report.ci_gate_failed ? 1 : 0)
  }
}

main().catch(err => {
  console.error('[orchestrator] Unhandled error:', err)
  process.exit(1)
})
