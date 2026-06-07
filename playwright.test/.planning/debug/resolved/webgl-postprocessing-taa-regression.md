---
status: resolved
trigger: "Investigate and fix webgl_postprocessing_taa regression. The demo went from 0.95 score (passing) back to 0.3 (failing) after the RenderPass fix was applied."
created: 2026-06-07T00:00:00Z
updated: 2026-06-07T00:30:00Z
---

## Current Focus
hypothesis: TAARenderPass should replace RenderPass, not be added after it. Adding both causes double rendering - RenderPass renders the scene, then TAARenderPass tries to render again with jitter, causing the white strip artifacts.
test: Remove RenderPass from WebGLPostprocessingTAA.tsx, keeping only TAARenderPass
expecting: Full scene renders correctly with TAA anti-aliasing, score returns to 0.95+
next_action: Remove RenderPass and verify TAARenderPass is used alone (like in the working original TAA.tsx example)

## Symptoms
expected: Full scene rendered with TAA anti-aliasing, score 0.95+
actual: Only thin diagonal white/silver strips visible, score 0.3
errors: Visual regression after RenderPass fix
reproduction: Navigate to http://localhost:3000/?demo=webgl_postprocessing_taa
started: After RenderPass was added before TAARenderPass

## Eliminated

## Evidence

- timestamp: 2026-06-07T00:01:00Z
  checked: Compared current WebGLPostprocessingTAA.tsx with original working TAA.tsx
  found: Original TAA.tsx line 60 comment: "TAARenderPass replaces RenderPass - it handles scene rendering with jitter". Original does NOT use RenderPass at all.
  implication: Adding RenderPass before TAARenderPass causes double rendering and breaks TAA's jitter mechanism

- timestamp: 2026-06-07T00:02:00Z
  checked: Compared FXAA, SMAA, and Bloom implementations
  found: FXAA/SMAA/Bloom all use RenderPass + ShaderPass pattern. TAA is unique - it's a full render pass, not a shader pass.
  implication: TAA has different usage pattern than shader-based postprocessing effects

- timestamp: 2026-06-07T00:03:00Z
  checked: TAARenderPass extends SSAARenderPass which extends Pass
  found: TAARenderPass is a complete render pass that handles scene rendering with temporal accumulation and camera jitter
  implication: It replaces the standard RenderPass functionality, not supplements it

## Resolution
root_cause: TAARenderPass is a complete render pass that replaces RenderPass, not a shader pass that supplements it. The previous fix added RenderPass before TAARenderPass, causing double rendering - RenderPass rendered the scene normally, then TAARenderPass tried to render with temporal jitter on top, resulting in thin white diagonal strips (the jittered partial renders).
fix: Removed RenderPass from the pipeline. Use only TAARenderPass + OutputPass, matching the original working pattern from TAA.tsx. Set accumulate=true to enable temporal accumulation.
verification: Kimi comparison score 0.98 (pass), showing excellent visual match with reference. Key differences are only minor anti-aliasing variations on mesh edges.
files_changed: [demo/src/WebGLPostprocessingTAA.tsx]
