# Fix Agent: webgl_shadowmap_vsm

## Demo Source
File: demo/src/WebGLShadowmapVSM.tsx

## Kimi Verdict (what to fix)
Score: 0.3
Reasoning: Image 1 (PORTED) shows a dark scene with a large black curved shape and soft purple/blue gradient lighting on a gray background. There appears to be a rounded dark object with some rim lighting. The overall scene is quite dark with muted colors. Image 2 (REFERENCE) shows a bright FPS counter display on a teal/cyan background with '60 FPS (47-60)' text in yellow/green colors. This is clearly a performance metrics overlay, not a 3D scene. The two images are completely different content - one is a 3D rendered scene with geometric shapes and lighting, while the other is a 2D UI element showing frame rate statistics. There is no visual similarity between the actual 3D content, as Image 2 doesn't show any 3D scene at all, only a performance monitor overlay. The port appears to have failed to render the correct content or is showing a different example entirely.
Key differences:
- Image 1 contains 3D geometric shapes with lighting and shadows while Image 2 shows only a 2D FPS counter UI element
- Image 1 has dark muted colors (black, purple, gray) while Image 2 has bright teal/cyan background with yellow-green text
- Image 1 shows a complex 3D scene with curved surfaces while Image 2 is a simple rectangular performance metrics display
- No matching objects or visual elements exist between the two images
- Image 2 appears to be a debugging/performance overlay rather than the actual rendered 3D scene content

## Instructions
1. Load skills: /woby-dev /woby /dom /dom-customelement
2. Read woby full documentation
3. Read all files in woby/demo/playground/** (test specs and successful samples)
4. Read ../wui for web component UI props wiring patterns
5. Read demo/src/WebGLShadowmapVSM.tsx
6. Apply the MINIMAL fix to match the threejs.org reference rendering.
   Focus on the key_differences listed above.
   Common issues: $vs$$ misuse, auto-render conflict, missing dispose, wrong material props.
   NEVER use "as any". Use proper Woby reactive types.
7. After editing, re-capture the ported screenshot using Chrome DevTools MCP:
   Profile: profile-qmdj-6 (port 9227)
   URL: http://localhost:5175/#webgl_shadowmap_vsm
   Wait: 8000ms
   Screenshot path: playwright.test/screenshots/ported/webgl_shadowmap_vsm.png (overwrite)
   MCP close_page after capture
8. Re-run Kimi comparison: kimiCompare('screenshots/ported/webgl_shadowmap_vsm.png', 'screenshots/reference/webgl_shadowmap_vsm.png')
9. Report: final score, improvement delta, what was changed.
   Write result to: test-results/fix-results/webgl_shadowmap_vsm.json
   Format: { id, before_score, after_score, status, change_description }
