# Fix Agent: webgl_animation_keyframes

## Demo Source
File: demo/src/AnimationKeyframes.tsx

## Kimi Verdict (what to fix)
Score: 0.3
Reasoning: Image 1 (PORTED) shows an almost completely black screen with only a very small sliver of blue visible at the bottom edge, suggesting the 3D scene is not rendering correctly or the camera is positioned incorrectly. The expected 3D objects, lighting, and scene content are not visible. Image 2 (REFERENCE) shows a proper Three.js example with a visible FPS counter displaying '60 FPS (0-60)' in cyan/teal text on a dark blue background, indicating the renderer is working. The PORTED version fails to display any meaningful scene content, while the REFERENCE shows a functional rendering with performance metrics. The PORTED image appears to be a catastrophic rendering failure where the scene is either not loaded, the camera is inside an object or facing away, or there is a fundamental issue with the WebGL/reactive port.
Key differences:
- Image 1 shows nearly complete blackness with only a tiny blue edge at bottom, indicating missing or broken scene rendering
- Image 2 shows a functional FPS counter with readable cyan text '60 FPS (0-60)' on dark blue background
- Image 1 lacks any visible 3D objects, lighting, or scene elements
- Image 2 demonstrates working WebGL rendering with performance monitoring UI
- Color composition: Image 1 is ~95% black vs Image 2 has clear dark blue UI panel with cyan text

## Instructions
1. Load skills: /woby-dev /woby /dom /dom-customelement
2. Read woby full documentation
3. Read all files in woby/demo/playground/** (test specs and successful samples)
4. Read ../wui for web component UI props wiring patterns
5. Read demo/src/AnimationKeyframes.tsx
6. Apply the MINIMAL fix to match the threejs.org reference rendering.
   Focus on the key_differences listed above.
   Common issues: $vs$$ misuse, auto-render conflict, missing dispose, wrong material props.
   NEVER use "as any". Use proper Woby reactive types.
7. After editing, re-capture the ported screenshot:
   agent-browser session name: fix-webgl_animation_keyframes
   URL: http://localhost:5175/#webgl_animation_keyframes
   Wait: 8000ms
   Screenshot path: playwright.test/screenshots/ported/webgl_animation_keyframes.png (overwrite)
   Close session: agentBrowser('fix-webgl_animation_keyframes', ['close'])
8. Re-run Kimi comparison: kimiCompare('screenshots/ported/webgl_animation_keyframes.png', 'screenshots/reference/webgl_animation_keyframes.png')
9. Report: final score, improvement delta, what was changed.
   Write result to: test-results/fix-results/webgl_animation_keyframes.json
   Format: { id, before_score, after_score, status, change_description }
