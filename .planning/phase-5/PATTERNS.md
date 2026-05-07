# Phase 5: Postprocessing Patterns

**Purpose:** Document all patterns for implementing postprocessing effects in @woby/three.

---

## Pattern 1: EffectComposer Setup

The `EffectComposer` replaces the default renderer.render() call, enabling postprocessing passes.

**Vanilla Three.js:**
```javascript
const composer = new EffectComposer(renderer)
composer.addPass(new RenderPass(scene, camera))
composer.addPass(new UnrealBloomPass())
composer.render()
```

**@woby/three JSX:**
```tsx
const composerRef = $<EffectComposer>()
const rendererRef = $<THREE.WebGLRenderer>()

useEffect(() => {
    const renderer = $$(rendererRef)
    const scene = $$(sceneRef)
    const camera = $$(cameraRef)
    if (!renderer || !scene || !camera) return

    const composer = new EffectComposer(renderer)
    const renderPass = new RenderPass(scene, camera)
    composer.addPass(renderPass)

    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,  // strength
        0.4,  // radius
        0.85  // threshold
    )
    composer.addPass(bloomPass)

    composerRef(composer)
})

useFrame(() => {
    const composer = $$(composerRef)
    if (composer) composer.render()
})
```

**Key points:**
- Use `noRender` on `<canvas3D>` to disable default rendering
- Create composer in `useEffect` after refs are available
- Call `composer.render()` in `useFrame`

---

## Pattern 2: Pass Chaining Order

Passes execute in the order they're added. The correct sequence is:

1. **RenderPass** (required first) - Renders scene to texture
2. **Effect passes** (bloom, SSAO, etc.) - Process the rendered image
3. **Anti-aliasing passes** (SMAA, FXAA) - Smooth edges
4. **OutputPass** (recommended last) - Ensures correct output format

**Correct order:**
```tsx
composer.addPass(renderPass)      // 1. Render scene
composer.addPass(ssaoPass)        // 2. Apply SSAO
composer.addPass(bloomPass)       // 3. Apply bloom
composer.addPass(smaaPass)        // 4. Anti-aliasing
composer.addPass(outputPass)      // 5. Output to screen
```

**Wrong order (will fail):**
```tsx
// WRONG: Bloom before render
composer.addPass(bloomPass)       // No input to process!
composer.addPass(renderPass)      // Too late
```

---

## Pattern 3: Reactive Pass Parameter Updates

Pass parameters can be updated reactively using observables.

**Example:**
```tsx
const kernelRadius = $(8)
const ssaoPassRef = $<SSAOPass>()

// Setup pass with initial values
useEffect(() => {
    const ssaoPass = new SSAOPass(scene, camera, width, height)
    ssaoPass.kernelRadius = $$(kernelRadius)
    composer.addPass(ssaoPass)
    ssaoPassRef(ssaoPass)
})

// Update pass when observable changes
useEffect(() => {
    const pass = $$(ssaoPassRef)
    if (pass) {
        pass.kernelRadius = $$(kernelRadius)
    }
})
```

**Common reactive parameters:**
- Bloom: `strength`, `radius`, `threshold`
- SSAO: `kernelRadius`, `minDistance`, `maxDistance`
- Glitch: `goWild`
- TAA: `sampleLevel`, `accumulate`

---

## Pattern 4: Layer-Based Masking

Use Three.js layers to selectively apply effects to specific objects.

**Setup:**
```tsx
// Define layer for bloom objects
const BLOOM_LAYER = 1

// Objects on bloom layer
<mesh layers-enable={[BLOOM_LAYER]}>
    <sphereGeometry />
    <meshBasicMaterial color={0xff0000} />
</mesh>

// Non-bloom objects (default layer 0)
<mesh>
    <boxGeometry />
    <meshStandardMaterial color={0x00ff00} />
</mesh>
```

**Selective bloom pass:**
```tsx
// Bloom only affects layer 1
const bloomPass = new UnrealBloomPass(...)
bloomPass.selection = new THREE.Layers()
bloomPass.selection.set(BLOOM_LAYER)
```

---

## Pattern 5: Anti-Aliasing Passes

### SMAA (Subpixel Morphological Anti-Aliasing)

High quality, moderate cost. Requires width/height.

```tsx
const smaaPass = new SMAAPass(window.innerWidth, window.innerHeight)
composer.addPass(smaaPass)
```

**When to use:** When quality matters more than performance.

### FXAA (Fast Approximate Anti-Aliasing)

Fast, lower quality. Uses ShaderPass with FXAAShader.

```tsx
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js'

const fxaaPass = new ShaderPass(FXAAShader)
fxaaPass.uniforms['resolution'].value.x = 1 / (width * pixelRatio)
fxaaPass.uniforms['resolution'].value.y = 1 / (height * pixelRatio)
composer.addPass(fxaaPass)
```

**When to use:** When performance matters more than quality.

### TAA (Temporal Anti-Aliasing)

Highest quality, requires motion. Replaces RenderPass.

```tsx
// TAA replaces RenderPass, not added after
const taaPass = new TAARenderPass(scene, camera)
taaPass.sampleLevel = 2  // 0-5, higher = better
taaPass.accumulate = true
composer.addPass(taaPass)
```

**When to use:** For static or slow-moving scenes where quality is critical.

---

## Pattern 6: Custom Shader Passes

Create custom effects with ShaderPass and custom shaders.

```tsx
const CustomShader = {
    uniforms: {
        tDiffuse: { value: null },  // Required: input texture
        time: { value: 0 },
        intensity: { value: 1.0 },
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float time;
        uniform float intensity;
        varying vec2 vUv;

        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            // Custom processing...
            gl_FragColor = color;
        }
    `
}

const customPass = new ShaderPass(CustomShader)
composer.addPass(customPass)
```

**Key points:**
- `tDiffuse` uniform receives the previous pass output
- Update uniforms in `useFrame` for animation
- Use `vUv` for texture coordinates

---

## Pattern 7: Resize Handling

All passes must handle window resize.

```tsx
useEffect(() => {
    const onResize = () => {
        composer.setSize(window.innerWidth, window.innerHeight)
        // Some passes need explicit resize
        if (ssaoPass) ssaoPass.setSize(window.innerWidth, window.innerHeight)
        // Update resolution uniforms
        if (fxaaPass) {
            fxaaPass.uniforms['resolution'].value.x = 1 / window.innerWidth
            fxaaPass.uniforms['resolution'].value.y = 1 / window.innerHeight
        }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
})
```

---

## Common Pitfalls

### Pitfall 1: Missing RenderPass

```tsx
// WRONG: No RenderPass
composer.addPass(bloomPass)  // Nothing to bloom!

// CORRECT: RenderPass first
composer.addPass(renderPass)
composer.addPass(bloomPass)
```

### Pitfall 2: Wrong Anti-Aliasing Position

```tsx
// WRONG: AA before effects
composer.addPass(renderPass)
composer.addPass(smaaPass)    // Edges smoothed before bloom
composer.addPass(bloomPass)   // Bloom creates new edges

// CORRECT: AA last (before OutputPass)
composer.addPass(renderPass)
composer.addPass(bloomPass)
composer.addPass(smaaPass)
composer.addPass(outputPass)
```

### Pitfall 3: Forgetting noRender

```tsx
// WRONG: Double rendering
<canvas3D>  // Default render happens
    <effectComposer>...</effectComposer>
</canvas3D>

// CORRECT: Disable default render
<canvas3D noRender>
    <effectComposer>...</effectComposer>
</canvas3D>
```

### Pitfall 4: Not Updating Resolution Uniforms

```tsx
// WRONG: Static resolution
fxaaPass.uniforms['resolution'].value.x = 1 / 800

// CORRECT: Update on resize
const onResize = () => {
    fxaaPass.uniforms['resolution'].value.x = 1 / window.innerWidth
    fxaaPass.uniforms['resolution'].value.y = 1 / window.innerHeight
}
```

### Pitfall 5: TAA Without Motion

TAA requires camera or object motion to work correctly. For static scenes, use SMAA or FXAA instead.

---

## Performance Considerations

| Pass | Relative Cost | Quality | Use Case |
|------|---------------|---------|----------|
| RenderPass | Required | - | Always needed |
| FXAA | Low | Low | Performance-critical |
| SMAA | Medium | High | Quality-focused |
| TAA | Medium-High | Highest | Static/slow scenes |
| Bloom | Medium | - | Glow effects |
| SSAO | High | - | Contact shadows |
| SSR | Very High | - | Reflections |

**Optimization tips:**
1. Use FXAA for mobile/low-end devices
2. Reduce SSAO kernel radius for performance
3. Limit bloom threshold to reduce processed pixels
4. Consider disabling expensive passes on mobile

---

## Quick Reference

| Effect | Pass Class | Constructor Args |
|--------|------------|------------------|
| Render | `RenderPass` | `scene, camera` |
| Bloom | `UnrealBloomPass` | `resolution, strength, radius, threshold` |
| SSAO | `SSAOPass` | `scene, camera, width, height` |
| SMAA | `SMAAPass` | `width, height` |
| FXAA | `ShaderPass(FXAAShader)` | - |
| TAA | `TAARenderPass` | `scene, camera` |
| Glitch | `GlitchPass` | `dt_size?` |
| Outline | `OutlinePass` | `resolution, scene, camera` |
| Output | `OutputPass` | - |
