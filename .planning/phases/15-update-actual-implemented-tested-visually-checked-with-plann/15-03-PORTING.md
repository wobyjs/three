# 15-03 Porting Status

## Files Created / Updated

### 1. WebGLCameraLogarithmicDepthBuffer.tsx
- **Status**: Already existed and was complete
- **Path**: `demo/src/WebGLCameraLogarithmicDepthBuffer.tsx`
- **Notes**: No changes needed. Implements split-view with two renderers (normal z-buffer vs logarithmic z-buffer), font-loaded text labels at cosmic scales, mouse zoom/pan controls.

### 2. WebGLInteractiveBufferGeometry.tsx
- **Status**: Already existed and was complete
- **Path**: `demo/src/WebGLInteractiveBufferGeometry.tsx`
- **Notes**: No changes needed. 5000 random triangles with raycaster highlighting the intersected triangle face via a white line outline.

### 3. WebGLInteractiveCubesOrtho.tsx
- **Status**: Rewrote to fix issues
- **Path**: `demo/src/WebGLInteractiveCubesOrtho.tsx`
- **Changes**:
  - Added missing `Stats` import and display
  - Replaced `import { ... } from 'three'` with `import * as THREE from 'three'` for consistency
  - Fixed pointer tracking to use `container.addEventListener` instead of `document.addEventListener`
  - Fixed `INTERSECTED` type to avoid `any` (used augmented type for `_currentHex`)
  - Uses `renderer.setAnimationLoop` instead of manual `requestAnimationFrame`
  - Proper cleanup including stats.dom removal

### 4. WebGLGeometryTextStroke.tsx
- **Status**: Updated font path and container dimensions
- **Path**: `demo/src/WebGLGeometryTextStroke.tsx`
- **Changes**:
  - Font path changed from `fonts/MPLUSRounded1c/MPLUSRounded1c-Regular.typeface.json` (unavailable) to `fonts/helvetiker_regular.typeface.json`
  - Updated renderer and camera to use `container.clientWidth/Height` instead of `window.innerWidth/Height`

### 5. WebGLModifierCurve.tsx
- **Status**: Created new file
- **Path**: `demo/src/WebGLModifierCurve.tsx`
- **Notes**: Uses `Flow` from `three/examples/jsm/modifiers/CurveModifier.js`. Four Catmull-Rom curve handles form a closed centripetal curve; text geometry flows along the curve via `Flow`. `TransformControls` allows handles to be dragged to reshape the curve. Font: `helvetiker_regular.typeface.json`.

## Type Check

```
npx tsc --noEmit --skipLibCheck
```

Result: **PASSED** — only 3 pre-existing tsconfig deprecation warnings (TS5107/TS5101), zero code errors in any of the 5 TSX files.

## Notes

- `fonts/MPLUSRounded1c/MPLUSRounded1c-Regular.typeface.json` is not present in `demo/public/fonts/`. Only `helvetiker_regular.typeface.json` is available. Used helvetiker for both `WebGLGeometryTextStroke` and `WebGLModifierCurve`.
- None of these files are registered in `registry.ts` — registration happens separately after visual approval.
