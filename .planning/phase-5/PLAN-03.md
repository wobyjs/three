---
phase: 05-postprocessing
plan: 03
type: execute
wave: 3
depends_on: [05-01, 05-02]
files_modified: []
autonomous: true
requirements: [POSTPROC-08, POSTPROC-09, POSTPROC-10, POSTPROC-11, POSTPROC-12]
user_setup: []

must_haves:
  truths:
    - "Advanced effects (SSR, God Rays) render correctly"
    - "Multiple effects can be chained together"
    - "SAO provides efficient ambient occlusion"
    - "SMAA provides anti-aliasing in postprocessing"
    - "Masking allows selective effect application"
  artifacts:
    - path: "code/examples/webgl/postprocessing/SSR.tsx"
      provides: "Screen space reflections"
      min_lines: 120
    - path: "code/examples/webgl/postprocessing/GodRays.tsx"
      provides: "Volumetric light god rays"
      min_lines: 100
    - path: "code/examples/webgl/postprocessing/Advanced.tsx"
      provides: "Multi-effect composition"
      min_lines: 150
    - path: "code/examples/webgl/postprocessing/Masking.tsx"
      provides: "Selective effect masking"
      min_lines: 100
  key_links:
    - from: "ssrPass"
      to: "scene/camera"
      via: "constructor args"
      pattern: "new SSRPass\\({ renderer, scene, camera }\\)"
    - from: "maskPass"
      to: "effect layers"
      via: "scene.layers"
      pattern: "object\\.layers\\.set\\(1\\)"
---

<objective>
Port advanced postprocessing examples: SSR, God Rays, multi-effect composition, and masking.

Purpose: Demonstrate complex postprocessing setups with multiple chained effects.
Output: 4 advanced examples showing sophisticated effect combinations.
</objective>

<execution_context>
@$HOME/.claude-glm-glm/get-shit-done/workflows/execute-plan.md
@$HOME/.claude-glm-glm/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/phase-1/PATTERNS.md
@code/examples/jsm/postprocessing/SSRPass.ts
@code/examples/jsm/postprocessing/SAOPass.ts
@code/examples/jsm/postprocessing/SMAAPass.ts
@code/examples/jsm/postprocessing/MaskPass.ts
</context>

<interfaces>
<!-- Key types for advanced passes. -->

From code/examples/jsm/postprocessing/SSRPass.ts:
```typescript
// SSRPass constructor: ({ renderer, scene, camera, options? })
// options: { width, height, selects, encoding, encoding }
// Properties: ssrEffect, thickness, intensity, maxDistance
```

From code/examples/jsm/postprocessing/SAOPass.ts:
```typescript
// SAOPass constructor: (scene, camera, depthTexture?, useNoise?, resolution?)
// Properties: saoIntensity, saoScale, saoKernelRadius, saoMinResolution, saoBlur
```

From code/examples/jsm/postprocessing/SMAAPass.ts:
```typescript
// SMAAPass constructor: (width, height)
// Anti-aliasing pass - typically last in chain
```

From code/examples/jsm/postprocessing/MaskPass.ts:
```typescript
// MaskPass constructor: (scene, camera)
// Properties: clear, inverse
// Uses scene.layers for masking
```

Multi-effect chain pattern:
```tsx
<effectComposer args={[renderer]}>
  <renderPass args={[scene, camera]} />
  <ssrPass args={[{ renderer, scene, camera }]} />
  <smaaPass args={[width, height]} />
</effectComposer>
```
</interfaces>

<tasks>

<task type="auto">
  <name>Task 1: Create SSR Example</name>
  <files>code/examples/webgl/postprocessing/SSR.tsx</files>
  <action>
Create screen space reflections example.

1. Import SSRPass from @woby/three/examples/jsm/postprocessing/SSRPass
2. Create scene with reflective floor and objects above it
3. Use MeshStandardMaterial with metalness for realistic reflections
4. Setup EffectComposer with RenderPass and SSRPass
5. Add controls for SSR parameters:
   - intensity
   - maxDistance
   - thickness

Note: SSR is computationally expensive. Include performance warning in comments.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/SSR.tsx 2>&1 | head -20</automated>
  </verify>
  <done>SSR.tsx renders scene with real-time screen space reflections</done>
</task>

<task type="auto">
  <name>Task 2: Create God Rays Example</name>
  <files>code/examples/webgl/postprocessing/GodRays.tsx</files>
  <action>
Create god rays (volumetric light) effect example.

Note: Three.js jsm does not have a dedicated GodRaysPass. Use custom shader approach or ShaderPass with god rays shader.

1. Create scene with occluding objects (columns, trees)
2. Add bright point light or emissive sphere as light source
3. Use ShaderPass with custom god rays shader
4. Implement radial blur from light source position
5. Add controls for god rays intensity and decay

Alternative: If god rays shader not available, create SAO example instead as fallback.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/GodRays.tsx 2>&1 | head -20</automated>
  </verify>
  <done>GodRays.tsx renders volumetric light beams through occluding geometry</done>
</task>

<task type="auto">
  <name>Task 3: Create Advanced Multi-Effect Example</name>
  <files>code/examples/webgl/postprocessing/Advanced.tsx</files>
  <action>
Create example combining multiple postprocessing effects.

1. Create rich scene with varied materials and lighting
2. Setup EffectComposer with multiple passes:
   - RenderPass
   - SSAOPass (ambient occlusion)
   - UnrealBloomPass (bloom on bright areas)
   - SMAAPass (anti-aliasing)
3. Add controls for each effect with enable/disable toggles
4. Use reactive state to toggle passes on/off:
```tsx
const ssaoEnabled = $(true)
// In useFrame:
if ($$(ssaoPass)) $$(ssaoPass).enabled = $$(ssaoEnabled)
```

Pass order matters: RenderPass first, anti-aliasing last.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/Advanced.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Advanced.tsx renders scene with multiple chained effects, each toggleable</done>
</task>

<task type="auto">
  <name>Task 4: Create Masking Example</name>
  <files>code/examples/webgl/postprocessing/Masking.tsx</files>
  <action>
Create example showing selective effect application using layers.

1. Import MaskPass, ClearMaskPass from @woby/three/examples/jsm/postprocessing/MaskPass
2. Create scene with objects on different layers:
   - Layer 0: Default objects (no effect)
   - Layer 1: Objects to receive bloom effect
3. Setup EffectComposer with:
   - RenderPass (renders all layers)
   - MaskPass (enables layer 1 mask)
   - UnrealBloomPass (applies to masked layer only)
   - ClearMaskPass (clears the mask)
4. Use object.layers.set(1) to assign objects to bloom layer

Pattern:
```tsx
<mesh layers-set={[1]}>
  <sphereGeometry args={[0.5, 32, 32]} />
  <meshStandardMaterial emissive={0xff0000} emissiveIntensity={2} />
</mesh>
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/Masking.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Masking.tsx renders scene with selective bloom on specific objects only</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| User input -> Effect toggles | Boolean flags, no injection risk |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-05-05 | D | SSRPass | accept | Computationally expensive but no security risk |
| T-05-06 | E | Layer masking | accept | User-controlled visual effect only |
</threat_model>

<verification>
- All 4 examples compile without TypeScript errors
- SSR shows reflections on reflective surfaces
- God rays create volumetric light effect (or SAO fallback)
- Advanced example shows multiple effects working together
- Masking applies effects to selected objects only
</verification>

<success_criteria>
- 4 advanced postprocessing examples ported
- Multi-effect chaining pattern established
- Layer-based masking demonstrated
- Performance considerations documented
</success_criteria>

<output>
After completion, create `.planning/phases/05-postprocessing/05-03-SUMMARY.md`
</output>
