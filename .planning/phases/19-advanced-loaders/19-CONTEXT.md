---
phase: 19-advanced-loaders
status: PLANNED
created: 2026-06-26
planner: gsd-planner
prior_phase: 18-misc-controls-camera-envmaps (COMPLETE, 12 demos delivered, PASS 7/7)
demo_count: 12
plan_count: 3
wave_count: 1
---

# Phase 19 Context

## Phase Goal

Port 12 unregistered upstream `webgl_loader_*` demos covering advanced 3D-model formats (USDZ, IFC, LDraw, 3DTiles), animation/skinning loaders (Collada kinematics, Collada skinning, FBX NURBS, MD2 control), and advanced texture-format loaders (KTX, PVRTC, TIFF, UltraHDR) — all using the locked Phase-15 `init3D` container-ref pattern.

## Pre-Flight Scope Verification (2026-06-26)

All 12 candidate IDs verified at planning time:

1. **All 12 IDs present in upstream `https://threejs.org/examples/files.json`** (fetched 2026-06-26, 297 `webgl_*` IDs total).
2. **All 12 IDs absent from `demo/src/registry.ts`** (715 registered IDs at Phase 18 end; grep of each ID returned 0 occurrences).
3. **All 12 IDs have pre-converted `.tsx` scaffolds** under `code/examples/webgl/loaders/`.

| Upstream ID                       | Pre-converted scaffold                                      |
| --------------------------------- | ----------------------------------------------------------- |
| `webgl_loader_3dtiles`            | `code/examples/webgl/loaders/Loader3dtiles.tsx`             |
| `webgl_loader_ifc`                | `code/examples/webgl/loaders/LoaderIFC.tsx`                 |
| `webgl_loader_ldraw`              | `code/examples/webgl/loaders/LoaderLDraw.tsx`               |
| `webgl_loader_usdz`               | `code/examples/webgl/loaders/LoaderUSDZ.tsx`                |
| `webgl_loader_collada_kinematics` | `code/examples/webgl/loaders/LoaderColladaKinematics.tsx`   |
| `webgl_loader_collada_skinning`   | `code/examples/webgl/loaders/LoaderColladaSkinning.tsx`     |
| `webgl_loader_fbx_nurbs`          | `code/examples/webgl/loaders/LoaderFBXNURBS.tsx`            |
| `webgl_loader_md2_control`        | `code/examples/webgl/loaders/LoaderMD2Control.tsx`          |
| `webgl_loader_texture_ktx`        | `code/examples/webgl/loaders/LoaderTextureKTX.tsx`          |
| `webgl_loader_texture_pvrtc`      | `code/examples/webgl/loaders/LoaderTexturePVRTC.tsx`        |
| `webgl_loader_texture_tiff`       | `code/examples/webgl/loaders/LoaderTextureTIFF.tsx`         |
| `webgl_loader_texture_ultrahdr`   | `code/examples/webgl/loaders/LoaderTextureUltraHDR.tsx`     |

## Phase 19 Scope (12 demos, 3 plans, all wave 1)

| Plan  | Theme                                  | Demos                                                                                                                  |
| ----- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 19-01 | 3D model formats                       | `webgl_loader_3dtiles`, `webgl_loader_ifc`, `webgl_loader_ldraw`, `webgl_loader_usdz`                                  |
| 19-02 | Animation/skinning loaders             | `webgl_loader_collada_kinematics`, `webgl_loader_collada_skinning`, `webgl_loader_fbx_nurbs`, `webgl_loader_md2_control` |
| 19-03 | Advanced texture-format loaders        | `webgl_loader_texture_ktx`, `webgl_loader_texture_pvrtc`, `webgl_loader_texture_tiff`, `webgl_loader_texture_ultrahdr` |

## Decomposition Rationale

- **Plan 19-01** groups 4 large-asset 3D-model loaders. 3DTiles (Cesium streaming tilesets), IFC (BIM/architecture), LDraw (LEGO parts), and USDZ (Apple AR/iOS). Each requires a distinct loader (3DTilesRenderer, IFCLoader, LDrawLoader, USDZLoader from `examples/jsm/loaders/`) but they share the "load → addToScene → orbit" lifecycle pattern.
- **Plan 19-02** groups 4 skeletal-animation/skinning loaders. Both Collada variants exercise the ColladaLoader's avatar/kinematics paths; FBX-NURBS exercises FBXLoader's NURBS curve conversion; MD2 control is the Quake-2 MD2 morphTarget loader with keyboard motion. They share AnimationMixer/animate-loop boilerplate.
- **Plan 19-03** groups 4 advanced texture-format decoders. KTX (Khronos Texture, libraries-format), PVRTC (PowerVR mobile compression), TIFF (multi-page image format via tiff.js), UltraHDR (gainmap-encoded HDR JPEG). They all share `TextureLoader`-style API and "apply to a sphere/plane" visualization.

All three plans are independent (disjoint `demo/src/WebGLLoader*.tsx` files, no shared edits to existing modules other than appending to `demo/src/registry.ts`) → all assigned `wave: 1`. Per user constraint "u r using dv profile 4", executors will run sequentially on profile-4 even though planning marks them parallelizable.

## Locked Decisions (from Phase 15 RESEARCH / Phase 17 SUMMARYs / Phase 18 SUMMARYs)

- **init3D pattern**: `const init3D = (container: HTMLElement) => { ... }` with module-level `let _cleanupFn`. JSX wraps with `<div ref={(el) => { if (el) init3D(el) }} />`.
- **JSX pragma**: every file begins with `/** @jsxImportSource woby */` (NOT `@woby/three`). Confirmed against Phase 17/18 SUMMARY pattern-adherence checklists.
- **Forbidden**: `as any`, `useEffect`, `useRef` for plain objects.
- **Visual verification**: dv CLI screenshot → Claude approval → THEN register in `demo/src/registry.ts`.
- **dv CLI**: `node 'D:\Developments\tslib\dv\dist\cli.js' <subcommand> --profile profile-4 [-i 1] [options]` — subcommand BEFORE flags. MUST call `select --profile X -i 1` to bind to page before navigate/screenshot. `navigate` does NOT accept `-i`.
- **Dev server**: http://localhost:5300, profiles 4/5/6 only (ports 9233/9234/9235). User has constrained this phase to profile-4 → sequential execution.
- **Source-of-truth**: upstream `https://threejs.org/examples/#<demo_id>` HTML drives the canonical feature list. The pre-converted `.tsx` files under `code/examples/` are scaffolding pointers, not faithful ports — many are stub-quality (e.g., they may not actually call the loader or may have wrong asset paths). Implementer MUST consult the upstream HTML to get canonical behavior.
- **Asset paths**: assets live at `https://threejs.org/examples/models/...` and `https://threejs.org/examples/textures/...`. Demos may reference them via absolute URLs (Phase 17/18 precedent). If a model is too large for fast iteration, the implementer may fall back to a smaller placeholder model from the same loader family AND document the substitution in SUMMARY.
- **No editing of upstream `code/examples/`** — those are source-of-truth reference. New files go in `demo/src/`.

## File Naming Convention (verified against existing demo/src/)

For `webgl_loader_*` IDs the file is `WebGLLoader<RestOfId>.tsx` with the underscore-separated tail collapsed to PascalCase. Examples confirmed against existing demo/src/ entries:

- `webgl_loader_gltf_animation_pointer` → `WebGLLoaderGLTFAnimationPointer.tsx` (Phase 17, registry line 537)
- `webgl_loader_gltf_avif` → `WebGLLoaderGLTFAvif.tsx` (Phase 17, registry line 539)

Applied to Phase 19:

| Demo ID                           | Demo file name                              |
| --------------------------------- | ------------------------------------------- |
| `webgl_loader_3dtiles`            | `WebGLLoader3DTiles.tsx`                    |
| `webgl_loader_ifc`                | `WebGLLoaderIFC.tsx`                        |
| `webgl_loader_ldraw`              | `WebGLLoaderLDraw.tsx`                      |
| `webgl_loader_usdz`               | `WebGLLoaderUSDZ.tsx`                       |
| `webgl_loader_collada_kinematics` | `WebGLLoaderColladaKinematics.tsx`          |
| `webgl_loader_collada_skinning`   | `WebGLLoaderColladaSkinning.tsx`            |
| `webgl_loader_fbx_nurbs`          | `WebGLLoaderFBXNurbs.tsx`                   |
| `webgl_loader_md2_control`        | `WebGLLoaderMD2Control.tsx`                 |
| `webgl_loader_texture_ktx`        | `WebGLLoaderTextureKTX.tsx`                 |
| `webgl_loader_texture_pvrtc`      | `WebGLLoaderTexturePVRTC.tsx`               |
| `webgl_loader_texture_tiff`       | `WebGLLoaderTextureTIFF.tsx`                |
| `webgl_loader_texture_ultrahdr`   | `WebGLLoaderTextureUltraHDR.tsx`            |

Planner: when in doubt about exact case (e.g., `UltraHDR` vs `UltraHdr`), follow upstream HTML page title or Three.js loader class name (`UltraHDRLoader`). Document deviations in SUMMARY.

## Requirements

This phase addresses `REQ-15-04` (port unregistered upstream Three.js demos using locked Phase-15 pattern).

## Success Criteria (phase-level)

- 12 new demos registered in `demo/src/registry.ts` (correct id, name, category, component path).
- Total registry count climbs from 715 (post-Phase 18) → 727 (715 + 12).
- All 12 pass visual verification via dv profile-4 screenshot + Claude approval before registration.
- All 12 start with `/** @jsxImportSource woby */`.
- All 12 use `init3D` container-ref + module-level `_cleanupFn` pattern.
- No `as any`, no `useEffect`, no `useRef`-for-plain-objects across all 12 files.
- No TypeScript errors (`tsc --noEmit --skipLibCheck` from `demo/`).
- No duplicate IDs introduced (pre-flight grep on each task; final phase-level grep confirms 12 new entries, 0 collisions).
- SUMMARY for each plan documents: screenshot paths + sizes, deviations from upstream (incl. asset substitutions), pattern-adherence checklist.
