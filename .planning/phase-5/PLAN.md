---
phase: 05-postprocessing
plan: 01
type: execute
wave: 1
depends_on: []
files_modified: []
autonomous: true
requirements: [POSTPROC-01, POSTPROC-02, POSTPROC-03]
user_setup: []

must_haves:
  truths:
    - "EffectComposer renders postprocessed scene"
    - "Pass chain executes in correct order"
    - "Bloom effect visible on bright objects"
    - "SSAO effect adds ambient occlusion"
    - "Controls allow adjusting effect parameters"
  artifacts:
    - path: "code/examples/webgl/postprocessing/Basic.tsx"
      provides: "Basic postprocessing example"
      min_lines: 80
    - path: "code/examples/webgl/postprocessing/Bloom.tsx"
      provides: "Unreal bloom effect demo"
      min_lines: 100
    - path: "code/examples/webgl/postprocessing/SSAO.tsx"
      provides: "Screen space ambient occlusion"
      min_lines: 120
  key_links:
    - from: "effectComposer"
      to: "renderPass"
      via: "addPass()"
      pattern: "composer\\.addPass"
    - from: "renderPass"
      to: "scene/camera"
      via: "constructor args"
      pattern: "new RenderPass\\(scene, camera\\)"
---

<objective>
Port foundational postprocessing examples demonstrating EffectComposer setup and basic pass chaining.

Purpose: Establish the postprocessing pattern for all subsequent examples.
Output: 3 working postprocessing examples with EffectComposer integration.
</objective>

<execution_context>
@$HOME/.claude-glm-glm/get-shit-done/workflows/execute-plan.md
@$HOME/.claude-glm-glm/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/phase-1/PATTERNS.md
@code/examples/webgl/_template.tsx
@code/examples/jsm/postprocessing/EffectComposer.ts
@code/examples/jsm/postprocessing/RenderPass.ts
@code/examples/jsm/postprocessing/UnrealBloomPass.ts
</context>

<interfaces>
<!-- Key types and contracts for postprocessing. Extracted from codebase. -->

From code/examples/jsm/postprocessing/EffectComposer.ts:
```typescript
export type EffectComposerProps = Node<EffectComposer, typeof EffectComposer, {
  renderer: WebGLRenderer;
  renderTarget?: WebGLRenderTarget;
}>
// Constructor args: [renderer, renderTarget?]
```

From code/examples/jsm/postprocessing/RenderPass.ts:
```typescript
export type RenderPassProps = Node<RenderPass, typeof RenderPass, {
  scene: Scene;
  camera: Camera;
  overrideMaterial?: Material | null;
  clearColor?: Color | null;
  clearAlpha?: number | null;
}>
```

From code/examples/jsm/postprocessing/UnrealBloomPass.ts:
```typescript
export type UnrealBloomPassProps = Node<UnrealBloomPass, typeof UnrealBloomPass, {
  resolution: Vector2;
  strength: number;
  radius: number;
  threshold: number;
}>
```

Postprocessing pattern:
```tsx
// EffectComposer wraps the scene and passes
<effectComposer ref={composerRef} args={[renderer]}>
  <renderPass args={[scene, camera]} />
  <unrealBloomPass args={[new Vector2(width, height), 1.5, 0.4, 0.85]} />
</effectComposer>
```
</interfaces>

<tasks>

<task type="auto">
  <name>Task 1: Create Basic Postprocessing Example</name>
  <files>code/examples/webgl/postprocessing/Basic.tsx</files>
  <action>
Create a basic postprocessing example demonstrating EffectComposer with RenderPass and a single effect pass.

1. Create directory `code/examples/webgl/postprocessing/` if not exists
2. Import required wrappers:
   - `@woby/three/src/renderers/WebGLRenderer`
   - `@woby/three/examples/jsm/postprocessing/EffectComposer`
   - `@woby/three/examples/jsm/postprocessing/RenderPass`
   - `@woby/three/examples/jsm/postprocessing/ShaderPass`
   - `@woby/three/examples/jsm/postprocessing/UnrealBloomPass`
3. Create scene with rotating cube and point light
4. Setup EffectComposer with RenderPass and UnrealBloomPass
5. Use useFrame to render via composer.render() instead of default render
6. Add OrbitControls for camera interaction

Key pattern: EffectComposer replaces default renderer.render() call. The composer.addPass() chain determines render order.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/Basic.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Basic.tsx compiles without errors, EffectComposer renders scene with bloom effect</done>
</task>

<task type="auto">
  <name>Task 2: Create Bloom Effect Example</name>
  <files>code/examples/webgl/postprocessing/Bloom.tsx</files>
  <action>
Create a dedicated bloom effect example with adjustable parameters.

1. Create scene with multiple emissive objects (spheres, boxes)
2. Setup EffectComposer with UnrealBloomPass
3. Add GUI controls for bloom parameters:
   - strength (0-3)
   - radius (0-1)
   - threshold (0-1)
4. Use reactive props to update bloom pass when controls change
5. Include dark background to emphasize bloom effect

Pattern for reactive pass updates:
```tsx
const bloomStrength = $(1.5)
// In useFrame or useEffect:
$$(bloomPassRef).strength = $$(bloomStrength)
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/Bloom.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Bloom.tsx renders emissive objects with adjustable bloom parameters</done>
</task>

<task type="auto">
  <name>Task 3: Create SSAO Example</name>
  <files>code/examples/webgl/postprocessing/SSAO.tsx</files>
  <action>
Create SSAO (Screen Space Ambient Occlusion) example.

1. Import SSAOPass from @woby/three/examples/jsm/postprocessing/SSAOPass
2. Create scene with complex geometry (multiple intersecting objects)
3. Setup EffectComposer with RenderPass and SSAOPass
4. Add controls for SSAO parameters:
   - kernelRadius
   - minDistance
   - maxDistance
5. Include ground plane to show contact shadows

Note: SSAOPass requires depth texture. Ensure renderer has:
```tsx
<webGLRenderer antialias setPixelRatio={[window.devicePixelRatio]} />
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webgl/postprocessing/SSAO.tsx 2>&1 | head -20</automated>
  </verify>
  <done>SSAO.tsx renders scene with ambient occlusion, parameters adjustable via controls</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| User input -> GUI controls | Parameters bounded to valid ranges |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-05-01 | E | GUI controls | mitigate | Clamp bloom/SSAO parameters to valid ranges (strength: 0-3, radius: 0-1) |
| T-05-02 | D | EffectComposer | accept | No network requests, local rendering only |
</threat_model>

<verification>
- All 3 examples compile without TypeScript errors
- EffectComposer renders scene with passes applied
- Bloom effect visible on emissive objects
- SSAO effect shows ambient occlusion
- Controls update pass parameters reactively
</verification>

<success_criteria>
- 3 postprocessing examples ported
- EffectComposer pattern established
- Pass chaining documented in code comments
- All examples use $$() for context access (no $())
</success_criteria>

<output>
After completion, create `.planning/phases/05-postprocessing/05-01-SUMMARY.md`
</output>
