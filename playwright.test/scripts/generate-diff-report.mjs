#!/usr/bin/env node
// generate-diff-report.mjs
// Build a single-file compressed HTML report from diff-summary.json:
//   - Verdict breakdown table (counts, percentages)
//   - Sortable thumbnail grid: ported | reference | diff for each demo
//   - Sorted worst-first (highest mismatch ratio at top)
//   - Click-to-zoom (opens full-res in new tab)
//
// Output: test-results/diff-report.html  (relative <img> links to PNGs on disk)
//
// CLI:
//   --thumb-w=N    thumbnail width in CSS px (default 180)
//   --top=N        show only top N worst (default all)

import * as fs from 'node:fs'
import * as path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SUMMARY = path.resolve(ROOT, '..', 'test-results', 'diff-summary.json')
const OUT = path.resolve(ROOT, '..', 'test-results', 'diff-report.html')

const argv = process.argv.slice(2)
const THUMB_W = parseInt(argv.find(a => a.startsWith('--thumb-w='))?.split('=')[1] ?? '180', 10)
const TOP = (() => { const a = argv.find(a => a.startsWith('--top=')); return a ? parseInt(a.split('=')[1], 10) : null })()

if (!fs.existsSync(SUMMARY)) {
    console.error(`Missing ${SUMMARY}. Run diff-ported-vs-reference.mjs first.`)
    process.exit(1)
}

const data = JSON.parse(fs.readFileSync(SUMMARY, 'utf-8'))

// Build absolute file:// links so HTML works whether opened from anywhere.
const PORTED_DIR = path.resolve(ROOT, 'screenshots', 'ported')
const REF_DIR = path.resolve(ROOT, 'screenshots', 'reference')
const DIFF_DIR = path.resolve(ROOT, 'screenshots', 'diff')

const compared = (data.results || []).filter(r => r.status === 'compared')
const noRef = (data.results || []).filter(r => r.status === 'no_reference')
const errored = (data.results || []).filter(r => r.status === 'error')

compared.sort((a, b) => (b.ratio ?? 0) - (a.ratio ?? 0))
const rows = TOP ? compared.slice(0, TOP) : compared

const verdictColor = {
    match: '#10b981', minor: '#f59e0b', major: '#f97316', diverged: '#ef4444',
}

const fileUrl = (p) => 'file:///' + p.replace(/\\/g, '/').replace(/^([A-Za-z]):/, '$1:')

const html = `<!doctype html>
<html><head><meta charset="utf-8"><title>Ported vs threejs.org diff report</title>
<style>
:root { color-scheme: dark; }
body { font: 13px/1.4 ui-sans-serif, system-ui; background:#0b0d10; color:#e5e7eb; margin:0; padding:16px; }
h1 { font-size:18px; margin:0 0 8px; }
.summary { display:flex; gap:8px; flex-wrap:wrap; margin:8px 0 16px; }
.pill { padding:4px 10px; border-radius:999px; background:#1f2937; }
.pill b { color:#fff; }
.grid { display:grid; grid-template-columns: 220px repeat(3, ${THUMB_W}px); gap:6px; align-items:center; }
.grid > div { padding:4px; border-bottom:1px solid #1f2937; }
.head { position:sticky; top:0; background:#0b0d10; font-weight:600; color:#9ca3af; padding:6px 4px !important; border-bottom:1px solid #374151 !important; }
.id { font-family: ui-monospace, Menlo, monospace; font-size:12px; color:#d1d5db; word-break: break-all; }
.verdict { display:inline-block; padding:2px 8px; border-radius:4px; font-size:11px; font-weight:600; color:#111; margin-top:2px; }
.ratio { color:#9ca3af; font-size:11px; margin-top:2px; }
img { width:${THUMB_W}px; height:auto; display:block; background:#1f2937; border-radius:3px; }
img:hover { outline:2px solid #60a5fa; cursor:zoom-in; }
.filter { margin:0 0 10px; display:flex; gap:6px; }
.filter button { background:#1f2937; color:#e5e7eb; border:1px solid #374151; padding:4px 10px; border-radius:4px; cursor:pointer; font:inherit; }
.filter button.on { background:#374151; border-color:#60a5fa; }
.section { font-size:14px; margin:24px 0 8px; color:#9ca3af; }
.no-ref-list, .err-list { font-family: ui-monospace, Menlo, monospace; font-size:11px; color:#9ca3af; columns:3; }
</style></head><body>

<h1>Ported vs threejs.org/examples — pixel diff report</h1>
<div class="summary">
  <span class="pill">total <b>${data.total}</b></span>
  <span class="pill" style="color:#10b981">match <b>${data.match}</b></span>
  <span class="pill" style="color:#f59e0b">minor <b>${data.minor}</b></span>
  <span class="pill" style="color:#f97316">major <b>${data.major}</b></span>
  <span class="pill" style="color:#ef4444">diverged <b>${data.diverged}</b></span>
  <span class="pill">no_reference <b>${data.no_reference}</b></span>
  <span class="pill">error <b>${data.error}</b></span>
  <span class="pill" style="margin-left:auto;color:#6b7280">generated ${new Date(data.at).toLocaleString()}</span>
</div>

<div class="filter">
  <button data-f="all" class="on">all (${rows.length})</button>
  <button data-f="diverged">diverged</button>
  <button data-f="major">major</button>
  <button data-f="minor">minor</button>
  <button data-f="match">match</button>
</div>

<div class="grid">
  <div class="head">id / verdict</div>
  <div class="head">ported (ours)</div>
  <div class="head">reference (threejs.org)</div>
  <div class="head">diff overlay</div>
${rows.map(r => `  <div data-v="${r.verdict}" class="id">
    <div>${r.id}</div>
    <div class="verdict" style="background:${verdictColor[r.verdict]}">${r.verdict}</div>
    <div class="ratio">${(r.ratio * 100).toFixed(2)}% · ${r.w}×${r.h}</div>
  </div>
  <div data-v="${r.verdict}"><a href="${fileUrl(path.join(PORTED_DIR, r.id + '.png'))}" target="_blank"><img loading="lazy" src="${fileUrl(path.join(PORTED_DIR, r.id + '.png'))}"></a></div>
  <div data-v="${r.verdict}"><a href="${fileUrl(path.join(REF_DIR, r.id + '.png'))}" target="_blank"><img loading="lazy" src="${fileUrl(path.join(REF_DIR, r.id + '.png'))}"></a></div>
  <div data-v="${r.verdict}"><a href="${fileUrl(path.join(DIFF_DIR, r.id + '.png'))}" target="_blank"><img loading="lazy" src="${fileUrl(path.join(DIFF_DIR, r.id + '.png'))}"></a></div>`).join('\n')}
</div>

${noRef.length ? `<div class="section">no_reference (${noRef.length}) — need capture from threejs.org</div>
<div class="no-ref-list">${noRef.map(r => r.id).join('<br>')}</div>` : ''}

${errored.length ? `<div class="section">error (${errored.length})</div>
<div class="err-list">${errored.map(r => `${r.id}: ${r.detail ?? ''}`).join('<br>')}</div>` : ''}

<script>
document.querySelectorAll('.filter button').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('.filter button').forEach(x => x.classList.remove('on'))
    b.classList.add('on')
    const f = b.dataset.f
    document.querySelectorAll('.grid [data-v]').forEach(el => {
        el.style.display = (f === 'all' || el.dataset.v === f) ? '' : 'none'
    })
}))
</script>
</body></html>
`

fs.writeFileSync(OUT, html)
console.log(`report → ${OUT}`)
console.log(`open with: start ${OUT}`)
