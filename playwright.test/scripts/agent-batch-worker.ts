import Anthropic from '@anthropic-ai/sdk'
import { chromium } from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import {
  ALL_DEMOS, CUSTOM_DEMO_IDS, THREEJS_BASE,
  PORTED_SCREENSHOT_DIR, REFERENCE_SCREENSHOT_DIR, probeUrl
} from './demo-list.js'
import { Verdict, parseVerdict, buildBatchRequests, resizeScreenshot, submitAndPoll } from './shared-llm-utils.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.join(__dirname, '..')

// ─── Types ───────────────────────────────────────────────────────────────────

interface AgentDemoResult {
  id: string
  name: string
  agentBatch: number
  referenceStatus: string
  hasPortedScreenshot: boolean
  portedScreenshot: string | null
  referenceScreenshot: string | null
  verdict: Verdict | null
  error: string | null
}

interface AgentBatchResult {
  batchIndex: number
  processedCount: number
  results: AgentDemoResult[]
}

// ─── Playwright reference capture for one demo ────────────────────────────────

async function captureReferenceDemoForAgent(
  browser: any,
  demoId: string,
  outPath: string
): Promise<string> {
  const url = `${THREEJS_BASE}/${demoId}.html`
  const context = await browser.newContext({ viewport: { width: 1280, height: 720 } })
  const page = await context.newPage()

  try {
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 25000 })
    } catch {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 })
    }

    await page.waitForTimeout(5000)

    const canvasCount = await page.locator('canvas').count()
    if (canvasCount === 0) return 'reference-load-failed'

    const hasContent = await page.evaluate((): boolean => {
      const canvas = document.querySelector('canvas') as HTMLCanvasElement | null
      if (!canvas) return false
      const gl = (canvas.getContext('webgl2') || canvas.getContext('webgl')) as WebGLRenderingContext | null
      if (!gl) return true
      try {
        const pixels = new Uint8Array(4 * 16 * 16)
        gl.readPixels(0, 0, 16, 16, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
        for (let i = 3; i < pixels.length; i += 4) {
          if (pixels[i] > 0) return true
        }
      } catch { return true }
      return false
    })

    if (!hasContent) return 'reference-load-failed'

    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    await page.locator('canvas').first().screenshot({ path: outPath })
    return 'ok'

  } catch {
    return 'reference-load-failed'
  } finally {
    await context.close()
  }
}

// ─── Main (CLI entry point) ────────────────────────────────────────────────────

async function main() {
  // Parse CLI args
  const args = process.argv.slice(2)
  const batchIndexArg = args.find(a => a.startsWith('--batch-index='))
  const batchSizeArg = args.find(a => a.startsWith('--batch-size='))
  const isDryRun = args.includes('--dry-run')

  if (!batchIndexArg) {
    console.error('Usage: agent-batch-worker.ts --batch-index=N [--batch-size=40] [--dry-run]')
    process.exit(1)
  }

  const batchIndex = parseInt(batchIndexArg.split('=')[1], 10)
  const batchSize = batchSizeArg ? parseInt(batchSizeArg.split('=')[1], 10) : 40

  // Compute this agent's EXCLUSIVE slice of demos.
  // Formula matches orchestrator: slice(batchIndex * batchSize, (batchIndex + 1) * batchSize)
  // Non-overlapping: each demo appears in exactly one agent's slice.
  const myDemos = ALL_DEMOS.slice(batchIndex * batchSize, (batchIndex + 1) * batchSize)
  console.log(`[Agent ${batchIndex}] Starting. Demos: ${myDemos.length} (indices ${batchIndex * batchSize}–${(batchIndex + 1) * batchSize - 1})`)

  const partialResultPath = path.join(ROOT, 'test-results', 'partial-results', `partial-${batchIndex}.json`)
  const resizedDir = path.join(ROOT, 'test-results', 'resized-screenshots', `batch-${batchIndex}`)

  const results: AgentDemoResult[] = []

  // Validate API key early if not dry-run
  if (!isDryRun && !process.env.ANTHROPIC_API_KEY) {
    console.error(`[Agent ${batchIndex}] ERROR: ANTHROPIC_API_KEY not set.`)
    process.exit(1)
  }

  // Step 1: Probe + capture reference screenshots for this batch
  const browser = await chromium.launch({
    args: ['--headless', '--no-sandbox', '--disable-dev-shm-usage', '--use-angle=gl']
  })

  for (const demo of myDemos) {
    const portedPath = path.join(ROOT, PORTED_SCREENSHOT_DIR, `${demo.id}.png`)
    // Each agent writes to its own demo IDs — no filename overlap with other agents
    const refOutPath = path.join(ROOT, REFERENCE_SCREENSHOT_DIR, `${demo.id}.png`)

    let referenceStatus = 'no-reference'

    if (!CUSTOM_DEMO_IDS.has(demo.id)) {
      // Use existing reference screenshot if already captured by Plan 01
      if (fs.existsSync(refOutPath)) {
        referenceStatus = 'ok'
        console.log(`  [Agent ${batchIndex}] [cached] ${demo.id}`)
      } else {
        // Probe and capture fresh
        const url = `${THREEJS_BASE}/${demo.id}.html`
        const reachable = await probeUrl(url)
        if (!reachable) {
          referenceStatus = 'http-404'
        } else {
          referenceStatus = await captureReferenceDemoForAgent(browser, demo.id, refOutPath)
        }
        console.log(`  [Agent ${batchIndex}] [${referenceStatus}] ${demo.id}`)
      }
    }

    const relPorted = fs.existsSync(portedPath) ? path.relative(ROOT, portedPath).replace(/\\/g, '/') : null
    const relRef = referenceStatus === 'ok' ? path.relative(ROOT, refOutPath).replace(/\\/g, '/') : null

    results.push({
      id: demo.id,
      name: demo.name,
      agentBatch: batchIndex,
      referenceStatus,
      hasPortedScreenshot: fs.existsSync(portedPath),
      portedScreenshot: relPorted,
      referenceScreenshot: relRef,
      verdict: null,
      error: null
    })
  }

  await browser.close()

  // Step 2: Resize + submit LLM batch for comparable demos in this agent's slice
  const comparableDemos = results.filter(r => r.referenceStatus === 'ok' && r.hasPortedScreenshot)

  if (comparableDemos.length > 0) {
    fs.mkdirSync(resizedDir, { recursive: true })

    const resizedPairs: Array<{ id: string; portedResized: string; referenceResized: string }> = []
    for (const r of comparableDemos) {
      const portedResized = path.join(resizedDir, `ported_${r.id}.png`)
      const refResized = path.join(resizedDir, `ref_${r.id}.png`)
      try {
        const portedOk = await resizeScreenshot(path.join(ROOT, r.portedScreenshot!), portedResized)
        const refOk = await resizeScreenshot(path.join(ROOT, r.referenceScreenshot!), refResized)
        if (portedOk && refOk) resizedPairs.push({ id: r.id, portedResized, referenceResized: refResized })
      } catch (err: any) {
        const result = results.find(x => x.id === r.id)
        if (result) result.error = `resize failed: ${err.message}`
      }
    }

    // Submit partial LLM batch (40 items max — well under the 100-item chunk limit)
    let rawResults: Map<string, any>
    if (isDryRun) {
      rawResults = new Map(resizedPairs.map(p => [
        p.id,
        { custom_id: p.id, result: { type: 'succeeded', message: { content: [{ text: `{"similarity_score":0.85,"verdict":"pass","reasoning":"Dry run agent ${batchIndex}.","key_differences":[]}` }] } } }
      ]))
    } else {
      const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
      const requests = buildBatchRequests(resizedPairs)
      rawResults = await submitAndPoll(anthropic, requests)
    }

    // Attach verdicts
    for (const [id, raw] of rawResults.entries()) {
      const result = results.find(r => r.id === id)
      if (!result) continue
      if (raw.result.type === 'succeeded') {
        const text: string = raw.result.message.content[0]?.text ?? ''
        result.verdict = parseVerdict(text)
      } else {
        result.error = JSON.stringify(raw.result)
      }
    }
  }

  // Step 3: Write partial result file and exit
  const partialResult: AgentBatchResult = {
    batchIndex,
    processedCount: results.length,
    results
  }

  fs.mkdirSync(path.dirname(partialResultPath), { recursive: true })
  fs.writeFileSync(partialResultPath, JSON.stringify(partialResult, null, 2))
  console.log(`[Agent ${batchIndex}] Done. Wrote ${results.length} results to ${partialResultPath}`)
}

main().catch(err => {
  console.error(`[Agent] Fatal error:`, err)
  process.exit(1)
})
