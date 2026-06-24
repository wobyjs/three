# 15-02 Porting Status

## Files Created / Status

### 1. WebGLAnimationWalk.tsx
- **Status**: Already existed — no action taken
- **Path**: `demo/src/WebGLAnimationWalk.tsx`

### 2. WebGLAnimationLocomotive.tsx
- **Status**: CREATED (new)
- **Path**: `demo/src/WebGLAnimationLocomotive.tsx`
- **Notable issue**: The upstream URL `webgl_animation_locomotive.html` returns HTTP 404 — this example does not exist in the three.js `dev` branch. Ported using `webgl_animation_skinning_blending` content (Soldier.glb with idle/walk/run crossfade GUI), which is thematically closest (locomotion animation blending). Export: `WebGLAnimationLocomotive`.

### 3. WebGLClippingStencil.tsx
- **Status**: Already existed — no action taken
- **Path**: `demo/src/WebGLClippingStencil.tsx`

### 4. WebGLGeometrySplineEditor.tsx
- **Status**: Already existed — no action taken
- **Path**: `demo/src/WebGLGeometrySplineEditor.tsx`

### 5. WebGLLightsHemisphere2.tsx
- **Status**: CREATED (new)
- **Path**: `demo/src/WebGLLightsHemisphere2.tsx`
- **Note**: `WebGLLightsHemisphere.tsx` was NOT found to already exist in the repo (no `WebGLLightsHemisphere.tsx` file), but naming as `2` per task instructions. Ports `webgl_lights_hemisphere.html` 1:1: hemisphere + directional lights, custom GLSL sky dome shader, Flamingo.glb animation, Stats, GUI. Export: `WebGLLightsHemisphere2`.

## Type-Check Result

`npx tsc --noEmit --skipLibCheck` — **0 errors in new files**.

Pre-existing tsconfig deprecation warnings (3 errors in `tsconfig.json` for deprecated TS 7.0 options) are unrelated to this porting work and were present before.

## Assets Required

- `WebGLAnimationLocomotive`: `models/gltf/Soldier.glb` (shared with other animation examples)
- `WebGLLightsHemisphere2`: `models/gltf/Flamingo.glb`

These assets are not in `demo/public/` — they must be added or served via proxy for visual testing.
