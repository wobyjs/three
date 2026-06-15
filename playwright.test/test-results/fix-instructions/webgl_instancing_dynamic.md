# Fix Agent: webgl_instancing_dynamic

## Demo Source
File: demo/src/WebGLInstancingDynamic.tsx

## Kimi Verdict (what to fix)
Score: 0.35
Reasoning: Image 1 (PORTED) displays a small grid of approximately 10x10 instanced cubes arranged in a wave pattern with a rainbow color gradient (transitioning from yellow-green through blue to purple-pink-red), set against a solid black background with an isometric camera angle from above. The cubes are clearly separated and the UI sidebar is visible on the left. Image 2 (REFERENCE) shows the 'instancing - dynamic' example featuring a massive dense field of cubes (100x100+) extending to the horizon with a purple/magenta/monochromatic color scheme, light blue sky background, and a low ground-level camera perspective looking across the terrain. While both scenes depict instanced cubes with height variation (wave animation), the differences are substantial: completely different color palettes (rainbow vs purple), vastly different grid scales (small contained grid vs infinite field), opposite background colors (black vs sky blue), and dramatically different camera angles (isometric top-down vs ground level). The ported version appears to be a simplified, stylized reinterpretation rather than a faithful port of the original.
Key differences:
- Color scheme: Rainbow multi-colored cubes vs monochromatic purple/magenta cubes
- Grid scale: Small ~10x10 grid vs massive 100x100+ field extending to horizon
- Background: Solid black vs light blue sky
- Camera angle: High isometric view vs low ground-level perspective
- Cube density: Clearly separated individual cubes vs dense overlapping field
- UI presence: Sidebar with example list vs minimal text overlay at top

## Instructions
1. Load skills: /woby-dev /woby /dom /dom-customelement
2. Read woby full documentation
3. Read all files in woby/demo/playground/** (test specs and successful samples)
4. Read ../wui for web component UI props wiring patterns
5. Read demo/src/WebGLInstancingDynamic.tsx
6. Apply the MINIMAL fix to match the threejs.org reference rendering.
   Focus on the key_differences listed above.
   Common issues: $vs$$ misuse, auto-render conflict, missing dispose, wrong material props.
   NEVER use "as any". Use proper Woby reactive types.
7. After editing, re-capture the ported screenshot using Chrome DevTools MCP:
   Profile: profile-qmdj-6 (port 9227)
   URL: http://localhost:5175/#webgl_instancing_dynamic
   Wait: 8000ms
   Screenshot path: playwright.test/screenshots/ported/webgl_instancing_dynamic.png (overwrite)
   MCP close_page after capture
8. Re-run Kimi comparison: kimiCompare('screenshots/ported/webgl_instancing_dynamic.png', 'screenshots/reference/webgl_instancing_dynamic.png')
9. Report: final score, improvement delta, what was changed.
   Write result to: test-results/fix-results/webgl_instancing_dynamic.json
   Format: { id, before_score, after_score, status, change_description }
