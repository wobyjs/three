#!/usr/bin/env node
// diff-ported-vs-reference.mjs
// Side-by-side diff each screenshots/ported/<id>.png vs screenshots/reference/<id>.png.
// Uses pure JS (no ImageMagick dep): pngjs + pixelmatch. Installs them on demand.
//
// Output:
//   screenshots/diff/<id>.png   — side-by-side or pixel-diff overlay
//   test-results/diff-summary.json — per-id mismatch ratio, dim, verdict
//
// Verdict thresholds (mismatch ratio):
//   < 0.05 -> match
//   0.05-0.25 -> minor
//   0.25-0.60 -> major
//   > 0.60 -> diverged
//
// CLI:
//   --only=id,id
//   --limit=N

import { spawnSync } from 'node:child_process'
import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PORTED_DIR = path.join(ROOT, 'screenshots', 'ported')
const REF_DIR = path.join(ROOT, 'screenshots', 'reference')
const DIFF_DIR = path.join(ROOT, 'screenshots', 'diff')
fs.mkdirSync(DIFF_DIR, { recursive: true })

const argv = process.argv.slice(2)
const ONLY = (() => { const a = argv.find(a => a.startsWith('--only=')); return a ? new Set(a.split('=')[1].split(',')) : null })()
const LIMIT = (() => { const a = argv.find(a => a.startsWith('--limit=')); return a ? parseInt(a.split('=')[1], 10) : null })()

// Lazy-require so missing dep falls back to install hint.
async function loadDeps() {
    try {
        const { PNG } = await import('pngjs')
        const pixelmatch = (await import('pixelmatch')).default
        return { PNG, pixelmatch }
    } catch {
        console.error('Missing deps. Run:  pnpm add -D -w pngjs pixelmatch')
        process.exit(2)
    }
}

function readPng(PNG, p) {
    const buf = fs.readFileSync(p)
    return PNG.sync.read(buf)
}

function resizeNearest(PNG, src, dstW, dstH) {
    const out = new PNG({ width: dstW, height: dstH })
    for (let y = 0; y < dstH; y++) {
        const sy = Math.min(src.height - 1, Math.floor((y / dstH) * src.height))
        for (let x = 0; x < dstW; x++) {
            const sx = Math.min(src.width - 1, Math.floor((x / dstW) * src.width))
            const di = (y * dstW + x) * 4
            const si = (sy * src.width + sx) * 4
            out.data[di] = src.data[si]
            out.data[di + 1] = src.data[si + 1]
            out.data[di + 2] = src.data[si + 2]
            out.data[di + 3] = src.data[si + 3]
        }
    }
    return out
}

function verdictOf(ratio) {
    if (ratio < 0.05) return 'match'
    if (ratio < 0.25) return 'minor'
    if (ratio < 0.60) return 'major'
    return 'diverged'
}

async function main() {
    const { PNG, pixelmatch } = await loadDeps()

    let ids = fs.readdirSync(PORTED_DIR)
        .filter(f => f.endsWith('.png') && !f.startsWith('_'))
        .map(f => f.replace(/\.png$/, ''))
        .filter(id => /^[a-z0-9_]+$/.test(id))

    if (ONLY) ids = ids.filter(id => ONLY.has(id))
    if (LIMIT) ids = ids.slice(0, LIMIT)

    const results = []
    for (const id of ids) {
        const p1 = path.join(PORTED_DIR, `${id}.png`)
        const p2 = path.join(REF_DIR, `${id}.png`)
        if (!fs.existsSync(p2)) { results.push({ id, status: 'no_reference' }); continue }
        try {
            let a = readPng(PNG, p1)
            let b = readPng(PNG, p2)
            const W = Math.min(a.width, b.width)
            const H = Math.min(a.height, b.height)
            if (a.width !== W || a.height !== H) a = resizeNearest(PNG, a, W, H)
            if (b.width !== W || b.height !== H) b = resizeNearest(PNG, b, W, H)
            const out = new PNG({ width: W, height: H })
            const diffPixels = pixelmatch(a.data, b.data, out.data, W, H, { threshold: 0.18, includeAA: true })
            const ratio = diffPixels / (W * H)
            const verdict = verdictOf(ratio)
            fs.writeFileSync(path.join(DIFF_DIR, `${id}.png`), PNG.sync.write(out))
            results.push({ id, status: 'compared', ratio: +ratio.toFixed(4), verdict, w: W, h: H })
            process.stdout.write(`${id}\t${verdict}\t${(ratio * 100).toFixed(1)}%\n`)
        } catch (e) {
            results.push({ id, status: 'error', detail: String(e.message ?? e).slice(0, 200) })
            process.stdout.write(`${id}\tERROR\t${String(e.message).slice(0, 80)}\n`)
        }
    }

    const compared = results.filter(r => r.status === 'compared')
    const match = compared.filter(r => r.verdict === 'match').length
    const minor = compared.filter(r => r.verdict === 'minor').length
    const major = compared.filter(r => r.verdict === 'major').length
    const diverged = compared.filter(r => r.verdict === 'diverged').length
    const noRef = results.filter(r => r.status === 'no_reference').length
    const err = results.filter(r => r.status === 'error').length

    console.log(`\n[diff] match=${match} minor=${minor} major=${major} diverged=${diverged} no_ref=${noRef} error=${err}`)

    fs.mkdirSync(path.join(ROOT, '..', 'test-results'), { recursive: true })
    const summary = path.join(ROOT, '..', 'test-results', 'diff-summary.json')
    fs.writeFileSync(summary, JSON.stringify({
        at: new Date().toISOString(), total: results.length,
        match, minor, major, diverged, no_reference: noRef, error: err, results
    }, null, 2))
    console.log(`summary → ${summary}`)
}

main().catch(e => { console.error(e); process.exit(1) })
