# Fix Agent: webgl_lines_dashed

## Demo Source
File: demo/src/WebGLLinesDashed.tsx

## Kimi Verdict (what to fix)
Score: 0.35
Reasoning: Image 1 (PORTED) displays white dashed curved lines on a black background with orange vertical dashed lines at the left and right edges, resembling partial wireframe edges. Image 2 (REFERENCE) shows a complete scene with a yellow dashed wireframe cube containing a complex 3D white dashed curve (appearing as a mathematical knot or torus), plus UI elements including a cyan FPS counter in the top-left and yellow title text at the top center. While both images feature dashed line geometry on a black background, the PORTED image critically lacks the containing yellow cube wireframe (only showing ambiguous orange side dashes), lacks all UI elements, and presents the curves from a perspective that makes them appear as disconnected 2D arcs rather than a cohesive 3D object. The overall scene composition, color scheme for structural elements (orange vs yellow), and completeness differ substantially between the two images.
Key differences:
- Missing yellow wireframe cube in PORTED image - only partial orange vertical dashed lines visible at edges instead of complete cube
- Missing UI elements in PORTED: no FPS counter (top-left) and no title text 'three.js - dashed lines example' (top center)
- Different structural line colors: orange dashed lines in PORTED vs yellow dashed cube edges in REFERENCE
- White curve presentation differs: disconnected arch and spike patterns in PORTED vs continuous interwoven 3D knot contained within cube in REFERENCE
- Camera perspective variation: PORTED appears as a close-up or orthographic projection lacking depth cues present in REFERENCE

## Instructions
1. Load skills: /woby-dev /woby /dom /dom-customelement
2. Read woby full documentation
3. Read all files in woby/demo/playground/** (test specs and successful samples)
4. Read ../wui for web component UI props wiring patterns
5. Read demo/src/WebGLLinesDashed.tsx
6. Apply the MINIMAL fix to match the threejs.org reference rendering.
   Focus on the key_differences listed above.
   Common issues: $vs$$ misuse, auto-render conflict, missing dispose, wrong material props.
   NEVER use "as any". Use proper Woby reactive types.
7. After editing, re-capture the ported screenshot:
   agent-browser session name: fix-webgl_lines_dashed
   URL: http://localhost:5175/#webgl_lines_dashed
   Wait: 8000ms
   Screenshot path: playwright.test/screenshots/ported/webgl_lines_dashed.png (overwrite)
   Close session: agentBrowser('fix-webgl_lines_dashed', ['close'])
8. Re-run Kimi comparison: kimiCompare('screenshots/ported/webgl_lines_dashed.png', 'screenshots/reference/webgl_lines_dashed.png')
9. Report: final score, improvement delta, what was changed.
   Write result to: test-results/fix-results/webgl_lines_dashed.json
   Format: { id, before_score, after_score, status, change_description }
