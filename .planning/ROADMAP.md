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
- [ ] webgl_postprocessing_dof2
- [ ] webgl_postprocessing_fxaa
- [ ] webgl_postprocessing_procedural
- [ ] webgl_postprocessing_rgb_halftone
- [ ] webgl_postprocessing_sobel
- [ ] webgl_postprocessing_ssaa
- [ ] webgl_postprocessing_taa
- [ ] webgl_postprocessing_unreal_bloom_selective
- ... (5 more)

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
**Status**: IN PROGRESS (Wave 3 complete)

### Examples (24)
- [x] webxr_vr_ballshooter (via Cubes)
- [x] webxr_vr_cubes
- [x] webxr_vr_dragging
- [x] webxr_vr_handinput (HandInput - basic)
- [x] webxr_vr_haptics
- [x] webxr_vr_paint
- [x] webxr_vr_panorama
- [x] webxr_ar_cones
- [x] webxr_ar_hittest
- [ ] webxr_vr_handinput_pointerclick
- [ ] webxr_vr_handinput_press
- [ ] webxr_vr_handinput_profiles
- [ ] webxr_vr_haptics_controller
- [ ] webxr_vr_layers
- [ ] webxr_vr_lorenzattractor
- [ ] webxr_vr_panorama_depth
- [ ] webxr_vr_rollercoaster
- [ ] webxr_vr_sandbox
- [ ] webxr_vr_sculpt
- [ ] webxr_vr_video
- [ ] webxr_xr_ballshooter
- [ ] webxr_ar_lighting
- [ ] webxr_ar_plane_detection
- [ ] webxr_sandbox
- [ ] webxr_video

---

## Phase 8: WebGL Advanced & TSL
**Duration**: 3-4 weeks
**Goal**: Port advanced webgl and TSL examples

### Examples (50)
- webgl_advanced_examples (46)
- webgl_tsl_examples (4)

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

### Examples (4)
- webaudio_orientation
- webaudio_sandbox
- webaudio_timing
- webaudio_visualizer

---

## Phase 11: Misc & Games
**Duration**: 2-3 weeks
**Goal**: Port miscellaneous examples

### Examples (21)
- games_fps (1)
- misc_animation_keys
- misc_animation_project
- misc_boxselection
- misc_controls_event
- misc_controls_fly
- misc_controls_map
- misc_controls_orbit
- misc_controls_pointerlock
- misc_controls_trackball
- misc_controls_transform
- misc_exporter_draco
- misc_exporter_gltf
- misc_exporter_obj
- misc_exporter_ply
- misc_exporter_stl
- misc_exporter_usdz
- misc_lookat
- misc_uv_tests
- misc_webrtc
- misc_volume_perlin

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
| 2 | ~65 | 4-6 weeks | Planned |
| 3 | ~65 | 4-6 weeks | Planned |
| 4 | ~65 | 4-6 weeks | Planned |
| 5 | 26 | 3-4 weeks | Not started |
| 6 | 219 | 4-5 weeks | Not started |
| 7 | 24 | 3-4 weeks | Not started |
| 8 | 50 | 3-4 weeks | Not started |
| 9 | 13 | 2-3 weeks | Not started |
| 10 | 4 | 1 week | Not started |
| 11 | 21 | 2-3 weeks | Not started |
| 12 | 12 | 1-2 weeks | Not started |

**Total Examples**: ~574
**Completed**: 10 (Phase 1)
**Remaining**: ~564
