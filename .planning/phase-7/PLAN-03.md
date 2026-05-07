---
phase: 07-webxr
plan: 03
type: execute
wave: 3
depends_on: [07-01, 07-02]
files_modified: []
autonomous: true
requirements: [WEBXR-08, WEBXR-09, WEBXR-10, WEBXR-11]
user_setup: []

must_haves:
  truths:
    - "AR scene overlays real world"
    - "Hit-test places objects on surfaces"
    - "Hand tracking works without controllers"
    - "Panorama viewing in VR works"
  artifacts:
    - path: "code/examples/webxr/ar/Cones.tsx"
      provides: "AR cones example"
      min_lines: 80
    - path: "code/examples/webxr/ar/HitTest.tsx"
      provides: "AR hit-test for surface placement"
      min_lines: 100
    - path: "code/examples/webxr/vr/HandInput.tsx"
      provides: "VR hand tracking"
      min_lines: 120
    - path: "code/examples/webxr/vr/Panorama.tsx"
      provides: "VR panorama viewer"
      min_lines: 80
  key_links:
    - from: "arButton"
      to: "hit-test feature"
      via: "requiredFeatures"
      pattern: "requiredFeatures: ['hit-test']"
    - from: "handInput"
      to: "hand meshes"
      via: "XRHandMeshModel"
      pattern: "XRHandMeshModel"
---

<objective>
Port AR examples and advanced VR examples (hand tracking, panorama).

Purpose: Demonstrate AR capabilities and advanced VR features.
Output: 4 examples covering AR and advanced VR.
</objective>

<execution_context>
@$HOME/.claude-glm-glm/get-shit-done/workflows/execute-plan.md
@$HOME/.claude-glm-glm/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/PROJECT.md
@.planning/ROADMAP.md
@.planning/phase-1/PATTERNS.md
@code/lib/webxr/ARButton.ts
</context>

<interfaces>
<!-- AR and hand tracking interfaces -->

AR setup with hit-test:
```typescript
const arButton = ARButton.createButton(renderer, {
  requiredFeatures: ['hit-test'],
  optionalFeatures: ['dom-overlay', 'local-floor']
})

// Hit test source
const hitTestSource = $<XRHitTestSource>()

renderer.xr.addEventListener('sessionstart', () => {
  const session = renderer.xr.getSession()
  session.requestReferenceSpace('viewer').then((refSpace) => {
    session.requestHitTestSource({ space: refSpace }).then((source) => {
      hitTestSource(source)
    })
  })
})
```

Hand tracking:
```typescript
import { XRHandMeshModel } from 'three/examples/jsm/webxr/XRHandMeshModel.js'

const hand1 = renderer.xr.getHand(0)
const hand2 = renderer.xr.getHand(1)

const handModelFactory = new XRHandMeshModel()
handModelFactory.createHandModel(hand1)
handModelFactory.createHandModel(hand2)
```

Panorama in VR:
```typescript
// Use equirectangular texture as background
const texture = new THREE.TextureLoader().load('panorama.jpg')
texture.mapping = THREE.EquirectangularReflectionMapping
scene.background = texture
```
</interfaces>

<tasks>

<task type="auto">
  <name>Task 1: Create AR Cones Example</name>
  <files>code/examples/webxr/ar/Cones.tsx</files>
  <action>
Create AR cones example - place cones in AR.

1. Create directory code/examples/webxr/ar/
2. Setup AR with ARButton (no hit-test, simple placement)
3. Create scene with cones at fixed positions
4. Enable local-floor reference space for proper positioning
5. Cones appear overlaid on real world when AR session starts

Pattern:
```tsx
const arButton = createARButton(renderer, {
  optionalFeatures: ['local-floor']
})
```

Note: Simple AR without hit-test places objects at origin relative to user.
  </action>
  <verify>
    <automated>npx tsx code/examples/webxr/ar/Cones.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Cones.tsx displays cones overlaid on real world in AR</done>
</task>

<task type="auto">
  <name>Task 2: Create AR Hit-Test Example</name>
  <files>code/examples/webxr/ar/HitTest.tsx</files>
  <action>
Create AR hit-test example - place objects on detected surfaces.

1. Setup AR with hit-test feature:
```tsx
const arButton = createARButton(renderer, {
  requiredFeatures: ['hit-test'],
  optionalFeatures: ['dom-overlay']
})
```
2. Request hit test source on session start
3. Perform hit test each frame:
```tsx
const results = frame.getHitTestResults(hitTestSource)
if (results.length > 0) {
  const pose = results[0].getPose(referenceSpace)
  // Place object at hit position
}
```
4. Show reticle at hit position
5. Place object on tap/select

Note: Hit-test requires AR-capable device (mobile AR or AR headset).
  </action>
  <verify>
    <automated>npx tsx code/examples/webxr/ar/HitTest.tsx 2>&1 | head -20</automated>
  </verify>
  <done>HitTest.tsx places objects on detected surfaces in AR</done>
</task>

<task type="auto">
  <name>Task 3: Create VR Hand Input Example</name>
  <files>code/examples/webxr/vr/HandInput.tsx</files>
  <action>
Create VR hand tracking example - use hands instead of controllers.

1. Import XRHandMeshModel from three/examples/jsm/webxr/XRHandMeshModel.js
2. Setup VR session with hand tracking:
```tsx
const vrButton = createVRButton(renderer)
// Hand tracking is optional feature
```
3. Get hand references:
```tsx
const hand1 = renderer.xr.getHand(0)
const hand2 = renderer.xr.getHand(1)
```
4. Create hand mesh models:
```tsx
const handModelFactory = new XRHandMeshModel()
handModelFactory.createHandModel(hand1)
handModelFactory.createHandModel(hand2)
```
5. Detect pinch gestures for interaction

Note: Hand tracking requires headset with hand tracking support (Quest, etc.).
  </action>
  <verify>
    <automated>npx tsx code/examples/webxr/vr/HandInput.tsx 2>&1 | head -20</automated>
  </verify>
  <done>HandInput.tsx tracks hands in VR without controllers</done>
</task>

<task type="auto">
  <name>Task 4: Create VR Panorama Example</name>
  <files>code/examples/webxr/vr/Panorama.tsx</files>
  <action>
Create VR panorama viewer - view 360 image in VR.

1. Load equirectangular panorama image
2. Set as scene background:
```tsx
const texture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/2294472375_24a3b8ef46_o.jpg')
texture.mapping = THREE.EquirectangularReflectionMapping

<scene background={texture} />
```
3. Setup VR with VRButton
4. User can look around panorama in VR headset

Note: Use Three.js example panorama texture for demo.
  </action>
  <verify>
    <automated>npx tsx code/examples/webxr/vr/Panorama.tsx 2>&1 | head -20</automated>
  </verify>
  <done>Panorama.tsx displays 360 panorama in VR headset</done>
</task>

</tasks>

<threat_model>
## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| AR camera | Device camera access (AR only) |
| Hand tracking | Biometric-adjacent data |

## STRIDE Threat Register

| Threat ID | Category | Component | Disposition | Mitigation Plan |
|-----------|----------|-----------|-------------|-----------------|
| T-07-05 | I | AR camera | accept | Camera used for AR overlay only, not stored |
| T-07-06 | I | Hand tracking | accept | Hand pose used for interaction only, not stored |
| T-07-07 | S | Panorama URL | mitigate | Use only trusted CDN URLs (threejs.org) |
</threat_model>

<verification>
- All 4 examples compile
- AR Cones displays in AR session
- Hit-Test places objects on surfaces
- Hand Input tracks hands
- Panorama shows 360 image in VR
</verification>

<success_criteria>
- AR examples demonstrate surface detection
- Hand tracking works without controllers
- Panorama viewing functional
- AR-specific patterns documented
</success_criteria>

<output>
After completion, create `.planning/phases/07-webxr/07-03-SUMMARY.md`
</output>
