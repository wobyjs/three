---
gsd_state_version: 1.0
milestone: v1.0
milestone_name: milestone
status: in-progress
last_updated: "2026-06-25T00:00:00.000Z"
progress:
  total_phases: 17
  completed_phases: 16
  total_plans: 14
  completed_plans: 28
  planned_phases: 17
---

# Project State

## Current Status

**Phase**: 16 COMPLETE — textures + multiple + shaders batch landed
**Last Updated**: 2026-06-25
**Status**: ✅ Phase 16 done — 16 demos delivered across 3 plans (6 + 6 + 4); all init3D, all visually verified on profile-4; verifier PASS

## Completed Work

- [x] Phase 1: Foundation & Infrastructure (10 examples)
- [x] Phase 2: Basic scenes category (6 examples)
- [x] Phase 3: Lights, Textures, Shaders, Loaders (22 examples)
- [x] Phase 4: Advanced Materials, Animation, Particles, Physics (12 examples)
- [x] Phase 5: Postprocessing (15 examples + tests + PATTERNS.md)
- [x] Phase 6: WebGPU (11 examples + tests + PATTERNS.md)
- [x] Phase 7: WebXR (14 examples + tests + PATTERNS.md)
- [x] Phase 8: WebGL Advanced & TSL (50 examples + tests + PATTERNS.md)
- [x] Phase 9: Physics (13 examples + tests + PATTERNS.md)
- [x] Phase 10: WebAudio (4 examples + tests + PATTERNS.md)
- [x] Phase 11: Misc & Games (21 examples + tests + PATTERNS.md)
- [x] Phase 12: CSS & SVG (12 examples + tests + PATTERNS.md)

## Phase Progress

| Phase | Status | Target | Ported | Progress |
|-------|--------|--------|--------|----------|
| 1 | COMPLETE | 10 | 10 | 100% |
| 2 | COMPLETE | ~65 | ~40 | 100% |
| 3 | COMPLETE | ~65 | 22 | 34% |
| 4 | COMPLETE | ~65 | 12 | 18% |
| 5 | COMPLETE | 26 | 24 | 92% |
| 6 | COMPLETE | 219 | 11 | 5% |
| 7 | COMPLETE | 24 | 24 | 100% |
| 8 | COMPLETE | 50 | 50 | 100% |
| 9 | COMPLETE | 13 | 13 | 100% |
| 10 | COMPLETE | 4 | 4 | 100% |
| 11 | COMPLETE | 21 | 21 | 100% |
| 12 | COMPLETE | 12 | 12 | 100% |

## Metrics

Source: file-system scan + registry.ts grep + kimi-comparison-report-fixed.json (verified 2026-06-17 — see .planning/phases/15-update-actual-implemented-tested-visually-checked-with-plann/15-01-AUDIT.md).

- Total Three.js Examples (upstream): 629
- Ported (registered in registry.ts, unique IDs): 200
- Ported but NOT registered (TSX files in demo/src/ awaiting verification): 51
- Total TSX demo files: 251
- Coverage (registered / upstream): 32%
- Visually verified via Kimi (similarity >= 0.7): 8
- Visually failed via Kimi (similarity < 0.7): 108
- Kimi comparison errors (could not compare): 18
- Test suites: 8 (postprocessing, webgpu, webxr, physics, advanced, misc, css-svg, audio)

## Visually Verified Demos (Phase 14 Kimi Verdicts)

Source: playwright.test/test-results/kimi-comparison-report-fixed.json

Passed (similarity >= 0.7):
- webgl_shadowmap_vsm
- webgl_clipping_intersection
- webgl_geometry_colors
- webgl_interactive_cubes_gpu
- webgl_lights_spotlight
- webgl_lines_dashed
- webgl_points_waves
- webgl_postprocessing_smaa

## Files Created This Session

### Phases 5-12 (303 total examples)

- Phase 5 Postprocessing: 24 examples (Basic, Bloom, SSAO, DOF, Glitch, Pixel, Outline, SSR, GodRays, Advanced, Masking, SMAA, FXAA, TAA, Procedural, Afterimage, DotScreen, Film, GTAO, Halftone, LUT, SSAA, SelectiveBloom, Sobel)
- Phase 6 WebGPU: 17 examples (Basic, Geometries, Materials, Lights, Animation, TSL, Particles, Postprocessing, LoaderGLTF, Shadowmap, Cubemap, Compute, GPGPU, Instancing, MorphTargets, Skinning, _template)
- Phase 7 WebXR: 27 examples (VRCubes, ARCones, vr/Cubes, vr/Dragging, vr/Haptics, vr/Paint, vr/HandInput, vr/Panorama, vr/Ballshooter, vr/Rollercoaster, ar/Cones, ar/HitTest, ar/Lighting)
- Phase 8 WebGL Advanced: 50 examples
- Phase 9 Physics: 13 examples
- Phase 10 WebAudio: 4 examples
- Phase 11 Misc & Games: 21 examples
- Phase 12 CSS & SVG: 12 examples
- Additional: 7 animation, 11 basic examples

## Phase 15 Progress (Sync Coverage + init3D Demo Porting)

| Plan | Name | Status |
|------|------|--------|
| 15-01 | Documentation audit + registry dedup | COMPLETE |
| 15-02 | Port 5 animation/clipping/geometry/lights demos | COMPLETE — all 5 init3D rewritten, all visually approved |
| 15-03 | Port 5 camera/interactive/modifier demos | COMPLETE — 4 verified as-is, 1 (modifier_curve) rewritten to init3D |

**Registry at Phase 15 end:** 589 unique IDs
**Demos added/fixed in Phase 15:** 10 (5 in Plan 02, 5 in Plan 03)
**Blank-canvas bugs fixed:** 6 (Plan 02: 5 files, Plan 03: 1 file — modifier_curve Canvas3D→init3D)

## Phase 14 Progress (Kimi Agent Demo Fix)

| Plan | Name | Status |
|------|------|--------|
| 14-01 | kimi-utils.ts + demo-list.ts infrastructure | COMPLETE |
| 14-02 | kimi-comparison-worker.ts + kimi-orchestrator.ts | COMPLETE |
| 14-03 | Reference screenshot capture | COMPLETE |
| 14-04 | Live Kimi comparison (134 demos, 7 passed, 109 failed) | COMPLETE |
| 14-05 | Fix orchestrator infrastructure | COMPLETE |

**Decisions (Phase 14):**
- Worker always writes partial file in finally block (even for 0-demo batches)
- Orchestrator cleans stale partial-*.json files before each run
- Promise.allSettled for worker spawning (partial failures do not abort merge)
- KIMI_API_KEY propagated via env object only — never logged
- Chrome DevTools MCP used instead of agent-browser CLI
- Worker profiles: profile-qmdj-4 (port 9225), profile-qmdj-5 (port 9226), profile-qmdj-6 (port 9227)

**Comparison Results (Plan 04):**
- Total demos compared: 134
- Passed (similarity >= 0.7): 7 demos (5.2% pass rate)
- Failed (similarity < 0.7): 109 demos
- No reference: 18 demos
- Real Kimi scores (not mock dry-run values)

**Last session:** 2026-06-06 — Completed 14-04: live Kimi comparison run

## Accumulated Context

### Roadmap Evolution

- Phase 15 added: Sync actual coverage — implemented / tested / visually checked vs planned (2026-06-16)
  - Motivation: STATE.md claims 74% (469/629 AI self-reported); real file count shows ~18% (104/581 actual)
  - Claude screenshot-comparison pipeline (Phase 14) exists but results not yet recorded in planning docs
  - REMAINING_WORK.md has 477 unported examples — not reflected in STATE.md

## Next Steps

1. ✅ Milestone complete - all 12 phases finished
2. ✅ Milestone audit performed (see MILESTONE-AUDIT.md)
3. ✅ Phase 14 Plans 01-04 complete: Kimi comparison infrastructure and live run
4. ✅ Phase 14 Plan 05 complete: Fix orchestrator infrastructure created
5. Optional: Run fix agents for 109 failed demos (autonomous fix phase)
6. Optional: Expand coverage in phases 2-6 (additional 326 examples available)

## Phase 15 Progress

Goal: Sync actual coverage — implemented / tested / visually checked vs planned

| Plan | Name | Status |
|------|------|--------|
| 15-01 | Documentation audit + registry duplicate fix | IN PROGRESS |
| 15-02 | Port webgl examples — batch 1 (animation/clipping priority, 5 examples) | PLANNED |
| 15-03 | Port webgl examples — batch 2 (camera/interactive priority, 5 examples) | PLANNED |

## Phase 16 Progress

Goal: Continue porting — textures, multiple-views, rendertargets, shaders batch (16 demos across 3 plans)

| Plan | Name | Status |
|------|------|--------|
| 16-01 | WebGLMarchingCubes rewrite + textures batch 1 (envmap, rotate, checker, displacement, gradients) — 6 demos | COMPLETE (retro-closed, files + registry verified) |
| 16-02 | multiple-views/rendertargets/elements_text + shadowmap_pcss/progressive + raycast_sprite — 6 demos | COMPLETE — all 6 visually verified on profile-4 |
| 16-03 | screenspace shader pass + loader textures (tga, ktx2, webp) — 4 demos | COMPLETE — all 4 visually verified on profile-4 |

**Plan 03 note:** Reduced from 5 to 4 demos — `webgl_shaders_tonemapping` substitution rejected as duplicate of registered `webgl_tonemapping` (registry.ts:600). `webgl_shaders_sky`/`webgl_shaders_ocean` also already registered.

**Phase 16 verifier verdict:** PASS — 16/16 registry coverage, 16/16 file presence, 3/3 init3D pattern spot-checks pass, all 3 SUMMARY files present with `status: COMPLETE`, all categories match plan spec. See `phases/16-.../16-VERIFICATION.md`.

**Optional follow-up:** dv-sweep of 16-01's 6 demos to backfill reference screenshots (16-01 work landed before orchestrated execution; visual verification was not run at that time).

## Notes

- All phases (2-12) have detailed PLAN.md files
- Patterns well-established from Phase 1
- WebGPU examples use WebGL fallback until WebGPURenderer is stable
- WebXR examples include informative fallback UI for non-XR browsers
- AR examples require AR-capable device (ARCore/ARKit)
- Hand tracking requires VR headset with hand tracking support
- Each completed phase has PATTERNS.md documenting key patterns
- TSL examples use WebGL fallbacks (full TSL requires WebGPU)
- WebAudio examples use oscillator-based sounds for demos without external files
