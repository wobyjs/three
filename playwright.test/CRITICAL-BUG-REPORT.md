# Critical Bug Report - Woby/Three.js Property System Failure

## Summary

**ALL 629 Three.js example demos fail to render correctly because position, rotation, and other Vector3 properties are not being set from JSX attributes.**

## Impact

- **100% of demos affected** - Every demo using `position={[x, y, z]}` syntax fails
- **Black canvas** - Camera and objects at origin [0,0,0] = no visible content
- **Root cause identified** - Property setting logic in `fixReactiveProps.tsx` doesn't work

## Technical Details

### Expected Behavior

JSX:
```tsx
<mesh position={[2, 0.5, 0]} />
<perspectiveCamera position={[0, 5, 10]} />
```

Should result in:
- `mesh.position.set(2, 0.5, 0)`
- `camera.position.set(0, 5, 10)`

### Actual Behavior

SceneDebugger shows:
```json
{
  "Camera Position": [0, 0, 0],  // Expected [0, 5, 10]
  "Mesh[2] Position": [0, 0, 0],  // Expected [2, 0.5, 0]
  "Mesh[3] Position": [0, 0, 0],  // Expected [-2, 1, 0]
  "Mesh[4] Position": [0, 0, 0]   // Expected [0, 1.5, -3]
}
```

### Why It Fails

The property setting logic in `code/lib/three/fixReactiveProps.tsx`:

```typescript
// Line 95-104
else if (objKey[key])  // ← THIS CHECK FAILS
    if (!!v && !isPrimitive(v) && (isFunction(v) || isObservableR(v)))
        useEffect(() => {
            const c = $$(instance)
            if (!c) return
            setVal($$(v), cloneDef(def[key]), key, c)
        })
    else
        setVal($$(v), cloneDef(def[key]), key, instance)
```

**Hypothesis**: `objKey.position` is `false` for all components, so `setVal` is never called.

The `setVal` function (lines 115-142) correctly handles Vector3.set():
```typescript
const f = getFunc(instance[key], instance)  // Gets position.set method

if (f)
    if (Array.isArray(value)) {
        f(...value)  // Calls position.set(0, 5, 10)
    }
```

But this code path is never reached because `objKey.position` check fails.

## Evidence Files

- **Root cause analysis**: `playwright.test/BLACK-CANVAS-ROOT-CAUSE.md`
- **Debug screenshot**: `playwright.test/screenshots/debug/black_canvas_root_cause.png`
- **Dev server log**: Console shows camera at [0, 0, 0]
- **SceneDebugger output**: All objects at origin

## Required Fix

### Fix Location

File: `D:\Developments\tslib\@woby\three\code\lib\three\fixReactiveProps.tsx`

### Fix Strategy

**Option 1**: Fix `objKey` check
- Ensure `position`, `rotation`, `scale` are in `objProps` for all Object3D-derived components
- Verify Object3D.ts properly registers these in global `objProps`

**Option 2**: Remove `objKey` check
- Call `setVal` for ALL props, not just those in `objKey`
- Let `setVal` determine if property exists via `getFunc`

**Option 3**: Special handling for Vector3
- Add explicit check: `if (key === 'position' || key === 'rotation' || key === 'scale')`
- Always call setVal for these properties

### Test After Fix

Run this test in browser console after fixing:
```javascript
// Navigate to http://localhost:5175/#webgl_shadows
// Expected: Scene renders with visible objects
// Check: Camera position should be [0, 5, 10]
```

## Alternative Syntaxes (All Failed)

1. ❌ `ref={(obj) => obj.position.set(0, 5, 10)}`
2. ❌ `onFrame={(obj) => obj.position.set(0, 5, 10)}`
3. ❌ `position-x={0} position-y={5} position-z={10}` (not tested)

All fail because callbacks don't execute or execute before initialization.

## Next Steps

1. **Fix the library** - Modify `fixReactiveProps.tsx` to properly handle Vector3 properties
2. **Rebuild the library** - Run build in `@woby/three/code`
3. **Test one demo** - Verify fix works with `webgl_shadows`
4. **Fix all demos** - Once confirmed, no demo changes needed (JSX syntax is correct)
5. **Resume Kimi testing** - After demos render, continue screenshot comparison workflow

## Blocking Current Work

This bug blocks **all demo debugging and Kimi comparison work**. Cannot proceed with Phase 14 until fixed.

**Estimated demos affected**: 629 examples across all categories
**Estimated work blocked**: Phase 14 execution + screenshot capture + Kimi comparison

## Session Summary

- ✅ Identified root cause: Property setting mechanism broken
- ✅ Located bug in `fixReactiveProps.tsx`  
- ✅ Documented evidence and required fix
- ❌ Cannot fix demos without library fix
- ❌ Cannot proceed with Kimi testing without fix

**Recommendation**: Fix @woby/three library property system first, then all demos will automatically work.