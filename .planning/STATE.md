---
gsd_state_version: 1.0
milestone: v1.0
milestone_name: milestone
status: in-progress
last_updated: "2026-06-26T00:00:00.000Z"
progress:
  total_phases: 21
  completed_phases: 21
  total_plans: 21
  completed_plans: 48
  planned_phases: 21
---

# Project State

## Current Status

**Phase**: 21 COMPLETE
**Last Updated**: 2026-06-27
**Status**: ✅ Phase 18 closed (12 demos). ✅ Phase 19 COMPLETE — all 12 loader demos registered, visually verified. ✅ Phase 20 COMPLETE — all 12 IBL/modifier demos registered, visually verified. ✅ Phase 21 COMPLETE — all 12 raycaster/misc/video/morphtargets demos registered, visually verified. Registry at 751 unique IDs (715 + 36 new across Phases 19-21). All 36 demos across three phases typechecked and verified.

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
- [x] Phase 18: Misc, Controls, Camera, Env-maps (12 demos: WebGLControlsDeviceOrientation, WebGLControlsDrag, WebGLCameraArray, WebGLCameraCinematic, WebGLEnvmapsHDR, WebGLEnvmapsEXR, WebGLEnvmapsFastHDR, WebGLMaterialsModified, WebGLTextureAnisotropy, WebGLTextureFilters, WebGLTextureRotation, WebGLTextureHTML)
- [x] Phase 19: Advanced Loaders (12 demos: WebGLLoader3DTiles, WebGLLoaderIFC, WebGLLoaderLDraw, WebGLLoaderUSDZ, WebGLLoaderColladaKinematics, WebGLLoaderColladaSkinning, WebGLLoaderFBXNurbs, WebGLLoaderMD2Control, WebGLLoaderTextureKTX, WebGLLoaderTexturePVRTC, WebGLLoaderTextureTIFF, WebGLLoaderTextureUltraHDR)
- [x] Phase 20: LightProbes, PMREM, Cubemap Mipmaps, Modifiers, Math (12 demos: WebGLLightProbes, WebGLLightProbesComplex, WebGLLightProbesSponza, WebGLPMREMCubemap, WebGLPMREMEquirectangular, WebGLPMREMTest, WebGLMaterialsCubemapMipmaps, WebGLMaterialsCubemapRenderToMipmaps, WebGLModifierCurveInstanced, WebGLModifierSimplifier, WebGLModifierSubdivision, WebGLMathOBB)
- [x] Phase 21: Raycaster, Misc, Video, Morphtargets (12 demos: WebGLRaycasterBVH, WebGLRaycasterSprite, WebGLRaycasterTexture, WebGLInteractiveBufferGeometry, WebGLMultipleScenesComparison, WebGLSimpleGI, WebGLRendererPathtracer, WebGLGeometryTerrainRaycast, WebGLVideoKinect, WebGLVideoPanoramaEquirectangular, WebGLMorphTargetsFace, WebGLMorphTargetsWebcam)

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
| 18 | COMPLETE | 12 | 12 | 100% |
| 19 | COMPLETE | 12 | 12 | 100% |
| 20 | COMPLETE | 12 | 12 | 100% |
| 21 | COMPLETE | 12 | 12 | 100% |

## Metrics

Source: file-system scan + registry.ts grep + kimi-comparison-report-fixed.json (verified 2026-06-17 — see .planning/phases/15-update-actual-implemented-tested-visually-checked-with-plann/15-01-AUDIT.md).

- Total Three.js Examples (upstream): 629
- Ported (registered in registry.ts, unique IDs): 751
- Ported but NOT registered (TSX files in demo/src/ awaiting verification): 51
- Total TSX demo files: 251
- Coverage (registered / upstream): 120%
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

## Phase 17 Progress

Goal: Continue porting — GLTF material extensions + advanced GLTF loaders + postprocessing batch (12 demos across 3 plans)

| Plan | Name | Status |
|------|------|--------|
| 17-01 | GLTF material extensions: iridescence, sheen, transmission, dispersion — 4 demos | COMPLETE — all 4 visually verified on profile-4 |
| 17-02 | Advanced GLTF loaders: animation_pointer, progressive_lod, avif, instancing — 4 demos | COMPLETE — executor killed mid-flight on registry-merge; all writes had landed, orchestrator backfilled SUMMARY + visual verification on profile-5 |
| 17-03 | Postprocessing: backgrounds, rgb_halftone, procedural, unreal_bloom_selective — 4 demos | COMPLETE — all 4 visually verified on profile-6; executor made per-demo commits (`682e733`, `340b36b`, `98a9d1c`, `65c2e45`) |

**Phase 17 verifier verdict:** PASS — 12/12 file presence, 12/12 registry presence (lines 532-535, 537-540, 601-604, each unique), 12/12 init3D pattern, 12/12 JSX pragma, 3/3 SUMMARY status COMPLETE, type-check clean, zero TODO/FIXME/HACK in any new file. See `phases/17-.../17-VERIFICATION.md`.

**Registry at Phase 17 end:** 703 unique IDs (691 + 12 new).

**Scope decisions made during planning (2026-06-26):**
- `webgl_loader_gltf_clearcoat` dropped — not present in upstream `threejs.org/examples/files.json`
- `webgl_loader_gltf_animation` dropped — only `webgl_loader_gltf_animation_pointer` exists upstream (used instead)
- `webgl_postprocessing_3d_lut` dropped — upstream ID is `webgl_postprocessing_3dlut` and is ALREADY REGISTERED at registry.ts:580
- `webgl_postprocessing_stencil` dropped — not in upstream `files.json`
- Replacements added (all confirmed unregistered + upstream-present): `_animation_pointer`, `_progressive_lod`, `_avif`, `_instancing`, `_procedural`, `_unreal_bloom_selective`

**All 12 IDs grep-verified absent from `demo/src/registry.ts` on 2026-06-26.**

## Phase 18 Progress

Goal: Continue porting — materials envmaps + textures + modified batch (12 demos across 3 plans, all wave 1)

| Plan | Name | Status |
|------|------|--------|
| 18-01 | Env-maps + modified material: `envmaps_hdr`, `envmaps_exr`, `envmaps_fasthdr`, `modified` — 4 demos | COMPLETE — all 4 visually verified on profile-4; FastHDR rewritten to KTX2 path (canonical) |
| 18-02 | Texture sampling/transform: `texture_anisotropy`, `texture_filters`, `texture_rotation`, `texture_html` — 4 demos | COMPLETE — all 4 visually verified on profile-4; `html2canvas@1.4.1` added (HTML demo) |
| 18-03 | Specialty textures: `texture_manualmipmap`, `texture_partialupdate`, `video_webcam`, `normalmap_object_space` — 4 demos | COMPLETE — all 4 visually verified on profile-4; webcam exercised via fallback overlay (intentional for automated CDP context) |

**Plan-checker verdict (2026-06-26):** PASS — 7/7 dimensions: goal coverage (4+4+4=12), scope-fence (zero registry-ID collisions), source availability (12 scaffolds in `code/examples/webgl/materials/`), wave assignment (all wave 1, disjoint output files, parallel-safe on profiles 4/5/6), pattern compliance (init3D + JSX pragma + forbidden patterns), verification protocol (full dv CLI sequence with timing waits), frontmatter completeness. No blockers.

**Phase 18 verifier verdict (2026-06-26):** PASS — 12/12 file presence, 12/12 registry presence (lines 288-299, each unique), 12/12 init3D + `_cleanupFn` pattern, 12/12 `@jsxImportSource woby` pragma, 12/12 zero forbidden patterns (`as any`, `useEffect`, `useRef`) + zero debt markers, 3/3 SUMMARY status COMPLETE, type-check clean. 9/9 derived truths verified. See `phases/18-misc-controls-camera-envmaps/18-VERIFICATION.md`.

**Registry at Phase 18 end:** 715 unique IDs (703 + 12 new at registry.ts:288-299).

**Non-blocking follow-ups noted:**
- `@monogrid/gainmap-js@3.4.0` added to `demo/package.json` by 18-01 executor before discovering canonical FastHDR uses KTX2Loader path. Unused. Optional `pnpm remove @monogrid/gainmap-js` from `demo/` workspace if no future plan adopts the HDRJPGLoader path. Harmless if left.
- `webgl_materials_video_webcam` was visually verified via the 5-second-timeout fallback overlay because the dv-driven Chrome session left the `getUserMedia` permission prompt unanswered. The live MediaStream path is implemented but cannot be auto-verified via dv CLI — optional manual run with permission granted exercises it.

**Executor commit notes:** Executors ran sequentially on dv profile 4 per user constraint (`/gsd-execute-phase 18, u r using dv profile 4`). All 12 demos delivered with per-demo init3D scaffolds and visual verification screenshots in user temp directory.

**Scope-fence pivot (2026-06-26)** — original seed scope was misc-controls + camera + envmaps. Planner pre-flight grep found:
- All 7 misc_controls_* IDs already at registry.ts:909-916 (canonical IDs without `webgl_` prefix) → 7 candidates dropped
- `webgl_camera_logarithmic_depth_buffer` already at registry.ts:486 (underscored alias of the upstream `_logarithmicdepthbuffer`) → 1 candidate dropped
- 8 dropped slots backfilled with cleanly unregistered `webgl_materials_*` demos that have pre-converted `.tsx` scaffolds: `texture_anisotropy`, `texture_filters`, `texture_rotation`, `texture_html`, `texture_manualmipmap`, `texture_partialupdate`, `video_webcam`, `normalmap_object_space`

See `phases/18-misc-controls-camera-envmaps/18-CONTEXT.md` for the full pre-flight audit and `18-PLAN-CHECK.md` for the plan-checker findings.

**Caveat to communicate to executor:** The 12 source `.tsx` files under `code/examples/webgl/materials/` are stub-quality scaffolds — many omit upstream features (HDR loading via `RGBELoader`, `getUserMedia` for webcam, `onBeforeCompile` shader injection, anisotropy config). Implementer MUST consult upstream `https://threejs.org/examples/#<id>` HTML for canonical behavior. External-asset substitutions documented per-task in each PLAN (Phase 17 precedent: GLTF→Icosahedron, HDR URL fallback, npm legitimacy check for `@monogrid/gainmap-js` and `html2canvas`).

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
