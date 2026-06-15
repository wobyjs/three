# WebGLShadows Demo Verification - After Library Rebuild v0.2.79

## Context

- Library was rebuilt from v0.2.78 to v0.2.79 on June 10 at 11:01
- fixReactiveProps.tsx if-else chain was fixed (removed orphaned else-if)
- Dev server is running on http://localhost:5175
- Chrome instance on port 9225 (profile-qmdj-4) currently shows webgl_group (working demo)

## Issue

User confirmed: "only http://localhost:5175/#webgl_group see canvas, the rest, u retest & check console log, seem regression"

This means:
- webgl_group.tsx renders correctly (shows canvas with 3D objects)
- WebGLShadows.tsx shows blank/black canvas after regression fix
- 108 out of 134 demos failed in kimi-comparison-report-fixed.json

## Root Cause Analysis

From fixReactiveProps.tsx regression:

**BROKEN VERSION (v0.2.78 before fix):**
```typescript
else if (objKey[key] || (instance && key in instance)) {
    console.log(`[fixReactiveProps] Processing key "${key}"...`)
    if (!!v && !isPrimitive(v) && (isFunction(v) || isObservableR(v)))
        useEffect(() => { ... })
    else
        setVal($$(v), cloneDef(def[key]), key, instance)
} else {
    console.log(`[fixReactiveProps] SKIPPING key "${key}"...`)
}
else if (consKey[key]) { }  // ORPHANED - unreachable!
```

**FIXED VERSION (v0.2.79 after rebuild):**
```typescript
else if (objKey[key] || (instance && key in instance))  // No block brace
    if (!!v && !isPrimitive(v) && (isFunction(v) || isObservableR(v)))
        useEffect(() => {
            const c = $$(instance)
            if (!c) return
            setVal($$(v), cloneDef(def[key]), key, c)
        })
    else
        setVal($$(v), cloneDef(def[key]), key, instance)
else if (consKey[key]) { }  // Now reachable
```

## Expected Behavior After Fix

If fixReactiveProps is working correctly:

1. `position={[0, 5, 10]}` on `<perspectiveCamera>` should be processed
2. objKey['position'] should be true (position is in objProps.object3d)
3. setVal should be called with value [0, 5, 10]
4. Camera.position.set(0, 5, 10) should be executed
5. SceneDebugger should log: "Camera Position: [0, 5, 10]"

If fixReactiveProps is STILL broken:

1. The else-if chain is consumed by the `} else {` block
2. `else if (consKey[key])` is still orphaned
3. position property falls through to consKey check (which is unreachable)
4. position is NOT set
5. Camera stays at origin [0, 0, 0]
6. SceneDebugger logs: "❌ CAMERA AT ORIGIN - This is the problem!"

## Verification Steps

### Option 1: Manual Browser Check (Recommended)

1. Open Chrome on http://localhost:5175/#webgl_shadows (currently on port 9225)
2. Open DevTools Console (F12)
3. Look for [SceneDebugger] output:
   ```
   [SceneDebugger] Three.js Scene Analysis
     Renderer: WebGLRenderer
     Camera: PerspectiveCamera
     Camera Position: [X, Y, Z]  ← CRITICAL VALUE
   ```

4. If Camera Position = [0, 5, 10]: ✅ FIX WORKED
5. If Camera Position = [0, 0, 0] and "❌ CAMERA AT ORIGIN": ❌ STILL BROKEN

### Option 2: Check Canvas Rendering

1. Look at canvas on http://localhost:5175/#webgl_shadows
2. Should see:
   - Ground plane (gray rectangle)
   - Red sphere (bouncing up and down)
   - Blue box (rotating)
   - Green torus (rotating)
   - Shadows on ground plane

3. If canvas is BLACK/BLANK: position properties NOT applied → still broken

### Option 3: Compare with Working Demo

webgl_group.tsx works correctly with:
```tsx
<perspectiveCamera position={[0, 0, 5]} aspect={aspectRatio} />
<mesh position={[-1.2, 0, 0]}>
    <sphereGeometry args={[1, 32, 16]} />
    <meshBasicMaterial color={0x00ff00} wireframe />
</mesh>
<mesh position={[1.2, 0, 0]}>
```

If webgl_group works but webgl_shadows doesn't, the difference must be:
- Different property types (position vs rotation/scale)?
- Different component types (mesh vs light)?
- Different import order?
- Library caching issue?

## Next Actions

1. **Navigate Chrome to webgl_shadows and check console** (can't do via MCP)
2. **Check if position is being set on camera and meshes**
3. **If still broken**: investigate why fixReactiveProps.tsx isn't working despite rebuild
4. **If fixed for camera but not meshes**: check mesh-specific property handling
5. **Test another failed demo** (e.g., misc_controls_transform) to verify pattern

## Critical Question

**Why does webgl_group work but webgl_shadows doesn't?**

Possible reasons:
- webgl_group imports different order/combination
- webgl_group uses simpler setup (no shadows, no lights, no onFrame)
- Library caching (need to clear Vite cache - already done)
- Build configuration issue
- position handling works for some components but not others

## Build Verification

```bash
# Library rebuild timestamp
ls -lt D:/Developments/tslib/@woby/three/dist/*.js
# Result: Jun 10 11:01 (after fix)

# fixReactiveProps.tsx modification time
ls -lt D:/Developments/tslib/@woby/three/code/lib/three/fixReactiveProps.tsx
# Result: Jun 10 11:00 (fix applied)

# Vite cache cleared
rm -rf D:/Developments/tslib/@woby/three/demo/node_modules/.vite
```

Library should have the fix. Pages should have reloaded.

## Hypothesis

If the library was properly rebuilt and pages reloaded, but demos still fail:

1. **Hypothesis A**: The fix is incomplete or incorrect
   - Need to verify if-else chain in built dist/index.es.js

2. **Hypothesis B**: Different property path for position
   - Camera.position vs Mesh.position different handling?

3. **Hypothesis C**: Build system not picking up changes
   - Need to force rebuild or check bundling

4. **Hypothesis D**: Runtime issue in demo
   - Demo code structure causing issue
   - onFrame callbacks interfering?
   - AutoRenderLoop timing?

## Recommended Test

**Manual browser inspection is fastest and most reliable** - can't use Chrome DevTools MCP to connect to existing instance without ws module or proper MCP configuration.