---
phase: 18-misc-controls-camera-envmaps
plan: 01
status: COMPLETE
completed: 2026-06-26
demos_delivered: 4
requirements: [REQ-15-04]
wave: 1
---

# Phase 18 Plan 01: Material Envmaps + Modified Material Batch — Summary

## Outcome (one-liner)

Ported 4 material-rendering demos — HDR equirect (`RGBELoader`), EXR PIZ-compressed (`EXRLoader`), pre-baked PMREM KTX2 (`KTX2Loader`, the actual upstream "Fast HDR" approach), and the canonical `onBeforeCompile` twist-shader demo on a GLTF head — all using the locked `init3D` container-ref pattern with `/** @jsxImportSource woby */`. All 4 visually verified via dv profile-4.

## Demos delivered

| # | Registry ID                          | File                                              | Registry line | Visual verification                                                                                  |
| - | ------------------------------------ | ------------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| 1 | `webgl_materials_envmaps_hdr`        | `demo/src/WebGLMaterialsEnvmapsHDR.tsx`           | 288           | Venice sunset HDR backdrop, mirror sphere reflecting promenade/buildings, GUI present (roughness/metalness/exposure) |
| 2 | `webgl_materials_envmaps_exr`        | `demo/src/WebGLMaterialsEnvmapsEXR.tsx`           | 289           | Interior PIZ-compressed EXR scene, reflective sphere showing room/lights, "EXR env map loaded" overlay |
| 3 | `webgl_materials_envmaps_fasthdr`    | `demo/src/WebGLMaterialsEnvmapsFastHDR.tsx`       | 290           | Ballroom HDR backdrop with 5 spheres (transmission/matte/mirror/brushed/green dielectric), GUI with image picker + exposure/fov/blur |
| 4 | `webgl_materials_modified`           | `demo/src/WebGLMaterialsModified.tsx`             | 291           | Two LeePerrySmith heads with `MeshNormalMaterial` rainbow normals, vertex shader patched via `onBeforeCompile` with continuous time-driven twist (animation confirmed across 3s gap) |

## Asset / library substitutions

**1. FastHDR demo — implementation approach swap (PLAN vs. UPSTREAM mismatch)**

- **Plan said:** Use `HDRJPGLoader` from `@monogrid/gainmap-js` loading `spruit_sunrise_1k.hdr.jpg`.
- **Actually upstream uses:** `KTX2Loader` loading pre-baked PMREM `.ktx2` files from `cdn.needle.tools` (`ballroom_2k.pmrem.ktx2` etc).
- **Why the swap:** I started with the plan's HDRJPGLoader approach and got a 404 on `https://threejs.org/examples/textures/equirectangular/spruit_sunrise_1k.hdr.jpg`. I then fetched the canonical upstream HTML (`https://threejs.org/examples/webgl_materials_envmaps_fasthdr.html`) and discovered the demo's actual implementation uses `KTX2Loader` with pre-PMREM-baked KTX2 textures hosted on Needle Tools CDN — not the HDRJPGLoader path. The upstream demo description literally says "Fast HDR loading 10x faster and using 95% less GPU memory than EXR" — the speed/memory win comes from pre-baked PMREM in KTX2 format, not from JPEG gain maps.
- **What I did:** Rewrote the demo to use `KTX2Loader` (built into Three.js), `setTranscoderPath('https://unpkg.com/three@0.173.0/examples/jsm/libs/basis/')`, `detectSupport(renderer)`, and `texture.mapping = CubeUVReflectionMapping` (which is the key — pre-baked PMREM textures already encode the irradiance map and bypass `PMREMGenerator.fromEquirectangular`). Five spheres matching upstream exactly: transmission glass, white matte, mirror metal, brushed gray, green dielectric. Full GUI with image picker dropdown (8 HDRIs from Needle CDN), exposure, FOV, background blurriness.
- **Resulting behavior:** Matches upstream perfectly — verified visually (ballroom HDR backdrop, 5 distinct spheres). Per session directive ("Make the reasonable call and continue"), this is documented but not blocking.
- **Note on `@monogrid/gainmap-js` install:** I did install the package (legitimate, MIT, 3.4.0, MONOGRID author confirmed via npm registry) before discovering the canonical demo doesn't use it. The package is now in `demo/package.json` dependencies. It's not currently imported by any demo. Cleanup option: `pnpm remove @monogrid/gainmap-js` if no future plan uses it. Leaving it for now since it's a legitimate Three.js-ecosystem package and a future "HDRJPG loader" demo (different upstream ID) could use it.

**2. Plan registry name swap (cosmetic)**

- Registry display name for FastHDR changed from plan's "Fast HDR Env Map (Gain Map JPG)" → "Fast HDR Env Map (Pre-baked PMREM KTX2)" to accurately reflect the implementation. The registry ID is unchanged (`webgl_materials_envmaps_fasthdr`).

No other asset substitutions required (HDR/EXR/GLB URLs all returned HTTP 200 at execution).

## Pattern adherence

All 4 files satisfy the Phase 15 locked-decisions checklist:

- ✓ `/** @jsxImportSource woby */` (NOT `@woby/three`)
- ✓ `const init3D = (container: HTMLElement) => { ... }` with module-level `let _cleanupFn`
- ✓ No `as any`, no `useEffect`, no `useRef` for plain objects
- ✓ Single `<div ref={(el) => { if (el) init3D(el) }} />` mount in the exported JSX component
- ✓ Cleanup disposes geometries, materials, textures, PMREMGenerator, KTX2Loader, GUI, controls, env render targets, and removes the canvas + status overlay
- ✓ Status overlay div for user feedback during async asset load
- ✓ `setAnimationLoop(animate)` for render loop; `setAnimationLoop(null)` in cleanup
- ✓ Three demos with GUI (roughness/metalness/exposure for HDR/EXR; image/exposure/fov/blur for FastHDR)

## Verification notes

- **dev server:** http://localhost:5300 (confirmed UP throughout execution)
- **dv profile:** profile-4 (port 9233) — used exclusively per user directive; no parallel sibling executors during this plan
- **Wait time:** 5–10s after navigate before screenshot — HDR/EXR fetches take 2–4s, KTX2 decode via basis transcoder takes ~3s, GLB + onBeforeCompile shader patch takes ~3s
- **Console:** All 4 demos load with no console errors after the FastHDR rewrite (the initial 404 on `spruit_sunrise_1k.hdr.jpg` was surfaced via the status overlay's red error text — caught and resolved by switching to upstream-canonical KTX2 loader)
- **Type-check:** `npx tsc --noEmit --skipLibCheck` from `demo/` — no errors in my 4 new files
- **No duplicates:** Pre-flight grep confirmed none of `_envmaps_hdr`, `_envmaps_exr`, `_envmaps_fasthdr`, `_modified` were in registry before this plan

## Deviations from plan

**[Rule 3 - Asset/approach correction]** FastHDR rewrite — plan called for `HDRJPGLoader` + gainmap JPG; upstream actually uses `KTX2Loader` + pre-baked PMREM KTX2. Verified via fetching canonical upstream HTML at execution time. Rewrote to match upstream. Pedagogically richer (8-image GUI picker, background blurriness, 5 distinct PBR spheres). Documented in detail above. Per session directive ("Make the reasonable call and continue").

No other deviations.

## Blockers encountered

**Transient blocker (resolved):** Initial FastHDR screenshot showed "Load failed: fetch ... responded with 404" on the plan-specified `spruit_sunrise_1k.hdr.jpg` URL. Resolved by fetching upstream HTML and switching to KTX2Loader + Needle Tools CDN (see Asset substitutions above).

**Transient blocker (resolved):** First screenshot of each demo often caught the "Loading demo..." overlay because the Vite lazy-loaded chunk hadn't finished. Resolved by waiting 8–12s instead of 5s before screenshot.

## Files changed

**Created:**
- `demo/src/WebGLMaterialsEnvmapsHDR.tsx` (114 lines)
- `demo/src/WebGLMaterialsEnvmapsEXR.tsx` (114 lines)
- `demo/src/WebGLMaterialsEnvmapsFastHDR.tsx` (158 lines)
- `demo/src/WebGLMaterialsModified.tsx` (130 lines)

**Modified:**
- `demo/src/registry.ts` — added 4 registry entries (lines 288–291)
- `demo/package.json` + `demo/pnpm-lock.yaml` — added `@monogrid/gainmap-js@3.4.0` dependency (legitimate MIT-licensed MONOGRID package; not currently imported by any demo after FastHDR rewrite; safe to remove if no future plan uses it)

## Tech notes (for future maintainers)

- **PMREM pipeline (HDR/EXR demos):** load equirect HDR/EXR → `texture.mapping = EquirectangularReflectionMapping` → `pmremGenerator.fromEquirectangular(texture)` → assign `renderTarget.texture` to `scene.environment` AND `scene.background`. The render target needs explicit `.dispose()` in cleanup.
- **Pre-baked PMREM (FastHDR demo):** the .ktx2 already encodes the irradiance map; the loaded texture must use `texture.mapping = CubeUVReflectionMapping` and is assigned directly to `scene.environment` / `scene.background` — DO NOT pass it through `PMREMGenerator.fromEquirectangular`. This is the key insight for why FastHDR loads ~10x faster: no GPU-side PMREM bake step.
- **KTX2Loader:** needs `setTranscoderPath()` pointing to the basis transcoder (`.wasm` + `.js`). I used the unpkg CDN with three@0.173.0 pinned to match the project's three version. If the project bumps three, update the URL in lockstep (same pattern as Phase 17 Plan 01's DRACO decoder URL).
- **onBeforeCompile twist (Modified demo):** uses `MeshNormalMaterial` so the rainbow surface-normal coloring makes the deformation visually obvious. The shader patch injects a Y-axis rotation matrix whose angle is `sin(time + position.y) / amount` — twist amount per vertex grows with Y coordinate, time uniform driven from `performance.now() / 1000` each frame. `material.customProgramCacheKey = () => amount.toFixed(1)` forces the renderer to compile a distinct program per twist amount (otherwise both heads would share one program and only one of the two onBeforeCompile callbacks would fire). The shader handle is stashed at `material.userData.shader` so the animate loop can update its uniforms.

## Screenshot paths

- HDR: `C:\Users\wongc\AppData\Local\Temp\18-01-hdr.png` (594454 bytes)
- EXR: `C:\Users\wongc\AppData\Local\Temp\18-01-exr.png` (442925 bytes)
- FastHDR: `C:\Users\wongc\AppData\Local\Temp\18-01-fasthdr.png` (684047 bytes)
- Modified: `C:\Users\wongc\AppData\Local\Temp\18-01-modified.png` (520330 bytes)
- Modified (animation proof, +3s): `C:\Users\wongc\AppData\Local\Temp\18-01-modified-2.png` (520403 bytes)

## Self-Check: PASSED

- ✓ `demo/src/WebGLMaterialsEnvmapsHDR.tsx` exists
- ✓ `demo/src/WebGLMaterialsEnvmapsEXR.tsx` exists
- ✓ `demo/src/WebGLMaterialsEnvmapsFastHDR.tsx` exists
- ✓ `demo/src/WebGLMaterialsModified.tsx` exists
- ✓ Registry entries present at lines 288–291
- ✓ All 4 demos visually verified via screenshots
- ✓ No TypeScript errors in the 4 new files
- ✓ No console errors at runtime (after FastHDR rewrite)
- ✓ No commits made — files left unstaged per user's "default: leave changes unstaged" directive
