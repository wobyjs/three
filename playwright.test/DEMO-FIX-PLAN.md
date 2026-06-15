# Demo Fix Plan - Black Canvas Issue

## Date: 2026-06-08
## Status: Investigation Complete, Fix Required

## Executive Summary

After systematic debugging of 5 demos with AutoRenderLoop integrated, discovered that:
- **Components ARE loading** (context-provider with scene, camera, renderer comments present)
- **Render loop IS running** (AutoRenderLoop console log confirms)
- **Canvas IS active** (991x1144 WebGL context working)
- **Content IS black** (center pixel 0,0,0,0 - no visible geometry)

This is NOT a screenshot capture issue or a render loop issue - it's a **scene content issue**.

## Root Causes Identified

### Primary Issue: Scene Objects Not Visible

Possible causes:
1. **Camera positioning** - Camera might be positioned wrong, looking at empty space
2. **Scene background** - Scene background might be black/undefined
3. **Object creation** - Mesh geometry might not be created
4. **Material issues** - Materials might be transparent/black
5. **Lighting missing** - Objects present but unlit (black)

## Investigation Evidence

### Demo: webgl_shadows

**DOM Structure**:
```html
<div class="flex-1 relative overflow-hidden bg-black">
  <div class="absolute inset-0">
    <div data-three-context="true" style="width:100%;height:100%">
      <context-provider value="[object Object]">
        <canvas width="991" height="1144" style="display: block;"></canvas>
        <!----> (scene comment node)
        <!----> (camera comment node)
        <!----> (renderer comment node)
        <!----> (AutoRenderLoop comment node)
      </context-provider>
    </div>
  </div>
</div>
```

**Console Messages**:
- ✅ `[AutoRenderLoop] Starting render loop`
- ⚠️ `WARNING: Multiple instances of Three.js being imported`

**WebGL State**:
- ✅ Context active (WebGL2)
- ✅ Viewport set (0, 0, 991, 1144)
- ✅ Clear color black (0, 0, 0, 1)
- ✅ Program bound
- ❌ Center pixel all zeros (no rendered content)

## Hypothesis

The scene/camera/renderer components exist as Woby comment nodes, but their actual Three.js objects might not be properly initialized or connected. The render loop is calling `renderer.render(scene, camera)` but the scene might be empty or camera looking at wrong position.

## Next Investigation Steps

### Check Scene Object Count
```javascript
// Need to access the actual Three.js scene object
// and check: scene.children.length
```

### Check Camera Position
```javascript
// Need to access: camera.position, camera.lookAt
```

### Check Renderer Scene Graph
```javascript
// renderer.info.render.calls - should be > 0 if rendering
```

## Fix Strategy

### Immediate Fix: Debug Scene Content
1. Find way to access Three.js scene/camera objects from Woby context
2. Check scene.children to verify objects exist
3. Check camera.position to verify correct view
4. Check renderer.info for draw calls

### Medium Fix: Scene Verification Component
Create a `<SceneDebugger />` component that logs:
- Scene children count
- Camera position
- Renderer info (triangles, draw calls)
- Materials and geometries

### Long-term Fix: Visual Verification
Before Kimi comparison, verify canvas has non-black pixels.

## Files to Fix

All 5 demos investigated have same issue:
1. `demo/src/WebGLShadows.tsx` - black canvas
2. `demo/src/WebGLCamera.tsx` - black canvas (fixed import errors)
3. `demo/src/Water.tsx` - black canvas
4. `demo/src/MiscControlsTransform.tsx` - black canvas
5. `demo/src/PhysicsAmmoCloth.tsx` - black canvas

## Test Results (Kimi Comparison)

Previous Kimi results showed scores of 0.0-0.15 with descriptions of "UI sidebar" because screenshots captured full viewport including sidebar, not just canvas.

**Actual Issue**: Even if we capture only canvas, scores would still be 0.0 because canvas is rendering black content.

## Recommended Next Action

**Before fixing more demos, we need to understand why AutoRenderLoop isn't rendering visible content.**

Two options:
1. Create SceneDebugger component to inspect scene/camera/renderer state
2. Test with a simpler demo (like basic "Plane") to see if it renders

## Conclusion

AutoRenderLoop component successfully starts render loop, but the scene content is not visible. This is a fundamental issue with how scenes are being constructed or connected in the Woby reactive context, not a screenshot capture or render loop issue.