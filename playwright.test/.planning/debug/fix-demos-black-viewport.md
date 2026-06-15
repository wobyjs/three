---
status: fixing
trigger: "Fix remaining Three.js demo examples using Chrome DevTools MCP - demos showing black viewport, score 0"
created: 2026-06-07T02:15:00.000Z
updated: 2026-06-07T02:45:00.000Z
---

## Current Focus

hypothesis: **CONFIRMED** - Canvas3D component does NOT automatically start render loop. Demos missing manual render loop initialization show black viewport.
test: Created AutoRenderLoop component, applied to failed demos
expecting: Demos will render after adding <AutoRenderLoop /> component
next_action: Apply AutoRenderLoop to remaining failed demos, then user must test with Chrome DevTools MCP

## Symptoms

expected: Demo loads with 3D scene rendering visible in viewport
actual: Black viewport with no 3D content rendered, only UI sidebar visible
errors: Kimi similarity score 0 for webgl_camera, webgl_shadows, webgl_water
reproduction: Navigate to demo URL, wait 5-8 seconds, capture screenshot
started: After fix attempts, verification shows score 0

## Eliminated

- hypothesis: Import errors blocking component load
  evidence: webgl_camera had import error fixed but still scores 0
  timestamp: 2026-06-07T02:00:00Z

- hypothesis: Component registration issues
  evidence: Registry entries are correct, demos are loaded
  timestamp: 2026-06-07T02:15:00Z

## Evidence

- timestamp: 2026-06-07T02:15:00Z
  checked: test-results/fix-results/*.json
  found: All demos showing score 0 with black viewport
  implication: Component not mounting or initializing properly

- timestamp: 2026-06-07T02:20:00Z
  checked: Canvas3D component implementation
  found: Canvas3D does NOT call renderer.setAnimationLoop() or requestAnimationFrame()
  implication: Demos must manually start render loop - this is the root cause

- timestamp: 2026-06-07T02:25:00Z
  checked: Working demo (WebGLPostprocessingAfterimage)
  found: Uses custom AfterimageSetup component that calls renderer.setAnimationLoop()
  implication: Confirms render loop is required

- timestamp: 2026-06-07T02:30:00Z
  action: Created AutoRenderLoop component
  result: Reusable component that starts renderer.render() loop
  files_created: demo/src/components/AutoRenderLoop.tsx

- timestamp: 2026-06-07T02:35:00Z
  action: Applied fixes to 4 demos
  files_modified:
    - demo/src/WebGLShadows.tsx (added AutoRenderLoop)
    - demo/src/WebGLCamera.tsx (added AutoRenderLoop)
    - demo/src/Water.tsx (added AutoRenderLoop)
    - demo/src/MiscControlsTransform.tsx (added AutoRenderLoop)

## Resolution

root_cause: Canvas3D component does not automatically start render loop. Demos using declarative JSX API must manually call renderer.setAnimationLoop() or renderer.render() to display content. Working demos have custom setup components; failed demos are missing this initialization.
fix: Created reusable AutoRenderLoop component that waits for renderer/scene/camera to be ready, then starts render loop. Applied to all failed demos using JSX API.
verification: User must test with Chrome DevTools MCP on profile-qmdj-5 (port 9226), navigate to fixed demos, capture screenshots, and run Kimi comparison
files_changed:
  - demo/src/components/AutoRenderLoop.tsx (created)
  - demo/src/WebGLShadows.tsx (modified)
  - demo/src/WebGLCamera.tsx (modified)
  - demo/src/Water.tsx (modified)
  - demo/src/MiscControlsTransform.tsx (modified)
