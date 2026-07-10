---
phase: 18-misc-controls-camera-envmaps
plan: 02
status: COMPLETE
completed: 2026-06-26
demos_delivered: 4
requirements: [REQ-15-04]
wave: 1
---

# Phase 18 Plan 02: Texture Sampling + Transform Batch — Summary

## Outcome (one-liner)

Ported 4 texture-state demos — anisotropic split-screen filtering (1 vs max), six-plane filter-mode side-by-side comparison (Nearest/Linear × non-mipmap/MipNearest/MipLinear), UV-space `texture.rotation` + `texture.center` animation with full transform GUI, and live HTML DOM → `CanvasTexture` via `html2canvas` on a rotating cube — all using the locked `init3D` container-ref pattern with `/** @jsxImportSource woby */`. All 4 visually verified via dv profile-4.

## Demos delivered

| # | Registry ID                          | File                                              | Registry line | Visual verification                                                                                                |
| - | ------------------------------------ | ------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------ |
| 1 | `webgl_materials_texture_anisotropy` | `demo/src/WebGLMaterialsTextureAnisotropy.tsx`    | 292           | Split-screen wood-plank floor at glancing angle: LEFT half visibly blurs toward horizon (anisotropy=1), RIGHT half crisp all the way back (anisotropy=16 = max GPU). Labels above each half + status overlay top-left. |
| 2 | `webgl_materials_texture_filters`    | `demo/src/WebGLMaterialsTextureFilters.tsx`       | 293           | Six checkerboard planes laid flat side-by-side viewed at glancing angle, each labeled with its filter mode (Nearest, Linear, Nearest+MipNearest, Nearest+MipLinear, Linear+MipNearest, Linear+MipLinear). Receding planes show distinct minification quality differences. |
| 3 | `webgl_materials_texture_rotation`   | `demo/src/WebGLMaterialsTextureRotation.tsx`      | 294           | UV-grid texture on a static plane; the texture itself rotated off-axis (visible: the 0,0 / 1,0 / 0,1 / 1,1 corner labels are tilted relative to the plane edges). lil-GUI on right with center / offset / repeat / rotation-speed / auto-rotate controls. |
| 4 | `webgl_materials_texture_html`       | `demo/src/WebGLMaterialsTextureHTML.tsx`          | 295           | 3D cube with all visible faces showing the rasterized HTML content: "HTML → Texture" title, subtitle, 4 pill badges (THREE.js / CanvasTexture / html2canvas / woby), large "#1" counter, footer text, blue→purple→pink linear-gradient background. Click cube to re-rasterize (counter ticks). |

## Asset / library substitutions

**1. Texture filters — 2 modes → 6 modes (scope expansion vs scaffold)**
- Source scaffold (`MaterialsTextureFilters.tsx`) showed only Nearest + Linear (2 modes).
- Plan asked for "4–6 filter variants including mipmap modes".
- Implementation delivers all 6 distinct THREE filter combinations: `NearestFilter`, `LinearFilter`, `NearestMipmapNearestFilter`, `NearestMipmapLinearFilter`, `LinearMipmapNearestFilter`, `LinearMipmapLinearFilter`, each labeled. `generateMipmaps` set only on the 4 mipmap-using variants.

**2. Anisotropy demo — split-screen approach (matches upstream canonical, not scaffold)**
- Scaffold did NOT configure `texture.anisotropy` at all — it built a generic boxes-on-floor scene.
- Implementation uses upstream's canonical approach: two `THREE.Scene` instances + `renderer.setScissor` regions for the left/right halves. Same camera renders both. Single texture loaded then cloned with two different `anisotropy` values (1 vs `renderer.capabilities.getMaxAnisotropy()`). `PlaneGeometry(100, 100)` scaled `(1000, 1000, 1000)` for the very long ground floor. `RepeatWrapping` + `repeat.set(512, 512)` for the tileable wood-crate texture.
- Texture URL: `https://threejs.org/examples/textures/crate.gif` (same CDN, returned 200).

**3. Rotation demo — texture rotates, not mesh (corrected from scaffold)**
- Scaffold rotated the MESH (`plane.rotation.z = t * 0.5`) — wrong direction; the whole point of this demo is the per-texture UV transform, mesh stays still.
- Implementation rotates only `texture.rotation` per-frame, with `texture.center.set(0.5, 0.5)` so the rotation pivots at the texture's center rather than the corner.
- Texture: `https://threejs.org/examples/textures/uv_grid_opengl.jpg` (canonical UV reference grid, makes rotation visually obvious — the colored corner labels show 0,0 / 1,0 / 0,1 / 1,1 oriented).
- Added a full lil-GUI with `centerX/Y`, `offsetX/Y`, `repeatX/Y`, `rotationSpeed`, and an `autoRotate` toggle so the user can explore the entire UV transform space.

**4. HTML → texture demo — single-shot + click-to-rerasterize (NOT setInterval) — performance correction**
- Initial implementation used `setInterval(rasterize, 2000)` for continuous live updates. This saturated the main thread enough to wedge the CDP connection — screenshot timeouts repeatedly.
- Corrected to one-shot rasterization at init + click-to-re-rasterize via `renderer.domElement.addEventListener('click', rasterize)`. Added a `rasterizing` re-entrancy guard so concurrent clicks don't pile up. Counter ("#1", "#2", ...) on the texture shows each rasterization event distinctly.
- This deviation is implementation-quality, not feature-loss: the user can still trigger live updates by clicking, and the texture demonstrably reflects DOM state changes (counter increments).

**5. html2canvas — added as dependency**
- `pnpm add html2canvas` in `demo/` workspace. v1.4.1, MIT license, author Niklas von Hertzen (well-known author of the upstream library; homepage at https://html2canvas.hertzen.com). Legitimate widely-used package — last published 2025-11-13 per npm registry, used in production by many projects.
- Vite cold-bundled it on first navigate (took ~30s to pre-bundle the chunk), which initially looked like a CDP hang but was just Vite's transform pipeline.

## Pattern adherence

All 4 files satisfy the Phase 15 locked-decisions checklist:

- ✓ `/** @jsxImportSource woby */` (NOT `@woby/three`)
- ✓ `const init3D = (container: HTMLElement) => { ... }` with module-level `let _cleanupFn`
- ✓ No `as any`, no `useEffect`, no `useRef` for plain objects
- ✓ Single `<div ref={(el) => { if (el) init3D(el) }} />` mount in the exported JSX component
- ✓ Cleanup disposes geometries, materials, textures, controls, GUI (where present), removes canvas + status overlay + (HTML demo) the off-screen DOM div from `document.body`
- ✓ `setAnimationLoop(animate)` for render loop; `setAnimationLoop(null)` in cleanup
- ✓ Status overlay div for user feedback (loading / loaded / error states)
- ✓ Resize listener with `removeEventListener` in cleanup

## Verification notes

- **dev server:** http://localhost:5300 (UP throughout execution)
- **dv profile:** profile-4 (port 9233) — used exclusively per plan directive; no parallel sibling executors
- **dv CLI syntax correction:** plan's documented invocation showed `navigate ... -i 1` but the dv CLI's `navigate` subcommand does NOT accept `-i` (only `select` does). Effective sequence: `select --profile X -i 1` (one-time bind) → `navigate --profile X -u <URL>` → wait → `screenshot --profile X -o <path>`.
- **Viewport collapse mid-session:** after several navigations the Chrome page's viewport reported 0×0 client width/height (visible via `dv eval`) and the renderer canvas was 0×0, causing `dv screenshot` to time out. Recovery: `dv resize --profile profile-4 -w 1280 --height 800` forced a viewport size; screenshot worked immediately afterwards. Underlying cause likely: Vite HMR cycles + DPR detection edge case + the demos relying on container size for renderer setup. Documented here for future ports — if `dv screenshot` times out, try `dv resize` first before assuming the page is broken.
- **Wait time:** 4–6s after navigate before screenshot — texture fetches take 1–2s, html2canvas first-rasterize takes ~500ms after the DOM tree paints.
- **Type-check:** `npx tsc --noEmit --skipLibCheck` from `demo/` — no errors in my 4 new files.
- **No duplicates:** pre-flight grep confirmed none of `_texture_anisotropy`, `_texture_filters`, `_texture_rotation`, `_texture_html` were in registry before this plan.

## Deviations from plan

**[Rule 3 - Performance correction]** HTML → texture demo: switched from `setInterval`-driven continuous re-rasterization to single-shot + click-to-rerasterize. Underlying cause: the `setInterval(rasterize, 2000)` saturated the main thread enough to lock CDP screenshot requests indefinitely. Click-driven UX preserves the "live DOM is the source of truth" message — counter on the texture increments with each user click, demonstrating that the texture genuinely reflects current DOM state. Documented above.

**[Rule 1 - Bug fix]** HTML → texture demo: initial off-screen div used `opacity:0` to hide itself. html2canvas inherits computed opacity into the rasterized canvas output, so the resulting texture was fully transparent and the cube appeared black. Switched to `position:fixed; left:-99999px` (genuinely off-screen but renders at full opacity for html2canvas to capture). Also changed `html2canvas` option `backgroundColor: null` → `backgroundColor: '#1e3a8a'` as a fallback for any transparent regions.

**[Rule 3 - Scaffold correction]** Texture rotation demo: scaffold rotated the MESH (`plane.rotation.z = t * 0.5`), which is incorrect — the whole point of the demo is `texture.rotation`. Rewrote to keep the mesh static and animate the texture.

**[Rule 3 - dv CLI syntax correction]** Plan documented `navigate --profile X -i 1 -u <URL>`, but the dv CLI's navigate subcommand does not accept `-i`. Used `select --profile X -i 1` once to bind the page, then `navigate --profile X -u <URL>` without `-i` for subsequent navigations.

No architectural-change Rule-4 deviations.

## Blockers encountered

**Transient blocker (resolved):** Vite cold-bundling of html2canvas on first navigate took ~30s — initial screenshot attempts timed out because Vite hadn't finished serving the chunk. Resolved by waiting and retrying.

**Transient blocker (resolved):** Repeated CDP screenshot timeouts on the HTML demo after multiple HMR cycles. Diagnosed via `dv eval` showing renderer canvas at 0×0 and all ancestor containers at 0×0 — viewport had collapsed. Resolved by `dv resize --profile profile-4 -w 1280 --height 800` which forced a viewport reflow.

**Transient blocker (resolved):** Initial HTML → texture rasterization produced a transparent texture (cube rendered fully black) because the off-screen div used `opacity:0` and html2canvas inherited that into the canvas. Resolved by changing the off-screen hiding strategy to `left:-99999px`.

## Files changed

**Created:**
- `demo/src/WebGLMaterialsTextureAnisotropy.tsx` (~165 lines)
- `demo/src/WebGLMaterialsTextureFilters.tsx` (~140 lines)
- `demo/src/WebGLMaterialsTextureRotation.tsx` (~120 lines)
- `demo/src/WebGLMaterialsTextureHTML.tsx` (~165 lines)

**Modified:**
- `demo/src/registry.ts` — added 4 registry entries (lines 292–295)
- `demo/package.json` + `demo/pnpm-lock.yaml` — added `html2canvas@^1.4.1` dependency (legitimate MIT package, only imported by `WebGLMaterialsTextureHTML.tsx`)

## Tech notes (for future maintainers)

- **Anisotropy split-screen pattern:** two `THREE.Scene` instances sharing one camera + `renderer.setScissor + setViewport` for left/right halves. Set `renderer.autoClear = false` and call `renderer.clear()` once per frame before the two scissored renders. `renderer.capabilities.getMaxAnisotropy()` typically returns 16 on desktop GPUs.
- **Texture filter cheat sheet (mag/min):** magFilter accepts only `NearestFilter` or `LinearFilter` (no mipmap variants — mag = magnification, the texture is being stretched up, mipmaps don't apply). minFilter accepts all 6 variants. `generateMipmaps` must be `true` for the 4 mipmap variants and is wasted (memory) on `NearestFilter`/`LinearFilter` min modes.
- **UV transform pivot:** `texture.center` is the rotation/scaling pivot in UV space, NOT a positional offset. Default `(0,0)` rotates around the bottom-left UV corner. Set to `(0.5, 0.5)` for "rotate around texture center". `texture.offset` is the translation in UV space (separate from `center`).
- **html2canvas + off-screen rendering:** html2canvas reads computed styles, so any visibility-hiding CSS (`opacity:0`, `visibility:hidden`, `display:none`) propagates into the rasterized output. Use `position:fixed; left:-99999px` to keep the element laid-out and renderable but visually off-stage. The `backgroundColor` option fills any transparent pixels in the output — set to a non-null color when the source uses semi-transparent backgrounds or gradients to avoid surprises.
- **Vite + heavyweight deps:** Vite pre-bundles deps on first import; for large libraries like html2canvas (~200KB raw) the initial transform can take 20–40s. Subsequent navigates use the cached pre-bundle and are fast.
- **dv viewport collapse recovery:** if `dv screenshot` repeatedly times out with no errors in `dv console`, run `dv resize --profile X -w 1280 --height 800` to force a viewport reflow. Validated by checking `dv eval "(()=>document.querySelector('canvas').width)()"` — should be non-zero after resize.

## Screenshot paths

- Anisotropy: `C:\Users\wongc\AppData\Local\Temp\18-02-anisotropy.png` (1,041,636 bytes)
- Filters: `C:\Users\wongc\AppData\Local\Temp\18-02-filters.png` (242,641 bytes)
- Rotation: `C:\Users\wongc\AppData\Local\Temp\18-02-rotation.png` (502,954 bytes)
- HTML: `C:\Users\wongc\AppData\Local\Temp\18-02-html.png` (226,263 bytes)
- Rotation recheck (post viewport-fix sanity): `C:\Users\wongc\AppData\Local\Temp\18-02-rotation-recheck.png` (451,669 bytes)

## Self-Check: PASSED

- ✓ `demo/src/WebGLMaterialsTextureAnisotropy.tsx` exists (untracked in submodule)
- ✓ `demo/src/WebGLMaterialsTextureFilters.tsx` exists (untracked in submodule)
- ✓ `demo/src/WebGLMaterialsTextureRotation.tsx` exists (untracked in submodule)
- ✓ `demo/src/WebGLMaterialsTextureHTML.tsx` exists (untracked in submodule)
- ✓ Registry entries present at lines 292–295 (`webgl_materials_texture_anisotropy`, `_filters`, `_rotation`, `_html`)
- ✓ `demo/package.json` + `pnpm-lock.yaml` modified with `html2canvas@^1.4.1` (unstaged in submodule)
- ✓ This summary at `.planning/phases/18-misc-controls-camera-envmaps/18-02-SUMMARY.md` exists (untracked in parent repo)
- ✓ All 4 demos visually verified via screenshots (split-screen anisotropy, 6-mode filter row, rotated UV grid, HTML-content cube faces)
- ✓ No TypeScript errors in the 4 new files (verified via `npx tsc --noEmit --skipLibCheck` in `demo/`)
- ✓ html2canvas legitimacy verified (npmjs v1.4.1 MIT, well-known author Niklas von Hertzen)
- ✓ No git commits made — all changes left unstaged per user's "default: leave changes unstaged" directive
- ✓ Note: `demo/` is a git submodule, so the demo file changes are tracked separately from the parent repo (verified via `git check-ignore -v` returning "in submodule 'demo'")
