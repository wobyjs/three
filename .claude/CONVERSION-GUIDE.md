# @woby/three Imperative → Declarative JSX Conversion Guide

**Hard rule:** No `new THREE.{Mesh|Scene|Renderer|Camera|Light|Geometry|Material|Group|Sprite|Line|Points|InstancedMesh|...}` in scene-graph construction. All scene objects must be JSX intrinsics under `<Canvas3D>`.

**OK to keep imperative:** Math primitives (`Vector2`, `Vector3`, `Color`, `Matrix4`, `Quaternion`, `BufferAttribute`, `DoubleSide`, `MathUtils`, `TextureLoader`, helper functions called inside `useEffect` to mutate refs). Geometry rebuilds via `new TLatheGeometry(...)` inside `useEffect` when reactive params drive it (Tier-B pattern from pilot).

## Reference pilot
`demo/src/WebGLGeometryLathe.tsx` — vase rendering with `<latheGeometry>`, vertex colors, GUI panel, auto-rotate.
`demo/src/Box3.tsx` — minimal canonical reference (scene+lights+mesh+camera+orbitControls).

## Skeleton (paste-and-edit)

```tsx
/** @jsxImportSource @woby/three */
import { $, $$, useEffect } from "woby"
import { Color, /* math types only */ } from "three"

import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { Event } from '@woby/three/lib/components/Event'

// Register intrinsics — ONE side-effect import per JSX tag you use
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/renderers/WebGLRenderer'
import '@woby/three/src/lights/AmbientLight'
import '@woby/three/src/lights/DirectionalLight'
import '@woby/three/src/objects/Mesh'
import '@woby/three/src/geometries/BoxGeometry'
import '@woby/three/src/materials/MeshStandardMaterial'
import '@woby/three/examples/jsm/controls/OrbitControls'

export const MyDemo = () => {
    return <Canvas3D>
        <webglRenderer antialias setPixelRatio={[window.devicePixelRatio]}
                       setSize={[window.innerWidth, window.innerHeight]} />
        <scene background={new Color(0x111111)}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 10, 7]} intensity={1.0} />
            <mesh position={[0, 0, 0]} onFrame={(ref) => { ref.rotation.y += 0.01 }}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={0xff0055} />
            </mesh>
        </scene>
        <perspectiveCamera args={[50, window.innerWidth / window.innerHeight, 0.1, 1000]}
                           position={[0, 2, 6]} />
        <orbitControls enableDamping={true} />
        <Event />
    </Canvas3D>
}

export default MyDemo
```

## Mapping table

| Imperative                                              | Declarative                                                                              |
|---------------------------------------------------------|------------------------------------------------------------------------------------------|
| `new THREE.WebGLRenderer({ antialias: true })`          | `<webglRenderer antialias setPixelRatio={[window.devicePixelRatio]} setSize={[w,h]} />`  |
| `new THREE.Scene(); scene.background = new Color(x)`    | `<scene background={new Color(x)}>...</scene>`                                           |
| `new THREE.PerspectiveCamera(50, w/h, 0.1, 1000)`       | `<perspectiveCamera args={[50, w/h, 0.1, 1000]} position={[x,y,z]} />`                   |
| `new THREE.OrthographicCamera(l,r,t,b,n,f)`             | `<orthographicCamera args={[l,r,t,b,n,f]} />`                                            |
| `new THREE.AmbientLight(0xffffff, 0.5)`                 | `<ambientLight color={0xffffff} intensity={0.5} />`                                      |
| `new THREE.DirectionalLight(0xffffff, 1)`               | `<directionalLight color={0xffffff} intensity={1} position={[x,y,z]} />`                 |
| `new THREE.PointLight(0xffffff, 1, 100)`                | `<pointLight color={0xffffff} intensity={1} distance={100} position={[x,y,z]} />`        |
| `new THREE.SpotLight(...)`                              | `<spotLight ... />`                                                                      |
| `new THREE.HemisphereLight(top, bottom, intensity)`     | `<hemisphereLight args={[top, bottom, intensity]} />`                                    |
| `new THREE.Mesh(geom, mat)`                             | `<mesh><xxxGeometry/><xxxMaterial/></mesh>`                                              |
| `new THREE.Group()`                                     | `<group>...</group>`                                                                     |
| `new THREE.BoxGeometry(1,1,1)`                          | `<boxGeometry args={[1,1,1]} />`                                                         |
| `new THREE.SphereGeometry(r, w, h)`                     | `<sphereGeometry args={[r,w,h]} />`                                                      |
| `new THREE.PlaneGeometry(w, h)`                         | `<planeGeometry args={[w,h]} />`                                                         |
| `new THREE.ConeGeometry(r,h,seg)`                       | `<coneGeometry args={[r,h,seg]} />`                                                      |
| `new THREE.CylinderGeometry(rt,rb,h,seg)`               | `<cylinderGeometry args={[rt,rb,h,seg]} />`                                              |
| `new THREE.TorusGeometry(r,t,rs,ts)`                    | `<torusGeometry args={[r,t,rs,ts]} />`                                                   |
| `new THREE.TorusKnotGeometry(r,t,t1,t2)`                | `<torusKnotGeometry args={[r,t,t1,t2]} />`                                               |
| `new THREE.LatheGeometry(points, seg, ps, pl)`          | `<latheGeometry args={[points,seg,ps,pl]} />`                                            |
| `new THREE.MeshStandardMaterial({...})`                 | `<meshStandardMaterial color={...} roughness={...} metalness={...} />`                   |
| `new THREE.MeshBasicMaterial({...})`                    | `<meshBasicMaterial color={...} wireframe={...} />`                                      |
| `new THREE.MeshPhongMaterial({...})`                    | `<meshPhongMaterial color={...} shininess={...} />`                                      |
| `new THREE.GridHelper(20, 20)`                          | `<gridHelper args={[20, 20]} />`                                                         |
| `new OrbitControls(camera, renderer.domElement)`        | `<orbitControls enableDamping={true} />`                                                 |
| `scene.add(mesh)`                                       | Just put `<mesh>` as child of `<scene>`                                                  |
| `renderer.setAnimationLoop(animate)`                    | Auto by Canvas3D — use `onFrame={ref => ...}` per mesh OR `useFrame(fn)` programmatic    |
| `controls.update(); renderer.render(scene, camera)`     | Auto by Canvas3D                                                                         |
| `window.addEventListener('resize', ...)`                | Handled by `<Event />`                                                                   |

## Patterns

### Reactive props
```tsx
const hovered = $(false)
<meshStandardMaterial color={() => $$(hovered) ? 'hotpink' : 'orange'} />
```

### Refs for imperative tweaks
```tsx
import type { Mesh as TMesh, MeshPhongMaterial as TMeshPhongMaterial } from 'three'
const meshRef = $<TMesh>(null)
const matRef = $<TMeshPhongMaterial>(null)
// ...
<mesh ref={meshRef}>
    <boxGeometry args={[1,1,1]} />
    <meshPhongMaterial ref={matRef} />
</mesh>
// In useEffect: const m = $$(meshRef); if (m) m.geometry.dispose(); m.geometry = newGeom
```

### Per-frame animation
```tsx
<mesh onFrame={(ref) => { ref.rotation.y += 0.01 }}>...</mesh>
// OR
import { useFrame } from '@woby/three/lib/hooks/useFrame'
useFrame(({ gl }) => { /* runs every frame */ })
```

### GUI (lil-gui) — imperative, drives observables
```tsx
import GUI from 'three/addons/libs/lil-gui.module.min.js'
const params = { speed: 1 }
const speedObs = $(1)
useEffect(() => {
    const gui = new GUI()
    gui.add(params, 'speed', 0, 5).onChange((v: number) => speedObs(v))
    return () => gui.destroy()
})
```

### Reactive geometry rebuild (Tier-B)
When geometry depends on reactive params, the cleanest pattern is to create a `<mesh ref>`, give it a placeholder `<xxxGeometry args={[...defaults]}/>`, and rebuild geometry imperatively in a `useEffect`:
```tsx
useEffect(() => {
    const m = $$(meshRef); if (!m) return
    m.geometry?.dispose()
    m.geometry = new TXxxGeometry(/* reactive args */)
})
```
This satisfies "no `new THREE.Mesh`" while letting reactive geometry inputs work.

### Loaders, postprocessing, complex addons
Math/loader/postprocessing imports stay from `'three'` or `'three/addons/...'`. The constraint is on **scene-graph construction**, not on math, loaders, helpers, or postprocessing passes (EffectComposer, RenderPass, UnrealBloomPass etc. stay imperative — these are render-pipeline objects, not scene-graph objects).

## Auto-behavior provided by `<Canvas3D>`
- Mounts WebGLRenderer canvas into the wrapper div
- Wires `renderer.setAnimationLoop` to invoke all registered frame callbacks
- Auto-renders: when `<scene>` + `<perspectiveCamera>` + `<webglRenderer>` all exist as children, an internal `useEffect` pushes `() => renderer.render(scene, camera)` into the frames queue
- Cleanup: woby's lifecycle disposes children when component unmounts — **no manual `_cleanupFn`**, no `if (_cleanupFn) _cleanupFn()` guard

## What to DELETE during conversion
- `_cleanupFn` module-level variable and its guard
- `renderer.setAnimationLoop(animate)` / `requestAnimationFrame(animate)` boilerplate
- `function animate() { ... renderer.render(scene, camera) }`
- `function onResize() { camera.aspect = ...; renderer.setSize(...) }` + the `addEventListener('resize')`
- `el.appendChild(renderer.domElement)` div ref pattern
- All `scene.add(x)` calls
- The `return <div ref={el => el.appendChild(...)} />` final return

## What to KEEP
- Loader code (`new GLTFLoader().load(...)`)
- Postprocessing setup (EffectComposer, passes)
- Math (Vector*, Color, Matrix*, MathUtils)
- Helper functions that mutate via refs in useEffect
- GUI panel setup (imperative driving observables)
- Texture creation (`new TextureLoader().load(...)`)
- Algorithm code (noise, fractal, physics math, etc.)

## Pragma & imports
- First line MUST be `/** @jsxImportSource @woby/three */` (not `woby`)
- Import side-effects from `'@woby/three/src/...'` to register intrinsics
- The `code/src/` directory under `@woby/three` is what the vite alias resolves to

## Skip list (do NOT convert in this pass)
- Files with `webxr`, `webgpu`, `physics` (ammo), `css3d_`, `audio` in heavy use of three internals — too complex, often need framework features that don't have intrinsics yet
- Files importing `dat.gui` (legacy GUI lib not in deps) — note in failure log
- Anything missing dep deps (lil-gui import from non-min paths, three-bvh-csg, ParametricFunctions) — note in failure log

## Per-file workflow for the converter agent
1. Read the imperative file
2. Identify all `new THREE.X` for scene-graph objects
3. Identify lights, geometries, materials, mesh hierarchy
4. Identify animation loop (rotations/translations/uniforms)
5. Identify GUI controls (lil-gui calls)
6. Write the JSX equivalent following the skeleton
7. Keep math/loader/postprocessing imperative
8. Use `onFrame` for per-mesh animation, `useFrame` for global
9. Use refs + useEffect for reactive geometry rebuilds
10. Delete cleanup/animate/resize boilerplate
11. **Do NOT screenshot** — main thread will batch screenshot+compare after all agents finish
12. Append the source file path to `.claude/conversion-log.txt` after each successful conversion
13. If a file is too complex or has missing deps, append to `.claude/conversion-skip.txt` with reason
