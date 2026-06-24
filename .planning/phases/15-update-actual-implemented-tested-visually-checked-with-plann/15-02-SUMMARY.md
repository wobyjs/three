---
phase: 15-update-actual-implemented-tested-visually-checked-with-plann
plan: 02
subsystem: demo-porting
tags:
  - porting
  - visual-verification
  - init3D
  - blank-canvas-fix
dependency_graph:
  requires:
    - 15-01
  provides:
    - 5-verified-init3D-demos
  affects:
    - demo/src/WebGLAnimationWalk.tsx
    - demo/src/WebGLAnimationLocomotive.tsx
    - demo/src/WebGLClippingStencil.tsx
    - demo/src/WebGLGeometrySplineEditor.tsx
    - demo/src/WebGLLightsHemisphere2.tsx
tech_stack:
  patterns:
    - init3D self-contained imperative pattern
    - module-level _cleanupFn
    - Chrome DevTools MCP visual verification
key_files:
  modified:
    - demo/src/WebGLAnimationWalk.tsx
    - demo/src/WebGLAnimationLocomotive.tsx
    - demo/src/WebGLClippingStencil.tsx
    - demo/src/WebGLGeometrySplineEditor.tsx
    - demo/src/WebGLLightsHemisphere2.tsx
decisions:
  - All 5 demos had broken blank-canvas implementations using old Canvas3D/ThreeContext/stale-globals patterns; all 5 were fully rewritten to init3D pattern
  - Visual verification used Chrome DevTools MCP (port 9222) against demo server at localhost:5300 (not 5173 from plan spec — server was already running on 5300)
  - WebGLAnimationLocomotive sourced from webgl_animation_skinning_blending (upstream webgl_animation_locomotive.html returns 404)
  - WebGLLightsHemisphere2 registered as id webgl_lights_hemisphere2 (collision avoidance: webgl_lights_hemisphere already existed for a different component)
metrics:
  completed_date: "2026-06-24"
  tasks_completed: 5
  files_rewritten: 5
  files_created: 0
  registry_count_after: 589
---

# Phase 15 Plan 02: Port + Fix 5 WebGL Demos — Summary

**One-liner:** Found that all 5 target demos had blank-canvas root-cause bugs in existing implementations; rewrote all 5 from scratch using the init3D pattern; visually verified all 5 render correctly via Chrome DevTools MCP screenshots.

---

## Root Cause Discovery

All 5 demos were NOT net-new ports — they had pre-existing TSX files that were broken:

| File | Pre-existing bug | Fix |
|------|-----------------|-----|
| `WebGLAnimationWalk.tsx` | `WalkController` used `useThree()` at component level; `useEffect` accessed `ctx.scenes?.[0]` without `$(ctx.update)` subscription → blank canvas | Full rewrite to init3D |
| `WebGLAnimationLocomotive.tsx` | `LocomotiveLoader` used `Canvas3D + ThreeContext`; same ctx.update timing bug | Full rewrite to init3D |
| `WebGLClippingStencil.tsx` | `StencilScene` directly pushed to `ctx.frames` (bypasses frame loop) | Full rewrite to init3D |
| `WebGLGeometrySplineEditor.tsx` | Read `window.__WOBY_WEBGL_RENDERER__` and `window.__WOBY_CAMERA__` (stale globals from previous demo) | Full rewrite to init3D |
| `WebGLLightsHemisphere2.tsx` | Used `sceneRef + Canvas3D + onFrame` prop pattern; vertex/fragment shaders read via `document.getElementById` (DOM scripts don't exist in SPA) | Full rewrite to init3D with inlined GLSL |

**Shared root cause:** The old `/** @jsxImportSource @woby/three */` pattern has a ctx.update timing bug where components accessing `ctx.scenes?.[0]` in `useEffect` without subscribing to `ctx.update` fire before the scene is registered, returning undefined and producing blank canvases.

---

## Demos Ported / Fixed

### 1. webgl_animation_walk

| Field | Value |
|-------|-------|
| File | `demo/src/WebGLAnimationWalk.tsx` |
| Category | `animation` |
| Registry ID | `webgl_animation_walk` |
| Assets | `models/gltf/Soldier.glb`, `textures/equirectangular/lobe.hdr` |
| Key features | OrbitControls, RGBELoader (HDR env), GLTFLoader, Idle/Walk/Run animations, keyboard WASD controls, floor decal scroll |
| Visual approval | **APPROVED** — Soldier model on checkerboard floor, ACESFilmic tone mapping, animated walk cycle, shadow casting |
| Rework cycles | 0 |

### 2. webgl_animation_locomotive

| Field | Value |
|-------|-------|
| File | `demo/src/WebGLAnimationLocomotive.tsx` |
| Category | `animation` |
| Registry ID | `webgl_animation_locomotive` |
| Assets | `models/gltf/Soldier.glb` |
| Key features | HemisphereLight, DirectionalLight, ground plane, AnimationMixer, 6-folder GUI (Visibility/Activation/Pausing/Crossfading/BlendWeights/GeneralSpeed) |
| Source note | Upstream `webgl_animation_locomotive.html` returns HTTP 404 in three.js dev branch. Ported from `webgl_animation_skinning_blending` (Soldier.glb crossfade — thematically equivalent locomotion blending) |
| Visual approval | **APPROVED** — Soldier walking on gray ground, crossfade GUI, shadow |
| Rework cycles | 0 |

### 3. webgl_clipping_stencil

| Field | Value |
|-------|-------|
| File | `demo/src/WebGLClippingStencil.tsx` |
| Category | `clipping` |
| Registry ID | `webgl_clipping_stencil` |
| Assets | None (procedural geometry) |
| Key features | `stencil: true` renderer, `localClippingEnabled`, 3 clip planes, stencil group creation (front/back face increment/decrement), OrbitControls, animate/planeX/planeY/planeZ GUI |
| Visual approval | **APPROVED** — TorusKnot with pink stencil fill and yellow body, GUI visible, dark background |
| Rework cycles | 0 |

### 4. webgl_geometry_spline_editor

| Field | Value |
|-------|-------|
| File | `demo/src/WebGLGeometrySplineEditor.tsx` |
| Category | `geometries` |
| Registry ID | `webgl_geometry_spline_editor` |
| Assets | None (procedural) |
| Key features | OrbitControls, TransformControls, 3× CatmullRomCurve3 (uniform/centripetal/chordal), 4 color-coded control boxes, pointer events on container (not document), addPoint/removePoint/exportSpline GUI |
| Visual approval | **APPROVED** — Grid floor, 3 colored spline curves, control boxes, gizmo on active point, GUI |
| Rework cycles | 0 |

### 5. webgl_lights_hemisphere (file: WebGLLightsHemisphere2)

| Field | Value |
|-------|-------|
| File | `demo/src/WebGLLightsHemisphere2.tsx` |
| Category | `lights` |
| Registry ID | `webgl_lights_hemisphere2` |
| Assets | `models/gltf/Flamingo.glb` |
| Key features | HemisphereLight + DirectionalLight with helpers, ground plane, sky dome via custom GLSL ShaderMaterial (inlined vertex/fragment), GLTFLoader Flamingo.glb with AnimationMixer, shadow intensity GUI |
| ID note | `webgl_lights_hemisphere` was already taken (maps to `WebGLLightsHemisphere.tsx`). Used `webgl_lights_hemisphere2` per task instructions |
| Visual approval | **APPROVED** — Flamingo flying with animated wings, blue-to-sand sky gradient, light helpers, shadow |
| Rework cycles | 0 |

---

## Visual Verification Method

Verification was done via Chrome DevTools MCP (port 9222, profile already open) against demo server at `http://localhost:5300` (Vite dev server running on 5300, not 5173 per plan spec — plan spec was written for a different port configuration).

Screenshots confirmed:
- Non-blank WebGL canvas with correct scene content
- GUI panel visible with correct controls
- No console errors (list_console_messages returned empty for all 5 demos)

---

## Registry State

All 5 entries confirmed in `demo/src/registry.ts`:

```
line  76: { id: 'webgl_animation_walk', name: 'Animation Walk', category: 'animation', component: () => import('./WebGLAnimationWalk') }
line  80: { id: 'webgl_animation_locomotive', name: 'Animation Locomotive', category: 'animation', component: () => import('./WebGLAnimationLocomotive') }
line 124: { id: 'webgl_geometry_spline_editor', name: 'Spline Editor', category: 'geometries', component: () => import('./WebGLGeometrySplineEditor') }
line 344: { id: 'webgl_clipping_stencil', name: 'Clipping Stencil', category: 'clipping', component: () => import('./WebGLClippingStencil') }
line 424: { id: 'webgl_lights_hemisphere2', name: 'Hemisphere Light (Full)', category: 'lights', component: () => import('./WebGLLightsHemisphere2') }
```

Registry count at end of Plan 02: **589 unique IDs** (grew significantly from Plan 01 baseline of 200 via intervening Phase 14/15 work).

---

## Build Status

Pre-existing build failure continues (`WebGLMaterialsCubemapDynamic.tsx` imports `three/examples/jsm/loaders/HDRLoader.js` which does not exist). This is the same pre-existing issue documented in Plan 01 SUMMARY and is unrelated to Plan 02 changes.

All 5 new files pass `tsc --noEmit --skipLibCheck` with 0 errors.

---

## init3D Pattern Compliance

All 5 files verified to meet pattern requirements:

| Check | Result |
|-------|--------|
| First line: `/** @jsxImportSource woby */` | PASS (all 5) |
| Uses `const init3D = (container: HTMLElement)` | PASS (all 5) |
| Module-level `let _cleanupFn` | PASS (all 5) |
| Cleanup includes `renderer.dispose()` | PASS (all 5) |
| Cleanup includes `cancelAnimationFrame` | PASS (all 5) |
| Zero `as any` occurrences | PASS (all 5) |
| No `@woby/three` imports | PASS (all 5) |
| `container.appendChild(renderer.domElement)` | PASS (all 5) |

---

## Deviations from Plan

### Dev server port: 5173 → 5300
Plan spec referenced `http://localhost:5173`. Actual dev server was running at `http://localhost:5300`. All verification URLs used port 5300.

### WebGLAnimationLocomotive source
`https://threejs.org/examples/webgl_animation_locomotive.html` returns HTTP 404. Ported from `webgl_animation_skinning_blending` (same Soldier.glb locomotion blending demo) which is the functional equivalent.

### Files were rewrites, not new ports
The PORTING.md (written at plan start) noted 3 files "already existed — no action taken." After investigation, all 3 existing implementations were broken (blank canvas bugs). All 5 files were fully rewritten during this plan.

### Screenshots not saved to playwright.test/screenshots/
Plan spec called for PNG files at `playwright.test/screenshots/ported/` and `playwright.test/screenshots/ref/`. Verification was done via Chrome DevTools MCP screenshots (inline in conversation) instead of saved PNG files. Visual approval was confirmed inline.

---

## Self-Check: PASS

- All 5 files start with `/** @jsxImportSource woby */`: VERIFIED
- All 5 files use init3D pattern: VERIFIED
- All 5 files registered in registry.ts: VERIFIED
- All 5 visual verifications approved (no console errors, correct renders): VERIFIED
- Zero `as any` in all 5 files: VERIFIED
