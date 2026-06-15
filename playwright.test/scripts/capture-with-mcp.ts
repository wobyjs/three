/**
 * capture-with-mcp.ts
 * Captures screenshots using Chrome DevTools MCP with hardcoded profiles.
 *
 * Uses profile-qmdj-4 through profile-qmdj-6 for parallel capture.
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
const portArg = argv.find(a => a.startsWith('--port='))
const PORT = portArg ? parseInt(portArg.split('=')[1], 10) : 5177

const limitArg = argv.find(a => a.startsWith('--limit='))
const LIMIT = limitArg ? parseInt(limitArg.split('=')[1], 10) : null

const isForce = argv.includes('--force')

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
  if (skipped > 0) console.log(`[capture-mcp] Skipping ${skipped} already-captured demos (use --force to re-capture)`)
}

console.log(`[capture-mcp] Targets: ${targets.length} demos, port: ${PORT}`)

if (targets.length === 0) {
  console.log('[capture-mcp] All demos already captured. Use --force to re-capture.')
  process.exit(0)
}

// ─── Output demo list for manual capture ─────────────────────────────────────

console.log('\nDemos to capture:')
targets.forEach((d, i) => {
  console.log(`  ${i+1}. ${d.id}: http://localhost:${PORT}/?demo=${d.id}`)
})

console.log('\nInstructions:')
console.log('1. Use Chrome DevTools MCP to navigate to each demo URL')
console.log('2. Wait for WebGL canvas to render (check console for errors)')
console.log('3. Capture screenshot with mcp__chrome-devtools__take_screenshot')
console.log('4. Save to screenshots/ported/{demo-id}.png')
console.log('\nExample MCP workflow:')
console.log('  mcp__chrome-devtools__navigate_page({ url: "http://localhost:5177/?demo=webgl_postprocessing_taa" })')
console.log('  mcp__chrome-devtools__wait_for({ text: ["canvas"] })')
console.log('  mcp__chrome-devtools__take_screenshot({ filePath: "screenshots/ported/webgl_postprocessing_taa.png" })')
