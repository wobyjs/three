---
phase: 07-webxr
plan: 01
type: execute
wave: 1
depends_on: []
files_modified: []
autonomous: true
requirements: [WEBXR-01, WEBXR-02, WEBXR-03]
user_setup:
  - service: WebXR
    why: "VR/AR requires XR-capable device and headset"
    env_vars: []
    dashboard_config:
      - task: "Use VR headset (Oculus, Vive, etc.) or AR-capable device"
        location: "Hardware setup"
      - task: "Enable WebXR in Chrome flags if needed"
        location: "chrome://flags"

must_haves:
  truths:
    - "VRButton creates Enter VR button"
    - "ARButton creates Enter AR button"
    - "XRController provides input tracking"
    - "Basic VR scene renders in headset"
  artifacts:
    - path: "code/examples/webxr/_template.tsx"
      provides: "WebXR example template"
      min_lines: 80
    - path: "code/lib/webxr/VRButton.ts"
      provides: "VR button wrapper"
      min_lines: 50
    - path: "code/lib/webxr/ARButton.ts"
      provides: "AR button wrapper"
      min_lines: 50
    - path: "code/lib/webxr/XRController.ts"
      provides: "XR controller wrapper"
      min_lines: 60
  key_links:
    - from: "vrButton"
      to: "renderer"
      via: "VRButton.createButton(renderer)"
      pattern: "VRButton\\.createButton"
    - from: "xrController"
      to: "renderer.xr"
      via: "getController()"
      pattern: "renderer\\.xr\\.getController"
---

<objective>
Establish WebXR infrastructure and create VR/AR button wrappers.

Purpose: Set up WebXR support with VRButton, ARButton, and XRController wrappers.
Output: WebXR template, button wrappers, controller wrapper.
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
<!-- WebXR interfaces from Three.js -->

From three/examples/jsm/webxr/VRButton.js:
```typescript
// VRButton.createButton(renderer) returns HTMLButtonElement
// Button handles 'Enter VR' / 'Exit VR' state
// Requires renderer.xr.enabled = true
```

From three/examples/jsm/webxr/ARButton.js:
```typescript
// ARButton.createButton(renderer, options) returns HTMLButtonElement
// Options: { requiredFeatures, optionalFeatures }
// Common features: 'hit-test', 'plane-detection', 'local-floor'
```

From three/examples/jsm/webxr/XRControllerModelFactory.js:
```typescript
// Creates controller models matching physical controllers
// XRControllerModelFactory.createControllerModel(controller)
```

WebXR setup pattern:
```tsx
// Enable XR on renderer
<webGLRenderer xr-enabled />

// Create VR button
const vrButton = VRButton.createButton(renderer)
document.body.appendChild(vrButton)

// Setup controllers
const controller1 = renderer.xr.getController(0)
const controller2 = renderer.xr.getController(1)
```
</interfaces>

<tasks>

<task type="auto">
  <name>Task 1: Create VRButton Wrapper</name>
  <files>code/lib/webxr/VRButton.ts</files>
  <action>
Create wrapper for VRButton following Three.js jsm pattern.

1. Create directory code/lib/webxr/
2. Import VRButton from three/examples/jsm/webxr/VRButton.js
3. Export VRButton and its methods
4. Create JSX helper for VR button creation:
```typescript
export const createVRButton = (renderer: THREE.WebGLRenderer): HTMLButtonElement => {
  return VRButton.createButton(renderer)
}
```
5. Register in Three namespace

Note: VRButton is a utility class, not a Three.js object. Wrap as helper function.
  </action>
  <verify>
    <automated>npx tsx code/lib/webxr/VRButton.ts 2>&1 | head -10</automated>
  </verify>
  <done>VRButton.ts exports VR button creation helper</done>
</task>

<task type="auto">
  <name>Task 2: Create ARButton Wrapper</name>
  <files>code/lib/webxr/ARButton.ts</files>
  <action>
Create wrapper for ARButton.

1. Import ARButton from three/examples/jsm/webxr/ARButton.js
2. Export ARButton and its methods
3. Create JSX helper for AR button creation:
```typescript
export interface ARButtonOptions {
  requiredFeatures?: string[]
  optionalFeatures?: string[]
}

export const createARButton = (
  renderer: THREE.WebGLRenderer,
  options?: ARButtonOptions
): HTMLButtonElement => {
  return ARButton.createButton(renderer, options)
}
```
4. Document common AR features in comments
  </action>
  <verify>
    <automated>npx tsx code/lib/webxr/ARButton.ts 2>&1 | head -10</automated>
  </verify>
  <done>ARButton.ts exports AR button creation helper</done>
</task>

<task type="auto">
  <name>Task 3: Create XRController Wrapper</name>
  <files>code/lib/webxr/XRController.ts</files>
  <action>
Create wrapper for XR controller functionality.

1. Import XRControllerModelFactory from three/examples/jsm/webxr/XRControllerModelFactory.js
2. Create helper for setting up controllers:
```typescript
export const setupXRControllers = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene
) => {
  const controller1 = renderer.xr.getController(0)
  const controller2 = renderer.xr.getController(1)

  scene.add(controller1)
  scene.add(controller2)

  // Add visual markers
  const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, -1)
  ])
  const line = new THREE.Line(geometry)
  line.scale.z = 5

  controller1.add(line.clone())
  controller2.add(line.clone())

  return { controller1, controller2 }
}
```
3. Export types for controller events
  </action>
  <verify>
    <automated>npx tsx code/lib/webxr/XRController.ts 2>&1 | head -10</automated>
  </verify>
  <done>XRController.ts exports XR controller setup helper</done>
</task>

<task type="auto">
  <name>Task 4: Create WebXR Template</name>
  <files>code/examples/webxr/_template.tsx</files>
  <action>
Create template for WebXR examples.

1. Create directory code/examples/webxr/
2. Create _template.tsx with:
   - WebXR support detection
   - VR/AR button setup
   - Basic scene with floor and objects
   - XR controller setup
   - Fallback for non-XR browsers

Pattern:
```tsx
export const WebXRTemplate = () => {
  const rendererRef = $<THREE.WebGLRenderer>()
  const [xrSupported, setXRSupported] = $(false)

  useEffect(() => {
    const renderer = $$(rendererRef)
    if (!renderer) return

    if ('xr' in navigator) {
      navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
        setXRSupported(supported)
        if (supported) {
          const button = createVRButton(renderer)
          document.body.appendChild(button)
        }
      })
    }
  })

  return (
    <canvas3D>
      <webGLRenderer ref={rendererRef} xr-enabled />
      <scene>...</scene>
      <perspectiveCamera />
    </canvas3D>
  )
}
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webxr/_template.tsx 2>&1 | head -20</automated>
  </verify>
  <done>_template.tsx compiles with WebXR support detection and VR button</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| Browser -> WebXR API | Feature detection required |
| XR device -> Controller input | Hardware-dependent |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-07-01 | D | WebXR support | mitigate | Check navigator.xr before enabling, show fallback |
| T-07-02 | T | XR input | accept | Controller input is user-initiated, no injection risk |
</threat_model>

<verification>
- VRButton wrapper compiles
- ARButton wrapper compiles
- XRController wrapper compiles
- Template includes XR support detection
</verification>

<success_criteria>
- WebXR infrastructure established
- VR/AR button helpers created
- XR controller setup helper created
- Template demonstrates WebXR setup
</success_criteria>

<output>
After completion, create `.planning/phases/07-webxr/07-01-SUMMARY.md`
</output>
