---
phase: 17-gltf-extensions-postprocessing-misc
plan: 01
status: COMPLETE
completed: 2026-06-26
demos_delivered: 4
requirements: [REQ-15-04]
wave: 1
---

# Phase 17 Plan 01: GLTF Material Extensions Batch — Summary

## Outcome (one-liner)

Ported 4 GLTF `KHR_materials_*` demos (iridescence, sheen, transmission, dispersion) using the canonical `init3D` container-ref pattern with `/** @jsxImportSource woby */`. All 4 verified visually via dv profile-4 with non-blank, material-correct renders.

## Demos delivered

| # | Registry ID                        | File                                                        | Registry line | Visual verification                                                              |
| - | ---------------------------------- | ----------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------- |
| 1 | `webgl_loader_gltf_iridescence`    | `demo/src/WebGLLoaderGLTFIridescence.tsx`                   | 532           | Iridescent lamp visible with thin-film color shift (pink/green) over Venice HDR  |
| 2 | `webgl_loader_gltf_sheen`          | `demo/src/WebGLLoaderGLTFSheen.tsx`                         | 533           | Orange velvet SheenChair on gray background, fabric.sheen=1 confirmed via overlay |
| 3 | `webgl_loader_gltf_transmission`   | `demo/src/WebGLLoaderGLTFTransmission.tsx`                  | 534           | IridescentDishWithOlives — refractive glass dome over olives, DRACO-decoded     |
| 4 | `webgl_loader_gltf_dispersion`     | `demo/src/WebGLLoaderGLTFDispersion.tsx`                    | 535           | DispersionTest sphere grid — clear chromatic rainbow fringing on edges          |

## Asset substitutions

**1. Transmission demo HDR substitution**

- **Upstream:** `royal_esplanade_1k.hdr`
- **Used:** `venice_sunset_1k.hdr`
- **Reason:** `https://threejs.org/examples/textures/equirectangular/royal_esplanade_1k.hdr` returned HTTP 404 at execution time (verified 2026-06-26 via dv runtime error overlay). Substituted with venice_sunset_1k.hdr from the same threejs.org/examples/textures/equirectangular/ path — already confirmed-served (used by the iridescence demo in this plan). Substitution is documented inline in `WebGLLoaderGLTFTransmission.tsx` and does not alter the demo's pedagogical purpose (refractive glass against an HDR backdrop). The royal_esplanade HDR was chosen upstream for its bright sky reflections; venice_sunset gives a comparable sunlit outdoor backdrop with strong specular highlights and color variation — fully adequate for visualizing transmission/refraction.

No other substitutions required.

## Pattern adherence

All 4 files satisfy the Phase 15 locked-decisions checklist:

- ✓ `/** @jsxImportSource woby */` (NOT `@woby/three`)
- ✓ `const init3D = (container: HTMLElement) => { ... }` with module-level `let _cleanupFn`
- ✓ No `as any`, no `useEffect`, no `useRef` for plain objects
- ✓ Single `<div ref={(el) => { if (el) init3D(el) }} />` mount in the exported JSX component
- ✓ Cleanup disposes geometries, materials, textures, controls, loaders, and removes the canvas
- ✓ Status overlay div for user feedback during async asset load
- ✓ `setAnimationLoop(animate)` for render loop; `setAnimationLoop(null)` in cleanup

## Verification notes

- **dev server:** http://localhost:5300 (confirmed UP throughout execution)
- **dv profile:** profile-4 (port 9233) — used exclusively, no conflict with sibling profile-5/profile-6 executors
- **Wait time:** 5–8s after navigate before screenshot to allow GLTF + DRACO + HDR fetches to complete
- **Console:** All 4 demos load with no console errors after fetch completes (only vite HMR connect messages present)
- **Type-check:** `npx tsc --noEmit --skipLibCheck` from `demo/` workspace — no errors in my 4 new files. (3 pre-existing tsconfig.json deprecation warnings for `esModuleInterop=false`, `moduleResolution=node10`, `baseUrl` — unrelated to this plan.)
- **No duplicates:** Pre-flight grep confirmed none of `_iridescence`, `_sheen`, `_transmission`, `_dispersion` were in registry before this plan.

## Deviations from plan

**[Rule 3 - Asset 404 blocking task]** Transmission task: upstream `royal_esplanade_1k.hdr` 404 → substituted with `venice_sunset_1k.hdr` (documented above). Per session directive ("Make the reasonable call and continue"). No architectural change, no behavioral change, just a working CDN asset URL.

No other deviations.

## Blockers encountered

**Transient blocker (resolved):** Initial iridescence screenshot showed a Vite import-analysis error for `WebGLLoaderGLTFInstancing` (line 540 of registry.ts) — that registry entry belongs to the sibling parallel executor's plan. By the time I re-navigated, the sibling executor had created the file, so the error self-resolved. No code change required on my side.

**Transient blocker (resolved):** dv profile-4 page selection occasionally lost track of the active page between `navigate` and `screenshot` calls. Workaround: always run `select --profile profile-4 -i 1` (or `-u "http://localhost:5300"`) immediately before `screenshot`. No code change required.

## Files changed

**Created:**
- `demo/src/WebGLLoaderGLTFIridescence.tsx` (108 lines)
- `demo/src/WebGLLoaderGLTFSheen.tsx` (113 lines)
- `demo/src/WebGLLoaderGLTFTransmission.tsx` (146 lines)
- `demo/src/WebGLLoaderGLTFDispersion.tsx` (118 lines)

**Modified:**
- `demo/src/registry.ts` — added 4 registry entries (lines 532–535)

## Tech notes (for future maintainers)

- The iridescence and sheen demos load only one external asset each (or none, for sheen which uses procedural RoomEnvironment). Transmission needs both an HDR and a DRACO-compressed GLB. Dispersion uses procedural RoomEnvironment, so no external HDR fetch.
- DRACO decoder is loaded from `https://unpkg.com/three@0.173.0/examples/jsm/libs/draco/gltf/` (version-pinned). If the project bumps three, this URL must update in lockstep.
- `IridescentDishWithOlives.glb` contains an embedded animation (the dish slowly rotates); the `AnimationMixer` is created and played in the transmission demo.
- `DispersionTest.glb` is a grid of glass spheres at varying dispersion/IOR — perfect for showing the KHR_materials_dispersion extension in isolation. The HTML labels you see in the screenshot are baked into the model.

## Self-Check: PASSED

- ✓ `demo/src/WebGLLoaderGLTFIridescence.tsx` exists
- ✓ `demo/src/WebGLLoaderGLTFSheen.tsx` exists
- ✓ `demo/src/WebGLLoaderGLTFTransmission.tsx` exists
- ✓ `demo/src/WebGLLoaderGLTFDispersion.tsx` exists
- ✓ Registry entries present at lines 532–535
- ✓ All 4 demos visually verified (screenshots in `C:/Users/wongc/AppData/Local/Temp/`)
- ✓ No TypeScript errors in the 4 new files
- ✓ No console errors at runtime
