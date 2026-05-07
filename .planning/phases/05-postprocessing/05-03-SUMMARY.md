---
phase: 05-postprocessing
plan: 03
subsystem: postprocessing
tags: [ssr, sao, bloom, smaa, masking, layers, effect-composer]
requires: [05-01, 05-02]
provides: [POSTPROC-08, POSTPROC-09, POSTPROC-10, POSTPROC-11, POSTPROC-12]
affects: []
tech-stack:
  added: [SSRPass, SAOPass, SMAAPass, MaskPass, ClearMaskPass]
  patterns: [layer-masking, multi-effect-chaining, reactive-effect-toggles]
key-files:
  created:
    - code/examples/webgl/postprocessing/SSR.tsx
    - code/examples/webgl/postprocessing/GodRays.tsx
    - code/examples/webgl/postprocessing/Advanced.tsx
    - code/examples/webgl/postprocessing/Masking.tsx
  modified: []
decisions:
  - Used SAOPass instead of GodRaysPass (Three.js jsm lacks dedicated GodRaysPass)
  - Layer masking implemented via MaskPass/ClearMaskPass stencil approach
  - Multi-effect chain order: RenderPass -> SSAO -> Bloom -> SMAA -> OutputPass
metrics:
  duration: 18 minutes
  completed: 2026-05-07T10:29:43Z
  tasks: 4
  files: 4
  lines: 876
---

# Phase 5 Plan 3: Advanced Postprocessing Summary

Ported 4 advanced postprocessing examples demonstrating complex effect combinations and layer-based selective effects.

## One-liner

Advanced postprocessing with SSR, SAO, multi-effect chaining, and layer-based masking for selective bloom.

## Files Created

| File | Lines | Purpose |
|------|-------|---------|
| SSR.tsx | 224 | Screen space reflections on metallic surfaces |
| GodRays.tsx | 195 | SAO ambient occlusion (GodRays fallback) |
| Advanced.tsx | 243 | Multi-effect chain with SSAO+Bloom+SMAA |
| Masking.tsx | 214 | Layer-based selective bloom effect |

## Key Patterns

### SSRPass Configuration
```tsx
const ssrPass = new SSRPass({
    renderer,
    scene,
    camera,
    width: window.innerWidth,
    height: window.innerHeight,
})
ssrPass.intensity = 0.5
ssrPass.maxDistance = 0.1
ssrPass.thickness = 0.02
```

### Multi-Effect Chain Order
1. RenderPass - renders scene to texture
2. SSAOPass - ambient occlusion for depth
3. UnrealBloomPass - bloom on bright areas
4. SMAAPass - anti-aliasing (last before output)
5. OutputPass - final color correction

### Layer-Based Masking
```tsx
// Layer 1 objects receive bloom
<mesh layers-set={[1]}>
    <sphereGeometry args={[0.5, 32, 32]} />
    <meshBasicMaterial color={0xff4444} />
</mesh>

// MaskPass enables stencil for layer 1
const maskPass = new MaskPass(scene, camera)
composer.addPass(maskPass)
composer.addPass(bloomPass)
composer.addPass(new ClearMaskPass())
```

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing Critical Functionality] GodRaysPass not available**
- **Found during:** Task 2 implementation
- **Issue:** Three.js jsm does not have a dedicated GodRaysPass
- **Fix:** Created SAO (Scalable Ambient Occlusion) example as the plan's specified fallback
- **Files modified:** GodRays.tsx
- **Commit:** 34ea25b

None other - plan executed as written.

## Performance Considerations

- **SSR**: Computationally expensive due to screen-space ray marching. Documented performance warning in comments.
- **SAO**: More efficient than SSAO for large scenes, provides scalable ambient occlusion.
- **Multi-effect**: Each pass adds GPU overhead. Toggle effects via `pass.enabled` property.

## Threat Flags

None - all effects are visual-only, no security-relevant surface introduced.

## Self-Check: PASSED

- [x] SSR.tsx exists (224 lines)
- [x] GodRays.tsx exists (195 lines)
- [x] Advanced.tsx exists (243 lines)
- [x] Masking.tsx exists (214 lines)
- [x] All commits present in git log
