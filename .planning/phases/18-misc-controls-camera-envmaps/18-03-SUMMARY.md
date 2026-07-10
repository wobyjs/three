---
phase: 18-misc-controls-camera-envmaps
plan: 03
status: COMPLETE
completed: 2026-06-26
demos_delivered: 4
requirements: [REQ-15-04]
wave: 1
---

# Phase 18 Plan 03: Specialty Texture + Material Batch — Summary

## Outcome (one-liner)

Ported 4 specialty texture/material demos — manually-authored 9-level mipmap chain with per-level distinct colors (visible mip banding on a receding ground plane), partial texture sub-rect blits via `renderer.copyTextureToTexture` (r173+ signature) painting an accumulating Lissajous trail into a 256×256 destination texture, webcam `VideoTexture` via `getUserMedia` with a 5-second timeout-driven fallback overlay for automated/denied-permission contexts, and an object-space normal map (`THREE.ObjectSpaceNormalMap`) on the Nefertiti bust GLB — all using the locked `init3D` container-ref pattern with `/** @jsxImportSource woby */`. All 4 visually verified via dv profile-4.

## Demos delivered

| # | Registry ID                                | File                                                | Registry line | Visual verification                                                                                                                                                                                                                                                                              |
| - | ------------------------------------------ | --------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1 | `webgl_materials_texture_manualmipmap`     | `demo/src/WebGLMaterialsTextureManualMipmap.tsx`    | 296           | Long ground floor receding into the distance with visible color banding: near texels red (256 base level), middle distance transitions through green (128) and blue (64), far distance shows yellow (32) and cyan (16) bands. `NearestMipmapNearestFilter` chosen so the color bands are sharp/distinct rather than blended. Status overlay top-left lists all 9 mip colors. |
| 2 | `webgl_materials_texture_partialupdate`    | `demo/src/WebGLMaterialsTexturePartialUpdate.tsx`   | 297           | 4×4 plane displaying the 256×256 destination DataTexture. Initial dark-blue background visible; a multi-colored rainbow Lissajous trail accumulates over time as 32×32 patches are blitted into moving (x,y) destinations via `copyTextureToTexture` — each stamp is hue-rotated so the trail cycles through the full color wheel. White center-dot per stamp confirms individual blits are landing. |
| 3 | `webgl_materials_video_webcam`             | `demo/src/WebGLMaterialsVideoWebcam.tsx`            | 298           | Fallback path triggered (per documented automated-context behavior). 4:3 plane displays the fallback `CanvasTexture` overlay: dark blue-to-navy gradient background, red bordered slashed-camera icon, "Camera access required" headline, "Permission prompt unanswered after 5s (automated context)" subtitle, "Grant permission in browser → reload" footer. Gentle wobble animation confirms the render loop is alive. Status overlay top-left logs the fallback reason. |
| 4 | `webgl_materials_normalmap_object_space`   | `demo/src/WebGLMaterialsNormalmapObjectSpace.tsx`   | 299           | Nefertiti bust GLB loaded and rendered with full surface detail responding to the camera-attached point light — the object-space normal map encodes per-texel normals in MODEL coordinates, so the lighting picks up fine geometric features (lips, eyes, ear contours, headdress folds) without per-vertex normals (we deleted the geometry's `normal` attribute, mirroring upstream). Status overlay confirms `THREE.ObjectSpaceNormalMap` was applied. |

## Asset / library substitutions

**1. Object-space normal map — Nefertiti bust (NOT LeePerrySmith) — model correction**
- Plan referenced `LeePerrySmith` as the target model, but fetching `https://threejs.org/examples/webgl_materials_normalmap_object_space.html` revealed the upstream demo actually uses `models/gltf/Nefertiti/Nefertiti.glb` (a single GLB containing geometry + diffuse + object-space normal map baked into one asset).
- Verified `https://threejs.org/examples/models/gltf/Nefertiti/Nefertiti.glb` returns 200 before implementing.
- Substitution is upstream-accurate: this IS the canonical asset for the object-space normalmap demo. LeePerrySmith is used for the tangent-space normalmap demo (`webgl_materials_normalmap`, different demo).

**2. Manual mipmap chain — 9 levels, per-level distinct colors (no upstream asset substitution)**
- Built 9 canvases at sizes [256, 128, 64, 32, 16, 8, 4, 2, 1] with hardcoded distinct colors: red / green / blue / yellow / cyan / magenta / white / gray / black.
- Added text labels (`256`, `128`, `64`, `32`, `16`) on the larger mips so the rendered surface confirms which level is being sampled at each distance.
- Assignment: `texture.mipmaps = mipCanvases` + `texture.generateMipmaps = false` (CRITICAL — otherwise Three.js auto-generates from the base and overwrites our manual chain).
- `NearestMipmapNearestFilter` + `magFilter = NearestFilter` chosen so the color bands are crisp; the upstream canonical demo uses `LinearMipmapLinearFilter` which blends adjacent mips and produces less-obvious banding — our choice is a clarity-first variant that better demonstrates "you can see which mip is being sampled".

**3. Partial texture update — `copyTextureToTexture` r173+ signature**
- Three.js r173 changed `renderer.copyTextureToTexture` from the old `(position, srcTexture, dstTexture, level)` signature to the new `(srcTexture, dstTexture, srcRegion=null, dstPosition=null, srcLevel=0, dstLevel=null)` signature. Verified by reading `demo/node_modules/three/src/renderers/WebGLRenderer.js` line 2588.
- Used the new signature explicitly: `renderer.copyTextureToTexture(srcTexture, dstTexture, srcRegion, dstPosition)` with `srcRegion = null` (use full source) and `dstPosition = new THREE.Vector2(cx, cy)` (where to blit).
- Trail path: Lissajous-pattern via `Math.sin(t * 0.7), Math.cos(t * 0.5)` × `(DST_SIZE - PATCH_SIZE)` so the trail forms a curving figure-eight that revisits regions and crosses itself.
- Hue rotation per stamp: `hsl((frame * 3) % 360, 90%, 55%)` produces full rainbow color cycling as the trail accumulates.

**4. Webcam — 5-second timeout fallback for automated contexts**
- Plan called for "render fallback overlay if denied". Extended to also handle the **permission-prompt-never-answered** case: automated browser contexts (like dv/CDP-driven sessions) often leave the permission prompt unanswered indefinitely, so `getUserMedia()` neither resolves nor rejects — the promise hangs forever and the render loop just shows a gray plane.
- Added `setTimeout(() => { if (!resolved) useFallback(...) }, 5000)` so an unanswered prompt triggers the fallback after 5s. Resolved promise paths properly `clearTimeout` and set `resolved = true` so we don't double-handle.
- This is the path that fired during dv-driven visual verification (see Verification notes below).

## Pattern adherence

All 4 files satisfy the Phase 15 locked-decisions checklist:

- ✓ `/** @jsxImportSource woby */` (NOT `@woby/three`)
- ✓ `const init3D = (container: HTMLElement) => { ... }` with module-level `let _cleanupFn`
- ✓ No `as any`, no `useEffect`, no `useRef` for plain objects
- ✓ Single `<div ref={(el) => { if (el) init3D(el) }} />` mount in the exported JSX component
- ✓ Cleanup disposes geometries, materials, textures, controls; removes canvas + status overlay + (webcam demo) hidden video element from `document.body`; (webcam demo) stops MediaStream tracks
- ✓ `setAnimationLoop(animate)` for render loop; `setAnimationLoop(null)` in cleanup
- ✓ Status overlay div for user feedback (loading / loaded / error / fallback states)
- ✓ Resize listener with `removeEventListener` in cleanup
- ✓ Status overlay uses `textContent` + `white-space: pre-line` CSS for multi-line messages (avoids the security hook that blocks literal-text DOM-string assignment)

## Verification notes

- **dev server:** http://localhost:5300 (UP throughout execution)
- **dv profile:** profile-4 (port 9233) — used exclusively per plan directive; no parallel sibling executors
- **Wait times:** 3s after navigate for manualmipmap/partialupdate, 2s for normalmap, longer for webcam (needs `getUserMedia` resolution OR the 5s fallback timer). Partial-update demo screenshot recaptured after an additional 8s wait to let the trail accumulate visibly.
- **dv CLI usage:** `select --profile profile-4 -i 1` (one-time bind) → `navigate --profile profile-4 -u <URL>` → wait → `screenshot --profile profile-4 -o <path>`. No viewport-collapse incidents this plan (Plan 02's `dv resize` workaround was not needed).
- **Webcam fallback path triggered:** the dv-driven Chrome session left the `getUserMedia` permission prompt unanswered — exactly the scenario the 5s timeout was designed for. Screenshot captured at t=8s clearly shows the fallback overlay with the slashed-camera icon and "Permission prompt unanswered after 5s (automated context)" subtitle. This is **expected and documented behavior**, not a bug.
- **Type-check:** `npx tsc --noEmit --skipLibCheck` from `demo/` — no errors in my 4 new files.
- **No duplicates:** pre-flight grep confirmed none of `_texture_manualmipmap`, `_texture_partialupdate`, `_video_webcam`, `_normalmap_object_space` were in registry before this plan.

## Deviations from plan

**[Rule 1 - Bug fix]** Manual mipmap demo: initial implementation used a DOM HTML-string assignment to set the multi-line status overlay text. Security hook blocked the assignment because the value was a literal string (potential XSS vector). Fixed by using `textContent` with `\n` separators + `white-space: pre-line` CSS on the overlay element. Applied the same pattern to all 4 demos in this plan as standard practice.

**[Rule 2 - Missing critical functionality]** Webcam demo: plan called for "render fallback overlay if denied" (handles the explicit-rejection case) but did NOT call for the timeout-fallback case (prompt never answered). Without the timeout, automated contexts wedge indefinitely on a blank gray plane and fail visual verification. Added 5s timeout-driven fallback as a Rule-2 correctness requirement — a webcam demo that hangs forever in any real-world deployment scenario (automated tests, headless browsers, denied-by-default policies) is broken. Cleanup properly clears the timeout to prevent late-fire after unmount.

**[Rule 3 - API signature correction]** Partial-update demo: Three.js r173 changed the `renderer.copyTextureToTexture` signature. Plan didn't specify which signature to use. Verified by reading `WebGLRenderer.js` source (line 2588 in `demo/node_modules/three/src/renderers/`) that r173 uses `(srcTexture, dstTexture, srcRegion=null, dstPosition=null, srcLevel=0, dstLevel=null)`. The old `(position, srcTexture, dstTexture, level)` signature still works but emits a deprecation warn-once. Used the new signature explicitly to avoid the deprecation warning and future-proof against the legacy signature being removed.

**[Rule 3 - Model correction]** Object-space normal map demo: plan referenced LeePerrySmith. Upstream actually uses Nefertiti.glb (a self-contained GLB with diffuse + object-space normal map already baked in). Verified by fetching upstream HTML + verifying GLB URL returns 200. Used the upstream-correct asset.

No architectural-change Rule-4 deviations.

## Blockers encountered

**Transient blocker (resolved):** Manual-mipmap demo's literal-HTML-string DOM assignment blocked by security hook on first save. Switched to `textContent` + `white-space: pre-line` immediately. Applied the same pattern to all subsequent demos in this plan.

**Transient blocker (resolved):** Webcam `getUserMedia()` hung indefinitely in the dv-driven Chrome session — permission prompt was never answered. Initial screenshot at the standard 3s wait showed a blank gray plane (no error, no fallback). Diagnosed by reading the source and realizing the promise neither resolved nor rejected. Added the 5s timeout-driven fallback as a Rule-2 correction; subsequent screenshot at 8s wait time showed the fallback overlay correctly.

**Transient blocker (resolved):** Partial-update demo's first screenshot at 3s showed the trail as a tiny dot in the top-right corner of the visible plane. Initial interpretation: bug in patch positioning. Investigated via `dv inspect --selector canvas` which confirmed the canvas was correctly 992×800 — the "tiny dot" was actually the first stamp; the dark area around it was simply the unpainted dst-background. Waited 8s longer and recaptured — beautiful rainbow Lissajous curve filling most of the plane. No code fix needed; just a wait-time correction.

**Transient blocker (resolved):** Plan referenced LeePerrySmith for the object-space normal map demo. Fetched upstream HTML to verify the actual asset, discovered it's Nefertiti.glb instead. Verified Nefertiti.glb URL returns 200, used the upstream-correct asset.

## Files changed

**Created:**
- `demo/src/WebGLMaterialsTextureManualMipmap.tsx` (~130 lines)
- `demo/src/WebGLMaterialsTexturePartialUpdate.tsx` (~135 lines)
- `demo/src/WebGLMaterialsVideoWebcam.tsx` (~225 lines — larger due to fallback canvas-texture builder)
- `demo/src/WebGLMaterialsNormalmapObjectSpace.tsx` (~125 lines)

**Modified:**
- `demo/src/registry.ts` — added 4 registry entries (lines 296–299)

No new dependencies added (all 4 demos use only `three` + `three/examples/jsm/controls/OrbitControls.js` + (demo 4 only) `three/examples/jsm/loaders/GLTFLoader.js`, all already in the workspace).

## Tech notes (for future maintainers)

- **Manual mipmap chain pattern:** Assign `texture.mipmaps = [canvas0, canvas1, ...]` (largest first), set `texture.generateMipmaps = false` (CRITICAL — otherwise the GPU re-generates from base and overwrites your manual chain), set `texture.needsUpdate = true`. The chain must include ALL levels down to 1×1 — partial chains produce undefined results across GPU vendors. Filter selection: `NearestMipmapNearestFilter` for sharp banding, `LinearMipmapLinearFilter` (trilinear) for the upstream canonical look.
- **`copyTextureToTexture` r173+ signature:** `(srcTexture, dstTexture, srcRegion=null, dstPosition=null, srcLevel=0, dstLevel=null)`. `srcRegion = null` means "use the entire source texture". `dstPosition = new THREE.Vector2(x, y)` is the destination corner in destination-texture pixel coordinates. Both source and destination must be initialized + uploaded to the GPU before the first `copyTextureToTexture` call — set `texture.needsUpdate = true` on the destination once at init, then the GPU keeps the destination resident and only the small blit goes over the bus per frame.
- **`getUserMedia` permission-prompt patterns:** in production deployment expect three failure modes: (1) explicit reject → catch block fires with `DOMException.name === 'NotAllowedError'`; (2) no camera hardware / insecure context → `navigator.mediaDevices` is undefined or `getUserMedia` throws synchronously; (3) **prompt never answered** (automated contexts, browser policy "block by default and never prompt") → promise hangs forever. The 5s timeout-fallback pattern handles case 3. CRITICAL cleanup: `stream.getTracks().forEach(t => t.stop())` to release the webcam hardware indicator — without this, the camera LED stays on after unmount.
- **`THREE.ObjectSpaceNormalMap` vs `TangentSpaceNormalMap`:** object-space normal maps encode the surface normal in MODEL coordinates (the texture itself is "what way is this point pointing in object space"). Tangent-space maps encode the normal relative to the surface's local tangent/bitangent/normal basis. Object-space maps DON'T need the geometry's `normal` attribute or per-vertex tangents — they're self-sufficient. Tangent-space maps require both. Switching modes is a single flag: `material.normalMapType = THREE.ObjectSpaceNormalMap` (or `THREE.TangentSpaceNormalMap`, default). The map itself must be authored for the chosen mode — they're not interchangeable.
- **Object-space normal map authoring:** typically baked from a high-poly model via Blender / Substance / xNormal, with output-space set to "Object" rather than "Tangent". The Nefertiti GLB was baked this way upstream — the GLB metadata doesn't expose the encoding mode, so callers must know to set `ObjectSpaceNormalMap`. Easy mistake when consuming third-party GLBs: if a model has a normal map and the lighting looks "wrong" (over-bright, under-bright, faceted-looking), try toggling `normalMapType` to see if the map was baked for the other space.
- **Status overlay multi-line text:** the project's security hook blocks literal-text DOM HTML-string assignments. Use `el.textContent = "line1\nline2"` + `el.style.whiteSpace = 'pre-line'` (or include `white-space:pre-line` in the inline `style` attribute). Same end-user appearance, no security-hook violation.

## Screenshot paths

- Manual mipmap: `C:\Users\wongc\AppData\Local\Temp\18-03-manualmipmap.png` (85,938 bytes)
- Partial update (final, 8s wait): `C:\Users\wongc\AppData\Local\Temp\18-03-partialupdate-final.png` (85,180 bytes)
- Webcam (fallback path verified): `C:\Users\wongc\AppData\Local\Temp\18-03-webcam-3.png` (178,415 bytes)
- Object-space normalmap: `C:\Users\wongc\AppData\Local\Temp\18-03-normalmap.png` (302,983 bytes)

## Self-Check: PASSED

- ✓ `demo/src/WebGLMaterialsTextureManualMipmap.tsx` exists (untracked in submodule)
- ✓ `demo/src/WebGLMaterialsTexturePartialUpdate.tsx` exists (untracked in submodule)
- ✓ `demo/src/WebGLMaterialsVideoWebcam.tsx` exists (untracked in submodule)
- ✓ `demo/src/WebGLMaterialsNormalmapObjectSpace.tsx` exists (untracked in submodule)
- ✓ Registry entries present at lines 296–299 (`webgl_materials_texture_manualmipmap`, `_texture_partialupdate`, `_video_webcam`, `_normalmap_object_space`)
- ✓ This summary at `.planning/phases/18-misc-controls-camera-envmaps/18-03-SUMMARY.md` exists (untracked in parent repo)
- ✓ All 4 demos visually verified via screenshots (mip color banding, rainbow Lissajous trail, fallback overlay, Nefertiti bust with object-space normals)
- ✓ No TypeScript errors in the 4 new files (verified via `npx tsc --noEmit --skipLibCheck` in `demo/`)
- ✓ Webcam cleanup releases MediaStream tracks (`stream.getTracks().forEach(t => t.stop())`) per HARD requirement
- ✓ No new dependencies added (no package.json / pnpm-lock.yaml changes this plan)
- ✓ No git commits made — all changes left unstaged per user's "default: leave changes unstaged" directive
- ✓ Note: `demo/` is a git submodule, so the demo file changes are tracked separately from the parent repo
