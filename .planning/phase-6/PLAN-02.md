---
phase: 06-webgpu
plan: 02
type: execute
wave: 2
depends_on: [06-01]
files_modified: []
autonomous: true
requirements: [WEBGPU-04, WEBGPU-05, WEBGPU-06, WEBGPU-07]
user_setup: []

must_haves:
  truths:
    - "WebGPU materials render correctly"
    - "WebGPU shaders compile without errors"
    - "WebGPU geometries display properly"
    - "Multiple WebGPU examples demonstrate various features"
  artifacts:
    - path: "code/examples/webgpu/Geometries.tsx"
      provides: "WebGPU geometry showcase"
      min_lines: 100
    - path: "code/examples/webgpu/Materials.tsx"
      provides: "WebGPU material variations"
      min_lines: 100
    - path: "code/examples/webgpu/Lights.tsx"
      provides: "WebGPU lighting demo"
      min_lines: 80
    - path: "code/examples/webgpu/Animation.tsx"
      provides: "WebGPU animation demo"
      min_lines: 80
  key_links:
    - from: "mesh"
      to: "geometry/material"
      via: "JSX children"
      pattern: "<mesh><boxGeometry /><meshStandardMaterial /></mesh>"
---

<objective>
Port core WebGPU examples demonstrating materials, geometries, lights, and animation.

Purpose: Establish that standard Three.js features work with WebGPU renderer.
Output: 4 examples covering core WebGPU functionality.
</objective>

<execution_context>
@$HOME/.claude-glm-glm/get-shit-done/workflows/execute-plan.md
@$HOME/.claude-glm-glm/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/phase-1/PATTERNS.md
@code/examples/webgpu/_template.tsx
</context>

<tasks>

<task type="auto">
  <name>Task 1: Create WebGPU Geometries Example</name>
  <files>code/examples/webgpu/Geometries.tsx</files>
  <action>
Create geometry showcase using WebGPU renderer.

1. Follow pattern from webgl/geometries/Geometries.tsx
2. Create grid of various geometry types:
   - Box, Sphere, Cone, Cylinder, Torus, TorusKnot
   - Dodecahedron, Icosahedron, Octahedron
3. Each geometry with MeshStandardMaterial
4. Animate rotation with useFrame
5. Include WebGPU support check

Note: All standard geometries should work with WebGPU. If any fail, document in comments.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgpu/Geometries.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Geometries.tsx displays multiple geometry types with WebGPU renderer</done>
</task>

<task type="auto">
  <name>Task 2: Create WebGPU Materials Example</name>
  <files>code/examples/webgpu/Materials.tsx</files>
  <action>
Create material variations example using WebGPU renderer.

1. Create scene with multiple spheres showing different materials:
   - MeshBasicMaterial
   - MeshStandardMaterial (various roughness/metalness)
   - MeshPhongMaterial
   - MeshPhysicalMaterial (if WebGPU supports)
2. Add environment map for realistic reflections
3. Include controls for material properties
4. Document any materials not supported by WebGPU

Note: Some advanced materials may not be fully supported in WebGPU yet. Test each and document findings.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgpu/Materials.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Materials.tsx displays various material types with WebGPU renderer</done>
</task>

<task type="auto">
  <name>Task 3: Create WebGPU Lights Example</name>
  <files>code/examples/webgpu/Lights.tsx</files>
  <action>
Create lighting demonstration using WebGPU renderer.

1. Create scene with various light types:
   - AmbientLight
   - DirectionalLight with shadows
   - PointLight
   - SpotLight
2. Use objects that cast and receive shadows
3. Animate lights to show dynamic lighting
4. Include controls for light properties

Note: WebGPU shadow support may differ from WebGL. Test and document any differences.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgpu/Lights.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Lights.tsx demonstrates various light types with WebGPU renderer</done>
</task>

<task type="auto">
  <name>Task 4: Create WebGPU Animation Example</name>
  <files>code/examples/webgpu/Animation.tsx</files>
  <action>
Create animation example using WebGPU renderer.

1. Load animated model (GLTF) or create keyframe animation
2. Use AnimationMixer with AnimationClip
3. Implement play/pause/stop controls
4. Show animation blending if multiple clips

Pattern:
```tsx
const mixer = $<THREE.AnimationMixer>()
const clock = new THREE.Clock()

useFrame(() => {
  const m = $$(mixer)
  if (m) m.update(clock.getDelta())
})
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webgpu/Animation.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Animation.tsx demonstrates animation playback with WebGPU renderer</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| Model loading | External CDN resources |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-06-03 | S | GLTF loader | mitigate | Use only trusted CDN URLs (threejs.org) |
| T-06-04 | D | Animation mixer | accept | Local animation state, no external calls |
</threat_model>

<verification>
- All 4 examples compile without TypeScript errors
- Geometries render correctly with WebGPU
- Materials display as expected
- Lights illuminate scene properly
- Animation plays smoothly
</verification>

<success_criteria>
- 4 core WebGPU examples ported
- Standard Three.js features confirmed working with WebGPU
- Any WebGPU limitations documented
</success_criteria>

<output>
After completion, create `.planning/phases/06-webgpu/06-02-SUMMARY.md`
</output>
