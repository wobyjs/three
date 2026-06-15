# Fix Summary: Black Viewport Root Cause Identified and Fixed

## Root Cause

**Canvas3D component does NOT automatically start the render loop.**

Working demos like `WebGLPostprocessingAfterimage` manually call `renderer.setAnimationLoop()` in a setup component. Failed demos were missing this initialization, resulting in a black viewport even though all scene elements were correctly defined.

## Solution

Created `AutoRenderLoop` component that:
1. Waits for renderer, scene, and camera to be registered in context
2. Starts `renderer.setAnimationLoop(() => renderer.render(scene, camera))`
3. Handles cleanup on unmount

## Files Created

- `demo/src/components/AutoRenderLoop.tsx` - Reusable render loop initialization component

## Files Fixed

1. **demo/src/WebGLShadows.tsx** - Added `<AutoRenderLoop />`
2. **demo/src/WebGLCamera.tsx** - Added `<AutoRenderLoop />`
3. **demo/src/Water.tsx** - Added `<AutoRenderLoop />`
4. **demo/src/MiscControlsTransform.tsx** - Added `<AutoRenderLoop />`
5. **demo/src/PhysicsAmmoCloth.tsx** - Added `<AutoRenderLoop />`

## Expected Results

After applying these fixes, demos should:
- Render 3D content instead of black viewport
- Achieve Kimi similarity scores ≥ 0.7
- Match reference screenshots from threejs.org

## User Testing Required

**I cannot execute Chrome DevTools MCP commands due to permission restrictions.**

User must:

1. **Start dev server**:
   ```bash
   cd D:\Developments\tslib\@woby\three\demo
   pnpm dev
   ```

2. **Launch Chrome with correct profile**:
   ```powershell
   & "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9226 --user-data-dir="C:\chrome-profiles\profile-qmdj-5"
   ```

3. **For each fixed demo**:
   - Navigate to `http://localhost:5177/#{demo-id}`
   - Wait 5-8 seconds for render
   - Capture screenshot with Chrome DevTools MCP
   - Run Kimi comparison

4. **Test commands** (user must execute):
   ```typescript
   // Navigate
   mcp__chrome-devtools__navigate_page({ url: "http://localhost:5177/#webgl_shadows" })

   // Wait for canvas
   mcp__chrome-devtools__wait_for({ selector: "canvas", timeout: 8000 })

   // Screenshot
   mcp__chrome-devtools__take_screenshot({
     outputPath: "D:\\Developments\\tslib\\@woby\\three\\playwright.test\\screenshots\\ported\\webgl_shadows.png"
   })
   ```

## Next Steps

1. User tests the 5 fixed demos
2. If successful, apply same pattern to remaining failed demos:
   - physics_rapier_basic
   - physics_rapier_instancing
   - physics_rapier_joints
   - physics_ammo_break
   - webgl_postprocessing
   - webgl_postprocessing_advanced
   - webgl_postprocessing_dof
   - webgl_postprocessing_film
   - webgl_shadow_contact
   - webgl_shadowmap_pointlight

3. Run Kimi verification for all fixed demos
4. Update test-results/fix-results/*.json with scores

## Pattern for Future Demos

**For any demo using JSX declarative API:**

```tsx
import { AutoRenderLoop } from './components/AutoRenderLoop'

export const MyDemo = () => {
    return (
        <Canvas3D>
            <webglRenderer ... />
            <scene>
                {/* scene content */}
            </scene>
            <perspectiveCamera ... />
            <AutoRenderLoop />  {/* <-- Always add this */}
        </Canvas3D>
    )
}
```

**Exception**: Demos using imperative Three.js API with manual `requestAnimationFrame()` don't need AutoRenderLoop (like WebGLCameraArray).

## Debug Session

Full investigation tracked in: `.planning/debug/fix-demos-black-viewport.md`

## Confidence Level

**HIGH** - Root cause confirmed by:
- Canvas3D source code review
- Working demo pattern analysis
- Consistent symptom across all failed demos
- AutoRenderLoop follows established pattern from post-processing demos
