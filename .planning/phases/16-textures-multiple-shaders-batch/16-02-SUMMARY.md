---
phase: 16-textures-multiple-shaders-batch
plan: 02
status: COMPLETE
completed: 2026-06-25
demos_delivered: 6
demos_planned: 6
---

# Phase 16 Plan 02: Multiple Views, MRT, Advanced Shadows & Sprite Raycasting — Summary

Ported 6 Three.js demos to declarative JSX wrapping `init3D` (imperative-init pattern) for the `@woby/three` library. All demos were registered in `demo/src/registry.ts`, screenshot-verified via `dv` profile-4 against `http://localhost:5300`, and committed individually inside the `demo/` submodule.

## Demos Delivered (6/6)

| # | Demo ID                        | File                                | Category    | Commit  | Notes                                                                 |
| - | ------------------------------ | ----------------------------------- | ----------- | ------- | --------------------------------------------------------------------- |
| 1 | `webgl_multiple_views`         | `WebGLMultipleViews.tsx`            | cameras     | `1ae73b7` | 4 scissored PerspectiveCameras over shared scene; OrbitControls on main view; mouse-driven pan |
| 2 | `webgl_multiple_elements_text` | `WebGLMultipleElementsText.tsx`     | cameras     | `457723f` | 6 element-pinned scenes interleaved with HTML text; canvas absolute, `translateY(scrollTop)` per-frame; per-scene scissor+viewport from getBoundingClientRect |
| 3 | `webgl_multiple_rendertargets` | `WebGLMultipleRendertargets.tsx`    | advanced    | `68f272d` | WebGL2 MRT via `WebGLRenderTarget({count:2})`; first pass emits gColor + gNormal; composite shader split-screens both targets; procedural canvas checker texture |
| 4 | `webgl_shadowmap_pcss`         | `WebGLShadowmapPCSS.tsx`            | shadows     | `5422b7b` | PCSS soft shadows via `THREE.ShaderChunk.shadowmap_pars_fragment` monkey-patch; cleanup restores original chunk |
| 5 | `webgl_shadowmap_progressive`  | `WebGLShadowmapProgressive.tsx`     | shadows     | `5a67e5c` | `ProgressiveLightMap` (1024 res) with jittered DirectionalLight for area-light accumulation; 10-pass warmup on first frame |
| 6 | `webgl_raycast_sprite`         | `WebGLRaycastSprite.tsx`            | interactive | `3a903dd` | 120 SpriteMaterial sprites on sphere shell; procedural radial-gradient CanvasTexture (8 palette colors); Raycaster `params.Sprite={}` for hover-pick + HUD readout |

## Patterns & Constraints Honored

- JSX pragma `/** @jsxImportSource woby */` (not `@woby/three`).
- Module-level `let _cleanupFn: (() => void) | null = null` + container `ref={el => init3D(el)}` (not `useEffect`/`useRef`).
- No `as any`; all type assertions narrow to concrete THREE types.
- Every demo disposes geometries, materials, textures, controls, renderer, and removes its DOM nodes + event listeners on cleanup.
- Demo 4 (PCSS) saves and restores `THREE.ShaderChunk.shadowmap_pars_fragment` in cleanup so other demos remain unaffected.

## Deviations from Plan

1. **Demo 4 ID disambiguation (registry name collision):** The shadows category already contained `webgl_shadow_pcss` (a different existing demo wired to `WebGLShadowPCSS.tsx`). Per the plan the new demo was named `webgl_shadowmap_pcss` (no collision), so it was registered alongside the existing one rather than overwriting it. No work lost.

2. **Demo 2 layout fix (Rule 1 bug):** First version of `WebGLMultipleElementsText` rendered the 3D scenes on the left-sidebar coords because the canvas was `position:fixed` to the window while the viewport math was relative to the demo container. Switched canvas wrapper to `position:absolute` and repositioned via `transform: translateY(scrollTop)` each frame; set container background to light grey so the dark text remains legible. Committed in `457723f`.

3. **Demo 3 shader fix (Rule 1 bug):** Initial MRT shaders manually prefixed `#version 300 es`, which collided with `glslVersion: THREE.GLSL3` auto-prepending the same directive. Removed manual `#version` lines from all shader literals. Committed in `68f272d`.

4. **Demo 5 asset substitution (Rule 3 blocker fix):** Original three.js example loads external models. Substituted 5 procedural meshes (box / sphere / torusKnot / cone / dodecahedron) so the demo has no external asset dependency. The progressive-lightmap accumulation behavior is preserved.

5. **Demo 6 asset substitution (Rule 3 blocker fix):** Original example uses a PNG sprite atlas. Substituted a procedural radial-gradient `CanvasTexture` generator (8 palette colors) — no external file needed.

All 5 deviations are auto-fix categories (Rules 1 & 3); no architectural changes required user input.

## Visual Verification

All 6 demos were screenshot-verified with `dv` profile-4 (headed Chrome on port 9233), captures saved to `C:/Users/wongc/AppData/Local/Temp/webgl_<demo>.png`, and inspected via `Read` on the PNG before commit. Each screenshot confirmed the intended visual:

- `webgl_multiple_views`: 4-quadrant split with distinct background tints + orbiting shared scene
- `webgl_multiple_elements_text`: 6 bordered cards each rendering an independent rotating mesh; text remains scrollable around them
- `webgl_multiple_rendertargets`: left half = diffuse checker pass, right half = normal-encoded pass
- `webgl_shadowmap_pcss`: clearly soft penumbra on ground under raised spheres/boxes
- `webgl_shadowmap_progressive`: 5 meshes on ground plane with accumulated soft lighting
- `webgl_raycast_sprite`: 120 colored sprites visible; HUD reads "Sprites: 120 — hover to highlight"

Registry demo count went from 643 → 650 across the plan (+1 was a 16-03 demo committed in the same window; 6 of the increase belong to this plan).

## Blockers

None.

## Files Created

- `demo/src/WebGLMultipleViews.tsx`
- `demo/src/WebGLMultipleElementsText.tsx`
- `demo/src/WebGLMultipleRendertargets.tsx`
- `demo/src/WebGLShadowmapPCSS.tsx`
- `demo/src/WebGLShadowmapProgressive.tsx`
- `demo/src/WebGLRaycastSprite.tsx`

## Files Modified

- `demo/src/registry.ts` (+6 entries across cameras / advanced / shadows / interactive categories)
