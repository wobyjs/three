---
phase: 16-textures-multiple-shaders-batch
plan: 03
status: COMPLETE
completed: 2026-06-25
demos_delivered: 4
requirements:
  - REQ-15-04
key-files:
  created:
    - demo/src/WebGLPostprocessingScreenspace.tsx
    - demo/src/WebGLLoaderTextureTGA.tsx
    - demo/src/WebGLLoaderTextureKTX2.tsx
    - demo/src/WebGLLoaderTextureWebP.tsx
  modified:
    - demo/src/registry.ts
decisions:
  - Generate runtime-encoded WebP blob via canvas.toBlob in lieu of fixture commit
  - Pin KTX2 Basis transcoder to unpkg three@0.173.0 examples/jsm/libs/basis path
  - Use 2d_etc1s.ktx2 (not spiritedaway.ktx2) for KTX2 sample to match Basis ETC1S transcode path
  - PlaneGeometry (not BoxGeometry) for KTX2 demo to avoid UV ambiguity on box faces
metrics:
  duration: ~2.5h (across context window break)
  tasks: 4
  files: 5
---

# Phase 16 Plan 03: Shaders + Texture-Loader Batch Summary

Ported 4 Three.js example demos covering one postprocessing shader pass and three texture-loader formats (TGA, KTX2/Basis, WebP) using the locked `init3D` container-ref pattern, the `/** @jsxImportSource woby */` pragma, and woby-friendly DOM building (createElement/appendChild only, no `as any`, no `useEffect`/`useRef` for plain objects). Every demo passes visual verification on dev-server profile-4 with a clean browser console.

## Demos Delivered

| # | Demo ID                              | Component File                          | Category       | Commit  | Visual Verified |
|---|--------------------------------------|-----------------------------------------|----------------|---------|-----------------|
| 1 | `webgl_postprocessing_screenspace`   | `WebGLPostprocessingScreenspace.tsx`    | postprocessing | f89f95e | ripple distortion clearly visible on rotating TorusKnot + checkerboard backdrop, GUI sliders functional |
| 2 | `webgl_loader_texture_tga`           | `WebGLLoaderTextureTGA.tsx`             | textures       | c3ebf53 | TGA crate texture (left) renders alongside standard TextureLoader image (right) |
| 3 | `webgl_loader_texture_ktx2`          | `WebGLLoaderTextureKTX2.tsx`            | textures       | 7092751 | KTX2/ETC1S transcoded texture renders on rotating plane with status overlay confirming WebGL2 + GPU compression caps |
| 4 | `webgl_loader_texture_webp`          | `WebGLLoaderTextureWebP.tsx`            | textures       | d566e68 | WebP-roundtrip texture (left) matches direct CanvasTexture (right) — runtime canvas → WebP blob → TextureLoader decode chain |

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] WebP source URL unavailable, switched to runtime encoding**
- **Found during:** Task 4
- **Issue:** `https://threejs.org/examples/textures/memorial.webp` returns 404; alternate GitHub raw URL also failed; the three.js repo has no checked-in `.webp` fixtures; system has no `cwebp`/`ffmpeg` tools to convert a JPG.
- **Fix:** Demonstrate browser-native WebP encoding directly — generate a colorful pattern canvas in `init3D`, encode via `canvas.toBlob(blob, 'image/webp', 0.9)`, create an Object URL, decode through `THREE.TextureLoader`. This actually showcases the demo's real point (browser WebP support) better than loading a static file would, and avoids committing a binary fixture.
- **Files modified:** `demo/src/WebGLLoaderTextureWebP.tsx`
- **Commit:** d566e68

**2. [Rule 1 - Bug] KTX2 box rendered pure black**
- **Found during:** Task 3 visual verification
- **Issue:** Initial implementation used `spiritedaway.ktx2` on a BoxGeometry, applied `texture.needsUpdate = true` post-load, and forced `colorSpace` unconditionally — result was a black cube even though status overlay reported successful load.
- **Fix:** (a) switched sample to `2d_etc1s.ktx2` which matches the detected Basis ETC1S transcode path on this GPU; (b) switched BoxGeometry → PlaneGeometry to avoid box-face UV ambiguity; (c) removed redundant `needsUpdate` (KTX2Loader sets it); (d) only assign `colorSpace = SRGBColorSpace` when the loader didn't infer one from the file header.
- **Files modified:** `demo/src/WebGLLoaderTextureKTX2.tsx`
- **Commit:** 7092751

**3. [Rule 1 - Bug] TGA quads showed near-white instead of colorful crate**
- **Found during:** Task 2 visual verification
- **Issue:** Originally pointed at `crate_grey8.tga` which is near-white in the three.js fixtures; material's previous `color: 0xffffff` plus `MeshBasicMaterial.map` multiply produced a flat white quad.
- **Fix:** Switched primary URL to `crate_color8.tga` (full colour fixture) with `crate_grey8.tga` as fallback. Added `mat.color.set(0xffffff)` reset inside the `applyTexture` helper to defend against any prior tint.
- **Files modified:** `demo/src/WebGLLoaderTextureTGA.tsx`
- **Commit:** c3ebf53

**4. [Rule 2 - Security] Switched GUI overlay to pure DOM building**
- **Found during:** Task 1 commit
- **Issue:** Initial GUI overlay assigned a markup string to the container's HTML, which the project's security hook rejects.
- **Fix:** Refactored to build the GUI with `document.createElement`, `textContent`, and `appendChild`; helper functions `mkRange` and `mkToggle` encapsulate the per-control DOM construction without ever assigning string markup.
- **Files modified:** `demo/src/WebGLPostprocessingScreenspace.tsx`
- **Commit:** f89f95e

### Out-of-Scope Discoveries (not fixed)

- A transient HMR overlay surfaced an import error for `WebGLMultipleElementsText` while Phase 16-02 was creating that file in parallel on the same profile-4 dev server. Resolved itself once the parallel agent finished its commit — no action taken from this plan.

## Authentication Gates

None — all CDN texture URLs were public; no auth required.

## Coordination Notes

- Plan 16-02 executed in parallel on the same dev-server profile-4. Coordinated by opening a dedicated browser page (ID `83A13E38A0C488524469C8EF2D393FD2`) reserved exclusively for this plan's screenshots, so navigations couldn't be hijacked by the sibling agent's hash routing.
- All git operations performed inside the `demo/` submodule (`cd demo && git ...`); the outer `@woby/three` repo only tracks the submodule pointer.

## Self-Check: PASSED

- FOUND: demo/src/WebGLPostprocessingScreenspace.tsx (commit f89f95e)
- FOUND: demo/src/WebGLLoaderTextureTGA.tsx (commit c3ebf53)
- FOUND: demo/src/WebGLLoaderTextureKTX2.tsx (commit 7092751)
- FOUND: demo/src/WebGLLoaderTextureWebP.tsx (commit d566e68)
- FOUND: registry entries for all 4 demo IDs in demo/src/registry.ts
- All 4 demos screenshot-verified on profile-4 with no console errors
