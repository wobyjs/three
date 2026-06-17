# Phase 15 Plan 01: Ground-Truth Audit

**Audit date:** 2026-06-17
**Source:** File system scan + registry.ts grep (PowerShell commands, run from project root)

---

## File System Counts (run from project root)

Command used:
```powershell
(Get-ChildItem 'demo/src' -Filter '*.tsx' | Where-Object { $_.Name -notmatch '^(index|menu-frame|canvas-frame|AutoSizeCanvas|Sector|Box3ce)' }).Count
```

tsx_demo_files_count: 251

Command used for unique registered IDs:
```powershell
$ids = (Select-String -Path 'demo/src/registry.ts' -Pattern "{ id: '([^']+)'" -AllMatches).Matches | ForEach-Object { $_.Groups[1].Value }
($ids | Sort-Object -Unique).Count
```

unique_registered_ids: 200

Notes:
- 251 TSX demo files exist in `demo/src/` (excl. 6 infrastructure files: index, menu-frame, canvas-frame, AutoSizeCanvas, Sector, Box3ce)
- 200 unique demo IDs are registered in registry.ts (after deduplication)
- The registry has 204 raw `component:` entries because 3 demo IDs appear in duplicate category blocks: `webgl_textures_cube`, `css3d_periodictable`, `webgl_css3d`
- Unregistered demo TSX files: 251 - 200 = **51** (close to RESEARCH.md's 52 — minor rounding from counting method)

---

## Duplicate Detection

Confirmed via PowerShell `Select-String` with line number tracking:

### `id: 'textures'` — appears at lines 113 AND 174

- Line 113: First `textures` CategoryEntry (KEEP) — contains `webgl_textures_cube` and `webgl_uvs`
- Line 174: Second `textures` CategoryEntry (DELETE) — contains only `webgl_textures_cube` (duplicate)

### `id: 'css3d'` — appears at lines 322 AND 412

- Line 322: First `css3d` CategoryEntry (KEEP) — contains `css3d_periodictable` and `webgl_css3d`
- Line 412: Second `css3d` CategoryEntry (DELETE) — contains `css3d_periodictable` (dup), `webgl_css3d` (dup), `webgl_css3d_demo` (UNIQUE — must merge into first block)

### Duplicate demo IDs

| Demo ID | Occurrences | Action |
|---------|-------------|--------|
| `webgl_textures_cube` | 2 (lines 116 and 177) | Delete line 177 (in second textures block) |
| `css3d_periodictable` | 2 (lines 325 and 415) | Delete line 415 (in second css3d block) |
| `webgl_css3d` | 2 (lines 326 and 416) | Delete line 416 (in second css3d block) |
| `webgl_css3d_demo` | 1 (line 417 only) | PRESERVE — move to first css3d block |

Confirmed: `webgl_css3d_demo` is UNIQUE and must be preserved when deleting the second css3d block.

---

## Kimi-Verified Demos (Phase 14)

Source: `playwright.test/test-results/kimi-comparison-report-fixed.json`
Comparison run: Phase 14 Plan 04 (134 demos compared)
Passing threshold: similarity >= 0.7

**8 demos passed visual comparison:**

1. webgl_shadowmap_vsm
2. webgl_clipping_intersection
3. webgl_geometry_colors
4. webgl_interactive_cubes_gpu
5. webgl_lights_spotlight
6. webgl_lines_dashed
7. webgl_points_waves
8. webgl_postprocessing_smaa

**Summary of Phase 14 Kimi comparison results:**

| Status | Count |
|--------|-------|
| Passed (similarity >= 0.7) | 8 |
| Failed (similarity < 0.7) | 108 |
| Errors (could not compare) | 18 |
| Total compared | 134 |

---

## Delta vs STATE.md Claims

| Metric | STATE.md Claims | Ground Truth | Delta |
|--------|----------------|--------------|-------|
| Total ported | 469 (74%) | 200 registered / 251 total TSX | -269 registered / -218 TSX |
| Coverage | 74% | 200/629 = **31.8% (~32%)** | -42 percentage points |
| Upstream total | 629 | 629 | 0 (correct) |

**Root cause of stale numbers:** STATE.md metrics were written by AI self-reporting phase completion targets, not from actual file-system counts. The project accumulated demos across Phases 2-12 but never performed a file-system reconciliation audit.

**Corrected figures for STATE.md:**
- Total Three.js Examples (upstream): 629
- Ported (registered in registry.ts, unique IDs): 200
- Ported but NOT registered (TSX files awaiting verification): 51
- Total TSX demo files: 251
- Coverage (registered / upstream): 32%
- Visually verified via Kimi (similarity >= 0.7): 8
- Visually failed via Kimi (similarity < 0.7): 108
- Kimi comparison errors (could not compare): 18
