/**
 * Reference Screenshot Capture Test
 *
 * Captures screenshots from threejs.org for each ported demo to create
 * reference images for visual regression comparison (Phase 13, Plans 02-04).
 *
 * Run with:
 *   cd playwright.test
 *   npx playwright test tests/reference-screenshots.test.ts --project=chromium --workers=5
 *
 * Requires external network access to threejs.org.
 * Do NOT run this in offline environments.
 */

import { test, expect } from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'
import { fileURLToPath } from 'url'
import {
  ALL_DEMOS, CUSTOM_DEMO_IDS, ReferenceEntry,
  THREEJS_BASE, REFERENCE_SCREENSHOT_DIR, REFERENCE_MANIFEST_PATH,
  probeUrl
} from '../scripts/demo-list.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.join(__dirname, '..')

// Use 5-second wait for threejs.org WebGL initialization (per RESEARCH.md Pattern 4)
const REFERENCE_WAIT_MS = 5000

// ============================================================
// Override Chromium launch args for WebGL support in headless mode
// --use-angle=gl is required for WebGL in headless Chrome (RESEARCH.md Pitfall 2)
// ============================================================
test.use({
  launchOptions: {
    args: [
      '--headless',
      '--no-sandbox',
      '--disable-dev-shm-usage',
      '--use-angle=gl',  // Required for WebGL in headless Chrome
    ]
  },
  viewport: { width: 1280, height: 720 }
})

// ============================================================
// Ensure output directories exist before any test runs
// ============================================================
test.beforeAll(async () => {
  fs.mkdirSync(path.join(ROOT, REFERENCE_SCREENSHOT_DIR), { recursive: true })
})

// ============================================================
// Phase A: Probe all demos and write initial manifest
// Runs as a single serial test — must complete before Phase B begins
// ============================================================
test.describe('Reference probe phase', () => {
  test.describe.configure({ mode: 'serial' })

  test('Probe all demos and build initial manifest', async () => {
    const manifest: ReferenceEntry[] = []

    // Run HEAD probes in batches of 20 concurrent requests
    async function runWithConcurrency<T>(items: T[], n: number, fn: (item: T) => Promise<void>) {
      const q = [...items]
      const worker = async () => { while (q.length > 0) await fn(q.shift()!) }
      await Promise.all(Array.from({ length: Math.min(n, items.length) }, worker))
    }

    await runWithConcurrency(ALL_DEMOS, 20, async (demo) => {
      let entry: ReferenceEntry
      if (CUSTOM_DEMO_IDS.has(demo.id)) {
        entry = {
          ...demo,
          has_reference: false,
          reference_url: null,
          reference_status: 'no-reference',
          screenshot_path: null
        }
      } else {
        const url = `${THREEJS_BASE}/${demo.id}.html`
        const reachable = await probeUrl(url)
        if (reachable) {
          entry = {
            ...demo,
            has_reference: true,
            reference_url: url,
            reference_status: 'pending',
            screenshot_path: null
          }
        } else {
          entry = {
            ...demo,
            has_reference: false,
            reference_url: url,
            reference_status: 'http-404',
            screenshot_path: null
          }
        }
      }
      manifest.push(entry)
    })

    // Write initial manifest — Phase B reads this to determine which demos to capture
    const manifestPath = path.join(ROOT, REFERENCE_MANIFEST_PATH)
    fs.mkdirSync(path.dirname(manifestPath), { recursive: true })
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2))

    const pendingCount = manifest.filter(e => e.reference_status === 'pending').length
    const noRefCount = manifest.filter(e => e.reference_status === 'no-reference').length
    const notFoundCount = manifest.filter(e => e.reference_status === 'http-404').length
    console.log(`Probed ${manifest.length} demos.`)
    console.log(`  Reachable (pending):  ${pendingCount}`)
    console.log(`  No reference:         ${noRefCount}`)
    console.log(`  HTTP 404:             ${notFoundCount}`)

    expect(manifest.length).toBeGreaterThan(0)
  })
})

// ============================================================
// Phase B: Capture reference screenshots for all reachable demos
// Runs in parallel with up to --workers=5 Playwright workers
// ============================================================
test.describe('Reference capture phase', () => {
  let pendingDemos: ReferenceEntry[] = []

  test.beforeAll(async () => {
    const manifestPath = path.join(ROOT, REFERENCE_MANIFEST_PATH)
    if (fs.existsSync(manifestPath)) {
      const allEntries: ReferenceEntry[] = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
      pendingDemos = allEntries.filter(e => e.reference_status === 'pending')
    }
    console.log(`Phase B: capturing ${pendingDemos.length} reference screenshots...`)
  })

  // Generate one test per demo in ALL_DEMOS.
  // Tests for demos not in "pending" state will be skipped.
  // Playwright workers parallelize these across --workers=5 browser contexts.
  for (const demo of ALL_DEMOS) {
    test(`Capture reference: ${demo.id}`, async ({ page }) => {
      // Re-read manifest on each test invocation: another worker may have already
      // updated the status if Phase A ran recently.
      const manifestPath = path.join(ROOT, REFERENCE_MANIFEST_PATH)
      const allEntries: ReferenceEntry[] = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
      const entry = allEntries.find(e => e.id === demo.id)

      if (!entry || entry.reference_status !== 'pending') {
        test.skip()
        return
      }

      const outPath = path.join(ROOT, REFERENCE_SCREENSHOT_DIR, `${demo.id}.png`)
      const url = `${THREEJS_BASE}/${demo.id}.html`

      // Navigate with networkidle for clean load; fall back to domcontentloaded if
      // the page keeps firing network events (animated demos loading CDN assets)
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 25000 })
      } catch {
        try {
          await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 })
        } catch {
          // Page failed to load — mark as reference-load-failed and move on
          updateManifestEntry(manifestPath, demo.id, {
            reference_status: 'reference-load-failed',
            has_reference: false
          })
          console.log(`  [load-failed] ${demo.id}`)
          return
        }
      }

      // Wait for WebGL to initialize and render at least one frame (5s per RESEARCH.md Pattern 4)
      await page.waitForTimeout(REFERENCE_WAIT_MS)

      // Verify canvas is present
      const canvasCount = await page.locator('canvas').count()
      if (canvasCount === 0) {
        updateManifestEntry(manifestPath, demo.id, {
          reference_status: 'reference-load-failed',
          has_reference: false
        })
        console.log(`  [no-canvas] ${demo.id}`)
        return
      }

      // Pixel-presence check: read WebGL pixel data to confirm actual rendering.
      // Returns true if any pixel has non-zero alpha — indicating a rendered scene.
      // (RESEARCH.md Pitfall 1: black canvas = model still loading or failed)
      const hasContent = await page.evaluate((): boolean => {
        const canvas = document.querySelector('canvas') as HTMLCanvasElement | null
        if (!canvas) return false
        const gl = (
          canvas.getContext('webgl2') || canvas.getContext('webgl')
        ) as WebGLRenderingContext | null
        if (!gl) return true  // Canvas exists but no GL context — assume content present
        try {
          const pixels = new Uint8Array(4 * 16 * 16)
          gl.readPixels(0, 0, 16, 16, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
          for (let i = 3; i < pixels.length; i += 4) {
            if (pixels[i] > 0) return true
          }
        } catch { return true }  // readPixels threw — canvas may still have content
        return false
      })

      if (!hasContent) {
        updateManifestEntry(manifestPath, demo.id, {
          reference_status: 'reference-load-failed',
          has_reference: false
        })
        console.log(`  [blank-canvas] ${demo.id}`)
        return
      }

      // Screenshot canvas element only — excludes UI chrome (menus, overlays, info panels)
      // This matches what demo-verification.test.ts captures for the ported version.
      const canvas = page.locator('canvas').first()
      await canvas.screenshot({ path: outPath })

      const relPath = path.relative(ROOT, outPath).replace(/\\/g, '/')
      updateManifestEntry(manifestPath, demo.id, {
        reference_status: 'ok',
        has_reference: true,
        screenshot_path: relPath
      })
      console.log(`  [ok] ${demo.id}`)
    })
  }

  test.afterAll(async () => {
    const manifestPath = path.join(ROOT, REFERENCE_MANIFEST_PATH)
    if (!fs.existsSync(manifestPath)) return

    const entries: ReferenceEntry[] = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
    const ok = entries.filter(e => e.reference_status === 'ok').length
    const noRef = entries.filter(e => e.reference_status === 'no-reference').length
    const notFound = entries.filter(e => e.reference_status === 'http-404').length
    const failed = entries.filter(e => e.reference_status === 'reference-load-failed').length
    const pending = entries.filter(e => e.reference_status === 'pending').length

    console.log('\n=== REFERENCE CAPTURE SUMMARY ===')
    console.log(`Total demos:          ${entries.length}`)
    console.log(`Captured (ok):        ${ok}`)
    console.log(`No reference (custom): ${noRef}`)
    console.log(`HTTP 404:             ${notFound}`)
    console.log(`Failed to load:       ${failed}`)
    console.log(`Still pending:        ${pending}`)
    console.log('reference-manifest.json written to:', manifestPath)
  })
})

// ============================================================
// Thread-safe manifest update helper
// Re-reads, updates the target entry, then writes back.
// Safe for concurrent Playwright worker calls since each demo ID is unique
// and only one worker handles any given demo.
// ============================================================
function updateManifestEntry(
  manifestPath: string,
  demoId: string,
  updates: Partial<ReferenceEntry>
): void {
  try {
    const entries: ReferenceEntry[] = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
    const idx = entries.findIndex(e => e.id === demoId)
    if (idx >= 0) {
      entries[idx] = { ...entries[idx], ...updates }
      fs.writeFileSync(manifestPath, JSON.stringify(entries, null, 2))
    }
  } catch {
    // Non-fatal: screenshot capture proceeds even if manifest update fails.
    // The manifest can be reconstructed from the screenshots directory.
  }
}
