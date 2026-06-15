# Fix Plan: Black Viewport Issues

## Problem Analysis

All failed demos show **similarity score 0** with **black viewport** in ported screenshots. This indicates the demos aren't rendering at all, not just rendering incorrectly.

### Root Cause Hypothesis

The demos are failing to initialize because of:

1. **Missing Canvas3D auto-render initialization** - Canvas3D component may not be starting the render loop
2. **Hash routing timing issues** - Demo loads before Canvas3D is ready
3. **Component import failures** - Silent import errors causing black screen

### Evidence

From `verification-summary.json`:
- 11/13 demos failed with score 0 or near-0
- Only `webgl_postprocessing_afterimage` passed (score 0.9)
- All failed demos show black viewport, not incorrect rendering

From fix results:
- `webgl_camera` had import error fixed but still scores 0
- `webgl_shadows` has correct shadow setup but still scores 0
- `webgl_water` has fixes applied but still scores 0

## Fix Strategy

### Phase 1: Investigate Canvas3D Component

**File**: `@woby/three/lib/components/Canvas3D.tsx` or equivalent

**Check**:
1. Does Canvas3D automatically start render loop on mount?
2. Is `renderer.setAnimationLoop()` or `requestAnimationFrame` being called?
3. Are scenes/cameras/renderers properly registered in context?

**Test**:
```tsx
// Add console.log to Canvas3D
console.log('[Canvas3D] Mounted, renderers:', renderers.length, 'scenes:', scenes.length, 'cameras:', cameras.length)
```

### Phase 2: Fix Render Loop Initialization

**Pattern from working demo** (`WebGLPostprocessingAfterimage.tsx`):
- Uses `useEffect` to wait for renderer/scene/camera
- Calls `renderer.setAnimationLoop(() => composer.render())`
- Falls back to setTimeout if dependencies not ready

**Apply to broken demos**:

```tsx
// Add to each broken demo after Canvas3D:
const RenderSetup = () => {
    const { update } = useThree()
    const renderers = useThree().renderers
    const scenes = useThree().scenes
    const cameras = useThree().cameras

    useEffect(() => {
        const renderer = renderers[0]
        const scene = scenes[0]
        const camera = cameras[0]

        if (!renderer || !scene || !camera) {
            setTimeout(() => update(Math.random()), 50)
            return
        }

        // Start render loop
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera)
        })

        update(Math.random())

        return () => {
            renderer.setAnimationLoop(null)
        }
    }, [])

    return null
}
```

### Phase 3: Demos to Fix (Priority Order)

**High Priority** (Controls category - user requested):
1. `misc_controls_transform` - score 0.05
2. `webgl_shadows` - score 0
3. `webgl_camera` - score 0
4. `webgl_camera_array` - score 0.05
5. `webgl_water` - score 0

**Medium Priority** (Loaders/Physics):
6. `physics_ammo_break` - score 0.15
7. `physics_ammo_cloth` - score 0
8. `physics_rapier_basic` - score 0.1
9. `physics_rapier_instancing` - score 0
10. `physics_rapier_joints` - score 0.15

**Lower Priority** (Post-processing):
11. `webgl_postprocessing` - score 0
12. `webgl_postprocessing_advanced` - score 0
13. `webgl_postprocessing_dof` - score 0.15
14. `webgl_postprocessing_film` - score 0

### Phase 4: Verification Workflow

For each fixed demo:

1. **Navigate**: Use Chrome DevTools MCP (profile-qmdj-5, port 9226)
   ```typescript
   mcp__chrome-devtools__navigate_page({ url: "http://localhost:5177/#webgl_shadows" })
   ```

2. **Wait**: 5-8 seconds for WebGL render
   ```typescript
   mcp__chrome-devtools__wait_for({ selector: "canvas", timeout: 8000 })
   ```

3. **Screenshot**: Capture ported version
   ```typescript
   mcp__chrome-devtools__take_screenshot({
     outputPath: "D:\\Developments\\tslib\\@woby\\three\\playwright.test\\screenshots\\ported\\webgl_shadows.png"
   })
   ```

4. **Compare**: Use Kimi API (if responsive)
   ```typescript
   // In kimi-comparison-worker.ts
   const result = await kimiCompare(
     "screenshots/ported/webgl_shadows.png",
     "screenshots/reference/webgl_shadows.png"
   )
   ```

5. **Iterate**: If score < 0.7, analyze Kimi reasoning and apply additional fixes

## Execution Commands

### Start Dev Server
```bash
cd D:\Developments\tslib\@woby\three\demo
pnpm dev
# Server starts on http://localhost:5177 (or 5174, 5175, 5176)
```

### Launch Chrome with Correct Profile
```powershell
# Profile qmdj-5 on port 9226
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9226 --user-data-dir="C:\chrome-profiles\profile-qmdj-5"
```

### Fix Individual Demo
For each demo in priority list:

1. Read demo source
2. Add RenderSetup component (if missing)
3. Verify Canvas3D structure
4. Test with Chrome DevTools MCP
5. Capture screenshot
6. Run Kimi comparison
7. Record result in `test-results/fix-results/{demo-id}.json`

### Batch Fix Script
```typescript
// scripts/batch-fix-demos.ts
const FAILED_DEMOS = [
    "misc_controls_transform",
    "webgl_shadows",
    "webgl_camera",
    "webgl_camera_array",
    "webgl_water",
    // ... rest of priority list
]

for (const demoId of FAILED_DEMOS) {
    console.log(`Fixing ${demoId}...`)
    // 1. Read demo file
    // 2. Apply fix
    // 3. Capture screenshot
    // 4. Run Kimi comparison
    // 5. Write result
}
```

## Expected Outcomes

After applying render loop fixes:

| Demo | Before Score | Target Score | Confidence |
|------|-------------|-------------|-----------|
| webgl_postprocessing_afterimage | 0.9 | 0.9+ | Already passing |
| webgl_shadows | 0 | 0.75+ | High - shadow setup is correct |
| webgl_camera | 0 | 0.70+ | Medium - camera setup is correct |
| webgl_water | 0 | 0.65+ | Medium - water is complex |
| misc_controls_transform | 0.05 | 0.70+ | High - controls are straightforward |

## Notes

- **Cannot execute Chrome DevTools MCP commands directly** due to permission restrictions
- **User must execute navigation and screenshot capture**
- **Kimi API may have rate limits** - use responsibly
- **Focus on Controls category** as requested (different from profile-4 agent)

## Next Steps

1. **User**: Start dev server (`cd demo && pnpm dev`)
2. **User**: Launch Chrome with profile-qmdj-5 (port 9226)
3. **Agent**: Read Canvas3D component to understand render loop
4. **Agent**: Apply fixes to each demo in priority order
5. **User**: Capture screenshots and verify with Kimi
6. **Agent**: Iterate based on Kimi feedback
