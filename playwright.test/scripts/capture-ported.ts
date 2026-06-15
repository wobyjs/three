/**
 * capture-ported.ts
 * Captures ported screenshots from the local dev server for all comparable demos.
 *
 * Navigates to http://localhost:PORT/#{demoId} for each comparable demo,
 * waits for render, and saves PNG to screenshots/ported/{demoId}.png.
 *
 * CLI flags:
 *   --port=N        Dev server port (default: 5174)
 *   --workers=N     Parallel agent-browser sessions (default: 3)
 *   --limit=N       Cap total demos captured (for testing)
 *   --dry-run       Print plan without capturing
 *   --force         Re-capture even if screenshot already exists
 *   --wait=N        Wait ms per demo (default: 5000)
 *
 * Security: No API keys. All agent-browser sessions named ported-cap-{N}.
 * Sessions are closed after each batch.
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { ALL_DEMOS, CUSTOM_DEMO_IDS, PORTED_SCREENSHOT_DIR } from './demo-list.js'
import { validateDemoId, agentBrowser, captureDemo } from './kimi-utils.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = fs.existsSync(path.join(__dirname, '..', 'tsconfig.json'))
  ? path.join(__dirname, '..')
  : path.join(__dirname, '..', '..')

// ─── CLI args ─────────────────────────────────────────────────────────────────

const argv = process.argv.slice(2)
const isDryRun = argv.includes('--dry-run')
const isForce = argv.includes('--force')

const portArg = argv.find(a => a.startsWith('--port='))
const PORT = portArg ? parseInt(portArg.split('=')[1], 10) : 5174

const workersArg = argv.find(a => a.startsWith('--workers='))
const NUM_WORKERS = Math.min(workersArg ? parseInt(workersArg.split('=')[1], 10) : 3, 5)

const limitArg = argv.find(a => a.startsWith('--limit='))
const LIMIT = limitArg ? parseInt(limitArg.split('=')[1], 10) : null

const waitArg = argv.find(a => a.startsWith('--wait='))
const DEFAULT_WAIT_MS = waitArg ? parseInt(waitArg.split('=')[1], 10) : 5000

// ─── Build capture list ───────────────────────────────────────────────────────

let targets = ALL_DEMOS.filter(d => !CUSTOM_DEMO_IDS.has(d.id))

if (LIMIT !== null && LIMIT > 0) {
  targets = targets.slice(0, LIMIT)
}

// Skip already-captured unless --force
if (!isForce) {
  const before = targets.length
  targets = targets.filter(d => {
    const p = path.join(ROOT, PORTED_SCREENSHOT_DIR, `${d.id}.png`)
    return !fs.existsSync(p)
  })
  const skipped = before - targets.length
  if (skipped > 0) console.log(`[capture-ported] Skipping ${skipped} already-captured demos (use --force to re-capture)`)
}

console.log(`[capture-ported] Targets: ${targets.length} demos, workers: ${NUM_WORKERS}, port: ${PORT}, wait: ${DEFAULT_WAIT_MS}ms`)

if (isDryRun) {
  console.log('[capture-ported] DRY RUN — no screenshots will be taken')
  targets.forEach(d => console.log(`  ${d.id}: http://localhost:${PORT}/#${d.id}`))
  process.exit(0)
}

// ─── Pre-flight: verify dev server is reachable ───────────────────────────────

async function checkDevServer(): Promise<boolean> {
  try {
    const res = await fetch(`http://localhost:${PORT}`, { signal: AbortSignal.timeout(3000) })
    return res.ok || res.status < 500
  } catch {
    return false
  }
}

// ─── Capture one batch of demos ───────────────────────────────────────────────

interface CaptureResult {
  id: string
  status: 'captured' | 'skipped' | 'failed' | 'invalid-id'
  path?: string
}

async function captureWorker(demos: typeof targets, batchIndex: number): Promise<CaptureResult[]> {
  const session = `ported-cap-${batchIndex}`
  const results: CaptureResult[] = []

  try {
    for (const demo of demos) {
      const { id } = demo

      if (!validateDemoId(id)) {
        console.warn(`[worker-${batchIndex}] SKIP invalid ID: "${id}"`)
        results.push({ id, status: 'invalid-id' })
        continue
      }

      const outputPath = path.join(ROOT, PORTED_SCREENSHOT_DIR, `${id}.png`)
      const url = `http://localhost:${PORT}/#${id}`
      const waitMs = /^webgl_loader_/.test(id) ? 10000 : DEFAULT_WAIT_MS

      console.log(`[worker-${batchIndex}] Capturing ${id} (wait ${waitMs}ms)`)
      const result = await captureDemo(url, outputPath, session, waitMs)

      if (result === 'ok') {
        console.log(`[worker-${batchIndex}] ✓ ${id}`)
        results.push({ id, status: 'captured', path: outputPath })
      } else {
        console.warn(`[worker-${batchIndex}] ✗ ${id}: ${result}`)
        results.push({ id, status: 'failed' })
      }
    }
  } finally {
    // Always close the session — never leave orphaned Chrome contexts
    try { agentBrowser(session, ['close']) } catch { /* already closed */ }
  }

  return results
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const serverUp = await checkDevServer()
  if (!serverUp) {
    console.error(`[capture-ported] FATAL: Dev server not reachable at http://localhost:${PORT}`)
    console.error('[capture-ported] Start it with: cd demo && pnpm run dev')
    process.exit(1)
  }
  console.log(`[capture-ported] Dev server confirmed at http://localhost:${PORT}`)

  // Ensure output directory exists
  fs.mkdirSync(path.join(ROOT, PORTED_SCREENSHOT_DIR), { recursive: true })

  if (targets.length === 0) {
    console.log('[capture-ported] All demos already captured. Use --force to re-capture.')
    process.exit(0)
  }

  // Partition demos across workers
  const batchSize = Math.ceil(targets.length / NUM_WORKERS)
  const batches: (typeof targets)[] = []
  for (let i = 0; i < NUM_WORKERS; i++) {
    const slice = targets.slice(i * batchSize, (i + 1) * batchSize)
    if (slice.length > 0) batches.push(slice)
  }

  console.log(`[capture-ported] Splitting ${targets.length} demos into ${batches.length} worker batches`)

  const workerPromises = batches.map((batch, i) => captureWorker(batch, i))
  const allResults = (await Promise.allSettled(workerPromises))
    .flatMap(r => r.status === 'fulfilled' ? r.value : [])

  // ─── Summary ─────────────────────────────────────────────────────────────

  const captured = allResults.filter(r => r.status === 'captured')
  const failed = allResults.filter(r => r.status === 'failed')

  console.log(`\n[capture-ported] Done`)
  console.log(`  Captured: ${captured.length}`)
  console.log(`  Failed:   ${failed.length}`)
  if (failed.length > 0) {
    console.log('  Failed demos:')
    failed.forEach(r => console.log(`    - ${r.id}`))
  }

  // Write capture summary
  const summaryPath = path.join(ROOT, 'test-results', 'ported-capture-summary.json')
  fs.mkdirSync(path.join(ROOT, 'test-results'), { recursive: true })
  fs.writeFileSync(summaryPath, JSON.stringify({
    captured_at: new Date().toISOString(),
    port: PORT,
    total: allResults.length,
    captured: captured.length,
    failed: failed.length,
    results: allResults
  }, null, 2))

  console.log(`[capture-ported] Summary written to ${summaryPath}`)
}

main().catch(err => {
  console.error('[capture-ported] Fatal error:', err)
  process.exit(1)
})
