---
phase: 05-postprocessing
plan: 02
type: execute
wave: 2
depends_on: [05-01]
files_modified: []
autonomous: true
requirements: [POSTPROC-04, POSTPROC-05, POSTPROC-06, POSTPROC-07]
user_setup: []

must_haves:
  truths:
    - "DOF effect blurs out-of-focus objects"
    - "Glitch effect creates screen distortion"
    - "Pixelation effect renders low-res output"
    - "Outline effect highlights selected objects"
    - "God rays effect creates volumetric light beams"
  artifacts:
    - path: "code/examples/webgl/postprocessing/DOF.tsx"
      provides: "Depth of field effect"
      min_lines: 100
    - path: "code/examples/webgl/postprocessing/Glitch.tsx"
      provides: "Glitch/distortion effect"
      min_lines: 80
    - path: "code/examples/webgl/postprocessing/Pixel.tsx"
      provides: "Pixelation effect"
      min_lines: 80
    - path: "code/examples/webgl/postprocessing/Outline.tsx"
      provides: "Object outline effect"
      min_lines: 100
  key_links:
    - from: "bokehPass"
      to: "scene/camera"
      via: "constructor args"
      pattern: "new BokehPass\\(scene, camera, params\\)"
    - from: "outlinePass"
      to: "selectedObjects"
      via: "property assignment"
      pattern: "outlinePass\\.selectedObjects"
---

<objective>
Port intermediate postprocessing examples with specialized effects: DOF, Glitch, Pixelation, and Outline.

Purpose: Demonstrate diverse postprocessing effects available in Three.js jsm.
Output: 4 working examples with different effect types.
</objective>

<execution_context>
@$HOME/.claude-glm-glm/get-shit-done/workflows/execute-plan.md
@$HOME/.claude-glm-glm/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/phase-1/PATTERNS.md
@code/examples/jsm/postprocessing/BokehPass.ts
@code/examples/jsm/postprocessing/GlitchPass.ts
@code/examples/jsm/postprocessing/OutlinePass.ts
</context>

<interfaces>
<!-- Key types for intermediate passes. -->

From code/examples/jsm/postprocessing/BokehPass.ts:
```typescript
// BokehPass constructor: (scene, camera, params)
// params: { focus, aperture, maxblur }
```

From code/examples/jsm/postprocessing/GlitchPass.ts:
```typescript
// GlitchPass constructor: (dt_size)
// dt_size: number (default 64)
// Properties: goWild, curF, randX
```

From code/examples/jsm/postprocessing/OutlinePass.ts:
```typescript
// OutlinePass constructor: (resolution, scene, camera, selectedObjects)
// Properties: edgeStrength, edgeGlow, edgeThickness, pulsePeriod, visibleEdgeColor, hiddenEdgeColor
```

Common pattern for multi-pass setup:
```tsx
<effectComposer ref={composerRef} args={[renderer]}>
  <renderPass args={[scene, camera]} />
  <bokehPass args={[scene, camera, { focus: 1.0, aperture: 0.025, maxblur: 0.01 }]} />
</effectComposer>
```
</interfaces>

<tasks>

<task type="auto">
  <name>Task 1: Create DOF Example</name>
  <files>code/examples/webgl/postprocessing/DOF.tsx</files>
  <action>
Create depth of field example with BokehPass.

1. Import BokehPass from @woby/three/examples/jsm/postprocessing/BokehPass
2. Create scene with objects at varying depths (near, mid, far)
3. Setup EffectComposer with RenderPass and BokehPass
4. Add controls for DOF parameters:
   - focus (distance to focal plane)
   - aperture (blur intensity)
   - maxblur (maximum blur amount)
5. Use reactive state to update focus based on camera position or manual control

Key pattern: DOF requires depth buffer. BokehPass reads depth to determine blur amount per pixel.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/DOF.tsx 2>&1 | head -20</automated>
  </verify>
  <done>DOF.tsx renders scene with adjustable depth of field blur</done>
</task>

<task type="auto">
  <name>Task 2: Create Glitch Effect Example</name>
  <files>code/examples/webgl/postprocessing/Glitch.tsx</files>
  <action>
Create glitch/distortion effect example.

1. Import GlitchPass from @woby/three/examples/jsm/postprocessing/GlitchPass
2. Create scene with interesting visual content (textured objects, patterns)
3. Setup EffectComposer with RenderPass and GlitchPass
4. Add toggle for "goWild" mode (continuous glitch vs random intervals)
5. Include button to trigger manual glitch

Pattern:
```tsx
const glitchPass = $<THREE.GlitchPass>()
// In useFrame or button handler:
if ($$(glitchPass)) $$(glitchPass).goWild = true
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/Glitch.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Glitch.tsx renders scene with intermittent glitch distortion</done>
</task>

<task type="auto">
  <name>Task 3: Create Pixelation Example</name>
  <files>code/examples/webgl/postprocessing/Pixel.tsx</files>
  <action>
Create pixelation effect example using RenderPixelatedPass.

1. Import RenderPixelatedPass from @woby/three/examples/jsm/postprocessing/RenderPixelatedPass
2. Create scene with 3D objects (pixelation works best with distinct shapes)
3. Setup EffectComposer with RenderPixelatedPass
4. Add control for pixel size (1-16)
5. Include animated objects to show pixelation in motion

Note: RenderPixelatedPass replaces RenderPass - it renders directly to pixelated buffer.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/Pixel.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Pixel.tsx renders scene with adjustable pixelation level</done>
</task>

<task type="auto">
  <name>Task 4: Create Outline Effect Example</name>
  <files>code/examples/webgl/postprocessing/Outline.tsx</files>
  <action>
Create outline effect example with object selection.

1. Import OutlinePass from @woby/three/examples/jsm/postprocessing/OutlinePass
2. Create scene with multiple selectable objects
3. Setup EffectComposer with RenderPass and OutlinePass
4. Implement raycasting to select objects on click
5. Update OutlinePass.selectedObjects array with selected mesh
6. Add controls for outline appearance:
   - edgeStrength
   - edgeGlow
   - visibleEdgeColor

Pattern for selection:
```tsx
const outlinePass = $<THREE.OutlinePass>()
const selectedObjects = $<THREE.Object3D[]>([])

// On click:
const intersects = raycaster.intersectObjects(scene.children)
if (intersects.length > 0) {
  selectedObjects([intersects[0].object])
  if ($$(outlinePass)) $$(outlinePass).selectedObjects = $$(selectedObjects)
}
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/Outline.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Outline.tsx renders selectable objects with highlighted outlines</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| User input -> Effect parameters | Parameters bounded to valid ranges |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-05-03 | E | OutlinePass selection | mitigate | Validate selected objects are in scene before adding to array |
| T-05-04 | D | GlitchPass | accept | Visual effect only, no security implications |
</threat_model>

<verification>
- All 4 examples compile without TypeScript errors
- DOF blurs objects based on distance from focal plane
- Glitch creates visible screen distortion
- Pixelation renders low-resolution output
- Outline highlights selected objects
</verification>

<success_criteria>
- 4 additional postprocessing examples ported
- Selection/raycasting pattern established for OutlinePass
- All effects adjustable via controls
</success_criteria>

<output>
After completion, create `.planning/phases/05-postprocessing/05-02-SUMMARY.md`
</output>
