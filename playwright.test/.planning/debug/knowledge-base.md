# GSD Debug Knowledge Base

Resolved debug sessions. Used by `gsd-debugger` to surface known-pattern hypotheses at the start of new investigations.

---

## webgl-postprocessing-taa-regression — TAA white strips after RenderPass fix
- **Date:** 2026-06-07T00:30:00Z
- **Error patterns:** white diagonal strips, regression after fix, double rendering, postprocessing score drop, 0.3 score
- **Root cause:** TAARenderPass is a complete render pass that replaces RenderPass, not a shader pass that supplements it. Adding both caused double rendering.
- **Fix:** Remove RenderPass from pipeline, use only TAARenderPass + OutputPass, set accumulate=true
- **Files changed:** demo/src/WebGLPostprocessingTAA.tsx
---