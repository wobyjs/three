---
phase: 21-raycaster-misc-video-morphtargets
status: PLANNED
created: 2026-06-26
planner: gsd-planner
prior_phase: 20-lightprobes-pmrem-modifiers-math (PLANNED in parallel with this phase)
demo_count: 12
plan_count: 3
wave_count: 1
---

# Phase 21 Context

## Phase Goal

Port 12 unregistered upstream demos covering raycaster techniques (BVH-accelerated raycasting, sprite raycasting, texture-mapped raycasting), interactive buffer-geometry, misc scene-composition (multiple-scenes comparison, simple global illumination, GPU pathtracer, raycast-driven terrain), video texture demos (Microsoft Kinect depth video, panorama equirectangular video), and advanced morphtargets (per-vertex face morphs, webcam-driven morphtargets) — all using the locked Phase-15 `init3D` container-ref pattern.

## Pre-Flight Scope Verification (2026-06-26)

All 12 candidate IDs verified at planning time:

1. **All 12 IDs present in upstream `https://threejs.org/examples/files.json`** (fetched 2026-06-26).
2. **All 12 IDs absent from `demo/src/registry.ts`** (715 registered IDs at Phase 18 end; grep of each ID returned 0 occurrences).
3. **All 12 IDs have pre-converted `.tsx` scaffolds** under `code/examples/webgl/{interactive,misc,renderer,geometry,video,morphtargets}/`.

| Upstream ID                              | Pre-converted scaffold                                                  |
| ---------------------------------------- | ----------------------------------------------------------------------- |
| `webgl_raycaster_bvh`                    | `code/examples/webgl/interactive/RaycasterBvh.tsx`                      |
| `webgl_raycaster_sprite`                 | `code/examples/webgl/interactive/RaycasterSprite.tsx`                   |
| `webgl_raycaster_texture`                | `code/examples/webgl/interactive/RaycasterTexture.tsx`                  |
| `webgl_interactive_buffergeometry`       | `code/examples/webgl/interactive/InteractiveBufferGeometry.tsx`         |
| `webgl_multiple_scenes_comparison`       | `code/examples/webgl/misc/MultipleScenesComparison.tsx`                 |
| `webgl_simple_gi`                        | `code/examples/webgl/misc/SimpleGI.tsx`                                 |
| `webgl_renderer_pathtracer`              | `code/examples/webgl/renderer/RendererPathtracer.tsx`                   |
| `webgl_geometry_terrain_raycast`         | `code/examples/webgl/geometry/GeometryTerrainRaycast.tsx`               |
| `webgl_video_kinect`                     | `code/examples/webgl/video/VideoKinect.tsx`                             |
| `webgl_video_panorama_equirectangular`   | `code/examples/webgl/video/VideoPanoramaEquirectangular.tsx`            |
| `webgl_morphtargets_face`                | `code/examples/webgl/morphtargets/MorphTargetsFace.tsx`                 |
| `webgl_morphtargets_webcam`              | `code/examples/webgl/morphtargets/MorphTargetsWebcam.tsx`               |

## Phase 21 Scope (12 demos, 3 plans, all wave 1)

| Plan  | Theme                              | Demos                                                                                                              |
| ----- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| 21-01 | Raycaster + interactive            | `webgl_raycaster_bvh`, `webgl_raycaster_sprite`, `webgl_raycaster_texture`, `webgl_interactive_buffergeometry`     |
| 21-02 | Misc scene composition             | `webgl_multiple_scenes_comparison`, `webgl_simple_gi`, `webgl_renderer_pathtracer`, `webgl_geometry_terrain_raycast` |
| 21-03 | Video + morphtargets               | `webgl_video_kinect`, `webgl_video_panorama_equirectangular`, `webgl_morphtargets_face`, `webgl_morphtargets_webcam` |

## Decomposition Rationale

- **Plan 21-01** groups 4 mouse-input-driven raycasting demos. `raycaster_bvh` uses `three-mesh-bvh` for accelerated mesh raycasting on dense models. `raycaster_sprite` extends raycasting to 2D sprites. `raycaster_texture` raycasts into a texture-mapped surface and uses UV coordinates for hit feedback. `interactive_buffergeometry` builds dynamic geometry from mouse input. All four share the `pointermove` → `raycaster.setFromCamera()` → `raycaster.intersectObjects()` pattern.
- **Plan 21-02** groups 4 scene-composition demos. `multiple_scenes_comparison` renders two scenes side-by-side with a draggable splitter. `simple_gi` implements basic global illumination via a probe-based approach. `renderer_pathtracer` integrates the `three-gpu-pathtracer` library for offline-quality rendering inside WebGL. `geometry_terrain_raycast` is a heightmap terrain with mouse-driven raycast picking. They share the "scene-level orchestration" theme.
- **Plan 21-03** groups 4 video/morphtarget demos that require browser media APIs. `video_kinect` decodes Microsoft Kinect depth+RGB video into a point cloud (shader sampling 16-bit depth). `video_panorama_equirectangular` plays an equirectangular 360 video on the inside of a sphere. `morphtargets_face` animates a facial blendshape model. `morphtargets_webcam` uses MediaPipe face-mesh on a webcam feed to drive morphtarget weights live. Per the Phase 18 webcam-fallback precedent (18-03 SUMMARY documents both live and fallback paths for `webgl_materials_video_webcam`), Plan 21-03 demos that require `getUserMedia` MUST implement a 5-second-timeout fallback overlay so the demo is visually verifiable in automated dv contexts.

All three plans are independent (disjoint `demo/src/WebGL*.tsx` files, no shared edits to existing modules other than appending to `demo/src/registry.ts`) → all assigned `wave: 1`. Per user constraint "u r using dv profile 4", executors will run sequentially on profile-4 even though planning marks them parallelizable.

## Locked Decisions (from Phase 15 RESEARCH / Phase 17-18 SUMMARYs)

- **init3D pattern**: `const init3D = (container: HTMLElement) => { ... }` with module-level `let _cleanupFn`. JSX wraps with `<div ref={(el) => { if (el) init3D(el) }} />`.
- **JSX pragma**: every file begins with `/** @jsxImportSource woby */` (NOT `@woby/three`). Confirmed against Phase 17/18 SUMMARY pattern-adherence checklists.
- **Forbidden**: `as any`, `useEffect`, `useRef` for plain objects.
- **Visual verification**: dv CLI screenshot → Claude approval → THEN register in `demo/src/registry.ts`.
- **dv CLI**: `node 'D:\Developments\tslib\dv\dist\cli.js' <subcommand> --profile profile-4 [-i 1] [options]` — subcommand BEFORE flags. MUST call `select --profile X -i 1` to bind to page before navigate/screenshot. `navigate` does NOT accept `-i`.
- **Dev server**: http://localhost:5300, profile-4 only for this phase per user constraint.
- **Source-of-truth**: upstream `https://threejs.org/examples/#<demo_id>` HTML drives canonical behavior. The pre-converted `.tsx` files are stub-quality scaffolds.
- **Asset paths**: assets live at `https://threejs.org/examples/{models,textures,sounds}/...`. Use absolute URLs. Kinect video is at `https://threejs.org/examples/textures/kinect.webm`. Panorama videos may be served from threejs.org or substituted with smaller equivalents.
- **Webcam fallback (Plan 21-03)**: `getUserMedia`-dependent demos MUST register a 5-second-timeout fallback overlay (slashed-camera icon + "Permission prompt unanswered" message) — this is the locked pattern from Phase 18 `WebGLMaterialsVideoWebcam.tsx`. Both the live path AND the fallback path are acceptable visual outcomes for dv-CLI verification.
- **GPU Pathtracer dependency**: if `three-gpu-pathtracer` isn't already in `demo/package.json`, executor for 21-02 may need to add it. Verify via `Grep "three-gpu-pathtracer" demo/package.json` before drafting plan task list. If a dependency add is required, document the new package in SUMMARY.
- **No editing of upstream `code/examples/`** — those are reference. New files go in `demo/src/`.

## File Naming Convention

Following the locked convention from Phases 15-18, scaffold filenames map to `demo/src/` files as follows:

| Demo ID                                  | Demo file name                                |
| ---------------------------------------- | --------------------------------------------- |
| `webgl_raycaster_bvh`                    | `WebGLRaycasterBVH.tsx`                       |
| `webgl_raycaster_sprite`                 | `WebGLRaycasterSprite.tsx`                    |
| `webgl_raycaster_texture`                | `WebGLRaycasterTexture.tsx`                   |
| `webgl_interactive_buffergeometry`       | `WebGLInteractiveBufferGeometry.tsx`          |
| `webgl_multiple_scenes_comparison`       | `WebGLMultipleScenesComparison.tsx`           |
| `webgl_simple_gi`                        | `WebGLSimpleGI.tsx`                           |
| `webgl_renderer_pathtracer`              | `WebGLRendererPathtracer.tsx`                 |
| `webgl_geometry_terrain_raycast`         | `WebGLGeometryTerrainRaycast.tsx`             |
| `webgl_video_kinect`                     | `WebGLVideoKinect.tsx`                        |
| `webgl_video_panorama_equirectangular`   | `WebGLVideoPanoramaEquirectangular.tsx`       |
| `webgl_morphtargets_face`                | `WebGLMorphTargetsFace.tsx`                   |
| `webgl_morphtargets_webcam`              | `WebGLMorphTargetsWebcam.tsx`                 |

## Requirements

This phase addresses `REQ-15-04` (port unregistered upstream Three.js demos using locked Phase-15 pattern).

## Success Criteria (phase-level)

- 12 new demos registered in `demo/src/registry.ts` (correct id, name, category, component path).
- Total registry count climbs from 739 (post-Phase 20 expected) → 751.
- All 12 pass visual verification via dv profile-4 screenshot + Claude approval before registration.
- All 12 start with `/** @jsxImportSource woby */`.
- All 12 use `init3D` container-ref + module-level `_cleanupFn` pattern.
- No `as any`, no `useEffect`, no `useRef`-for-plain-objects across all 12 files.
- No TypeScript errors (`tsc --noEmit --skipLibCheck` from `demo/`).
- No duplicate IDs introduced.
- SUMMARY for each plan documents: screenshot paths + sizes, deviations from upstream (incl. webcam fallback path exercised vs live), pattern-adherence checklist.
