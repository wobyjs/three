---
phase: 18-misc-controls-camera-envmaps
status: PLANNED
created: 2026-06-26
planner: gsd-planner
prior_phase: 17-gltf-extensions-postprocessing-misc (COMPLETE, 12 demos delivered, PASS 12/12)
demo_count: 12
plan_count: 3
wave_count: 1
---

# Phase 18 Context

## Phase Goal

Port 12 unregistered upstream Three.js demos covering material env-maps (HDR/EXR/fast-HDR), the "modified material" pattern, anisotropic-filtering / filter-mode / rotation / HTML / manual-mipmap / partial-update textures, webcam video texture, and object-space normal mapping — all using the locked Phase-15 `init3D` container-ref pattern.

## Phase Goal Drift — Scope-Fence Correction (2026-06-26)

The seed prompt proposed three themes (A: Misc Controls, B: Camera, C: Materials Envmaps/Modified) totaling 12 candidates. Pre-planning verification against `demo/src/registry.ts` and `https://threejs.org/examples/files.json` revealed:

### Theme A — Misc Controls (7 candidates): **DROPPED ENTIRELY**

The seed used `webgl_misc_controls_*` prefix for all 7 IDs. Verification on 2026-06-26 showed:

1. **Upstream `files.json` uses `misc_controls_*`** (NO `webgl_` prefix) for all 7. Searching the JSON for `webgl_misc_controls_pointerlock`, `webgl_misc_controls_fly`, `webgl_misc_controls_arcball`, `webgl_misc_controls_map`, `webgl_misc_controls_drag`, `webgl_misc_controls_transform`, `webgl_misc_controls_trackball` returns zero hits for every one.
2. **`demo/src/registry.ts` already has all 7 canonical `misc_controls_*` IDs registered**: lines 909–916 contain `misc_controls_transform`, `_orbit`, `_trackball`, `_fly`, `_drag`, `_arcball`, `_firstperson`, `_pointerlock`. Registering them again under the non-canonical `webgl_misc_controls_*` prefix would create confusing duplicates of canonical entries and pollute the demo index.
3. The pre-existing `demo/src/MiscControlsPointerLock.tsx`, `MiscControlsFly.tsx`, `MiscControlsArcball.tsx`, etc. are already wired up. Phase 18 contributes nothing here.

**Action:** All 7 misc-controls candidates excluded from Phase 18 scope.

### Theme B — Camera (1 candidate): **DROPPED**

The seed proposed `webgl_camera_logarithmicdepthbuffer`. Verification:

- **Upstream `files.json` has `webgl_camera_logarithmicdepthbuffer`**: yes (single word, no underscores between log/depth/buffer).
- **`demo/src/registry.ts` line 486 already registers `webgl_camera_logarithmic_depth_buffer`** (with underscores) → `WebGLCameraLogarithmicDepthBuffer`. The functional demo is already shipped under the underscored ID; adding the single-word upstream-canonical ID would be a redundant alias of the same demo and confuse the registry index.

**Action:** Excluded. (Future cleanup ticket: optionally normalize the registry entry to match upstream `_logarithmicdepthbuffer` and remove the underscored alias — out of scope for Phase 18.)

### Theme C — Materials Envmaps + Modified (4 candidates): **KEPT, all clean**

| Upstream ID                    | In registry? | Source `.tsx`                                                     |
| ------------------------------ | ------------ | ----------------------------------------------------------------- |
| `webgl_materials_envmaps_hdr`  | NO ✓         | `code/examples/webgl/materials/MaterialsEnvMapsHDR.tsx`           |
| `webgl_materials_envmaps_exr`  | NO ✓         | `code/examples/webgl/materials/MaterialsEnvmapsExr.tsx`           |
| `webgl_materials_envmaps_fasthdr` | NO ✓      | `code/examples/webgl/materials/MaterialsEnvmapsFasthdr.tsx`       |
| `webgl_materials_modified`     | NO ✓         | `code/examples/webgl/materials/MaterialsModified.tsx`             |

### Backfill (8 demos) — sourced from upstream `webgl_materials_*` listing

Theme A+B dropped 8 demos. To keep Phase 18 at the Phase-17 cadence of 12 demos, I cross-referenced the full upstream `webgl_materials_*` enumeration against `registry.ts` and selected 8 cleanly unregistered candidates that have pre-converted `.tsx` scaffolds under `code/examples/`:

| Upstream ID                                  | In registry? | Source `.tsx`                                                    |
| -------------------------------------------- | ------------ | ---------------------------------------------------------------- |
| `webgl_materials_texture_anisotropy`         | NO ✓         | `code/examples/webgl/materials/MaterialsTextureAnisotropy.tsx`   |
| `webgl_materials_texture_filters`            | NO ✓         | `code/examples/webgl/materials/MaterialsTextureFilters.tsx`      |
| `webgl_materials_texture_html`               | NO ✓         | `code/examples/webgl/materials/MaterialsTextureHtml.tsx`         |
| `webgl_materials_texture_manualmipmap`       | NO ✓         | `code/examples/webgl/materials/MaterialsTextureManualmipmap.tsx` |
| `webgl_materials_texture_partialupdate`      | NO ✓         | `code/examples/webgl/materials/MaterialsTexturePartialupdate.tsx` |
| `webgl_materials_texture_rotation`           | NO ✓         | `code/examples/webgl/materials/MaterialsTextureRotation.tsx`     |
| `webgl_materials_video_webcam`               | NO ✓         | `code/examples/webgl/materials/MaterialsVideoWebcam.tsx`         |
| `webgl_materials_normalmap_object_space`     | NO ✓         | `code/examples/webgl/materials/MaterialsNormalmapObjectSpace.tsx` |

Note: `webgl_materials_texture_canvas` was a candidate but is already at registry line 302 → excluded. `webgl_materials_envmaps_groundprojected` is also already at line 287 (`_groundprojection` spelling) → excluded.

## Final Phase 18 Scope (12 demos, 3 plans, all wave 1)

| Plan | Demos                                                                                                                                                 |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 18-01 | `webgl_materials_envmaps_hdr`, `webgl_materials_envmaps_exr`, `webgl_materials_envmaps_fasthdr`, `webgl_materials_modified`                          |
| 18-02 | `webgl_materials_texture_anisotropy`, `webgl_materials_texture_filters`, `webgl_materials_texture_rotation`, `webgl_materials_texture_html`          |
| 18-03 | `webgl_materials_texture_manualmipmap`, `webgl_materials_texture_partialupdate`, `webgl_materials_video_webcam`, `webgl_materials_normalmap_object_space` |

## Decomposition Rationale

- **Plan 18-01** groups the 3 HDR/EXR env-map demos (shared `RGBELoader`/`EXRLoader` + `PMREMGenerator` + `ACESFilmicToneMapping` pipeline) plus `webgl_materials_modified` which is the canonical `Material.onBeforeCompile` shader-injection pattern. Grouping these keeps the executor in one "physical-material rendering pipeline" mental model for the whole pass.
- **Plan 18-02** groups 4 texture-sampling/transform demos (anisotropic filtering, filter modes, UV rotation, HTML-element-as-texture). All share `TextureLoader`/`CanvasTexture` + texture-state mutation patterns.
- **Plan 18-03** groups 2 advanced texture demos (manual mipmap chain, `texSubImage2D` partial update via `renderer.copyTextureToTexture`), the webcam-video demo (`getUserMedia` + `VideoTexture`), and the object-space normal map demo. These each require a distinct setup that doesn't slot cleanly into 18-02; grouping the four "specialty texture techniques" into one plan keeps each plan at the target 4-demo cadence.

All three plans are independent (disjoint `demo/src/WebGLMaterials*.tsx` files, no shared edits to existing modules) → all assigned `wave: 1` for parallel execution.

## Locked Decisions (from Phase 15 RESEARCH / Phase 17 SUMMARYs)

- **init3D pattern**: `const init3D = (container: HTMLElement) => { ... }` with module-level `let _cleanupFn`. JSX wraps with `<div ref={(el) => { if (el) init3D(el) }} />`.
- **JSX pragma**: every file begins with `/** @jsxImportSource woby */` (NOT `@woby/three`). Confirmed against Phase 17 SUMMARY pattern-adherence checklist.
- **Forbidden**: `as any`, `useEffect`, `useRef` for plain objects.
- **Visual verification**: dv CLI screenshot → Claude approval → THEN register in `demo/src/registry.ts`.
- **dv CLI**: `node 'D:\Developments\tslib\dv\dist\cli.js' <subcommand> --profile profile-N -i 1 [options]` — subcommand BEFORE flags. MUST call `select --profile X -i 1` to bind to page before navigate/screenshot.
- **Dev server**: http://localhost:5300, profiles 4/5/6 only (ports 9233/9234/9235).
- **Source-of-truth**: upstream `https://threejs.org/examples/#<demo_id>` HTML drives the feature list. The pre-converted `.tsx` files under `code/examples/` are scaffolding pointers, not faithful ports — many are stub-quality and omit upstream features (e.g., the envmap `.tsx` stubs don't load HDR via `RGBELoader`, the webcam stub doesn't call `getUserMedia`). Implementer must consult the upstream HTML to get the canonical behavior.
- **No editing of upstream `code/examples/`** — those are source-of-truth reference. New files go in `demo/src/`.

## File Naming Convention (verified against existing demo/src/)

For `webgl_materials_*` IDs the file is `WebGLMaterials<RestOfId>.tsx` with the underscore-separated tail collapsed to PascalCase. Examples confirmed against existing demo/src/ entries:

- `webgl_materials_envmaps` → `WebGLMaterialsEnvmaps.tsx` (line 274)
- `webgl_materials_envmaps_groundprojection` → `WebGLMaterialsEnvmapsGroundProjection.tsx` (line 287)

Applied to Phase 18:

| Demo ID                                  | Demo file name                              |
| ---------------------------------------- | ------------------------------------------- |
| `webgl_materials_envmaps_hdr`            | `WebGLMaterialsEnvmapsHDR.tsx`              |
| `webgl_materials_envmaps_exr`            | `WebGLMaterialsEnvmapsEXR.tsx`              |
| `webgl_materials_envmaps_fasthdr`        | `WebGLMaterialsEnvmapsFastHDR.tsx`          |
| `webgl_materials_modified`               | `WebGLMaterialsModified.tsx`                |
| `webgl_materials_texture_anisotropy`     | `WebGLMaterialsTextureAnisotropy.tsx`       |
| `webgl_materials_texture_filters`        | `WebGLMaterialsTextureFilters.tsx`          |
| `webgl_materials_texture_rotation`       | `WebGLMaterialsTextureRotation.tsx`         |
| `webgl_materials_texture_html`           | `WebGLMaterialsTextureHTML.tsx`             |
| `webgl_materials_texture_manualmipmap`   | `WebGLMaterialsTextureManualMipmap.tsx`     |
| `webgl_materials_texture_partialupdate`  | `WebGLMaterialsTexturePartialUpdate.tsx`    |
| `webgl_materials_video_webcam`           | `WebGLMaterialsVideoWebcam.tsx`             |
| `webgl_materials_normalmap_object_space` | `WebGLMaterialsNormalmapObjectSpace.tsx`    |

## Requirements

This phase addresses `REQ-15-04` (port unregistered upstream Three.js demos using locked Phase-15 pattern).

## Success Criteria (phase-level)

- 12 new demos registered in `demo/src/registry.ts` (correct id, name, category, component path).
- Total registry count climbs from 589 (post-Phase 15) → expected target (verify against current STATE.md ground-truth count).
- All 12 pass visual verification via dv profile-4 screenshot + Claude approval before registration.
- All 12 start with `/** @jsxImportSource woby */`.
- All 12 use `init3D` container-ref + module-level `_cleanupFn` pattern.
- No `as any`, no `useEffect`, no `useRef`-for-plain-objects across all 12 files.
- No TypeScript errors (`tsc --noEmit --skipLibCheck` from `demo/`).
- No duplicate IDs introduced (pre-flight grep on each task; final phase-level grep confirms 12 new entries, 0 collisions).
