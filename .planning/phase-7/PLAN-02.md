---
phase: 07-webxr
plan: 02
type: execute
wave: 2
depends_on: [07-01]
files_modified: []
autonomous: true
requirements: [WEBXR-04, WEBXR-05, WEBXR-06, WEBXR-07]
user_setup: []

must_haves:
  truths:
    - "VR scene renders in headset"
    - "Objects can be grabbed with controllers"
    - "Haptics provide controller vibration"
    - "Paint/draw in VR works"
  artifacts:
    - path: "code/examples/webxr/vr/Cubes.tsx"
      provides: "VR cubes example"
      min_lines: 80
    - path: "code/examples/webxr/vr/Dragging.tsx"
      provides: "VR object dragging"
      min_lines: 100
    - path: "code/examples/webxr/vr/Haptics.tsx"
      provides: "VR haptics demo"
      min_lines: 80
    - path: "code/examples/webxr/vr/Paint.tsx"
      provides: "VR painting"
      min_lines: 120
  key_links:
    - from: "controller"
      to: "select event"
      via: "addEventListener"
      pattern: "controller\\.addEventListener\\('selectstart'"
    - from: "haptics"
      to: "gamepad"
      via: "session"
      pattern: "controller\\.gamepad\\.hapticActuators"
---

<objective>
Port core VR examples demonstrating interaction, haptics, and painting.

Purpose: Demonstrate VR-specific interactions with controller input.
Output: 4 VR examples with various interaction patterns.
</objective>

<execution_context>
@$HOME/.claude-glm-glm/get-shit-done/workflows/execute-plan.md
@$HOME/.claude-glm-glm/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/phase-1/PATTERNS.md
@code/lib/webxr/VRButton.ts
@code/lib/webxr/XRController.ts
</context>

<interfaces>
<!-- VR interaction patterns -->

Controller event pattern:
```typescript
controller.addEventListener('selectstart', (event) => {
  // Trigger pressed - start interaction
})
controller.addEventListener('selectend', (event) => {
  // Trigger released - end interaction
})
controller.addEventListener('squeezestart', (event) => {
  // Grip pressed
})
```

Raycasting in VR:
```typescript
const raycaster = new THREE.Raycaster()
const tempMatrix = new THREE.Matrix4()

// Get controller ray
tempMatrix.identity().extractRotation(controller.matrixWorld)
raycaster.ray.origin.setFromMatrixPosition(controller.matrixWorld)
raycaster.ray.direction.set(0, 0, -1).applyMatrix4(tempMatrix)

const intersects = raycaster.intersectObjects(objects)
```

Haptics pattern:
```typescript
const session = renderer.xr.getSession()
const inputSource = controller.inputSource
if (inputSource.gamepad?.hapticActuators?.length > 0) {
  inputSource.gamepad.hapticActuators[0].pulse(1.0, 100) // intensity, duration ms
}
```
</interfaces>

<tasks>

<task type="auto">
  <name>Task 1: Create VR Cubes Example</name>
  <files>code/examples/webxr/vr/Cubes.tsx</files>
  <action>
Create VR cubes example - basic VR scene with interactive cubes.

1. Create directory code/examples/webxr/vr/
2. Create scene with floor and multiple cubes
3. Setup VR with VRButton
4. Add XR controllers with ray visualization
5. Implement cube selection on controller trigger:
   - Raycast from controller
   - Highlight selected cube
   - Change cube color on select

Pattern from webxr_vr_cubes:
- Cubes float in space
- Controller ray shows pointing direction
- Selecting cube changes its color
  </action>
  <verify>
    <automated>npx tsx code/examples/webxr/vr/Cubes.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Cubes.tsx renders VR scene with interactive cubes</done>
</task>

<task type="auto">
  <name>Task 2: Create VR Dragging Example</name>
  <files>code/examples/webxr/vr/Dragging.tsx</files>
  <action>
Create VR dragging example - grab and move objects in VR.

1. Create scene with various objects to grab
2. Setup XR controllers with grip interaction
3. Implement drag logic:
   - On squeezestart: attach object to controller
   - On squeezeend: detach object, leave at new position
   - Use controller.attach(object) for proper transforms

Pattern:
```tsx
const onSqueezeStart = (event) => {
  const controller = event.target
  const intersects = raycaster.intersectObjects(objects)
  if (intersects.length > 0) {
    const object = intersects[0].object
    controller.attach(object) // Parent to controller
    controller.userData.selected = object
  }
}

const onSqueezeEnd = (event) => {
  const controller = event.target
  if (controller.userData.selected) {
    const object = controller.userData.selected
    scene.attach(object) // Parent back to scene
    controller.userData.selected = null
  }
}
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webxr/vr/Dragging.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Dragging.tsx allows grabbing and moving objects in VR</done>
</task>

<task type="auto">
  <name>Task 3: Create VR Haptics Example</name>
  <files>code/examples/webxr/vr/Haptics.tsx</files>
  <action>
Create VR haptics example - controller vibration feedback.

1. Create scene with objects that trigger haptics on touch
2. Setup XR controllers
3. Implement haptics on select:
```tsx
const triggerHaptics = (controller, intensity = 1.0, duration = 100) => {
  const session = renderer.xr.getSession()
  const inputSource = controller.inputSource

  if (inputSource?.gamepad?.hapticActuators) {
    inputSource.gamepad.hapticActuators[0]?.pulse(intensity, duration)
  }
}
```
4. Add visual feedback synchronized with haptics
5. Include UI for testing haptics (button press triggers pulse)

Note: Haptics may not be available on all devices. Include fallback.
  </action>
  <verify>
    <automated>npx tsx code/examples/webxr/vr/Haptics.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Haptics.tsx triggers controller vibration on interaction</done>
</task>

<task type="auto">
  <name>Task 4: Create VR Paint Example</name>
  <files>code/examples/webxr/vr/Paint.tsx</files>
  <action>
Create VR painting example - draw in 3D space.

1. Create empty VR scene
2. Setup XR controllers
3. Implement painting:
   - On selectstart: begin stroke
   - While selecting: add points to stroke
   - On selectend: finish stroke
4. Use TubeGeometry or Line for strokes
5. Add color picker for different brush colors
6. Add button to clear all strokes

Pattern:
```tsx
const strokes = $<THREE.Group[]>([])
const currentStroke = $<THREE.BufferGeometry>()

const onDraw = () => {
  const controller = $$(controllerRef)
  if (!controller) return

  // Get controller position
  const position = new THREE.Vector3()
  position.setFromMatrixPosition(controller.matrixWorld)

  // Add point to current stroke
  // ...
}
```
  </action>
  <verify>
    <automated>npx tsx code/examples/webxr/vr/Paint.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Paint.tsx allows drawing strokes in 3D VR space</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| Controller input | Hardware-dependent, user-initiated |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-07-03 | E | Object selection | accept | User-initiated, no injection risk |
| T-07-04 | D | Haptics | accept | Hardware feature, no data exposure |
</threat_model>

<verification>
- All 4 VR examples compile
- Cubes example renders interactive cubes
- Dragging allows object manipulation
- Haptics triggers controller vibration
- Paint allows 3D drawing
</verification>

<success_criteria>
- 4 VR examples ported
- Controller interaction patterns established
- Haptics integration demonstrated
- 3D painting in VR working
</success_criteria>

<output>
After completion, create `.planning/phases/07-webxr/07-02-SUMMARY.md`
</output>
