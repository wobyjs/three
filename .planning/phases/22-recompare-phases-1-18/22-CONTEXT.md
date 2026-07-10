# Phase 22: Re-capture Phases 1-18 — ported + upstream at 1409x1376

**Gathered:** 2026-07-02
**Status:** Ready for planning
**Source:** User request — "list me 1-19 img comparison pg"; nothing useful exists for Phases 1-18

<domain>
## Phase Boundary

This phase does **two things in sequence**:

1. **Re-capture ported screenshots** for all Phase 1-18 webgl_* demos registered in `demo/src/registry.ts` at the 1409x1376 viewport (matching the existing Phases 19-21 capture standard).

2. **Re-capture upstream screenshots** for each of those demos from `https://threejs.org/examples/<id>.html` at the same viewport.

3. **Build `compare-1-18.html`** — a side-by-side ported-vs-upstream grid analogous to the existing `compare.html` (which only covers Phases 19-21).

## What EXISTS today (verified)

- `compare.html` — Phases 19-21 only (36 demos)
- `playwright.test/test-results/kimi-comparison-report.html` — 3 dry-run mocks only ("Dry run mock." in reasoning column)
- `playwright.test/test-results/visual-comparison-report.html` — 200 rows but **every reference is "no screenshot"** (all `reference-load-failed`)
- `.planning/screenshots/phase22/` — 56 files: animation demos only (~12 ported + upstream pairs for WebGLAnimation* family). No HTML wrapper.

## What DOES NOT exist

- A side-by-side HTML comparison page for Phases 1-18
- Ported screenshots for the vast majority of Phase 1-18 demos
- Upstream screenshots for any Phase 1-18 demo

## Scope estimate

From `demo/src/registry.ts`:
- 683 total `webgl_*` IDs (with 36 duplicates from alternate names)
- 647 unique `webgl_*` IDs minus the 36 already in Phases 19-21 ≈ **611 candidate demos for Phase 1-18 capture**

This is multi-wave work. A single plan cannot scope this without timing out. Phase 22 will use **5-7 waves** grouped by category, each plan capturing 30-80 demos.

</domain>

<decisions>
## Implementation Decisions

### D-01: Capture viewport is locked at 1409x1376 (matches Phases 19-21)
- `dv resize --profile profile-2 --width 1409 --height 1376` before each capture
- Same viewport for both ported (`http://localhost:5300/#<id>`) and upstream (`https://threejs.org/examples/<id>.html`) screenshots
- This matches the existing compare.html standard and lets us merge Phases 1-18 + 19-21 into one HTML eventually

### D-02: One plan per wave (4-7 plans total)
Each plan covers one category-group and produces:
- Ported PNGs in `.planning/screenshots/phase22/ported/<id>.png`
- Upstream PNGs in `.planning/screenshots/phase22/upstream/<id>.png`
- A `wave-NN-SUMMARY.md` recording success/failure per demo
- Atomic commits per wave

### D-03: Final plan builds `compare-1-18.html`
- Last plan (22-07 or 22-NN) creates `compare-1-18.html` modeled on the existing `compare.html` structure
- HTML shows ported vs upstream side-by-side, same grid CSS
- Sections grouped by category

### D-04: Skip demos that fail capture (DON'T halt the wave)
- If a demo times out or shows blank canvas, log as "failed" in SUMMARY but continue
- Don't retry indefinitely — 5-second timeout per capture
- Failed demos can be re-attempted in a future "fix" phase

### D-05: Use ONLY dv profile-2 (port 9231) — binding
- Per binding user constraint: "do not use dv profile 6 anymore" / "u MUST using dv PROFILE 2"
- All captures single-threaded on profile-2

### D-06: Existing animation demos in phase22/ get reused (no re-capture)
- The 12 animation demos already in `.planning/screenshots/phase22/` with `_ported` + `_upstream` PNGs are VALID
- They will be linked into `compare-1-18.html` without re-capture

### D-07: Reference HTML is `compare.html` (Phases 19-21) — read it before writing the new one
- Match its CSS structure exactly
- Match its layout (category section + grid)
- Match its data-attribute filter approach if present

### Claude's Discretion
- Which waves get batched together if a category is small
- Whether to merge all Phase 1-21 into a single `compare-all.html` after Phase 22 completes (vs separate `compare-1-18.html` and `compare.html`)
- Specific wait timings between navigate and screenshot (start with 3s, adjust per demo)

</decisions>

<canonical_refs>
## Canonical References

### Existing pipeline (must follow exactly)
- `.planning/screenshots/compare.html` — the Phases 19-21 reference grid (READ FIRST, model new HTML on it)
- `D:\Developments\tslib\dv` (dv CLI) — `dv start --profile profile-2 --headed`, `dv navigate`, `dv screenshot`, `dv resize`, `dv eval`

### Demo source
- `demo/src/registry.ts` — 683 webgl_* IDs, categorized by section
- `http://localhost:5300/#<demo_id>` — ported demo URL
- `https://threejs.org/examples/<demo_id>.html` — upstream URL

### Visual comparison pipeline precedent (Phase 14)
- `playwright.test/scripts/kimi-orchestrator.ts`
- `playwright.test/test-results/kimi-comparison-report-fixed.json`

</canonical_refs>

<specifics>
## Specific Ideas

### Proposed wave structure (estimate: 6 plans)

| Wave | Categories | Est. demos | Est. time |
|------|-----------|-----------|-----------|
| 22-01 | basics + lines + effects | ~30 | ~30 min |
| 22-02 | animation + geometries | ~50 | ~50 min |
| 22-03 | materials + textures + alpha + clipping | ~80 | ~80 min |
| 22-04 | lights + cameras + shadows + particles + fog | ~80 | ~80 min |
| 22-05 | loaders + shaders + postprocessing | ~80 | ~80 min |
| 22-06 | interactive + sprites + buffergeometry + reflection + toon + svg + webgpu + webxr + physics | ~100 | ~100 min |
| 22-07 | Build `compare-1-18.html` | (HTML only) | ~30 min |

**Total estimated capture time: ~7-8 hours wall time**

### Capture script template (per demo)

```bash
# Ported capture
dv navigate --profile profile-2 --url "http://localhost:5300/#<id>"
sleep 3  # wait for canvas render
dv screenshot --profile profile-2 --output ".planning/screenshots/phase22/ported/<id>.png"

# Upstream capture
dv navigate --profile profile-2 --url "https://threejs.org/examples/<id>.html"
sleep 3
dv screenshot --profile profile-2 --output ".planning/screenshots/phase22/upstream/<id>.png"
```

### Wait timing adjustment
- Simple scenes (basics, geometries): 2s wait sufficient
- Asset-loading demos (loaders): 5-8s wait required
- Particle/animation demos: 3s wait
- If a capture shows blank canvas, retry once with doubled wait

### Dev server requirement
- `pnpm run dev:only` must be running on port 5300 for ported captures
- Verify with `dv navigate --profile profile-2 --url http://localhost:5300/` first

</specifics>

<deferred>
## Deferred Ideas

- **Merging compare.html + compare-1-18.html into one mega-page** — depends on Phase 22 outcome; consider in Phase 23
- **Re-running Kimi comparison on the new captures** — Phase 14-05 worker can be repurposed
- **Capturing demos that fail in initial waves** — backfill phase (Phase 24?)
- **Migrating `.planning/screenshots/phase22/` files into a more structured layout** — minor cleanup

</deferred>

---

*Phase: 22-recompare-phases-1-18*
*Context gathered: 2026-07-02 from user request "list me 1-19 img comparison pg"*