# Fix Agent: webgl_postprocessing_smaa

## Demo Source
File: demo/src/WebGLPostprocessingSMAA.tsx

## Kimi Verdict (what to fix)
Score: 0.6
Reasoning: Both images display a 2x2 grid of four viewports containing diagonal line geometry (likely representing 3D coordinate axes or grid helpers) against a black background, indicating the same underlying scene structure and camera layout. However, the ported version (Image 1) renders the lines as extremely faint, dark cyan/teal lines that are barely visible against the dark background, resulting in very low contrast. The reference version (Image 2) renders the same lines as bright, light gray or white lines with high contrast, making the geometry clearly visible. While the spatial arrangement, geometric shapes, and viewport layout match perfectly, the significant difference in line color/intensity and visibility makes the ported version visually distinct and harder to interpret.
Key differences:
- Line color/intensity: Ported version displays dark cyan/teal lines with low brightness; Reference version displays bright white/light gray lines
- Contrast and visibility: Ported version has extremely low contrast making lines barely discernible; Reference version has high contrast with lines clearly visible
- Content legibility: Geometric content is difficult to see in the ported version but prominent in the reference version

## Instructions
1. Load skills: /woby-dev /woby /dom /dom-customelement
2. Read woby full documentation
3. Read all files in woby/demo/playground/** (test specs and successful samples)
4. Read ../wui for web component UI props wiring patterns
5. Read demo/src/WebGLPostprocessingSMAA.tsx
6. Apply the MINIMAL fix to match the threejs.org reference rendering.
   Focus on the key_differences listed above.
   Common issues: $vs$$ misuse, auto-render conflict, missing dispose, wrong material props.
   NEVER use "as any". Use proper Woby reactive types.
7. After editing, re-capture the ported screenshot:
   agent-browser session name: fix-webgl_postprocessing_smaa
   URL: http://localhost:5175/#webgl_postprocessing_smaa
   Wait: 8000ms
   Screenshot path: playwright.test/screenshots/ported/webgl_postprocessing_smaa.png (overwrite)
   Close session: agentBrowser('fix-webgl_postprocessing_smaa', ['close'])
8. Re-run Kimi comparison: kimiCompare('screenshots/ported/webgl_postprocessing_smaa.png', 'screenshots/reference/webgl_postprocessing_smaa.png')
9. Report: final score, improvement delta, what was changed.
   Write result to: test-results/fix-results/webgl_postprocessing_smaa.json
   Format: { id, before_score, after_score, status, change_description }
