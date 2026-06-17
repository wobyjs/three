---
phase: 15-update-actual-implemented-tested-visually-checked-with-plann
plan: 01
subsystem: documentation-sync
tags:
  - documentation-sync
  - registry-cleanup
  - audit
dependency_graph:
  requires: []
  provides:
    - accurate-coverage-metrics
    - deduplicated-registry
    - kimi-verified-demo-list
  affects:
    - .planning/STATE.md
    - .planning/ROADMAP.md
    - demo/src/registry.ts
tech_stack:
  added: []
  patterns:
    - PowerShell file-system count for ground truth
    - Submodule commit for demo/src changes
key_files:
  created:
    - .planning/phases/15-update-actual-implemented-tested-visually-checked-with-plann/15-01-AUDIT.md
  modified:
    - demo/src/registry.ts
    - .planning/STATE.md
    - .planning/ROADMAP.md
decisions:
  - Committed registry.ts to demo submodule (git add in demo/, then updated submodule pointer in parent)
  - Used PowerShell Select-String with { id: '...' pattern to count unique demo IDs (200 unique)
  - TSX demo count: 251 (RESEARCH.md said 250; PowerShell actual count is 251)
  - Unregistered files: 51 (RESEARCH.md said 52; actual 251-200=51)
metrics:
  duration: ~20 minutes
  completed_date: "2026-06-17"
  tasks_completed: 3
  files_created: 1
  files_modified: 3
---

# Phase 15 Plan 01: Documentation Audit + Registry Dedup Summary

**One-liner:** Audited file-system counts (251 TSX / 200 registered), deduped registry.ts (removed 2 duplicate CategoryEntry blocks), and updated STATE.md/ROADMAP.md with ground-truth 32% coverage replacing stale 74% claim.

---

## Audit Numbers Found

| Metric | Value | Source |
|--------|-------|--------|
| TSX demo files (excl. infrastructure) | 251 | PowerShell Get-ChildItem |
| Unique registered demo IDs | 200 | PowerShell Select-String dedup |
| Unregistered demo TSX files | 51 | 251 - 200 |
| Kimi-verified passing demos | 8 | kimi-comparison-report-fixed.json |
| Kimi-verified failing demos | 108 | kimi-comparison-report-fixed.json |
| Kimi comparison errors | 18 | kimi-comparison-report-fixed.json |
| Stale STATE.md claim | 469 / 74% | AI self-reported (now removed) |
| Corrected coverage | 200 / 629 = 32% | File-system count |

Minor discrepancy from RESEARCH.md: RESEARCH.md stated 250 TSX files; PowerShell counted 251. RESEARCH.md stated 52 unregistered; actual is 51. These differences are within rounding error of when the counts were taken — the AUDIT.md records the definitive shell-counted numbers.

---

## Registry Changes (Task 2)

### What Was Merged/Deleted

**Change 1 — textures category:**
- Removed second `textures` CategoryEntry block (lines 173-179 in original file)
- Second block contained only `webgl_textures_cube` which was already in the first block
- No demos lost; `webgl_textures_cube` remains in first block

**Change 2 — css3d category:**
- Added `webgl_css3d_demo` to first `css3d` CategoryEntry block (preserved from second block)
- Removed second `css3d` CategoryEntry block entirely (lines 411-419 in original file)
- Second block had 3 demos: 2 duplicates removed, 1 unique (`webgl_css3d_demo`) migrated

### Before vs After

| Metric | Before | After |
|--------|--------|-------|
| textures CategoryEntry blocks | 2 | 1 |
| css3d CategoryEntry blocks | 2 | 1 |
| webgl_textures_cube occurrences | 2 | 1 |
| css3d_periodictable occurrences | 2 | 1 |
| webgl_css3d occurrences | 2 | 1 |
| webgl_css3d_demo occurrences | 1 | 1 (preserved) |

### Build Status

The demo build (`pnpm build`) failed with a pre-existing error unrelated to registry.ts:
- `WebGLMaterialsCubemapDynamic.tsx` imports `three/examples/jsm/loaders/HDRLoader.js` (invalid path — should be `RGBELoader.js`)
- This file was in the demo submodule's untracked files before our changes
- The registry dedup changes do NOT affect this error
- Pre-existing issue: not caused by Plan 15-01 changes

---

## STATE.md / ROADMAP.md Changes Summary

### STATE.md

1. Frontmatter: `total_plans` incremented from 8 to 11 (3 Phase 15 plans added)
2. `## Metrics` section: Replaced stale 469/74% with:
   - Ported (registered in registry.ts, unique IDs): 200
   - Total TSX demo files: 251
   - Coverage: 32%
   - Source attribution to 15-01-AUDIT.md
3. Added `## Visually Verified Demos (Phase 14 Kimi Verdicts)` section with 8 demo IDs
4. Added `## Phase 15 Progress` section with 3-plan table
5. Removed stale strings: `Ported: 469 (74% coverage)` and `Coverage: 74%`

### ROADMAP.md

1. Phase 15 entry: Updated status from `PLANNED` to `IN PROGRESS`, clarified plan list names
2. Summary table: Added row `| 15 | sync | 1-2 days | IN PROGRESS |`
3. `Total Examples`: Changed `~574` to `~629`
4. `Completed`: Changed `224+ (All phases complete)` to `200 (registered) / 251 (TSX files)`
5. `Remaining`: Changed `0` to `~429 upstream examples unported`

---

## End-of-Plan Verification

| Check | Result |
|-------|--------|
| STATE.md contains `Ported (registered in registry.ts` | PASS |
| STATE.md contains `webgl_shadowmap_vsm` | PASS |
| STATE.md contains `Phase 15 Progress` | PASS |
| ROADMAP.md contains `15-01-PLAN.md` | PASS |
| registry.ts: textures count = 1 | PASS |
| registry.ts: css3d count = 1 | PASS |
| registry.ts: webgl_css3d_demo preserved | PASS |
| `pnpm build` exits 0 | FAIL (pre-existing HDRLoader.js import error in WebGLMaterialsCubemapDynamic.tsx — unrelated to this plan's changes) |

---

## Deviations from Plan

### Pre-Existing Build Failure (Out of Scope)

**Found during:** Task 2 build verification
**Issue:** `demo/src/WebGLMaterialsCubemapDynamic.tsx` imports `three/examples/jsm/loaders/HDRLoader.js` which does not exist in Three.js. This causes `pnpm build` to fail.
**Scope determination:** This file is in the demo submodule's untracked files list — it existed before this plan's execution. The registry.ts dedup changes did not introduce this error.
**Action:** Logged to deferred-items; not fixed (out of scope per deviation rules).
**Correct fix:** Change import to `three/examples/jsm/loaders/RGBELoader.js`.

### Minor Count Discrepancy

**Found during:** Task 1
**Issue:** RESEARCH.md stated 250 TSX files and 52 unregistered; PowerShell counted 251 TSX files and 51 unregistered.
**Cause:** One additional file was created between the research phase and this audit, or a different exclusion pattern was used.
**Action:** AUDIT.md records the PowerShell-counted truth (251/51). STATE.md updated with 251/51.

### Demo Submodule Commit Required

**Found during:** Task 2
**Issue:** `demo/src/registry.ts` is in the `demo/` git submodule (not tracked in parent repo). The Edit tool modified the working tree but changes needed a submodule commit + parent pointer update.
**Action:** Committed registry.ts changes inside the demo submodule (`git add src/registry.ts && git commit`), then staged the updated submodule pointer in the parent repo (`git add demo && git commit`).

---

## Commits

| Task | Hash | Message |
|------|------|---------|
| Task 1 | 4e3090a | audit(15-01): record ground-truth file counts and registry duplicates |
| Task 2 (submodule) | 0826844 | fix(15-01): merge duplicate textures and css3d categories in registry.ts |
| Task 2 (parent) | 79a1fb4 | fix(15-01): merge duplicate textures and css3d categories in registry.ts |
| Task 3 | dfdede2 | docs(15-01): update STATE.md and ROADMAP.md with ground-truth coverage numbers |

## Self-Check: PASS

- 15-01-AUDIT.md exists with tsx_demo_files_count and webgl_shadowmap_vsm: VERIFIED
- registry.ts deduplicated (textures=1, css3d=1): VERIFIED
- STATE.md has correct numbers and Kimi list: VERIFIED
- ROADMAP.md has Phase 15 row and 3 plan entries: VERIFIED
- All task commits exist in git log: VERIFIED
