#!/usr/bin/env node
/**
 * Batch-sweeps all demo IDs across 3 dv profiles in parallel.
 */
import { spawnSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'

const DV_PATH = 'D:/Developments/tslib/dv/dist/cli.js'
const PROFILES = ['profile-4', 'profile-5', 'profile-6']
const BASE_URL = 'http://localhost:5300/demo/#'
const WAIT_MS = 1800

const ids = readFileSync('C:/Users/wongc/AppData/Local/Temp/all_demo_ids.txt', 'utf8')
    .split('\n').map(l => l.trim()).filter(Boolean)

console.log(`Total demos: ${ids.length}`)

function dv(profile, args) {
    const r = spawnSync('node', [DV_PATH, ...args, '--profile', profile], { encoding: 'utf8', timeout: 12000 })
    return (r.stdout || '') + (r.stderr || '')
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)) }

async function testDemo(profile, id) {
    dv(profile, ['navigate', '--url', `${BASE_URL}${id}`])
    await sleep(WAIT_MS)

    let result = {}
    try {
        const out = dv(profile, ['eval', '--script',
            'JSON.stringify({hasCanvas:!!document.querySelector("canvas"),cw:(()=>{const c=document.querySelector("canvas");return c?c.clientWidth:0})(),scene:!!window.__WOBY_SCENE__,ren:!!window.__WOBY_RENDERER__,cam:!!window.__WOBY_CAMERA__})'
        ])
        result = JSON.parse(out.match(/\{.*\}/)?.[0] || '{}')
    } catch {}

    let errors = []
    try {
        const cerr = dv(profile, ['console', '--json'])
        const msgs = JSON.parse(cerr.match(/\[[\s\S]*\]/)?.[0] || '[]')
        errors = msgs.filter(m => m.level === 'error').map(m => m.text?.slice(0, 120)).filter(Boolean)
    } catch {}

    const ok = result.hasCanvas && result.cw > 0
    return { id, ok, canvas: result.hasCanvas, cw: result.cw ?? 0, scene: !!result.scene, ren: !!result.ren, cam: !!result.cam, errors: errors.slice(0, 2) }
}

const chunk = Math.ceil(ids.length / 3)
const chunks = [
    ids.slice(0, chunk),
    ids.slice(chunk, chunk * 2),
    ids.slice(chunk * 2)
]

console.log(`Chunks: ${chunks.map(c => c.length).join(' / ')} across profiles ${PROFILES.join(', ')}`)

async function processChunk(profile, chunk) {
    const results = []
    for (let i = 0; i < chunk.length; i++) {
        const id = chunk[i]
        process.stdout.write(`\r[${profile}] ${i+1}/${chunk.length}: ${id.slice(0,48).padEnd(48)}`)
        const r = await testDemo(profile, id)
        results.push(r)
        if (!r.ok) {
            console.log(`\n  BROKEN: ${id} canvas=${r.canvas} cw=${r.cw} err=${JSON.stringify(r.errors)}`)
        }
    }
    return results
}

const [r0, r1, r2] = await Promise.all([
    processChunk(PROFILES[0], chunks[0]),
    processChunk(PROFILES[1], chunks[1]),
    processChunk(PROFILES[2], chunks[2]),
])

const all = [...r0, ...r1, ...r2]
const broken = all.filter(r => !r.ok)
const working = all.filter(r => r.ok)

console.log(`\n\nResults: ${working.length} working, ${broken.length} broken out of ${all.length}`)

const TMP = 'C:/Users/wongc/AppData/Local/Temp'
writeFileSync(`${TMP}/sweep-broken.json`, JSON.stringify(broken, null, 2))
writeFileSync(`${TMP}/sweep-all.json`, JSON.stringify(all, null, 2))

console.log('\nBroken demos:')
broken.forEach(r => console.log(`  ${r.id}: canvas=${r.canvas} cw=${r.cw} err=${JSON.stringify(r.errors)}`))
console.log('\nDone.')
