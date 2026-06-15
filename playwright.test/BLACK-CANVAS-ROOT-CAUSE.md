# Black Canvas Root Cause Analysis

## Date: 2026-06-09
## Status: **CRITICAL BUG FOUND**

## Root Cause

**ALL Three.js objects (meshes, cameras, lights) have their positions at [0, 0, 0] despite JSX attributes specifying different positions.**

## Evidence

### SceneDebugger Output (webgl_shadows demo)

**Camera**:
- Expected: `position={[0, 5, 10]}`
- Actual: `position: [0, 0, 0]` ❌

**Meshes**:
- Sphere: Expected `[-2, 1, 0]`, Actual `[0, 0, 0]` ❌
- Box: Expected `[2, 0.5, 0]`, Actual `[0, 0, 0]` ❌
- Torus: Expected `[0, 1.5, -3]`, Actual `[0, 0, 0]` ❌
- Plane: Expected rotation `[-Math.PI/2, 0, 0]`, not verified but likely also wrong

### Why This Causes Black Canvas

1. Camera is at origin [0, 0, 0] instead of [0, 5, 10]
2. Camera is likely inside or too close to objects
3. Camera frustum doesn't contain any visible objects
4. Result: renders black/empty scene

## Code Analysis

### Property Setting Logic (fixReactiveProps.tsx:124-142)

```typescript
const f = getFunc(instance[key], instance)

if (f)
    if (Array.isArray(value)) {
        const arr = isNestedArray(value) ? value : [value]
        arr.forEach(v => {
            if (Array.isArray(v))
                // If function expects multiple arguments, spread the array
                f.length > 1 || !f.length ? f(...v) : f(v)
            else
                f(v)
        })
    }
    else
        f(isNull(value) ? def : value)
else
    instance[key] = isNull(value) ? def : value
```

**Expected behavior**:
- `position={[0, 5, 10]}` → `f = position.set.bind(position)`
- Since value is `[0, 5, 10]` (array), line 133 calls `f(...[0, 5, 10])`
- This should execute `position.set(0, 5, 10)`

**Actual behavior**: Positions remain [0, 0, 0]

### Why It's Not Working

Two possibilities:
1. **`objKey.position` is `false`** - The `position` property is not being recognized as a valid object property in `objProps`
2. **`setVal` is never called for `position`** - The property is being skipped in the loop

From fixReactiveProps.tsx line 95-104:
```typescript
else if (objKey[key])  //exists in class instance
    if (!!v && !isPrimitive(v) && (isFunction(v) || isObservableR(v)))
        useEffect(() => {
            const c = $$(instance)
            if (!c) return
            setVal($$(v), cloneDef(def[key]), key, c)
        })
    else
        setVal($$(v), cloneDef(def[key]), key, instance)
```

If `objKey.position` is falsy, the property is never processed.

## Next Steps

1. **Verify `objKey.position`** - Add logging to check if `position` is in `objKey` for meshes and cameras
2. **Check Object3D import order** - Ensure Object3D.ts is imported before components are created
3. **Alternative syntax testing**:
   - Test with hyphenated attribute: `position-x={0} position-y={5} position-z={10}`
   - Test with ref callback: `ref={(obj) => obj.position.set(0, 5, 10)}`
   - Test with onFrame: `onFrame={(obj) => { if (obj.position.x === 0) obj.position.set(0, 5, 10) }}`

## Failed Workarounds

1. ❌ `ref={(cam) => if (cam) cam.position.set(0, 5, 10)}` - Still [0, 0, 0]
2. ❌ `onFrame={(cam) => { if (cam.position.equals(new THREE.Vector3(0, 0, 0))) cam.position.set(0, 5, 10) }}` - Still [0, 0, 0]

## Hypothesis

The `ref` and `onFrame` callbacks may not be executing, or they're executing before the Three.js object is fully initialized. This suggests a timing/initialization order issue in the Woby reactive system.
