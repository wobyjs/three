# Phase 15: Sync actual coverage + port examples with visual verification — Pattern Map

**Mapped:** 2026-06-17
**Files analyzed:** 6 (4 new demo TSX files representative of porting work + 2 planning docs to update)
**Analogs found:** 5 / 6

---

## File Classification

| New/Modified File | Role | Data Flow | Closest Analog | Match Quality |
|-------------------|------|-----------|----------------|---------------|
| `demo/src/<NewDemo>.tsx` (simple scene) | component | request-response (rAF loop) | `demo/src/WebGLCamera.tsx` | exact |
| `demo/src/<NewDemo>.tsx` (with asset loading) | component | file-I/O + request-response | `demo/src/WebGLAnimationSkinningMorph.tsx` | exact |
| `demo/src/<NewDemo>.tsx` (with GUI + OrbitControls) | component | request-response | `demo/src/WebGLLightsSpotlight.tsx` | exact |
| `demo/src/<NewDemo>.tsx` (GUI + clipping/non-animated) | component | event-driven | `demo/src/WebGLClippingIntersection.tsx` | exact |
| `demo/src/registry.ts` (add entries / fix duplicate categories) | config | CRUD | `demo/src/registry.ts` (existing) | self-referential |
| `.planning/STATE.md` (update coverage numbers) | config | transform | `.planning/STATE.md` (existing) | self-referential |

---

## Pattern Assignments

### `demo/src/<NewDemo>.tsx` — Canonical init3D Pattern (simple, no asset loading)

**Analog:** `demo/src/WebGLCamera.tsx` (lines 1–181)

**Imports pattern** (lines 1–4):
```typescript
/** @jsxImportSource woby */
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
```

**Module-level cleanup sentinel** (line 6):
```typescript
let _cleanupFn: (() => void) | null = null
```

**Core init3D pattern** (lines 8–172):
```typescript
const init3D = (container: HTMLElement) => {
    if (_cleanupFn) { _cleanupFn(); _cleanupFn = null }

    let SCREEN_WIDTH = container.clientWidth || window.innerWidth
    let SCREEN_HEIGHT = container.clientHeight || window.innerHeight

    // ... scene setup, camera, renderer ...

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT)
    container.appendChild(renderer.domElement)

    const stats = new Stats()
    container.appendChild(stats.dom)

    // event listeners
    const onKeyDown = (event: KeyboardEvent) => { /* ... */ }
    document.addEventListener('keydown', onKeyDown)
    const onResize = () => {
        SCREEN_WIDTH = container.clientWidth || window.innerWidth
        SCREEN_HEIGHT = container.clientHeight || window.innerHeight
        renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT)
        camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    let animId: number
    const animate = () => {
        animId = requestAnimationFrame(animate)
        render()
        stats.update()
    }
    animate()

    _cleanupFn = () => {
        cancelAnimationFrame(animId)
        window.removeEventListener('resize', onResize)
        document.removeEventListener('keydown', onKeyDown)
        if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
        if (container.contains(stats.dom)) container.removeChild(stats.dom)
        renderer.dispose()
    }
}
```

**Export pattern** (lines 175–181):
```typescript
export const WebGLCamera = () => (
    <div style="width:100%;height:100%;position:relative">
        <div ref={(el: HTMLElement | null) => { if (el) init3D(el) }} style="width:100%;height:100%" />
    </div>
)
export default WebGLCamera
```

**Key rules:**
- Outer `div` has `position:relative` to contain Stats DOM element
- Inner `div` carries the `ref` callback
- Container size: `container.clientWidth || window.innerWidth` (fallback for zero-size cases)
- Resize handler uses `container.clientWidth`, not `window.innerWidth`
- All DOM children appended to `container`, never `document.body`

---

### `demo/src/<NewDemo>.tsx` — Asset-Loading Demo (GLTF + GUI + AnimationMixer)

**Analog:** `demo/src/WebGLAnimationSkinningMorph.tsx` (lines 1–169)

**Imports pattern** (lines 1–6):
```typescript
/** @jsxImportSource woby */
import * as THREE from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
```

**Asset loading pattern** (lines 45–52):
```typescript
const loader = new GLTFLoader()
loader.load('models/gltf/RobotExpressive/RobotExpressive.glb', function (gltf) {
    model = gltf.scene
    scene.add(model)
    createGUI(model, gltf.animations)
}, undefined, function (e) {
    console.error(e)
})
```

**setAnimationLoop variant** (lines 54–58):
```typescript
renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(container.clientWidth || window.innerWidth, container.clientHeight || window.innerHeight)
renderer.setAnimationLoop(animate)
container.appendChild(renderer.domElement)
```

**Type-safe material pattern** (lines 41–43):
```typescript
;(grid.material as THREE.Material & { opacity: number; transparent: boolean }).opacity = 0.2
;(grid.material as THREE.Material & { opacity: number; transparent: boolean }).transparent = true
```

**GUI without container arg** (line 67 — NOTE: attaches to body; see cleanup):
```typescript
gui = new GUI()
```

**Cleanup with GUI + setAnimationLoop** (lines 154–161):
```typescript
_cleanupFn = () => {
    renderer.setAnimationLoop(null)
    window.removeEventListener('resize', onResize)
    if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    if (container.contains(stats.dom)) container.removeChild(stats.dom)
    if (gui) gui.destroy()
    renderer.dispose()
}
```

**Asset path convention:** Paths are relative to `http://localhost:5173/`. Assets live in `demo/public/` (e.g., `demo/public/models/gltf/`, `demo/public/textures/`). Use paths like `'models/gltf/MyModel/MyModel.glb'` with no leading slash.

---

### `demo/src/<NewDemo>.tsx` — OrbitControls + GUI Demo

**Analog:** `demo/src/WebGLLightsSpotlight.tsx` (lines 1–141)

**Imports pattern** (lines 1–8):
```typescript
/** @jsxImportSource woby */
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js'
import {
    WebGLRenderer, Scene, PerspectiveCamera, SpotLight, HemisphereLight,
    SpotLightHelper, CameraHelper, PlaneGeometry, MeshLambertMaterial, Mesh,
    TextureLoader, LinearFilter, SRGBColorSpace, NeutralToneMapping, PCFShadowMap
} from 'three'
```
Note: named imports from `'three'` (rather than `import * as THREE`) are acceptable and seen in newer demos.

**OrbitControls setup** (lines 35–40):
```typescript
const controls = new OrbitControls( camera, renderer.domElement )
controls.minDistance = 2
controls.maxDistance = 10
controls.maxPolarAngle = Math.PI / 2
controls.target.set( 0, 1, 0 )
controls.update()
```

**setAnimationLoop cleanup** (lines 129–133):
```typescript
_cleanupFn = () => {
    window.removeEventListener('resize', onWindowResize)
    if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    renderer.dispose()
}
```
Note: `controls.dispose()` should also be called when OrbitControls is used (see WebGLClippingIntersection analog — line 128).

---

### `demo/src/<NewDemo>.tsx` — GUI + Event-Driven (no continuous rAF)

**Analog:** `demo/src/WebGLClippingIntersection.tsx` (lines 1–139)

**Variable name note:** This file uses `cleanup` instead of `_cleanupFn`. Both are acceptable; prefer `_cleanupFn` (the canonical name from WebGLCamera.tsx) for new files.

**GUI + OrbitControls cleanup** (lines 120–129):
```typescript
cleanup = () => {
    window.removeEventListener('resize', onResize)
    controls.removeEventListener('change', render)
    gui.destroy()
    if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
    }
    renderer.dispose()
    controls.dispose()
}
```

**Alternative export form** (lines 132–137):
```typescript
export const WebGLClippingIntersection = () => {
    return <div
        ref={(el: HTMLElement | null) => { if (el) init(el) }}
        style="width:100%;height:100%;overflow:hidden;background:#000"
    />
}
```
Note: The two-div form (outer `position:relative` + inner `ref`) from WebGLCamera.tsx is preferred for demos that use Stats.dom. The single-div form is acceptable when there is no Stats overlay.

---

### `demo/src/registry.ts` — Add Demo Entry

**Analog:** `demo/src/registry.ts` (lines 1–199, existing structure)

**DemoEntry structure** (lines 3–9):
```typescript
export interface DemoEntry {
    id: string
    name: string
    category: string
    component: () => Promise<{ default: () => JSX.Element }>
    thumbnail?: string
}
```

**Adding to existing category** — find the correct `CategoryEntry` block and append to its `demos` array:
```typescript
{ id: 'webgl_animation_walk', name: 'Animation Walk', category: 'animation', component: () => import('./WebGLAnimationWalk') },
```

**Rules:**
- `id` must exactly match the Three.js example URL slug (no `.html`, no custom suffix)
- `category` must match an existing `CategoryEntry.id`
- `component` is a lazy import arrow function — no file extension needed
- Do NOT duplicate a category block; search for the existing block first

**Duplicate category fix** — The `textures` category appears at lines 113–119 AND 173–178; the `css3d` category appears twice as well. Merge by moving all `demos` entries into the first occurrence and deleting the second `CategoryEntry` block.

---

### `.planning/STATE.md` — Documentation Sync

**Analog:** `.planning/STATE.md` (lines 1–130, existing document)

**Format:** YAML front-matter + Markdown sections. Update the `## Metrics` table (lines 56–59) and add a `## Phase 15 Progress` section parallel to the existing `## Phase 14 Progress` section.

**Correct numbers to use** (from RESEARCH.md ground truth):

| Metric | Stale Value in STATE.md | Correct Value |
|--------|------------------------|---------------|
| Total ported (registered) | 469 (74%) | 200 |
| Total TSX demo files (incl. unregistered) | 469 | 250 |
| REMAINING_WORK.md stated | 104/581 (18%) | ~429/629 still unregistered |
| Visual verification passed (Kimi >= 0.7) | 7 (Phase 14 note) | 8 (per kimi-comparison-report-fixed.json) |

**8 visually verified demo IDs** (to mark in STATE.md):
1. `webgl_shadowmap_vsm`
2. `webgl_clipping_intersection`
3. `webgl_geometry_colors`
4. `webgl_interactive_cubes_gpu`
5. `webgl_lights_spotlight`
6. `webgl_lines_dashed`
7. `webgl_points_waves`
8. `webgl_postprocessing_smaa`

---

## Shared Patterns

### Cleanup Closure (applies to ALL new TSX demo files)
**Source:** `demo/src/WebGLCamera.tsx` lines 165–172
```typescript
_cleanupFn = () => {
    cancelAnimationFrame(animId)                                          // if using rAF
    // renderer.setAnimationLoop(null)                                    // if using setAnimationLoop
    window.removeEventListener('resize', onResize)
    document.removeEventListener('keydown', onKeyDown)                   // if key events registered
    if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
    if (container.contains(stats.dom)) container.removeChild(stats.dom)  // if Stats used
    if (gui) gui.destroy()                                               // if GUI used
    if (controls) controls.dispose()                                     // if OrbitControls used
    renderer.dispose()
}
```
**Apply to:** Every new demo TSX file.

### Stats DOM Pattern (applies to demos using fps counter)
**Source:** `demo/src/WebGLCamera.tsx` lines 89–90 and 169–170
```typescript
const stats = new Stats()
container.appendChild(stats.dom)
// ... in cleanup:
if (container.contains(stats.dom)) container.removeChild(stats.dom)
```
**Apply to:** Any demo that shows an FPS counter.

### Type-Safe Material Access (applies to demos accessing specific material properties)
**Source:** `demo/src/WebGLAnimationSkinningMorph.tsx` lines 41–43
```typescript
;(grid.material as THREE.Material & { opacity: number; transparent: boolean }).opacity = 0.2
;(grid.material as THREE.Material & { opacity: number; transparent: boolean }).transparent = true
```
**Apply to:** Any demo where generic `Object3D.material` properties are accessed. Never use `as any` (NFR-2.1).

### Container Size Fallback
**Source:** `demo/src/WebGLCamera.tsx` lines 11–12 and `demo/src/WebGLAnimationSkinningMorph.tsx` line 17
```typescript
let SCREEN_WIDTH = container.clientWidth || window.innerWidth
let SCREEN_HEIGHT = container.clientHeight || window.innerHeight
```
**Apply to:** All new demo TSX files — prevents zero-size canvas when container hasn't laid out yet.

### JSX Header
**Source:** Every demo file line 1
```typescript
/** @jsxImportSource woby */
```
**Apply to:** Every new TSX file in `demo/src/`.

---

## No Analog Found

| File | Role | Data Flow | Reason |
|------|------|-----------|--------|
| `.planning/ROADMAP.md` summary table update | config | transform | Pure doc edit, no code analog needed |

---

## Metadata

**Analog search scope:** `demo/src/` (TSX files), `.planning/` (STATE.md, ROADMAP.md)
**Files scanned:** 6 analog files read directly (WebGLCamera.tsx, WebGLAnimationSkinningMorph.tsx, WebGLLightsSpotlight.tsx, WebGLClippingIntersection.tsx, registry.ts, STATE.md)
**Pattern extraction date:** 2026-06-17

### Decision Cross-Reference

| CONTEXT.md Decision | Pattern Source |
|--------------------|----------------|
| D-01: init3D container-ref pattern | WebGLCamera.tsx (exact) |
| D-02: 1:1 fidelity (same assets, same GUI) | WebGLAnimationSkinningMorph.tsx |
| D-04: registry.ts registration format | registry.ts lines 3–9, 17–29 |
| D-06: Documentation audit numbers | STATE.md + RESEARCH.md ground truth table |
| NFR-2.1: No `as any` | WebGLAnimationSkinningMorph.tsx lines 41–43 (type union pattern) |
