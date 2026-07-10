#!/usr/bin/env node
// capture-via-dv.mjs
// Recapture all ported demos via dv CLI by REUSING a single tab per profile.
// - Reuses tab to keep memory low (no new page per demo).
// - Detects sticky Vite error overlay (syntax / build errors).
// - Captures console.error messages per demo.
// - Source of truth for the demo list = existing PNGs in playwright.test/screenshots/ported/.
//
// CLI:
//   --port=N        dev server port (default 5174)
//   --profile=NAME  dv profile name (default profile-4)
//   --wait=N        ms to wait per demo before screenshot (default 5000)
//   --limit=N       cap (for smoke testing)
//   --only=id,id    only these demo ids
//   --dry-run

import { spawnSync } from 'node:child_process'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PORTED_DIR = path.join(ROOT, 'screenshots', 'ported')
const DV = path.resolve('D:/Developments/tslib/dv/dist/cli.js')

const argv = process.argv.slice(2)
const PORT = parseInt(argv.find(a => a.startsWith('--port='))?.split('=')[1] ?? '5174', 10)
const PROFILE = argv.find(a => a.startsWith('--profile='))?.split('=')[1] ?? 'profile-4'
const WAIT_MS = parseInt(argv.find(a => a.startsWith('--wait='))?.split('=')[1] ?? '5000', 10)
const LIMIT = (() => { const a = argv.find(a => a.startsWith('--limit=')); return a ? parseInt(a.split('=')[1], 10) : null })()
const ONLY = (() => { const a = argv.find(a => a.startsWith('--only=')); return a ? new Set(a.split('=')[1].split(',')) : null })()
const DRY_RUN = argv.includes('--dry-run')
const SKIP_EXISTING = argv.includes('--skip-existing')
const FRESH_AGE_MS = parseInt(argv.find(a => a.startsWith('--fresh-age='))?.split('=')[1] ?? '0', 10)

function dv(args, timeoutMs = 30_000) {
    const r = spawnSync('node', [DV, ...args, '--profile', PROFILE], {
        encoding: 'utf-8', timeout: timeoutMs, maxBuffer: 20 * 1024 * 1024,
        stdio: ['ignore', 'pipe', 'pipe']
    })
    if (r.status === 0) return (r.stdout ?? '').trim()
    const err = (r.stderr ?? '').slice(0, 300)
    throw new Error(`dv ${args.join(' ')} exit ${r.status}: ${err}`)
}

function dvJson(args, timeoutMs = 30_000) {
    const out = dv(args, timeoutMs)
    // Strip ANSI / "Result:" prefix, find first { or [
    const m = out.match(/[\{\[]/)
    if (!m) return null
    try { return JSON.parse(out.slice(m.index)) } catch { return null }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

// Detect Vite error overlay (sticky popup) and pull error text.
const DETECT_SCRIPT = `
(() => {
    const overlay = document.querySelector('vite-error-overlay');
    if (overlay && overlay.shadowRoot) {
        const msg = overlay.shadowRoot.querySelector('.message-body, .message')?.textContent?.trim() ?? '';
        const file = overlay.shadowRoot.querySelector('.file')?.textContent?.trim() ?? '';
        return { hasOverlay: true, msg: (file + ' ' + msg).slice(0, 300) };
    }
    const canvas = document.querySelector('canvas');
    const hasCanvas = !!canvas && canvas.width > 0 && canvas.height > 0;
    return { hasOverlay: false, hasCanvas };
})()
`.trim()

async function ensureTab() {
    // Make sure profile has a page selected. If 'pages' returns nothing usable, open a placeholder.
    try {
        dv(['select', '-i', '1'], 10_000)
    } catch {
        dv(['new', '-u', `http://localhost:${PORT}/demo/`], 15_000)
        await sleep(1500)
        dv(['select', '-i', '1'], 10_000)
    }
}

async function captureOne(id) {
    const url = `http://localhost:${PORT}/demo/#${id}`
    const out = path.join(PORTED_DIR, `${id}.png`)
    const errors = []
    let status = 'ok'
    let detail = ''

    // 0. Re-select tab before every nav (dv selection can be lost after timeouts).
    try { dv(['select', '-i', '1'], 8_000) }
    catch {
        // Tab is gone; try to recreate it.
        try { dv(['new', '-u', `http://localhost:${PORT}/demo/`], 15_000); await sleep(1500); dv(['select', '-i', '1'], 8_000) }
        catch (e) { return { id, status: 'error', detail: `tab-recover: ${String(e.message ?? e).slice(0, 100)}`, errors } }
    }

    // 1. Navigate (best-effort).
    try { dv(['console', '--clear'], 8_000) } catch { }
    try { dv(['navigate', '-u', url], 30_000) } catch (e) {
        return { id, status: 'error', detail: `navigate: ${String(e.message ?? e).slice(0, 150)}`, errors }
    }
    // Poll for canvas appearance up to WAIT_MS (default 5s, user-tunable).
    // Vite dev server may trigger 1-2 reloads as it discovers new deps.
    const POLL_MS = 1500
    const POLL_MAX = Math.max(WAIT_MS, 5000)
    const POLL_START = Date.now()
    let polledCanvas = false
    while (Date.now() - POLL_START < POLL_MAX) {
        await sleep(POLL_MS)
        try {
            let probe = dvJson(['eval', '-s', 'JSON.stringify({c:!!document.querySelector(\"canvas\")&&document.querySelector(\"canvas\").width>0, b:document.body.children.length, o:!!document.querySelector(\"vite-error-overlay\")})', '--json'], 8_000)
            if (probe && typeof probe === 'object' && 'result' in probe) probe = probe.result?.value ?? probe.result
            const parsed = typeof probe === 'string' ? JSON.parse(probe) : probe
            if (parsed?.o) break // vite error overlay — stop polling, screenshot
            if (parsed?.c) { polledCanvas = true; break }
        } catch { /* dv eval may fail mid-reload */ }
    }
    // Settle render briefly so first frame paints.
    if (polledCanvas) await sleep(500)

    // 2. Detect Vite error overlay (sticky popup with syntax error). Best-effort.
    try {
        let detect = dvJson(['eval', '-s', DETECT_SCRIPT, '--json'], 15_000)
        if (detect && typeof detect === 'object' && 'result' in detect) detect = detect.result?.value ?? detect.result
        if (detect?.hasOverlay) {
            status = 'syntax_error'
            detail = detect.msg ?? ''
        } else if (detect && detect.hasCanvas === false) {
            status = 'no_canvas'
        }
    } catch (e) {
        // Eval failed (probably shell quoting); fall through and still screenshot.
        detail = `detect_failed: ${String(e.message ?? e).slice(0, 100)}`
    }

    // 3. Capture console.error messages. Best-effort.
    try {
        const errOut = dv(['console', '--type', 'error'], 8_000)
        if (errOut && errOut.length > 0) {
            const lines = errOut.split(/\r?\n/).filter(l => l.trim() && !l.startsWith('No '))
            if (lines.length > 0) {
                errors.push(...lines.slice(0, 3))
                if (status === 'ok') status = 'console_error'
            }
        }
    } catch { }

    // 4. ALWAYS take a screenshot regardless of detect/console outcome.
    try {
        dv(['screenshot', '-o', out], 20_000)
        const ok = fs.existsSync(out) && fs.statSync(out).size > 1000
        if (!ok && status === 'ok') status = 'failed'
    } catch (e) {
        if (status === 'ok') {
            status = 'error'
            detail = `screenshot: ${String(e.message ?? e).slice(0, 150)}`
        }
    }

    return { id, status, detail, errors: errors.slice(0, 3) }
}

async function main() {
    // Liveness check — vite cold response can take 15s+ when scanning deps.
    try {
        const resp = await fetch(`http://localhost:${PORT}/demo/`, { signal: AbortSignal.timeout(30000) })
        if (!resp.ok && resp.status >= 500) throw new Error(`status ${resp.status}`)
    } catch (e) {
        console.error(`[capture-via-dv] FATAL: dev server not reachable at :${PORT}/demo/ — ${e.message}`)
        process.exit(1)
    }

    let ids = fs.readdirSync(PORTED_DIR)
        .filter(f => f.endsWith('.png') && !f.startsWith('_') && !/^(test|current|canvas|water|plane|physics|css3d|misc|webxr|webgpu|webgl_audio|webgl_css|webgl_batch|webgl_effects_stereo|webgl_effects_anaglyph|webgl_effects_parallaxbarrier|webgl_camera_logarithmic|webgl_webgpu|webgl_webxr)/.test(f) && !/_(fix|verify|debug|current|state|home|loaded)/.test(f))
        .map(f => f.replace(/\.png$/, ''))
        .filter(id => /^[a-z0-9_]+$/.test(id))

    if (ONLY) ids = ids.filter(id => ONLY.has(id))
    if (SKIP_EXISTING || FRESH_AGE_MS > 0) {
        const cutoff = FRESH_AGE_MS > 0 ? (Date.now() - FRESH_AGE_MS) : 0
        ids = ids.filter(id => {
            const p = path.join(PORTED_DIR, `${id}.png`)
            if (!fs.existsSync(p)) return true
            const st = fs.statSync(p)
            if (st.size < 1000) return true
            // FRESH_AGE_MS: keep id if PNG older than cutoff (needs refresh)
            if (FRESH_AGE_MS > 0) return st.mtimeMs < cutoff
            // SKIP_EXISTING alone: any valid existing PNG → skip
            return false
        })
    }
    if (LIMIT) ids = ids.slice(0, LIMIT)

    console.log(`[capture-via-dv] ${ids.length} demos, profile=${PROFILE}, port=${PORT}, wait=${WAIT_MS}ms (single tab reuse)`)
    if (DRY_RUN) {
        ids.forEach(id => console.log(`  ${id}`))
        process.exit(0)
    }

    await ensureTab()

    // Warmup: navigate to root once and wait up to 60s for App to mount.
    // This lets vite finish its initial dep optimization pass.
    console.log(`[${PROFILE}] warmup ... `)
    try {
        dv(['navigate', '-u', `http://localhost:${PORT}/demo/`], 30_000)
        const warmStart = Date.now()
        while (Date.now() - warmStart < 60_000) {
            await sleep(2000)
            try {
                let probe = dvJson(['eval', '-s', 'JSON.stringify({b:document.body.children.length})', '--json'], 6_000)
                if (probe && typeof probe === 'object' && 'result' in probe) probe = probe.result?.value ?? probe.result
                const parsed = typeof probe === 'string' ? JSON.parse(probe) : probe
                if (parsed?.b > 0) { console.log(`  warmup ok in ${((Date.now() - warmStart) / 1000).toFixed(1)}s`); break }
            } catch { }
        }
    } catch (e) { console.log(`  warmup failed: ${String(e.message ?? e).slice(0, 100)}`) }

    const results = []
    for (const id of ids) {
        process.stdout.write(`[${PROFILE}] ${id} ... `)
        const r = await captureOne(id)
        const flag = r.status === 'ok' ? 'ok'
            : r.status === 'syntax_error' ? `SYNTAX:${r.detail.slice(0, 80)}`
                : r.status === 'console_error' ? `CONSOLE:${(r.errors[0] ?? '').slice(0, 80)}`
                    : r.status === 'no_canvas' ? 'NO-CANVAS'
                        : `${r.status}:${r.detail.slice(0, 80)}`
        process.stdout.write(`${flag}\n`)
        results.push(r)
    }

    const ok = results.filter(r => r.status === 'ok')
    const syntax = results.filter(r => r.status === 'syntax_error')
    const consoleErr = results.filter(r => r.status === 'console_error')
    const noCanvas = results.filter(r => r.status === 'no_canvas')
    const failed = results.filter(r => r.status === 'failed' || r.status === 'error')

    console.log(`\n[capture-via-dv] done: ok=${ok.length} syntax=${syntax.length} console_err=${consoleErr.length} no_canvas=${noCanvas.length} failed=${failed.length}`)
    if (syntax.length) {
        console.log('\nSYNTAX ERRORS (sticky overlay):')
        syntax.forEach(r => console.log(`  ${r.id}: ${r.detail}`))
    }
    if (consoleErr.length) {
        console.log('\nCONSOLE ERRORS:')
        consoleErr.forEach(r => console.log(`  ${r.id}: ${r.errors[0] ?? ''}`))
    }
    if (failed.length) {
        console.log('\nFAILED:')
        failed.forEach(r => console.log(`  ${r.id}: ${r.detail}`))
    }

    fs.mkdirSync(path.join(ROOT, '..', 'test-results'), { recursive: true })
    const summary = path.join(ROOT, '..', 'test-results', 'capture-via-dv-summary.json')
    fs.writeFileSync(summary, JSON.stringify({
        at: new Date().toISOString(), profile: PROFILE, total: results.length,
        ok: ok.length, syntax: syntax.length, console_err: consoleErr.length,
        no_canvas: noCanvas.length, failed: failed.length, results
    }, null, 2))
    console.log(`summary → ${summary}`)
}

main().catch(e => { console.error(e); process.exit(1) })
