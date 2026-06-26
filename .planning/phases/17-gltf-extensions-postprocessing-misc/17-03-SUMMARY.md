---
phase: 17-gltf-extensions-postprocessing-misc
plan: 03
subsystem: postprocessing
tags: [postprocessing, EffectComposer, ShaderPass, HalftonePass, UnrealBloomPass, ClearPass, TexturePass, CubeTexturePass, Layers, selective-bloom]
status: COMPLETE
completed: 2026-06-26
demos_delivered: 4
requires:
  - three/examples/jsm/postprocessing/EffectComposer
  - three/examples/jsm/postprocessing/RenderPass
  - three/examples/jsm/postprocessing/ShaderPass
  - three/examples/jsm/postprocessing/OutputPass
  - three/examples/jsm/postprocessing/ClearPass
  - three/examples/jsm/postprocessing/TexturePass
  - three/examples/jsm/postprocessing/CubeTexturePass
  - three/examples/jsm/postprocessing/HalftonePass
  - three/examples/jsm/postprocessing/UnrealBloomPass
  - three/examples/jsm/controls/OrbitControls
provides:
  - webgl_postprocessing_backgrounds
  - webgl_postprocessing_rgb_halftone
  - webgl_postprocessing_procedural
  - webgl_postprocessing_unreal_bloom_selective
affects:
  - demo/src/registry.ts (4 new postprocessing entries appended)
tech-stack:
  added: []
  patterns:
    - "Two-composer layered bloom via THREE.Layers + dark-material swap (canonical selective-bloom pattern)"
    - "Fullscreen procedural shader via Ortho camera + 2x2 plane quad (no scene render)"
    - "Multi-pass background compositing: Clear -> Texture -> CubeTexture -> Render -> Output"
    - "Lazy dynamic import for CubeTexturePass to keep typed-import path clean"
    - "DOM-only GUI (no lil-gui dep) — pure DOM input/select wired via addEventListener"
key-files:
  created:
    - demo/src/WebGLPostprocessingBackgrounds.tsx
    - demo/src/WebGLPostprocessingRGBHalftone.tsx
    - demo/src/WebGLPostprocessingProcedural.tsx
    - demo/src/WebGLPostprocessingUnrealBloomSelective.tsx
  modified:
    - demo/src/registry.ts
decisions:
  - "Procedural-asset generation for backgrounds demo (wood texture + cube map) — avoids dependence on textures/ folder which isn't bundled in demo/public"
  - "Lazy import of CubeTexturePass via dynamic import — its @types/three entry is missing in some installs, so loading it asynchronously keeps the static import graph clean"
  - "RoomEnvironment skipped in selective-bloom demo (replaced with AmbientLight + DirectionalLight + PointLight) — environment.fromScene path requires bundling the addon's geometry which adds dep weight for no visual benefit at the bloom threshold of 0"
metrics:
  duration_minutes: 22
  completed: 2026-06-26
  task_count: 4
  file_count: 5
---

# Phase 17 Plan 03: Postprocessing Pass Demos Summary

Four postprocessing demos covering distinct EffectComposer pipelines: multi-pass background compositing (Clear/Texture/CubeTexture/Render), RGB-channel halftone, fullscreen procedural shader, and two-composer selective Unreal Bloom via Layers.

## Demos Delivered

| # | ID | Component | Verification |
|---|----|-----------|--------------|
| 1 | `webgl_postprocessing_backgrounds` | `WebGLPostprocessingBackgrounds.tsx` | Pink gradient cube background + cyan sphere foreground — Clear/Texture/Cube/Render layering visually distinct |
| 2 | `webgl_postprocessing_rgb_halftone` | `WebGLPostprocessingRGBHalftone.tsx` | RGB dot pattern clearly visible at radius=20 (verified via GUI bump + re-screenshot); default radius=4 dots are sub-pixel at screenshot scale but pass is correctly wired |
| 3 | `webgl_postprocessing_procedural` | `WebGLPostprocessingProcedural.tsx` | Animated 3D random-noise pattern fills the viewport; dropdown switches between noise1D/2D/3D variants |
| 4 | `webgl_postprocessing_unreal_bloom_selective` | `WebGLPostprocessingUnrealBloomSelective.tsx` | ~25% of spheres glow with vibrant green/magenta/blue bloom; remaining spheres render dark/crisp — exact upstream selective-layer behavior |

## Commits

| # | Hash | Message |
|---|------|---------|
| 1 | 682e733 | feat(17-03): port webgl_postprocessing_backgrounds demo |
| 2 | 340b36b | feat(17-03): port webgl_postprocessing_rgb_halftone demo |
| 3 | 98a9d1c | feat(17-03): port webgl_postprocessing_procedural demo |
| 4 | 65c2e45 | feat(17-03): port webgl_postprocessing_unreal_bloom_selective demo |

All commits in the `demo` submodule (`D:\Developments\tslib\@woby\three\demo`).

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Registry hunk indivisible — combined wire-up into task-1 commit**
- **Found during:** commit phase
- **Issue:** The 4 registry.ts additions form a single contiguous hunk that `git add -p` cannot split (and `git stash`/`git checkout` are denied by user policy). Splitting one logical 4-line block into 4 commits would require either external file manipulation or interactive splitting that's prohibited.
- **Fix:** Bundled all 4 registry lines into the task-1 (backgrounds) commit; tasks 2-4 commit just their `.tsx` file. The 4 task commits remain distinct and each is reverter-friendly (reverting task 2/3/4 leaves a stale registry pointer to a missing file, which is mirror-correct behavior for a revert).
- **Files modified:** demo/src/registry.ts (in task-1 commit only)
- **Commit:** 682e733

**2. [Rule 2 - Critical functionality] Dynamic import for CubeTexturePass**
- **Found during:** Task 1 implementation
- **Issue:** Static `import { CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass'` triggers a missing @types/three entry in some installations.
- **Fix:** Lazy `await import('...CubeTexturePass.js')` keeps the type graph clean and gracefully degrades if the addon is absent (background still renders via Clear+Texture+Render passes).
- **Files modified:** demo/src/WebGLPostprocessingBackgrounds.tsx
- **Commit:** 682e733

**3. [Rule 2 - Critical functionality] Procedural texture generation for backgrounds demo**
- **Found during:** Task 1 implementation
- **Issue:** Upstream demo loads `textures/hardwood2_diffuse.jpg` and `textures/cube/pisa/p[xy z].png` which aren't bundled in `demo/public`.
- **Fix:** Programmatically generated wood texture (canvas-based grain pattern) and 6-face gradient cube map. Visually distinct, no fetch latency, no asset-pipeline dependency.
- **Files modified:** demo/src/WebGLPostprocessingBackgrounds.tsx
- **Commit:** 682e733

**4. [Rule 1 - Bug] HalftonePass constructor signature**
- **Found during:** Task 2 type-check
- **Issue:** Upstream HTML example calls `new HalftonePass(params)` but the @types/three declaration requires `(width, height, params)` — the upstream JS shadows the type because runtime iterates params keys.
- **Fix:** Used the typed signature `new HalftonePass(width, height, halftoneParams)` — both compile-safe and runtime-correct.
- **Files modified:** demo/src/WebGLPostprocessingRGBHalftone.tsx
- **Commit:** 340b36b

## Substitutions

None. All 4 plan-frontmatter IDs were absent from `demo/src/registry.ts` and confirmed present in the upstream `webgl_postprocessing_*` example set. No need to swap candidates.

## Visual Verification Notes

- **Backgrounds**: Cyan sphere clearly visible against pink/orange gradient cube map; clearPass + texturePass + cubeTexturePass + renderPass layering all toggle-able via GUI.
- **RGB Halftone**: At default `radius=4` the dot grid is sub-pixel at the 305px-wide screenshot scale. Verified pass is active by bumping radius to 20 via GUI eval — clear RGB-separated dot pattern emerges. Pass is correctly wired.
- **Procedural**: Full-viewport noise pattern animates (`time` uniform); dropdown switches 1D/2D/3D variants.
- **Unreal Bloom Selective**: Required ~7s wait for two-composer setup; once rendered, ~25% of spheres glow brightly (green/magenta/blue) while remainder are dim/dark — exact selective-bloom behavior. Click-to-toggle wired via pointerdown raycast.

## Verification Environment

- **dv profile**: profile-6 (port 9235) — assigned by orchestrator, exclusive to this executor
- **Dev server**: http://localhost:5300
- **Screenshots**: `C:/Users/wongc/AppData/Local/Temp/postproc_*.png`
- **Type-check**: `npx tsc --noEmit --skipLibCheck` — zero errors in the 4 new .tsx files (pre-existing tsconfig deprecation warnings in demo/tsconfig.json are unrelated)
- **Console**: No shader compile errors on any of the 4 demos

## Authentication Gates

None.

## Deferred Issues

None.

## Self-Check: PASSED

- `demo/src/WebGLPostprocessingBackgrounds.tsx`: FOUND
- `demo/src/WebGLPostprocessingRGBHalftone.tsx`: FOUND
- `demo/src/WebGLPostprocessingProcedural.tsx`: FOUND
- `demo/src/WebGLPostprocessingUnrealBloomSelective.tsx`: FOUND
- `demo/src/registry.ts` updated with 4 new entries: FOUND
- Commits 682e733, 340b36b, 98a9d1c, 65c2e45: FOUND in `git -C demo log`
- TypeScript: zero errors in new files
- Visual verification: all 4 demos screenshot-confirmed via dv profile-6
