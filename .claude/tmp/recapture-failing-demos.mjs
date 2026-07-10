#!/usr/bin/env node
// recapture-failing-demos.mjs
// Re-capture only the 14 failing demos with 12s wait.

import { spawnSync } from 'node:child_process'
import * as fs from 'node:fs'
import * as path from 'node:path'

const DV = 'D:/Developments/tslib/dv/dist/cli.js'
const PORT = 5300
const PROFILE = 'profile-4'
const WAIT_MS = 12000
const OUT_DIR = 'D:/Developments/tslib/@woby/three/demo/public/screenshots'

const FAILING_DEMOS = [
    'webgl_loader_ifc',
    'webgl_loader_usdz',
    'webgl_loader_texture_pvrtc',
    'webgl_loader_texture_tiff',
    'webgl_materials_cubemap_mipmaps',
    'webgl_materials_cubemap_render_to_mipmaps',
    'webgl_loader_fbx_nurbs',
    'webgl_modifier_simplifier',
    'webgl_loader_collada_skinning',
    'webgl_geometry_terrain_raycast',
    'webgl_morphtargets_face',
    'webgl_modifier_curve',
    'webgl_multiple_scenes_comparison',
    'webgl_morphtargets_webcam',
]

function dv(args, timeoutMs = 30_000) {
    const r = spawnSync('node', [DV, ...args, '--profile', PROFILE], {
        encoding: 'utf-8', timeout: timeoutMs, maxBuffer: 20 * 1024 * 1024,
        stdio: ['ignore', 'pipe', 'pipe']
    })
    if (r.status === 0) return (r.stdout ?? '').trim()
    const err = (r.stderr ?? '').slice(0, 200)
    throw new Error(`dv ${args.join(' ')} exit ${r.status}: ${err}`)
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

async function captureOne(id) {
    const url = `http://localhost:${PORT}/#${id}`
    const out = path.join(OUT_DIR, `${id}.png`)

    // Select tab
    try { dv(['select', '-i', '1'], 8_000) } catch { /* ignore */ }

    // Navigate
    try { dv(['console', '--clear'], 8_000) } catch { }
    try { dv(['navigate', '-u', url], 30_000) } catch (e) {
        return { id, status: 'nav_error', detail: String(e).slice(0, 120) }
    }

    // Poll for canvas up to WAIT_MS
    const POLL_MS = 1500
    const POLL_MAX = WAIT_MS
    const POLL_START = Date.now()
    let polledCanvas = false
    while (Date.now() - POLL_START < POLL_MAX) {
        await sleep(POLL_MS)
        try {
            const out2 = dv(['eval', '-s', 'JSON.stringify({c:!!document.querySelector("canvas")&&document.querySelector("canvas").width>0, o:!!document.querySelector("vite-error-overlay")})', '--json'], 8_000)
            const m = out2.match(/[\{\[]/)
            if (!m) continue
            const probe = JSON.parse(out2.slice(m.index))
            const parsed = probe?.result?.value ?? probe
            if (parsed?.o) break
            if (parsed?.c) { polledCanvas = true; break }
        } catch { }
    }
    if (polledCanvas) await sleep(800)

    // Screenshot
    try {
        dv(['screenshot', '-o', out], 20_000)
        const ok = fs.existsSync(out) && fs.statSync(out).size > 1000
        return { id, status: ok ? 'ok' : 'small_file', size: fs.existsSync(out) ? fs.statSync(out).size : 0 }
    } catch (e) {
        return { id, status: 'screenshot_error', detail: String(e).slice(0, 120) }
    }
}

async function main() {
    console.log(`[recapture] ${FAILING_DEMOS.length} failing demos, wait=${WAIT_MS}ms`)

    // Warmup
    try {
        dv(['navigate', '-u', `http://localhost:${PORT}/`], 30_000)
        await sleep(3000)
    } catch (e) {
        console.error(`[recapture] FATAL warmup: ${e.message}`)
        process.exit(1)
    }

    const results = []
    for (const id of FAILING_DEMOS) {
        process.stdout.write(`[${PROFILE}] ${id} ... `)
        const r = await captureOne(id)
        const flag = r.status === 'ok' ? `ok (${(r.size / 1024).toFixed(1)}KB)` : `${r.status}:${r.detail?.slice(0, 80) ?? ''}`
        process.stdout.write(`${flag}\n`)
        results.push(r)
    }

    const ok = results.filter(r => r.status === 'ok')
    const failed = results.filter(r => r.status !== 'ok')
    console.log(`\n[recapture] done: ok=${ok.length} failed=${failed.length}`)
    if (failed.length) {
        console.log('\nFAILED:')
        failed.forEach(r => console.log(`  ${r.id}: ${r.status} - ${r.detail?.slice(0, 100) ?? ''}`))
    }
}

main().catch(e => { console.error(e); process.exit(1) })