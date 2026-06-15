# Fix Agent: webgl_postprocessing_taa

## Demo Source
File: demo/src/WebGLPostprocessingTAA.tsx

## Kimi Verdict (what to fix)
Score: 0.3
Reasoning: Image 1 (PORTED) shows a dark/black background with several white/grey lines radiating from a central point, resembling wireframe axes or a simple line geometry. There are no visible 3D objects, materials, or lighting - just basic line primitives forming a star-like pattern. The UI shows this is a 'Three.js Demo' example with a 'Plane' label. Image 2 (REFERENCE) shows a completely different scene with a visible FPS counter (60 FPS) in cyan/teal text on a dark blue/black background. The reference appears to be a performance metrics overlay rather than a 3D scene content view, or it shows a minimal scene with just the FPS display. The two images depict fundamentally different content: Image 1 has geometric line content with no UI overlay, while Image 2 has a performance UI overlay with no visible 3D geometry. The ported version fails to reproduce the reference example correctly, showing only basic wireframe lines instead of the expected 3D scene, and missing the FPS counter entirely.
Key differences:
- Image 1 contains white radiating line geometry from center; Image 2 has no visible line geometry
- Image 1 has no FPS counter; Image 2 displays '60 FPS (56-60)' in cyan/teal text in top-left corner
- Image 1 shows 3D wireframe content; Image 2 shows performance metrics UI overlay
- Image 1 background is pure black; Image 2 background is dark blue/black with UI element
- Image 1 has visible geometric primitives (lines); Image 2 appears to be a minimal/empty scene with only HUD

## Instructions
1. Load skills: /woby-dev /woby /dom /dom-customelement
2. Read woby full documentation
3. Read all files in woby/demo/playground/** (test specs and successful samples)
4. Read ../wui for web component UI props wiring patterns
5. Read demo/src/WebGLPostprocessingTAA.tsx
6. Apply the MINIMAL fix to match the threejs.org reference rendering.
   Focus on the key_differences listed above.
   Common issues: $vs$$ misuse, auto-render conflict, missing dispose, wrong material props.
   NEVER use "as any". Use proper Woby reactive types.
7. After editing, re-capture the ported screenshot using Chrome DevTools MCP:
   Profile: profile-qmdj-6 (port 9227)
   URL: http://localhost:5175/#webgl_postprocessing_taa
   Wait: 8000ms
   Screenshot path: playwright.test/screenshots/ported/webgl_postprocessing_taa.png (overwrite)
   MCP close_page after capture
8. Re-run Kimi comparison: kimiCompare('screenshots/ported/webgl_postprocessing_taa.png', 'screenshots/reference/webgl_postprocessing_taa.png')
9. Report: final score, improvement delta, what was changed.
   Write result to: test-results/fix-results/webgl_postprocessing_taa.json
   Format: { id, before_score, after_score, status, change_description }
