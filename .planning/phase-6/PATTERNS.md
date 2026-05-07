# Phase 6: WebGPU Patterns

**Purpose:** Document all patterns for WebGPU-specific development in @woby/three.

---

## Pattern 1: WebGPU Support Detection

**Problem:** WebGPU is not available in all browsers. Need to detect support before rendering.

**Solution:**

```tsx
import WebGPU from 'three/examples/jsm/capabilities/WebGPU.js'
import { $, $$, useEffect } from 'woby'

const [supported, setSupported] = $(false)
const [checked, setChecked] = $(false)

useEffect(() => {
    const checkSupport = async () => {
        try {
            // Method 1: Three.js WebGPU capability check
            if (WebGPU.isAvailable()) {
                setSupported(true)
            }
            // Method 2: Direct navigator.gpu check
            else if (navigator.gpu) {
                const adapter = await navigator.gpu.requestAdapter()
                if (adapter) {
                    setSupported(true)
                }
            }
        } catch (e) {
            console.warn('WebGPU check failed:', e)
        }
        setChecked(true)
    }
    checkSupport()
})
```

**Rule:** Always check both `WebGPU.isAvailable()` and `navigator.gpu` for maximum compatibility.

---

## Pattern 2: WebGPU Fallback UI

**Problem:** Users without WebGPU support need clear feedback.

**Solution:**

```tsx
// Loading state
if (!$$(checked)) {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a0a', color: 'white' }}>
            <p>Checking WebGPU support...</p>
        </div>
    )
}

// Fallback UI
if (!$$(supported)) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a0a', color: 'white', textAlign: 'center', padding: '20px' }}>
            <h1>WebGPU Not Available</h1>
            <p>Please use Chrome 113+ or Edge 113+ for WebGPU support.</p>
            <p style={{ color: '#888', marginTop: '20px' }}>
                Using WebGL fallback.
            </p>
        </div>
    )
}
```

**Rule:** Provide three states: loading, unsupported, and supported.

---

## Pattern 3: WebGPURenderer vs WebGLRenderer

**Current Status (Three.js r160+):**

| Feature | WebGLRenderer | WebGPURenderer |
|---------|---------------|----------------|
| Browser Support | All browsers | Chrome 113+, Edge 113+ |
| Stability | Production ready | Experimental |
| TSL Shaders | Limited support | Native support |
| Compute Shaders | Not supported | Supported |
| Performance | Good | Better (GPU-native) |

**Setup:**

```tsx
// WebGLRenderer (fallback, stable)
<webGLRenderer
    ref={rendererRef}
    antialias
    setPixelRatio={[window.devicePixelRatio]}
    setSize={[window.innerWidth, window.innerHeight]}
/>

// WebGPURenderer (experimental, requires WebGPU)
// Note: WebGPURenderer wrapper is still experimental in @woby/three
// Use WebGLRenderer as fallback for now
```

**Rule:** Use WebGLRenderer as fallback. WebGPURenderer wrapper is experimental.

---

## Pattern 4: TSL (Three.js Shading Language)

**Purpose:** TSL is Three.js's node-based shading language for WebGPU.

**Key Concepts:**

```tsx
import { Fn, uniform, float, vec2, vec3, vec4, uv, sin, cos, time, mix, clamp } from 'three/tsl'

// Create a TSL shader function
const createNoiseShader = Fn(() => {
    const vUv = uv()
    const t = time.mul(0.5)

    // Create animated noise pattern
    const scale = float(4.0)
    const noise = sin(vUv.x.mul(scale).add(t))
        .mul(cos(vUv.y.mul(scale).add(t.mul(0.7))))

    // Return color
    return vec3(noise.mul(0.5).add(0.5))
})

// Apply to material
// Note: TSL material assignment is still experimental
```

**TSL Types:**
- `float()` - Single float value
- `vec2()`, `vec3()`, `vec4()` - Vector types
- `uniform()` - Uniform variable
- `uv()` - Texture coordinates
- `time` - Built-in time uniform

**Rule:** TSL is actively developed. API may change between Three.js versions.

---

## Pattern 5: WebGPU Particle Systems

**Advantages over WebGL:**

| Aspect | WebGL | WebGPU |
|--------|-------|--------|
| Particle Count | ~50,000 at 60fps | 100,000+ at 60fps |
| Updates | CPU -> GPU transfer | GPU compute shaders |
| Memory | CPU-GPU sync required | GPU-only buffers |

**Implementation Pattern:**

```tsx
// Custom shader for particles (works with both WebGL and WebGPU)
const particleVertexShader = `
    attribute float aSize;
    attribute vec3 aColor;
    uniform float uTime;

    varying vec3 vColor;

    void main() {
        vColor = aColor;
        vec3 pos = position;

        // Animation
        pos.y += sin(uTime + aPhase) * 0.5;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = aSize * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
    }
`

// Use with Points object
const geometry = new BufferGeometry()
geometry.setAttribute('position', new Float32BufferAttribute(positions, 3))
geometry.setAttribute('aSize', new Float32BufferAttribute(sizes, 1))
geometry.setAttribute('aColor', new Float32BufferAttribute(colors, 3))

const material = new ShaderMaterial({
    vertexShader: particleVertexShader,
    fragmentShader: particleFragmentShader,
    uniforms: { uTime: { value: 0 } }
})

const points = new THREE.Points(geometry, material)
```

**Rule:** Use custom shaders for best performance. WebGPU compute shaders provide additional optimization.

---

## Pattern 6: WebGPU Shadow Mapping

**Shadow Types:**

| Type | Quality | Performance |
|------|---------|-------------|
| BasicShadowMap | Low | Best |
| PCFShadowMap | Medium | Good |
| PCFSoftShadowMap | High | Moderate |
| VSMShadowMap | Best | Lower |

**Setup:**

```tsx
<webGLRenderer
    shadowMap-enabled={true}
    shadowMap-type={PCFSoftShadowMap}
/>

// Light with shadows
<directionalLight
    position={[5, 10, 5]}
    castShadow
    shadow-mapSize-width={2048}
    shadow-mapSize-height={2048}
    shadow-camera-near={0.5}
    shadow-camera-far={50}
    shadow-camera-left={-10}
    shadow-camera-right={10}
    shadow-camera-top={10}
    shadow-camera-bottom={-10}
/>

// Shadow-casting mesh
<mesh castShadow>
    <sphereGeometry args={[1, 32, 32]} />
    <meshStandardMaterial color={0xffffff} />
</mesh>

// Shadow-receiving mesh
<mesh receiveShadow>
    <planeGeometry args={[20, 20]} />
    <meshStandardMaterial color={0x333333} />
</mesh>
```

**WebGPU Advantage:** Better shadow filtering performance with native compute shaders.

---

## Pattern 7: WebGPU Postprocessing

**Current Status:**

Traditional `EffectComposer` works with WebGLRenderer. WebGPU postprocessing is being developed with TSL-based effects.

**WebGL Fallback Pattern:**

```tsx
import { EffectComposer, RenderPass, UnrealBloomPass, OutputPass } from 'three'

// Create composer
const composer = new EffectComposer(renderer)

// Add passes
composer.addPass(new RenderPass(scene, camera))
composer.addPass(new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.5,  // strength
    0.4,  // radius
    0.85  // threshold
))
composer.addPass(new OutputPass())

// Render with composer instead of renderer
useFrame(() => {
    composer.render()
})
```

**Future WebGPU Pattern:**

```tsx
// TSL-based postprocessing (experimental)
import { postProcessing } from 'three/tsl'

// Will be available when WebGPU postprocessing matures
```

---

## Pattern 8: WebGPU Environment Maps

**Types:**

| Type | Use Case |
|------|----------|
| CubeTexture | Traditional 6-face cubemap |
| Equirectangular | HDR environment maps |
| PMREM | Prefiltered Mipmap Radiance |

**Setup:**

```tsx
import { PMREMGenerator } from 'three'

// Generate environment map from scene
const pmremGenerator = new PMREMGenerator(renderer)
const renderTarget = pmremGenerator.fromScene(envScene)
const envMap = renderTarget.texture

// Apply to scene
scene.environment = envMap

// Reflective material
<meshStandardMaterial
    color={0xffffff}
    roughness={0.1}
    metalness={1}
    envMapIntensity={1}
/>
```

---

## Known WebGPU Limitations

**As of Three.js r160+:**

1. **WebGPURenderer Wrapper:** Still experimental in @woby/three
2. **TSL API:** May change between versions
3. **Postprocessing:** TSL-based effects still maturing
4. **Browser Support:** Chrome 113+, Edge 113+ only
5. **Mobile:** Limited support on Android Chrome

**Workarounds:**

- Use WebGLRenderer as fallback
- Check WebGPU availability before using WebGPU-specific features
- Test in Chrome/Edge Canary for latest WebGPU features

---

## Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 113+ | Supported |
| Edge | 113+ | Supported |
| Firefox | - | Not supported |
| Safari | - | Not supported |
| Chrome Android | 113+ | Partial support |

**Feature Detection:**

```tsx
// Check for WebGPU
const hasWebGPU = WebGPU.isAvailable() || !!navigator.gpu

// Check for specific features
const adapter = await navigator.gpu?.requestAdapter()
const features = adapter?.features // Set of supported features
```

---

## Performance Considerations

**WebGPU Advantages:**

1. **Lower CPU Overhead:** Fewer driver calls
2. **Compute Shaders:** GPU-only particle updates
3. **Better Memory Management:** Direct GPU buffer access
4. **Modern Features:** Bindless textures, work groups

**Best Practices:**

1. Use `WebGPU.isAvailable()` check before WebGPU-specific code
2. Provide WebGL fallback for unsupported browsers
3. Test performance in both WebGL and WebGPU modes
4. Monitor GPU memory usage with large scenes

---

## Quick Reference

| Pattern | Use Case |
|---------|----------|
| Support Detection | Check browser compatibility |
| Fallback UI | Graceful degradation |
| WebGLRenderer | Stable fallback |
| TSL Shaders | WebGPU-native shaders |
| Particle Systems | High-performance particles |
| Shadow Mapping | Real-time shadows |
| Postprocessing | Visual effects |
| Environment Maps | Reflections and IBL |

---

## Migration from WebGL

**Steps:**

1. Add WebGPU support check
2. Add fallback UI for unsupported browsers
3. Replace WebGL-specific features with WebGPU equivalents
4. Test in Chrome 113+ or Edge 113+
5. Verify performance improvements

**Code Changes:**

```tsx
// Before (WebGL only)
<webGLRenderer antialias />

// After (WebGPU with fallback)
{hasWebGPU ? (
    <webGPURenderer antialias />
) : (
    <webGLRenderer antialias />
)}
```

**Note:** Currently use WebGLRenderer as fallback while WebGPURenderer wrapper is experimental.
