#!/usr/bin/env node
// capture-threejs-reference.mjs
// Capture baseline screenshots from threejs.org/examples for each ported demo.
// Uses a SEPARATE dv profile (default profile-5) so it can run in parallel
// with the local capture on profile-4. Reuses a single tab per profile.
//
// URL pattern: https://threejs.org/examples/${id}.html  (direct demo, no iframe wrapper)
// Source list: screenshots/ported/*.png filenames.
//
// CLI:
//   --profile=NAME   dv profile (default profile-5)
//   --wait=N         ms to wait per demo (default 6000 — threejs.org assets are slower)
//   --limit=N        cap (smoke test)
//   --only=id,id     subset
//   --missing-only   only capture ids that don't yet exist in screenshots/reference/
//   --dry-run

import { spawnSync } from 'node:child_process'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PORTED_DIR = path.join(ROOT, 'screenshots', 'ported')
const REF_DIR = path.join(ROOT, 'screenshots', 'reference')
const DV = path.resolve('D:/Developments/tslib/dv/dist/cli.js')

const argv = process.argv.slice(2)
const PROFILE = argv.find(a => a.startsWith('--profile='))?.split('=')[1] ?? 'profile-5'
const WAIT_MS = parseInt(argv.find(a => a.startsWith('--wait='))?.split('=')[1] ?? '6000', 10)
const LIMIT = (() => { const a = argv.find(a => a.startsWith('--limit=')); return a ? parseInt(a.split('=')[1], 10) : null })()
const ONLY = (() => { const a = argv.find(a => a.startsWith('--only=')); return a ? new Set(a.split('=')[1].split(',')) : null })()
const MISSING_ONLY = argv.includes('--missing-only')
const DRY_RUN = argv.includes('--dry-run')

fs.mkdirSync(REF_DIR, { recursive: true })

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
    const m = out.match(/[\{\[]/)
    if (!m) return null
    try { return JSON.parse(out.slice(m.index)) } catch { return null }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

// Wait for canvas to exist + have non-zero dimensions. Also tolerate 404 by checking title.
const DETECT_SCRIPT = `
(() => {
    if (document.title.toLowerCase().includes('not found') || document.body.innerText.includes('404')) {
        return { hasCanvas: false, notFound: true };
    }
    const canvas = document.querySelector('canvas');
    return {
        hasCanvas: !!canvas && canvas.width > 0 && canvas.height > 0,
        notFound: false,
        w: canvas?.width ?? 0, h: canvas?.height ?? 0
    };
})()
`.trim()

async function ensureTab() {
    try { dv(['select', '-i', '1'], 10_000) }
    catch {
        dv(['new', '-u', 'https://threejs.org/'], 20_000)
        await sleep(2000)
        dv(['select', '-i', '1'], 10_000)
    }
}

async function captureOne(id) {
    const url = `https://threejs.org/examples/${id}.html`
    const out = path.join(REF_DIR, `${id}.png`)
    try {
        try { dv(['select', '-i', '1'], 5_000) } catch { await ensureTab() }
        dv(['navigate', '-u', url], 25_000)
        await sleep(WAIT_MS)
        let detect = dvJson(['eval', '-s', DETECT_SCRIPT, '--json'], 15_000)
        if (detect && typeof detect === 'object' && 'result' in detect) detect = detect.result?.value ?? detect.result
        if (detect?.notFound) return { id, status: 'not_found' }
        if (!detect?.hasCanvas) return { id, status: 'no_canvas' }
        dv(['screenshot', '-o', out], 20_000)
        const ok = fs.existsSync(out) && fs.statSync(out).size > 1000
        return { id, status: ok ? 'ok' : 'failed', w: detect.w, h: detect.h }
    } catch (e) {
        return { id, status: 'error', detail: String(e.message ?? e).slice(0, 200) }
    }
}

async function main() {
    let ids = fs.readdirSync(PORTED_DIR)
        .filter(f => f.endsWith('.png') && !f.startsWith('_'))
        .map(f => f.replace(/\.png$/, ''))
        .filter(id => /^[a-z0-9_]+$/.test(id))

    if (ONLY) ids = ids.filter(id => ONLY.has(id))
    if (MISSING_ONLY) {
        const have = new Set(fs.readdirSync(REF_DIR).filter(f => f.endsWith('.png')).map(f => f.replace(/\.png$/, '')))
        ids = ids.filter(id => !have.has(id))
    }
    if (LIMIT) ids = ids.slice(0, LIMIT)

    console.log(`[ref-capture] ${ids.length} demos, profile=${PROFILE}, wait=${WAIT_MS}ms (single tab reuse)`)
    if (DRY_RUN) { ids.forEach(id => console.log(`  ${id}`)); process.exit(0) }

    await ensureTab()

    const results = []
    for (const id of ids) {
        process.stdout.write(`[${PROFILE}] ${id} ... `)
        const r = await captureOne(id)
        const flag = r.status === 'ok' ? `ok ${r.w}x${r.h}`
            : r.status === 'not_found' ? '404'
            : r.status === 'no_canvas' ? 'NO-CANVAS'
            : `${r.status}:${(r.detail ?? '').slice(0, 60)}`
        process.stdout.write(`${flag}\n`)
        results.push(r)
    }

    const ok = results.filter(r => r.status === 'ok').length
    const notFound = results.filter(r => r.status === 'not_found').length
    const noCanvas = results.filter(r => r.status === 'no_canvas').length
    const failed = results.filter(r => r.status === 'error' || r.status === 'failed').length

    console.log(`\n[ref-capture] done: ok=${ok} 404=${notFound} no_canvas=${noCanvas} failed=${failed}`)

    fs.mkdirSync(path.join(ROOT, '..', 'test-results'), { recursive: true })
    const summary = path.join(ROOT, '..', 'test-results', 'capture-threejs-reference-summary.json')
    fs.writeFileSync(summary, JSON.stringify({
        at: new Date().toISOString(), profile: PROFILE, total: results.length,
        ok, notFound, noCanvas, failed, results
    }, null, 2))
    console.log(`summary → ${summary}`)
}

main().catch(e => { console.error(e); process.exit(1) })
