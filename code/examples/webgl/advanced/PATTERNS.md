# Phase 8: WebGL Advanced & TSL Patterns

**Purpose:** Document patterns for advanced WebGL rendering and TSL (Three.js Shading Language) examples.

---

## Pattern 1: BufferGeometry Construction

**Custom buffer geometry with attributes:**

```tsx
<mesh>
    <bufferGeometry>
        <bufferAttribute
            attach="attributes-position"
            args={[vertices, 3]}
        />
        <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
        />
        <bufferAttribute
            attach="index"
            args={[indices, 1]}
        />
    </bufferGeometry>
    <meshBasicMaterial vertexColors />
</mesh>
```

**Key points:**
- Use `attach` prop to bind attributes to geometry
- `args` passes the typed array and item size
- Index attribute for indexed geometry

---

## Pattern 2: Instanced Rendering

**InstancedMesh for efficient rendering:**

```tsx
const INSTANCE_COUNT = 1000
const dummy = new Object3D()

<instancedMesh ref={meshRef} args={[undefined, undefined, INSTANCE_COUNT]}>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color={0x4ecdc4} />
</instancedMesh>

// In useFrame
for (let i = 0; i < INSTANCE_COUNT; i++) {
    dummy.position.copy(data[i].position)
    dummy.rotation.copy(data[i].rotation)
    dummy.updateMatrix()
    mesh.setMatrixAt(i, dummy.matrix)
}
mesh.instanceMatrix.needsUpdate = true
```

---

## Pattern 3: Custom Shaders

**ShaderMaterial with uniforms:**

```tsx
const vertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
uniform float time;
varying vec2 vUv;
void main() {
    gl_FragColor = vec4(vUv, sin(time) * 0.5 + 0.5, 1.0);
}
`

<shaderMaterial
    ref={materialRef}
    uniforms={{
        time: { value: 0 },
        color: { value: new Color(0xff0000) }
    }}
    vertexShader={vertexShader}
    fragmentShader={fragmentShader}
/>

// Update uniforms in useFrame
useFrame(({ clock }) => {
    const mat = $$(materialRef)
    if (mat) mat.uniforms.time.value = clock.getElapsedTime()
})
```

---

## Pattern 4: Render Targets

**Off-screen rendering with WebGLRenderTarget:**

```tsx
const renderTarget = new WebGLRenderTarget(512, 512, {
    minFilter: LinearFilter,
    magFilter: LinearFilter,
    format: RGBAFormat
})

useFrame(() => {
    const renderer = $$(useRenderer<WebGLRenderer>())

    // Render to target
    renderer.setRenderTarget(renderTarget)
    renderer.render(scene, camera)

    // CRITICAL: Reset to main target
    renderer.setRenderTarget(null)

    // CRITICAL: Reset viewport
    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight)
    renderer.setScissorTest(false)
})

// Use render target texture
<meshBasicMaterial map={renderTarget.texture} />
```

---

## Pattern 5: Cube Render Target

**Dynamic environment mapping:**

```tsx
const cubeRenderTarget = new WebGLCubeRenderTarget(256)
const cubeCamera = new CubeCamera(0.1, 100, cubeRenderTarget)

useFrame(() => {
    const renderer = $$(useRenderer<WebGLRenderer>())
    const scene = $$(scenes)?.[0]

    cubeCamera.update(renderer, scene)

    // CRITICAL: Reset viewport
    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight)
})

// Use as environment map
<meshStandardMaterial envMap={cubeRenderTarget.texture} metalness={1} roughness={0} />
```

---

## Pattern 6: Shadow Mapping

**Shadows with directional light:**

```tsx
<webGLRenderer
    shadowMap-enabled
    shadowMap-type={PCFSoftShadowMap}
/>

<directionalLight
    castShadow
    shadow-camera-left={-10}
    shadow-camera-right={10}
    shadow-camera-top={10}
    shadow-camera-bottom={-10}
    shadow-mapSize-width={2048}
    shadow-mapSize-height={2048}
/>

<mesh castShadow receiveShadow>...</mesh>
<mesh receiveShadow>...</mesh>
```

---

## Pattern 7: SkinnedMesh and Skeleton

**Skeletal animation:**

```tsx
const bones: Bone[] = []
const root = new Bone()
bones.push(root)

const child = new Bone()
child.position.set(0, 1, 0)
root.add(child)
bones.push(child)

const skeleton = new Skeleton(bones)

<skinnedMesh>
    <boxGeometry args={[0.5, 2, 0.5]} />
    <meshStandardMaterial />
    <skeleton args={[skeleton]} />
</skinnedMesh>

// Animate bones
useFrame(({ clock }) => {
    bones[1].rotation.x = Math.sin(clock.getElapsedTime()) * 0.5
})
```

---

## Pattern 8: Physical Materials

**Advanced material properties:**

```tsx
// Clearcoat
<meshPhysicalMaterial
    color={0xff0000}
    metalness={0.1}
    roughness={0.5}
    clearcoat={1}
    clearcoatRoughness={0.1}
/>

// Transmission (glass)
<meshPhysicalMaterial
    color={0xffffff}
    metalness={0}
    roughness={0}
    transmission={0.9}
    thickness={0.5}
    ior={1.5}
/>

// Sheen
<meshPhysicalMaterial
    color={0x333333}
    sheen={1}
    sheenRoughness={0.5}
    sheenColor={0xff0000}
/>
```

---

## Pattern 9: Layer-Based Rendering

**Selective visibility with layers:**

```tsx
const layer1 = new Layers()
layer1.set(1)

<mesh layers={layer1}>...</mesh>

// In camera or renderer
camera.layers.set(1)  // Only see layer 1
camera.layers.enable(1)  // Add layer 1
camera.layers.disable(1)  // Remove layer 1
```

---

## Pattern 10: TSL (Three.js Shading Language)

**Note:** Full TSL features require WebGPU. WebGL fallbacks use traditional approaches.

```tsx
// TSL is a node-based shading system
// Full implementation requires WebGPU context
// These examples provide WebGL fallbacks

// For WebGPU TSL:
import { uniform, vec3, float, positionLocal } from 'three/tsl'

const colorNode = vec3(1.0, 0.0, 0.0)
const positionNode = positionLocal.add(vec3(0.0, 1.0, 0.0))

<meshBasicMaterial colorNode={colorNode} />
```

---

## Critical Reminders

1. **Always reset viewport after custom rendering:**
   ```tsx
   renderer.setViewport(0, 0, window.innerWidth, window.innerHeight)
   renderer.setScissorTest(false)
   ```

2. **Update instance matrices:**
   ```tsx
   mesh.instanceMatrix.needsUpdate = true
   ```

3. **Update shader uniforms in useFrame:**
   ```tsx
   material.uniforms.time.value = clock.getElapsedTime()
   ```

4. **Cast and receive shadows:**
   ```tsx
   <mesh castShadow receiveShadow>
   ```

5. **Use $() for refs, $$() for values:**
   ```tsx
   const meshRef = $<Mesh>()
   const mesh = $$(meshRef)
   ```
