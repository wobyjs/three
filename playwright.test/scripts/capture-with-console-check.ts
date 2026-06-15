/**
 * capture-with-console-check.ts
 * Captures screenshots using Chrome DevTools MCP with console error validation.
 *
 * For each demo:
 * 1. Navigate to URL
 * 2. Check console for errors (assert, error)
 * 3. If errors found, attempt to identify and report the issue
 * 4. Take screenshot only if no blocking errors
 * 5. Save console log for debugging
 *
 * CLI flags:
 *   --port=N        Dev server port (default: 5174)
 *   --limit=N       Cap total demos captured (for testing)
 *   --force         Re-capture even if screenshot already exists
 *   --wait=N        Wait ms per demo (default: 5000)
 */

import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import { ALL_DEMOS, CUSTOM_DEMO_IDS, PORTED_SCREENSHOT_DIR } from './demo-list.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = fs.existsSync(path.join(__dirname, '..', 'tsconfig.json'))
  ? path.join(__dirname, '..')
  : path.join(__dirname, '..', '..')

// ─── CLI args ─────────────────────────────────────────────────────────────────

const argv = process.argv.slice(2)
const isForce = argv.includes('--force')

const portArg = argv.find(a => a.startsWith('--port='))
const PORT = portArg ? parseInt(portArg.split('=')[1], 10) : 5174

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
  if (skipped > 0) console.log(`[capture] Skipping ${skipped} already-captured demos (use --force)`)
}

console.log(`[capture] Targets: ${targets.length} demos, port: ${PORT}, wait: ${DEFAULT_WAIT_MS}ms`)

// ─── Console error types to check ─────────────────────────────────────────────

interface ConsoleMessage {
  type: 'error' | 'warn' | 'log' | 'info' | 'debug' | 'assert' | 'dir' | 'dirxml' | 'table' | 'trace' | 'clear' | 'startGroup' | 'startGroupCollapsed' | 'endGroup' | 'profile' | 'profileEnd' | 'count' | 'timeEnd' | 'verbose' | 'issue'
  text: string
  url?: string
  line?: number
}

// Blocking error types that prevent screenshot
const BLOCKING_TYPES = ['error', 'assert']

// ─── Capture result ───────────────────────────────────────────────────────────

interface CaptureResult {
  id: string
  status: 'captured' | 'console-errors' | 'no-canvas' | 'failed'
  consoleLog?: ConsoleMessage[]
  outputPath?: string
}

// ─── Capture one demo ─────────────────────────────────────────────────────────

async function captureDemo(demoId: string): Promise<CaptureResult> {
  const url = `http://localhost:${PORT}/#${demoId}`
  const outputPath = path.join(ROOT, PORTED_SCREENSHOT_DIR, `${demoId}.png`)
  const waitMs = /^webgl_loader_/.test(demoId) ? 10000 : DEFAULT_WAIT_MS

  console.log(`[capture] Navigating to ${demoId}...`)

  // Step 1: Navigate to demo page (Chrome DevTools MCP will be invoked by Claude)
  // Note: This script provides instructions for Claude to execute via MCP tools

  const instructions = `
Demo: ${demoId}
URL: ${url}
Wait: ${waitMs}ms
Output: ${outputPath}

Please capture this demo using Chrome DevTools MCP:
1. Navigate to the URL
2. Wait ${waitMs}ms for rendering
3. Check console for blocking errors (types: error, assert)
4. If errors found, return { status: 'console-errors', consoleLog: [messages] }
5. If no canvas found, return { status: 'no-canvas' }
6. Otherwise, take screenshot and return { status: 'captured', outputPath: '${outputPath}' }
`

  // Return instruction for Claude to execute
  return {
    id: demoId,
    status: 'failed',
    consoleLog: [{ type: 'error', text: 'This script requires Claude to execute Chrome DevTools MCP calls' }]
  }
}

// ─── Main execution plan ──────────────────────────────────────────────────────

console.log(`\n[capture] Execution plan for ${targets.length} demos:`)
console.log('[capture] This script provides URLs and parameters for Claude to execute via Chrome DevTools MCP')
console.log('[capture] Claude should:')
console.log('[capture]   1. Navigate to each URL')
console.log('[capture]   2. Wait for render')
console.log('[capture]   3. Check console for errors (types: error, assert)')
console.log('[capture]   4. Take screenshot only if no blocking errors')
console.log('[capture]   5. Save console logs for debugging')

targets.slice(0, 5).forEach(d => {
  console.log(`\nDemo: ${d.id}`)
  console.log(`  URL: http://localhost:${PORT}/#${d.id}`)
  console.log(`  Output: ${path.join(ROOT, PORTED_SCREENSHOT_DIR, `${d.id}.png`)}`)
  console.log(`  Wait: ${/^webgl_loader_/.test(d.id) ? 10000 : DEFAULT_WAIT_MS}ms`)
})

console.log(`\n[capture] Total demos to process: ${targets.length}`)
console.log('[capture] Run this script through Claude with Chrome DevTools MCP access')