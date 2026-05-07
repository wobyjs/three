---
phase: 06-webgpu
plan: 03
type: execute
wave: 3
depends_on: [06-01, 06-02]
files_modified: []
autonomous: true
requirements: [WEBGPU-08, WEBGPU-09, WEBGPU-10]
user_setup: []

must_haves:
  truths:
    - "WebGPU-specific features render correctly"
    - "TSL (Three.js Shading Language) shaders compile"
    - "WebGPU compute shaders work (if supported)"
  artifacts:
    - path: "code/examples/webgpu/TSL.tsx"
      provides: "TSL shader example"
      min_lines: 100
    - path: "code/examples/webgpu/Particles.tsx"
      provides: "WebGPU particle system"
      min_lines: 120
    - path: "code/examples/webgpu/Postprocessing.tsx"
      provides: "WebGPU postprocessing"
      min_lines: 100
  key_links:
    - from: "tsl"
      to: "WebGPU"
      via: "shader compilation"
      pattern: "TSL\\.(float|vec2|vec3)"
---

<objective>
Port WebGPU-specific examples including TSL shaders, particles, and postprocessing.

Purpose: Demonstrate WebGPU-exclusive features not available in WebGL.
Output: 3 examples showcasing WebGPU capabilities.
</objective>

<execution_context>
@$HOME/.claude-glm-glm/get-shit-done/workflows/execute-plan.md
@$HOME/.claude-glm-glm/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/phase-1/PATTERNS.md
</context>

<interfaces>
<!-- TSL (Three.js Shading Language) interface -->

TSL is Three.js's new shading language for WebGPU. Key imports:
```typescript
import { TSL, Fn, uniform, texture, uv, normalWorld, positionWorld } from 'three/tsl'
import { mrt, output, normalView } from 'three/tsl'
```

TSL pattern:
```tsx
// Define a TSL function
const myShader = Fn(() => {
  const color = vec3(1.0, 0.5, 0.0)
  return color
})

// Use in material
<meshBasicMaterial colorNode={myShader()} />
```

Note: TSL is actively developed. API may change between Three.js versions.
</interfaces>

<tasks>

<task type="auto">
  <name>Task 1: Create TSL Shader Example</name>
  <files>code/examples/webgpu/TSL.tsx</files>
  <action>
Create example using Three.js Shading Language (TSL).

1. Import TSL functions from three/tsl
2. Create custom shader using TSL:
   - Procedural noise pattern
   - Animated gradient
   - Or vertex displacement
3. Apply to mesh via material's colorNode or positionNode
4. Add controls for shader parameters via uniforms

Pattern:
```tsx
import { Fn, uniform, float, vec3, uv, sin, cos } from 'three/tsl'

const CustomMaterial = () => {
  const time = uniform(0)

  const colorNode = Fn(() => {
    const t = time.toVar()
    return vec3(sin(t), cos(t), 0.5)
  })()

  useFrame(({ clock }) => {
    time.value = clock.getElapsedTime()
  })

  return <meshBasicMaterial colorNode={colorNode} />
}
```

Note: TSL API may be unstable. Document any version-specific behavior.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgpu/TSL.tsx 2>&1 | head -20</automated>
  </verify>
  <done>TSL.tsx renders custom shader using Three.js Shading Language</done>
</task>

<task type="auto">
  <name>Task 2: Create WebGPU Particles Example</name>
  <files>code/examples/webgpu/Particles.tsx</files>
  <action>
Create particle system example optimized for WebGPU.

1. Create large particle system (10,000+ particles)
2. Use Points with custom geometry
3. Animate particles with useFrame or compute shaders
4. Apply custom shader for particle appearance
5. Compare performance notes vs WebGL in comments

WebGPU advantage: Compute shaders can update particle positions on GPU.

Pattern for GPU particles:
```tsx
// If WebGPU compute available:
import { compute } from 'three/tsl'

const particleUpdate = Fn(() => {
  // Update particle positions
})

// In useFrame:
compute(particleUpdate).compute(particleCount)
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webgpu/Particles.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Particles.tsx renders large particle system with WebGPU optimization</done>
</task>

<task type="auto">
  <name>Task 3: Create WebGPU Postprocessing Example</name>
  <files>code/examples/webgpu/Postprocessing.tsx</files>
  <action>
Create postprocessing example for WebGPU.

Note: WebGPU postprocessing may use different API than WebGL EffectComposer.

1. Check if WebGPU has dedicated postprocessing module
2. If available, create example with:
   - Bloom effect
   - Custom postprocessing shader
3. If not available, document limitation and create placeholder

WebGPU postprocessing may use:
- three/examples/jsm/postprocessing/WebGPUEffectComposer (if exists)
- Or TSL-based postprocessing

Document findings in code comments.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgpu/Postprocessing.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Postprocessing.tsx demonstrates WebGPU postprocessing or documents limitation</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| TSL compilation | Browser GPU shader compilation |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-06-05 | D | TSL shaders | accept | Shaders run on GPU, no data exfiltration possible |
| T-06-06 | D | Compute shaders | accept | GPU compute, sandboxed from system |
</threat_model>

<verification>
- All 3 examples compile without TypeScript errors
- TSL shader renders custom visual
- Particles animate smoothly
- Postprocessing works or limitation documented
</verification>

<success_criteria>
- WebGPU-specific features demonstrated
- TSL usage pattern established
- Performance characteristics documented
</success_criteria>

<output>
After completion, create `.planning/phases/06-webgpu/06-03-SUMMARY.md`
</output>
