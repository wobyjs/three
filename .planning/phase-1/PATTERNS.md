# Phase 1: Porting Patterns

**Purpose:** Document all patterns for porting Three.js examples from vanilla JavaScript to @woby/three JSX syntax.

---

## Pattern 1: Constructor Args via `args` Prop

**Vanilla Three.js:**
```javascript
const geometry = new THREE.BoxGeometry(1, 2, 3)
const material = new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5 })
```

**@woby/three JSX:**
```tsx
<boxGeometry args={[1, 2, 3]} />
<meshStandardMaterial color={0xff0000} roughness={0.5} />
```

**Rule:** Constructor parameters are passed as an array via the `args` prop. The array elements map positionally to the Three.js constructor signature.

**Why:** Three.js classes have varying constructor signatures. The `args` prop provides a uniform way to pass constructor arguments without needing to know each class's specific parameter names.

---

## Pattern 2: Nested Properties via Kebab-Case

**Vanilla Three.js:**
```javascript
light.shadow.camera.far = 333
light.shadow.camera.near = 0.1
mesh.position.x = 5
```

**@woby/three JSX:**
```tsx
<pointLight shadow-camera-far={333} shadow-camera-near={0.1} />
<mesh position-x={5} />
```

**Rule:** Nested property paths are expressed as kebab-case attribute names. Each dot in the path becomes a hyphen.

**Why:** JSX attributes must be valid JavaScript identifiers. Kebab-case allows expressing arbitrary property paths while remaining valid JSX syntax.

---

## Pattern 3: Reactive Props with Observables

**Vanilla Three.js:**
```javascript
let scale = 1
mesh.scale.set(scale, scale, scale)
// Later: scale = 2 (mesh doesn't update)
```

**@woby/three JSX:**
```tsx
const scale = $(1)

<mesh scale={() => [$$(scale), $$(scale), $$(scale)]} />

// Later: scale(2) - mesh updates automatically
```

**Rule:**
- Use `$()` from Woby to create reactive state
- Use `$$()` to read the current value
- Pass functions as props for reactive updates

**Why:** Woby's reactive system automatically tracks dependencies and updates the Three.js object when observables change.

---

## Pattern 4: Scene Graph Assembly via JSX Nesting

**Vanilla Three.js:**
```javascript
const scene = new THREE.Scene()
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

const light = new THREE.PointLight()
mesh.add(light)  // Light is child of mesh
```

**@woby/three JSX:**
```tsx
<scene>
    <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
        <pointLight position={[0, 1, 0]} />
    </mesh>
</scene>
```

**Rule:** JSX nesting establishes parent-child relationships. Children are automatically added to their parent Object3D.

**Why:** Declarative scene graphs are easier to read and maintain than imperative `add()` calls.

---

## Pattern 5: Animation with `useFrame` Hook

**Vanilla Three.js:**
```javascript
function animate() {
    requestAnimationFrame(animate)
    mesh.rotation.x += 0.01
    renderer.render(scene, camera)
}
animate()
```

**@woby/three JSX:**
```tsx
const ref = $<THREE.Mesh>()

useFrame(() => {
    const mesh = $$(ref)
    if (mesh) {
        mesh.rotation.x += 0.01
    }
})

return (
    <canvas3D>
        <mesh ref={ref}>...</mesh>
    </canvas3D>
)
```

**Rule:**
- Use `useFrame()` to register per-frame callbacks
- Use `$()` for refs, `$$()` to access the current value
- Always null-check dereferenced refs

**Why:** `useFrame` integrates with the Canvas3D render loop, ensuring animations run at the correct frame rate.

---

## Pattern 6: Method Calls via Setter Syntax

**Vanilla Three.js:**
```javascript
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
```

**@woby/three JSX:**
```tsx
<webGLRenderer
    setPixelRatio={[window.devicePixelRatio]}
    setSize={[window.innerWidth, window.innerHeight]}
/>
```

**Rule:** Method calls are expressed as props with array values containing the method arguments.

**Why:** Allows calling initialization methods declaratively alongside property assignments.

---

## Pattern 7: Context Access with Hooks

**Vanilla Three.js:**
```javascript
// Manual management
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera()
const renderer = new THREE.WebGLRenderer()
```

**@woby/three JSX:**
```tsx
const { scene, update } = useThree()
const camera = useCamera<THREE.PerspectiveCamera>()
const renderer = useRenderer<THREE.WebGLRenderer>()
```

**Rule:**
- `useThree()` returns context object with `scenes`, `cameras`, `renderers`, `frames`, `update`
- `useCamera<T>()` returns the active camera
- `useRenderer<T>()` returns the active renderer

**CRITICAL:** Always use `$$()` to read context arrays:
```tsx
// CORRECT
const scene = $$(scenes)[0]

// WRONG - will cause issues
const scene = scenes()[0]
```

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: Using `$()` Instead of `$$()` for Context Arrays

```tsx
// WRONG
const { scenes } = useThree()
const scene = scenes()[0]  // Returns observable, not value

// CORRECT
const { scenes } = useThree()
const scene = $$(scenes)[0]  // Returns actual Scene object
```

### Anti-Pattern 2: Single Child in Mesh

```tsx
// WRONG - will fail silently
<mesh>
    <boxGeometry args={[1, 1, 1]} />
</mesh>

// CORRECT - both geometry and material required
<mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="orange" />
</mesh>
```

### Anti-Pattern 3: Using `as any` Type Casts

```tsx
// WRONG - hides type errors
const mesh = <mesh ref={ref} /> as any

// CORRECT - fix the type or use proper typing
const mesh = <mesh ref={ref} />
```

### Anti-Pattern 4: Wrong Import Order

```tsx
// WRONG - child before parent
import '../code/src/geometries/BoxGeometry'
import '../code/src/objects/Mesh'  // Mesh spreads from Object3D

// CORRECT - parent before child
import '../code/src/objects/Mesh'
import '../code/src/geometries/BoxGeometry'
```

---

## Import Order Requirements

The registration system uses global registries populated by import side effects. Order matters:

1. **Core classes first:** `Scene`, `Object3D`, `Mesh`, `Camera`
2. **Geometry classes second:** `BoxGeometry`, `SphereGeometry`, etc.
3. **Material classes third:** `MeshStandardMaterial`, `MeshBasicMaterial`, etc.
4. **Light classes fourth:** `AmbientLight`, `PointLight`, etc.
5. **Renderer last:** `WebGLRenderer`

**Example test setup:**
```tsx
import './setup'
import './registry-seeds'

// Parent wrappers before children
import '../code/src/scenes/Scene'
import '../code/src/objects/Mesh'
import '../code/src/geometries/BoxGeometry'
import '../code/src/materials/MeshStandardMaterial'
import '../code/src/lights/AmbientLight'
```

---

## Testing Patterns

### Registration Test Pattern

```tsx
function checkRegistration(name: string, threeKey: string) {
    test(`${name} registered in consParams`, () => ok((consParams as any)[name] !== undefined))
    test(`${name} registered in objProps`, () => ok((objProps as any)[name] !== undefined))
    test(`${name} registered in defaults`, () => ok((defaults as any)[name] !== undefined))
    test(`Three.${threeKey} registered`, () => ok((Three as any)[threeKey] !== undefined))
}
```

### JSX Element Test Pattern

```tsx
test('<mesh /> returns a callable element', () => {
    const el = <mesh />
    ok(typeof el === 'function')
})

test('<mesh />() returns Mesh', () => {
    const mesh = useRoot(() => (<mesh /> as any)())
    ok((mesh as any).isMesh === true)
})
```

---

## Quick Reference

| Vanilla Three.js | @woby/three JSX |
|------------------|-----------------|
| `new THREE.BoxGeometry(1, 2, 3)` | `<boxGeometry args={[1, 2, 3]} />` |
| `mesh.position.x = 5` | `<mesh position-x={5} />` |
| `light.shadow.camera.far = 333` | `<pointLight shadow-camera-far={333} />` |
| `renderer.setSize(w, h)` | `<webGLRenderer setSize={[w, h]} />` |
| `scene.add(mesh)` | `<scene><mesh /></scene>` |
| `requestAnimationFrame(animate)` | `useFrame(() => { ... })` |
