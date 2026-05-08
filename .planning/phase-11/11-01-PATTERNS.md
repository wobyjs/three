# Phase 11: Misc & Games Patterns

**Purpose:** Document patterns for game mechanics, camera controls, exporters, and utility functions.

---

## Pattern 1: Pointer Lock Controls

**Use case:** First-person camera with mouse look and WASD movement.

```tsx
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'

const controlsRef = $<PointerLockControls>()

useEffect(() => {
    const controls = new PointerLockControls(camera, renderer.domElement)
    controlsRef(controls)

    controls.addEventListener('lock', () => {
        isLocked(true)
    })

    controls.addEventListener('unlock', () => {
        isLocked(false)
    })

    return () => controls.dispose()
})

// Movement
useFrame(() => {
    const controls = $$(controlsRef)
    if (!$$(isLocked)) return

    controls.moveRight(-velocity.x * delta)
    controls.moveForward(-velocity.z * delta)
})
```

**Key points:**
- Pointer lock requires user interaction to activate
- `moveRight()` and `moveForward()` for movement
- Dispose on cleanup

---

## Pattern 2: OrbitControls with Damping

**Use case:** Smooth camera orbit with inertia.

```tsx
const controlsRef = $<OrbitControls>()

useFrame(() => {
    const controls = $$(controlsRef)
    if (controls) controls.update()
})

return (
    <orbitControls
        ref={controlsRef}
        enableDamping
        dampingFactor={0.05}
        minDistance={1}
        maxDistance={50}
    />
)
```

**Key points:**
- `enableDamping` requires `update()` in useFrame
- Set distance limits for camera bounds
- Set polar angle limits for ground constraints

---

## Pattern 3: FlyControls

**Use case:** Free flight navigation in 3D space.

```tsx
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'

const controls = new FlyControls(camera, renderer.domElement)
controls.movementSpeed = 1
controls.rollSpeed = 0.005
controls.dragToLook = true

useFrame(() => {
    const delta = clock.getDelta()
    controls.update(delta)
})
```

**Key points:**
- Requires delta time for update
- WASD for movement, mouse for look
- Q/E for roll, Space/Shift for up/down

---

## Pattern 4: TrackballControls

**Use case:** Free-form 3D rotation without constraints.

```tsx
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'

const controls = new TrackballControls(camera, renderer.domElement)
controls.rotateSpeed = 1.0
controls.zoomSpeed = 1.2
controls.panSpeed = 0.8
controls.staticMoving = false
controls.dynamicDampingFactor = 0.3
```

**Key points:**
- No rotation constraints (unlike OrbitControls)
- Dynamic damping for smooth motion
- Static moving for instant response

---

## Pattern 5: TransformControls

**Use case:** Object manipulation (translate, rotate, scale).

```tsx
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'

const transformControls = new TransformControls(camera, renderer.domElement)
scene.add(transformControls)

// Disable orbit controls while transforming
transformControls.addEventListener('dragging-changed', (event) => {
    orbitControls.enabled = !event.value
})

// Mode switching
transformControls.setMode('translate') // or 'rotate', 'scale'
```

**Key points:**
- Add to scene for visualization
- Disable other controls during transform
- Keyboard shortcuts: W (translate), E (rotate), R (scale)

---

## Pattern 6: GLTF Export

**Use case:** Export scene to GLTF/GLB format.

```tsx
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'

const exportGLTF = (scene: THREE.Scene, binary: boolean = false) => {
    const exporter = new GLTFExporter()
    exporter.parse(
        scene,
        (result) => {
            const output = binary
                ? result as ArrayBuffer
                : JSON.stringify(result, null, 2)

            const blob = new Blob(
                [output],
                { type: binary ? 'application/octet-stream' : 'application/json' }
            )
            downloadBlob(blob, binary ? 'scene.glb' : 'scene.gltf')
        },
        (error) => console.error(error),
        { binary }
    )
}

function downloadBlob(blob: Blob, filename: string) {
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = filename
    link.click()
    URL.revokeObjectURL(link.href)
}
```

---

## Pattern 7: STL Export

**Use case:** Export mesh for 3D printing.

```tsx
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js'

const exporter = new STLExporter()
const result = exporter.parse(mesh, { binary: true })

const blob = new Blob([result], { type: 'application/octet-stream' })
downloadBlob(blob, 'model.stl')
```

---

## Pattern 8: USDZ Export

**Use case:** Export for Apple AR Quick Look.

```tsx
import { USDZExporter } from 'three/examples/jsm/exporters/USDZExporter.js'

const exporter = new USDZExporter()
const result = await exporter.parse(scene)

const blob = new Blob([result], { type: 'model/vnd.usdz+zip' })
downloadBlob(blob, 'model.usdz')
```

**Note:** USDZ export is async.

---

## Pattern 9: Box Selection

**Use case:** Select multiple objects with drag box.

```tsx
import { SelectionBox } from 'three/examples/jsm/interactive/SelectionBox.js'
import { SelectionHelper } from 'three/examples/jsm/interactive/SelectionHelper.js'

const selectionBox = new SelectionBox(camera, scene)
const helper = new SelectionHelper(renderer, 'selectBox')

// On pointer down
selectionBox.startPoint.set(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1,
    0.5
)

// On pointer move
selectionBox.endPoint.set(...)
const selected = selectionBox.select()
```

---

## Pattern 10: Perlin Noise Volume

**Use case:** Generate 3D procedural content.

```tsx
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js'

const perlin = new ImprovedNoise()
const data = new Uint8Array(size * size * size)

for (let k = 0; k < size; k++) {
    for (let j = 0; j < size; j++) {
        for (let i = 0; i < size; i++) {
            const x = i / size
            const y = j / size
            const z = k / size

            let noise = perlin.noise(x, y, z)
            noise += 0.5 * perlin.noise(x * 2, y * 2, z * 2)
            noise += 0.25 * perlin.noise(x * 4, y * 4, z * 4)

            data[i + j * size + k * size * size] = (noise + 1) * 127
        }
    }
}

const texture = new THREE.Data3DTexture(data, size, size, size)
```

---

## Pattern 11: Animation Mixer

**Use case:** Play and manage animations.

```tsx
const mixer = new THREE.AnimationMixer(mesh)

// Create animation clip
const positionTrack = new THREE.VectorKeyframeTrack(
    '.position',
    [0, 1, 2],
    [0, 0, 0, 1, 1, 1, 0, 0, 0]
)

const clip = new THREE.AnimationClip('animation', 2, [positionTrack])
const action = mixer.clipAction(clip)
action.play()

useFrame(() => {
    mixer.update(delta)
})
```

---

## Pattern 12: LookAt

**Use case:** Make objects face a target.

```tsx
useFrame(() => {
    followers.forEach(follower => {
        follower.lookAt(target.position)
    })
})
```

---

## Quick Reference

| Control Type | Use Case | Key Method |
|--------------|----------|------------|
| OrbitControls | Orbit around target | `update()` |
| FlyControls | Free flight | `update(delta)` |
| TrackballControls | Free rotation | `update()` |
| PointerLockControls | FPS camera | `moveRight()`, `moveForward()` |
| TransformControls | Object manipulation | `setMode()` |

| Exporter | Format | Use Case |
|----------|--------|----------|
| GLTFExporter | .gltf/.glb | Web, interchange |
| STLExporter | .stl | 3D printing |
| OBJExporter | .obj | Legacy interchange |
| PLYExporter | .ply | Point clouds |
| USDZExporter | .usdz | iOS AR |
| DRACOExporter | .drc | Compressed geometry |