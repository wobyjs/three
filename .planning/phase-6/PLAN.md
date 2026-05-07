---
phase: 06-webgpu
plan: 01
type: execute
wave: 1
depends_on: []
files_modified: []
autonomous: true
requirements: [WEBGPU-01, WEBGPU-02, WEBGPU-03]
user_setup:
  - service: WebGPU
    why: "WebGPU renderer requires browser support"
    env_vars: []
    dashboard_config:
      - task: "Use Chrome 113+ or Edge 113+ for WebGPU support"
        location: "Browser update"

must_haves:
  truths:
    - "WebGPU renderer initializes in supported browser"
    - "Fallback message shown in unsupported browser"
    - "Basic WebGPU scene renders correctly"
    - "WebGPU-specific materials work"
  artifacts:
    - path: "code/examples/webgpu/_template.tsx"
      provides: "WebGPU example template"
      min_lines: 80
    - path: "code/examples/webgpu/Basic.tsx"
      provides: "Basic WebGPU scene"
      min_lines: 60
    - path: "code/lib/renderers/WebGPURenderer.ts"
      provides: "WebGPU renderer wrapper"
      min_lines: 50
  key_links:
    - from: "webGPURenderer"
      to: "canvas"
      via: "DOM element"
      pattern: "new WebGPURenderer\\({ canvas }\\)"
    - from: "WebGPU"
      to: "navigator.gpu"
      via: "API availability"
      pattern: "navigator\\.gpu"
---

<objective>
Establish WebGPU rendering infrastructure and port foundational WebGPU examples.

Purpose: Set up WebGPU renderer wrapper and demonstrate basic WebGPU scenes.
Output: WebGPU template, basic example, and renderer wrapper.
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
</context>

<interfaces>
<!-- WebGPU renderer interface from Three.js -->

From three/src/renderers/WebGPURenderer.js:
```typescript
// WebGPURenderer constructor: (parameters?)
// parameters: { canvas, antialias, alpha, powerPreference, ... }
// Methods: render(scene, camera), setSize(), setPixelRatio()
// Properties: toneMapping, toneMappingExposure, outputColorSpace
```

WebGPU initialization pattern:
```tsx
// Check for WebGPU support
if (!navigator.gpu) {
  console.warn('WebGPU not supported')
  return <div>WebGPU not supported in this browser</div>
}

// Create renderer
<webGPURenderer
  antialias
  setPixelRatio={[window.devicePixelRatio]}
  setSize={[window.innerWidth, window.innerHeight]}
/>
```

Note: WebGPU examples in Three.js are marked as WIP. Some features may be incomplete.
</interfaces>

<tasks>

<task type="auto">
  <name>Task 1: Create WebGPU Renderer Wrapper</name>
  <files>code/lib/renderers/WebGPURenderer.ts</files>
  <action>
Create JSX wrapper for WebGPURenderer following the pattern from WebGLRenderer.

1. Create file at code/lib/renderers/WebGPURenderer.ts
2. Import WebGPURenderer from three/src/renderers/WebGPURenderer.js
3. Register in Three namespace
4. Define consParams: ['canvas', 'antialias', 'alpha', 'powerPreference']
5. Define objProps: ['toneMapping', 'toneMappingExposure', 'outputColorSpace', ...]
6. Create JSX intrinsic element webGPURenderer
7. Export types

Pattern from WebGLRenderer.ts:
```typescript
import { WebGPURenderer } from 'three/src/renderers/WebGPURenderer.js'
Three.WebGPURenderer = WebGPURenderer
declare module 'woby' {
  namespace JSX {
    interface IntrinsicElements {
      webGPURenderer: WebGPURendererProps,
    }
  }
}
```
  </action>
  <verify>
    <automated>npx tsx code/lib/renderers/WebGPURenderer.ts 2>&1 | head -10</automated>
  </verify>
  <done>WebGPURenderer.ts compiles and registers webGPURenderer JSX element</done>
</task>

<task type="auto">
  <name>Task 2: Create WebGPU Example Template</name>
  <files>code/examples/webgpu/_template.tsx</files>
  <action>
Create template for WebGPU examples with browser support detection.

1. Create directory code/examples/webgpu/
2. Create _template.tsx with:
   - WebGPU support check at component start
   - Fallback UI for unsupported browsers
   - WebGPURenderer setup
   - Basic scene with mesh, camera, lights
   - OrbitControls for interaction
   - Comments explaining WebGPU-specific patterns

Key pattern:
```tsx
export const WebGPUTemplate = () => {
  const [supported, setSupported] = $(true)

  useEffect(() => {
    if (!navigator.gpu) {
      setSupported(false)
    }
  })

  if (!$$(supported)) {
    return <div>WebGPU not supported. Use Chrome 113+ or Edge 113+.</div>
  }

  return (
    <canvas3D>
      <webGPURenderer antialias />
      <scene>...</scene>
      <perspectiveCamera />
    </canvas3D>
  )
}
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webgpu/_template.tsx 2>&1 | head -20</automated>
  </verify>
  <done>_template.tsx compiles with WebGPU support detection</done>
</task>

<task type="auto">
  <name>Task 3: Create Basic WebGPU Example</name>
  <files>code/examples/webgpu/Basic.tsx</files>
  <action>
Create basic WebGPU scene demonstrating the renderer.

1. Import WebGPURenderer wrapper
2. Create scene with rotating cube
3. Use MeshStandardMaterial (WebGPU compatible)
4. Add lighting (ambient + directional)
5. Implement animation with useFrame
6. Include WebGPU support check

This example verifies WebGPU rendering pipeline works correctly.
  </action>
  <verify>
    <automated>npx tsx code/examples/webgpu/Basic.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Basic.tsx renders rotating cube using WebGPU renderer</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| Browser -> WebGPU API | Feature detection required before use |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-06-01 | D | WebGPU support | mitigate | Check navigator.gpu before creating renderer, show fallback UI |
| T-06-02 | E | Browser compatibility | accept | WebGPU is browser feature, no security implications |
</threat_model>

<verification>
- WebGPURenderer wrapper compiles
- Template includes support detection
- Basic example renders in WebGPU-capable browser
- Fallback message shown in unsupported browser
</verification>

<success_criteria>
- WebGPU infrastructure established
- Template with support detection created
- Basic example demonstrates WebGPU rendering
- Ready for additional WebGPU examples
</success_criteria>

<output>
After completion, create `.planning/phases/06-webgpu/06-01-SUMMARY.md`
</output>
