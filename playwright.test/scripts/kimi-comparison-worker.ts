/**
 * kimi-comparison-worker.ts
 * Per-batch worker: reference capture + Kimi visual comparison + partial-N.json output.
 *
 * Spawned by kimi-orchestrator.ts as a separate OS process.
 * CLI args:
 *   --batch-index=N   which batch this worker handles (required)
 *   --batch-size=N    how many demos per worker (required)
 *   --dry-run         skip real Kimi API calls; write mock verdicts
 *   --limit=N         cap total demos processed (for local testing)
 *
 * Security invariants:
 *   - KIMI_API_KEY propagated only via env — never logged, never written to output
 *   - Session names derived from integer batchIndex only (never from demo ID string)
 *   - No Playwright imports, no ANTHROPIC_API_KEY references
 *   - All file paths validated via validateDemoId() before path.join
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import {
  ALL_DEMOS,
  CUSTOM_DEMO_IDS,
  THREEJS_BASE,
  PORTED_SCREENSHOT_DIR,
  REFERENCE_SCREENSHOT_DIR
} from './demo-list.js'
import {
  validateDemoId,
  agentBrowser,
  captureDemo,
  kimiCompare,
  KIMI_PASS_THRESHOLD
} from './kimi-utils.js'

// ─── Path anchors ─────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// tsconfig.json lives in playwright.test/ (not dist/) — use it as the root marker
const ROOT = fs.existsSync(path.join(__dirname, '..', 'tsconfig.json'))
  ? path.join(__dirname, '..')        // running from scripts/ (tsx)
  : path.join(__dirname, '..', '..') // running from dist/scripts/ (compiled)

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

export interface WorkerResult {
  batch_index: number
  results: DemoComparisonResult[]
}

export { DemoComparisonResult }

// ─── CLI arg parsing ──────────────────────────────────────────────────────────

function parseArgs() {
  const argv = process.argv.slice(2)

  const batchIndexArg = argv.find(a => a.startsWith('--batch-index='))
  const batchSizeArg = argv.find(a => a.startsWith('--batch-size='))
  const limitArg = argv.find(a => a.startsWith('--limit='))
  const isDryRun = argv.includes('--dry-run')

  if (!batchIndexArg || !batchSizeArg) {
    console.error('[worker] FATAL: --batch-index and --batch-size are required')
    process.exit(1)
  }

  const batchIndex = parseInt(batchIndexArg.split('=')[1], 10)
  const batchSize = parseInt(batchSizeArg.split('=')[1], 10)
  const limit = limitArg ? parseInt(limitArg.split('=')[1], 10) : null
  const isCaptureOnly = argv.includes('--capture-only')

  if (isNaN(batchIndex) || isNaN(batchSize)) {
    console.error('[worker] FATAL: --batch-index and --batch-size must be integers')
    process.exit(1)
  }

  return { batchIndex, batchSize, limit, isDryRun, isCaptureOnly }
}

// ─── Wait time logic ──────────────────────────────────────────────────────────

/** Asset-heavy loaders need extra render time. */
function getWaitMs(id: string): number {
  return /^webgl_loader_/.test(id) ? 12000 : 8000
}

// ─── Mock verdict for dry-run ─────────────────────────────────────────────────

const DRY_RUN_VERDICT = {
  similarity_score: 0.85,
  verdict: 'pass',
  reasoning: 'Dry run mock.',
  key_differences: [] as string[]
}

// ─── Main worker logic ────────────────────────────────────────────────────────

async function runWorker(): Promise<void> {
  const { batchIndex, batchSize, limit, isDryRun, isCaptureOnly } = parseArgs()

  console.log(`[worker-${batchIndex}] Starting batch-index=${batchIndex} batch-size=${batchSize} dry-run=${isDryRun} capture-only=${isCaptureOnly} limit=${limit ?? 'none'}`)

  // Build the full comparable demo list (excluding custom demos)
  let comparableDemos = ALL_DEMOS.filter(d => !CUSTOM_DEMO_IDS.has(d.id))

  // Apply --limit across all demos before slicing (consistent with orchestrator)
  if (limit !== null && limit > 0) {
    comparableDemos = comparableDemos.slice(0, limit)
  }

  // Slice this worker's batch
  const start = batchIndex * batchSize
  const workerDemos = comparableDemos.slice(start, start + batchSize)

  console.log(`[worker-${batchIndex}] Processing ${workerDemos.length} demos (indices ${start}-${start + workerDemos.length - 1})`)

  // Ensure partial-results output directory exists
  const partialResultsDir = path.join(ROOT, 'test-results', 'partial-results')
  fs.mkdirSync(partialResultsDir, { recursive: true })

  const partialOutputPath = path.join(partialResultsDir, `partial-${batchIndex}.json`)

  // Session names — derived from integer batchIndex only, never from demo ID
  const portedSession = `ported-${batchIndex}`
  const refSession = `ref-${batchIndex}`

  const results: DemoComparisonResult[] = []

  // ── Capture-only mode: only capture reference screenshots, no Kimi calls ──
  if (isCaptureOnly) {
    try {
      for (const demo of workerDemos) {
        const { id, name } = demo
        if (!validateDemoId(id)) continue

        const refRelPath = `${REFERENCE_SCREENSHOT_DIR}/${id}.png`
        const refPath = path.join(ROOT, refRelPath)

        if (fs.existsSync(refPath)) {
          console.log(`[worker-${batchIndex}] skip (exists): ${id}`)
          results.push({ id, name, status: 'reference-load-failed' as const,
            similarity_score: null, verdict: 'skipped', reasoning: 'Already exists',
            key_differences: [], ported_screenshot: null, reference_screenshot: refRelPath, agent_batch: batchIndex })
          continue
        }

        const referenceUrl = `${THREEJS_BASE}/${id}.html`
        const waitMs = /^webgl_loader_/.test(id) ? 12000 : 8000
        console.log(`[worker-${batchIndex}] capturing ref: ${id} (wait ${waitMs}ms)`)
        const captureResult = await captureDemo(referenceUrl, refPath, refSession, waitMs)

        if (captureResult === 'ok') {
          console.log(`[worker-${batchIndex}] ✓ ref: ${id}`)
          results.push({ id, name, status: 'no-reference' as const,
            similarity_score: null, verdict: 'captured', reasoning: 'Reference captured',
            key_differences: [], ported_screenshot: null, reference_screenshot: refRelPath, agent_batch: batchIndex })
        } else {
          console.warn(`[worker-${batchIndex}] ✗ ref: ${id}: ${captureResult}`)
          results.push({ id, name, status: 'reference-load-failed' as const,
            similarity_score: null, verdict: captureResult, reasoning: `Reference capture returned: ${captureResult}`,
            key_differences: [], ported_screenshot: null, reference_screenshot: null, agent_batch: batchIndex })
        }
        writePartial(partialOutputPath, batchIndex, results)
      }
    } finally {
      try { agentBrowser(refSession, ['close']) } catch { /* already closed */ }
      // Always write partial so orchestrator merge doesn't warn about missing file
      writePartial(partialOutputPath, batchIndex, results)
      console.log(`[worker-${batchIndex}] Done. ${results.length} results written to ${partialOutputPath}`)
    }
    return
  }

  try {
    for (const demo of workerDemos) {
      const { id, name } = demo

      // Step 1: Validate demo ID — security gate before any path construction
      if (!validateDemoId(id)) {
        console.error(`[worker-${batchIndex}] SKIP invalid demo ID: "${id}"`)
        results.push({
          id, name, status: 'error',
          similarity_score: null, verdict: null,
          reasoning: 'Invalid demo ID failed validateDemoId()',
          key_differences: [],
          ported_screenshot: null, reference_screenshot: null,
          agent_batch: batchIndex
        })
        writePartial(partialOutputPath, batchIndex, results)
        continue
      }

      // Step 2: Check ported screenshot
      const portedRelPath = `${PORTED_SCREENSHOT_DIR}/${id}.png`
      const portedPath = path.join(ROOT, portedRelPath)

      if (!fs.existsSync(portedPath)) {
        console.log(`[worker-${batchIndex}] no-ported-screenshot: ${id}`)
        results.push({
          id, name, status: 'no-ported-screenshot',
          similarity_score: null, verdict: null,
          reasoning: 'Ported screenshot does not exist on disk',
          key_differences: [],
          ported_screenshot: null, reference_screenshot: null,
          agent_batch: batchIndex
        })
        writePartial(partialOutputPath, batchIndex, results)
        continue
      }

      // Step 3 & 4: Check / capture reference screenshot
      const refRelPath = `${REFERENCE_SCREENSHOT_DIR}/${id}.png`
      const refPath = path.join(ROOT, refRelPath)

      if (!fs.existsSync(refPath)) {
        // Capture reference from threejs.org
        const referenceUrl = `${THREEJS_BASE}/${id}.html`
        const waitMs = getWaitMs(id)
        console.log(`[worker-${batchIndex}] capturing reference: ${id} (wait ${waitMs}ms)`)

        const captureResult = await captureDemo(referenceUrl, refPath, refSession, waitMs)

        if (captureResult === 'no-canvas' || captureResult === 'failed') {
          console.warn(`[worker-${batchIndex}] reference-load-failed: ${id} (${captureResult})`)
          results.push({
            id, name, status: 'reference-load-failed',
            similarity_score: null, verdict: null,
            reasoning: `Reference capture returned: ${captureResult}`,
            key_differences: [],
            ported_screenshot: portedRelPath, reference_screenshot: null,
            agent_batch: batchIndex
          })
          writePartial(partialOutputPath, batchIndex, results)
          continue
        }
      }

      // Step 5: Compare
      console.log(`[worker-${batchIndex}] comparing: ${id}`)

      let verdict: typeof DRY_RUN_VERDICT | null = null

      if (isDryRun) {
        verdict = DRY_RUN_VERDICT
      } else {
        const kimiResult = await kimiCompare(portedPath, refPath)
        if (kimiResult === null) {
          console.warn(`[worker-${batchIndex}] Kimi returned null for: ${id}`)
          results.push({
            id, name, status: 'error',
            similarity_score: null, verdict: null,
            reasoning: 'Kimi response truncated',
            key_differences: [],
            ported_screenshot: portedRelPath, reference_screenshot: refRelPath,
            agent_batch: batchIndex
          })
          writePartial(partialOutputPath, batchIndex, results)
          continue
        }
        verdict = kimiResult
      }

      // Step 6: Assign status from score
      const score = verdict.similarity_score
      let status: DemoComparisonResult['status']
      if (score >= KIMI_PASS_THRESHOLD) status = 'pass'
      else if (score >= 0.5) status = 'warn'
      else status = 'fail'

      console.log(`[worker-${batchIndex}] ${id}: ${status} (score=${score.toFixed(2)})`)

      results.push({
        id, name, status,
        similarity_score: score,
        verdict: verdict.verdict,
        reasoning: verdict.reasoning,
        key_differences: verdict.key_differences,
        ported_screenshot: portedRelPath,
        reference_screenshot: refRelPath,
        agent_batch: batchIndex
      })

      // Write incrementally after each demo
      writePartial(partialOutputPath, batchIndex, results)
    }
  } finally {
    // Session cleanup — always run even on error
    // Sessions named from integer batchIndex only (T-14-07)
    try { agentBrowser(portedSession, ['close']) } catch {}
    try { agentBrowser(refSession, ['close']) } catch {}

    // Always write the partial file (even for empty batches) so the orchestrator
    // merge does not warn about missing files for workers that had 0 demos
    writePartial(partialOutputPath, batchIndex, results)
    console.log(`[worker-${batchIndex}] Done. ${results.length} results written to ${partialOutputPath}`)
  }
}

// ─── Incremental partial write ────────────────────────────────────────────────

function writePartial(outputPath: string, batchIndex: number, results: DemoComparisonResult[]): void {
  const partial: WorkerResult = { batch_index: batchIndex, results }
  fs.writeFileSync(outputPath, JSON.stringify(partial, null, 2))
}

// ─── Entry point ─────────────────────────────────────────────────────────────

runWorker().catch(err => {
  console.error('[worker] Unhandled error:', err)
  process.exit(1)
})
