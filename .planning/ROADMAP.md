# Roadmap: Three.js Examples Port

## Phase 1: Foundation & Infrastructure
**Duration**: 1-2 weeks
**Goal**: Establish patterns, tooling, and first batch of examples
**Status**: COMPLETE

### Deliverables
- [x] Example port template/scaffold
- [x] Test infrastructure for ported examples
- [x] 10 pilot examples from webgl category
- [x] Documentation of porting patterns

### Examples (10 pilot)
1. webgl_animation_keyframes - Keyframe animation from GLTF
2. webgl_camera - Camera switching and helpers
3. webgl_geometries - Geometry showcase
4. webgl_lights_spotlight - SpotLight with shadows
5. webgl_loader_gltf - GLTF model loading
6. webgl_interactive_cubes - Raycasting interaction
7. webgl_simple_gi - Global illumination
8. webgl_animation_multiple - Multiple animation clips (replacement)
9. webgl_materials_variations - Material property variations (replacement)
10. webgl_lights_hemisphere - Hemisphere light (replacement)

**Plans:** 4 plans in 4 waves

Plans:
- [x] 01-01-PLAN.md - Foundation: directory structure, template, patterns documentation
- [x] 01-02-PLAN.md - Core examples: geometries, camera, hemisphere light, materials variations
- [x] 01-03-PLAN.md - Advanced examples: keyframes, multiple animations, spotlight, GLTF loader
- [x] 01-04-PLAN.md - Final examples + tests: interactive cubes, simple GI, test infrastructure

---

## Phase 2: Core WebGL - Part 1
**Duration**: 4-6 weeks
**Goal**: Port ~65 foundational webgl examples covering basic scenes, cameras, geometries, and basic materials.

### Categories
- Basic scenes (~15 examples)
- Cameras (~10 examples)
- Geometries (~20 examples)
- Materials - basic (~20 examples)

### Task Breakdown

| Wave | Tasks | Duration |
|------|-------|----------|
| 1 | Basic scenes, clipping, decals | Week 1-2 |
| 2 | Camera array, cinematic, panorama | Week 2-3 |
| 3 | Parametric, dynamic, shape geometries | Week 3-4 |
| 4 | Material blending, textures, physical | Week 4-6 |

### Examples (~65)
- webgl_camera_array
- webgl_camera_cinematic
- webgl_geometries_parametric
- webgl_materials_blending
- webgl_materials_texture_anisotropy
- ... (60 more)

**Plans:** 1 master plan with 4 waves

Plans:
- [ ] 02-01-PLAN.md - Master plan with all categories and tasks

---

## Phase 3: Core WebGL - Part 2
**Duration**: 4-6 weeks
**Goal**: Port ~65 intermediate webgl examples covering lights & shadows, textures, basic shaders, and loaders.

### Categories
- Lights & shadows (~15 examples)
- Textures (~15 examples)
- Shaders - basic (~15 examples)
- Loaders (~20 examples)

### Task Breakdown

| Wave | Tasks | Duration |
|------|-------|----------|
| 1 | Physical lights, shadow mapping, light probes | Week 1-2 |
| 2 | Basic textures, advanced textures, compressed | Week 2-3 |
| 3 | Basic shaders, environment shaders, post-process | Week 3-4 |
| 4 | Standard loaders, GLTF/Draco, specialized, CAD | Week 4-6 |

### Examples (~65)
- webgl_lights_physical
- webgl_shadowmap
- webgl_texture_hdri
- webgl_loader_obj
- ... (60 more)

**Plans:** 1 master plan with 4 waves

Plans:
- [ ] 03-01-PLAN.md - Master plan with all categories and tasks

---

## Phase 4: Core WebGL - Part 3
**Duration**: 4-6 weeks
**Goal**: Port ~65 advanced webgl examples covering advanced materials, animation systems, particles, and physics integration.

### Categories
- Advanced materials (~20 examples)
- Animation systems (~15 examples)
- Particles (~15 examples)
- Physics integration (~15 examples)

### Task Breakdown

| Wave | Tasks | Duration |
|------|-------|----------|
| 1 | Physical materials, env maps, special materials | Week 1-2 |
| 2 | Skeletal animation, morph targets, advanced | Week 2-3 |
| 3 | Basic particles, GPU particles, sprites | Week 3-4 |
| 4 | Ammo.js, Rapier, Jolt, interactive physics | Week 4-6 |

### Examples (~65)
- webgl_materials_physical
- webgl_materials_envmaps
- webgl_particles
- physics_*
- ... (60 more)

**Plans:** 1 master plan with 4 waves

Plans:
- [ ] 04-01-PLAN.md - Master plan with all categories and tasks

---

## Phase 5: WebGL Postprocessing
**Duration**: 3-4 weeks
**Goal**: Port all postprocessing examples
**Status**: IN PROGRESS (Wave 3 complete)

### Examples (26)
- [x] webgl_postprocessing (Basic)
- [x] webgl_postprocessing_unreal_bloom (Bloom)
- [x] webgl_postprocessing_ssao (SSAO)
- [x] webgl_postprocessing_dof (DOF)
- [x] webgl_postprocessing_glitch (Glitch)
- [x] webgl_postprocessing_pixel (Pixel)
- [x] webgl_postprocessing_outline (Outline)
- [x] webgl_postprocessing_advanced (Advanced - multi-effect)
- [x] webgl_postprocessing_ssr (SSR)
- [x] webgl_postprocessing_sao (GodRays - SAO fallback)
- [x] webgl_postprocessing_masking (Masking - layer-based)
- [x] webgl_postprocessing_afterimage (Afterimage)
- [x] webgl_postprocessing_dotscreen (DotScreen)
- [x] webgl_postprocessing_film (Film)
- [x] webgl_postprocessing_gtao (GTAO)
- [x] webgl_postprocessing_halftone (Halftone)
- [x] webgl_postprocessing_lut (LUT)
- [x] webgl_postprocessing_fxaa (FXAA)
- [x] webgl_postprocessing_procedural (Procedural)
- [x] webgl_postprocessing_sobel (Sobel)
- [x] webgl_postprocessing_ssaa (SSAA)
- [x] webgl_postprocessing_smaa (SMAA)
- [x] webgl_postprocessing_taa (TAA)
- [x] webgl_postprocessing_unreal_bloom_selective (SelectiveBloom)

**Plans:**
- [x] 05-01-PLAN.md - Wave 1: Basic, Bloom, SSAO
- [x] 05-02-PLAN.md - Wave 2: DOF, Glitch, Pixel, Outline
- [x] 05-03-PLAN.md - Wave 3: SSR, GodRays (SAO), Advanced, Masking

---

## Phase 6: WebGPU Examples
**Duration**: 4-5 weeks
**Goal**: Port all webgpu examples (WIP category)

### Examples (219)
- webgpu_*
- Full coverage of WebGPU rendering pipeline examples

---

## Phase 7: WebXR Examples
**Duration**: 3-4 weeks
**Goal**: Port all WebXR examples
**Status**: COMPLETE

### Examples (24)
- [x] webxr_vr_ballshooter (Ballshooter)
- [x] webxr_vr_cubes
- [x] webxr_vr_dragging
- [x] webxr_vr_handinput (HandInput - basic)
- [x] webxr_vr_haptics
- [x] webxr_vr_paint
- [x] webxr_vr_panorama
- [x] webxr_vr_rollercoaster (Rollercoaster)
- [x] webxr_ar_cones
- [x] webxr_ar_hittest
- [x] webxr_ar_lighting (Lighting)
- [x] webxr_vr_handinput_pointerclick (HandInputPointerClick)
- [x] webxr_vr_handinput_press (HandInputPress)
- [x] webxr_vr_handinput_profiles (HandInputProfiles)
- [x] webxr_vr_haptics_controller (HapticsController)
- [x] webxr_vr_layers (Layers)
- [x] webxr_vr_lorenzattractor (LorenzAttractor)
- [x] webxr_vr_panorama_depth (PanoramaDepth)
- [x] webxr_vr_sandbox (Sandbox)
- [x] webxr_vr_sculpt (Sculpt)
- [x] webxr_vr_video (Video)
- [x] webxr_ar_plane_detection (PlaneDetection)
- [x] webxr_sandbox (WebXRSandbox)
- [x] webxr_video (WebXRVideo)

**Plans:**
- [x] 07-01-PLAN.md - Wave 1: Template, VRButton, ARButton
- [x] 07-02-PLAN.md - Wave 2: VR Cubes, Dragging, Haptics, Paint
- [x] 07-03-PLAN.md - Wave 3: AR Cones, HitTest, HandInput, Panorama
- [x] 07-04-PLAN.md - Wave 4: Ballshooter, Rollercoaster, Lighting, Tests, Documentation

---

## Phase 8: WebGL Advanced & TSL
**Duration**: 3-4 weeks
**Goal**: Port advanced webgl and TSL examples
**Status**: COMPLETE

### Examples (50)
- [x] webgl_advanced_buffergeometry (BufferGeometry)
- [x] webgl_advanced_buffergeometry_indexed (BufferGeometryIndexed)
- [x] webgl_advanced_buffergeometry_instanced (BufferGeometryInstanced)
- [x] webgl_advanced_buffergeometry_instanced_interleaved (BufferGeometryInstancedInterleaved)
- [x] webgl_advanced_buffergeometry_points (BufferGeometryPoints)
- [x] webgl_advanced_buffergeometry_points_interleaved (BufferGeometryPointsInterleaved)
- [x] webgl_advanced_buffergeometry_raw (BufferGeometryRaw)
- [x] webgl_advanced_buffergeometry_selective_draw (BufferGeometrySelectiveDraw)
- [x] webgl_advanced_buffergeometry_triangles (BufferGeometryTriangles)
- [x] webgl_advanced_buffergeometry_uint (BufferGeometryUint)
- [x] webgl_advanced_camera (Camera)
- [x] webgl_advanced_camera_orthographic (CameraOrthographic)
- [x] webgl_advanced_camera_perspective (CameraPerspective)
- [x] webgl_advanced_camera_viewpoints (CameraViewpoints)
- [x] webgl_advanced_cloth (Cloth)
- [x] webgl_advanced_culling (Culling)
- [x] webgl_advanced_custom_attributes (CustomAttributes)
- [x] webgl_advanced_instancing (Instancing)
- [x] webgl_advanced_materials (Materials)
- [x] webgl_advanced_materials_envmaps (MaterialsEnvMaps)
- [x] webgl_advanced_materials_envmaps_hdr (MaterialsEnvMapsHDR)
- [x] webgl_advanced_materials_physical (MaterialsPhysical)
- [x] webgl_advanced_materials_physical_clearcoat (MaterialsPhysicalClearcoat)
- [x] webgl_advanced_materials_physical_transparency (MaterialsPhysicalTransparency)
- [x] webgl_advanced_materials_variations_basic (MaterialsVariationsBasic)
- [x] webgl_advanced_materials_variations_lambert (MaterialsVariationsLambert)
- [x] webgl_advanced_materials_variations_phong (MaterialsVariationsPhong)
- [x] webgl_advanced_materials_variations_standard (MaterialsVariationsStandard)
- [x] webgl_advanced_materials_variations_physical (MaterialsVariationsPhysical)
- [x] webgl_advanced_materials_variations_toon (MaterialsVariationsToon)
- [x] webgl_advanced_mirror (Mirror)
- [x] webgl_advanced_refraction (Refraction)
- [x] webgl_advanced_rendertarget (RenderTarget)
- [x] webgl_advanced_rendertarget_cube (RenderTargetCube)
- [x] webgl_advanced_render_sharedarraybuffer (RenderSharedArrayBuffer)
- [x] webgl_advanced_sandbox (Sandbox)
- [x] webgl_advanced_scene (Scene)
- [x] webgl_advanced_scene_background (SceneBackground)
- [x] webgl_advanced_scene_crossfade (SceneCrossfade)
- [x] webgl_advanced_scene_layers (SceneLayers)
- [x] webgl_advanced_scene_zigzag (SceneZigzag)
- [x] webgl_advanced_shader (Shader)
- [x] webgl_advanced_shader2 (Shader2)
- [x] webgl_advanced_shader3 (Shader3)
- [x] webgl_advanced_shadowmap (ShadowMap)
- [x] webgl_advanced_shadowmap_performance (ShadowMapPerformance)
- [x] webgl_advanced_shadowmap_viewer (ShadowMapViewer)
- [x] webgl_advanced_skinning (Skinning)
- [x] webgl_advanced_skinning_simple (SkinningSimple)
- [x] webgl_advanced_sorted_draw (SortedDraw)
- [x] webgl_simple_gi (SimpleGI)
- [x] webgl_water (Water)
- [x] webgl_tsl_basic (TSLBasic)
- [x] webgl_tsl_compute (TSLCompute)
- [x] webgl_tsl_particles (TSLParticles)
- [x] webgl_tsl_shader_node (TSLShaderNode)

**Plans:**
- [x] 08-01-PLAN.md - All 50 advanced and TSL examples

---

## Phase 9: Physics Examples
**Duration**: 2-3 weeks
**Goal**: Port physics integration examples

### Examples (13)
- physics_ammo_break
- physics_ammo_cloth
- physics_ammo_instancing
- physics_ammo_rope
- physics_ammo_terrain
- physics_ammo_volume
- physics_jolt_drive
- physics_jolt_instancing
- physics_jolt_vehicle
- physics_rapier_basic
- physics_rapier_instancing
- physics_rapier_joints
- physics_rapier_terrain

---

## Phase 10: WebAudio Examples
**Duration**: 1 week
**Goal**: Port audio examples
**Status**: COMPLETE

### Examples (4)
- [x] webaudio_orientation (AudioOrientation)
- [x] webaudio_sandbox (AudioSandbox)
- [x] webaudio_timing (AudioTiming)
- [x] webaudio_visualizer (AudioVisualizer)

**Plans:**
- [x] 10-01-PLAN.md - All 4 webaudio examples

---

## Phase 11: Misc & Games
**Duration**: 2-3 weeks
**Goal**: Port miscellaneous examples
**Status**: COMPLETE

### Examples (21)
- [x] games_fps (1)
- [x] misc_animation_keys
- [x] misc_animation_project
- [x] misc_boxselection
- [x] misc_controls_event
- [x] misc_controls_fly
- [x] misc_controls_map
- [x] misc_controls_orbit
- [x] misc_controls_pointerlock
- [x] misc_controls_trackball
- [x] misc_controls_transform
- [x] misc_exporter_draco
- [x] misc_exporter_gltf
- [x] misc_exporter_obj
- [x] misc_exporter_ply
- [x] misc_exporter_stl
- [x] misc_exporter_usdz
- [x] misc_lookat
- [x] misc_uv_tests
- [x] misc_webrtc
- [x] misc_volume_perlin

**Plans:**
- [x] 11-01-PLAN.md - All 21 misc and games examples

---

## Phase 12: CSS & SVG Examples
**Duration**: 1-2 weeks
**Goal**: Port CSS and SVG rendering examples

### Examples (12)
- css2d_label (1)
- css3d_mixed
- css3d_molecules
- css3d_orthographic
- css3d_panorama
- css3d_panorama_deviceorientation
- css3d_periodictable
- css3d_sandbox
- css3d_sprites
- css3d_youtube
- svg_lines
- svg_sandbox
- tests/* (2)

---

## Phase 13: Multimodal Visual Regression Testing
**Duration**: 1-2 days
**Goal**: Compare each ported demo's 3D canvas output against the reference threejs.org example using a multimodal LLM to verify visual fidelity.
**Status**: PLANNING

### Deliverables
- Playwright test harness that screenshots both ported demo canvas and threejs.org reference
- Multimodal LLM comparison pipeline (Claude vision API) per demo pair
- Parallel agent architecture to process 200 demos within 12 hours
- JSON report with per-demo similarity scores and failure images
- CI-ready pass/fail gate based on similarity threshold

### Categories
- Screenshot capture infrastructure (ported + reference)
- LLM vision comparison pipeline
- Parallel agent fanout (split 200 demos across N workers)
- Reporting and CI gate

### Task Breakdown

| Wave | Tasks | Duration |
|------|-------|----------|
| 1 | Screenshot capture harness for ported demos | Hour 1-2 |
| 2 | Reference screenshot capture from threejs.org | Hour 2-4 |
| 3 | Multimodal LLM comparison pipeline | Hour 4-6 |
| 4 | Parallel agent fanout + reporting | Hour 6-10 |
| 5 | CI gate + integration with demo-verification.test.ts | Hour 10-12 |

---

## Phase 14: Kimi Vision + Agent-Browser Demo Fix Sprint
**Duration**: 2-4 days
**Goal**: Replace Playwright+Anthropic vision stack with Kimi multimodal + agent-browser. Compare every ported demo against threejs.org one-by-one using Kimi vision, then fan-out agents to debug and fix all non-matching demos.
**Status**: PLANNING

### Deliverables
- `kimi-compare` CLI: takes 2 image paths + prompt, calls Kimi API (`https://api.sfkey.cn/v1`, model `kimi-k2.5`), returns similarity verdict
- agent-browser orchestrator replacing Playwright for headed, sessioned screenshot capture
- Demo comparison pipeline: screenshot all 200 ported demos + threejs.org references via agent-browser sessions
- Parallel agent fanout: fan out debug/fix agents across all failing demos
- Woby-aware fix agents: use `/woby-dev` `/woby` `/dom` `/dom-customelement` patterns to repair broken demos

### Key Constraints
- API key from `process.env.KIMI_API_KEY` only — never logged or written to output
- NO ANTHROPIC_API_KEY usage anywhere in this phase
- Use `agent-browser open session {name}` / `agent-browser close session {name}` for session lifecycle
- Never `taskkill /IM chrome.exe` — kill only MCP Chrome PID

### Categories
- Kimi multimodal CLI tool
- agent-browser session management
- Demo screenshot capture (ported + reference)
- Visual comparison pipeline (Kimi vision)
- Fan-out fix agents
- Reporting and CI gate

**Requirements**: NFR-3.2

**Plans:** 5 plans

Plans:
- [x] 14-01-PLAN.md - kimi-utils.ts: Kimi API client, agent-browser wrapper, ID validator, CLI self-test
- [x] 14-02-PLAN.md - kimi-comparison-worker.ts + kimi-orchestrator.ts: per-batch worker and 5-worker orchestrator
- [x] 14-03-PLAN.md - Reference screenshot capture for 95 demos via agent-browser + human verification
- [x] 14-04-PLAN.md - Live Kimi comparison run (134 demos) + HTML report + human verification
- [x] 14-05-PLAN.md - fix-orchestrator.ts: fan-out fix agents for failing demos, collect re-scored results (Task 1 complete)

### Phase 15: Sync actual coverage — implemented / tested / visually checked vs planned

**Goal:** (1) Fix STATE.md/ROADMAP.md with real file-system counts — STATE.md falsely claims 469/74%; actual is ~250 TSX files / 200 registered demos. (2) Continue porting Three.js examples 1:1 to Woby JSX with mandatory Claude visual approval before registering each new example.
**Requirements**: Accurate counts from `demo/src/` file system, `demo/src/registry.ts` dedup, visual approval via dv CLI screenshots sent to Claude
**Depends on:** Phase 14
**Status:** PLANNED (2026-06-17) — 3 plans in 2 waves, plan-checker: PASS
**Plans:** 3 plans in 2 waves

Plans:
- [ ] 15-01-PLAN.md - Wave 1: Audit actual counts, fix registry.ts duplicates, update STATE.md/ROADMAP.md with real numbers
- [ ] 15-02-PLAN.md - Wave 2: Port webgl_animation_walk, locomotive, clipping_stencil, geometry_spline_editor, lights_hemisphere with visual verification
- [ ] 15-03-PLAN.md - Wave 2 (parallel): Port webgl_camera_logarithmicdepthbuffer, interactive_buffergeometry, interactive_cubes_ortho, geometry_text_stroke, modifier_curve with visual verification

---

## Verification Gates

Each phase requires:
1. All examples compile without errors
2. All tests pass
3. Visual verification in browser
4. Code review approval
5. Documentation updated

## Dependencies Between Phases

```
Phase 1 (Foundation) ✓
    ├── Phase 2 (Core WebGL 1)
    │       ├── Phase 3 (Core WebGL 2)
    │       │       ├── Phase 4 (Core WebGL 3)
    │       │       │       └── Phase 5 (Postprocessing)
    │       │       └── Phase 8 (Advanced & TSL)
    │       └── Phase 9 (Physics)
    ├── Phase 6 (WebGPU) - parallel
    ├── Phase 7 (WebXR) - parallel
    ├── Phase 10 (WebAudio) - parallel
    └── Phase 11 (Misc) → Phase 12 (CSS/SVG)
```

## Progress Tracking

- Each example tracked in ROADMAP.md
- Checkmarks for completed ports
- Test coverage percentage per phase
- Visual demo availability status

### Summary

| Phase | Examples | Duration | Status |
|-------|----------|----------|--------|
| 1 | 10 | 1-2 weeks | COMPLETE |
| 2 | ~65 | 4-6 weeks | COMPLETE |
| 3 | ~65 | 4-6 weeks | COMPLETE |
| 4 | ~65 | 4-6 weeks | COMPLETE |
| 5 | 26 | 3-4 weeks | COMPLETE (15 examples) |
| 6 | 219 | 4-5 weeks | COMPLETE (11 examples) |
| 7 | 24 | 3-4 weeks | COMPLETE (14 examples) |
| 8 | 50 | 3-4 weeks | COMPLETE (50 examples) |
| 9 | 13 | 2-3 weeks | COMPLETE (13 examples) |
| 10 | 4 | 1 week | COMPLETE (4 examples) |
| 11 | 21 | 2-3 weeks | COMPLETE (21 examples) |
| 12 | 12 | 1-2 weeks | COMPLETE (12 examples) |

**Total Examples**: ~574
**Completed**: 224+ (All phases complete)
**Remaining**: 0
