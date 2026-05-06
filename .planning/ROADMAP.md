# Roadmap: Three.js Examples Port

## Phase 1: Foundation & Infrastructure
**Duration**: 1-2 weeks
**Goal**: Establish patterns, tooling, and first batch of examples

### Deliverables
- [ ] Example port template/scaffold
- [ ] Test infrastructure for ported examples
- [ ] 10 pilot examples from webgl category
- [ ] Documentation of porting patterns

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

**Plans:** 1 plan in 1 wave

Plans:
- [ ] 01-01-PLAN.md - Port 10 pilot WebGL examples

---

## Phase 2: Core WebGL - Part 1
**Duration**: 4-6 weeks
**Goal**: Port foundational webgl examples

### Categories
- Basic scenes
- Cameras
- Geometries
- Materials (basic)

### Examples (~65)
- webgl_camera_array
- webgl_camera_cinematic
- webgl_geometries_parametric
- webgl_materials_blending
- webgl_materials_texture_anisotropy
- ... (60 more)

---

## Phase 3: Core WebGL - Part 2
**Duration**: 4-6 weeks
**Goal**: Port intermediate webgl examples

### Categories
- Lights & shadows
- Textures
- Shaders (basic)
- Loaders

### Examples (~65)
- webgl_lights_hemisphere
- webgl_lights_physical
- webgl_shadowmap
- webgl_texture_hdri
- webgl_loader_obj
- ... (60 more)

---

## Phase 4: Core WebGL - Part 3
**Duration**: 4-6 weeks
**Goal**: Port advanced webgl examples

### Categories
- Advanced materials
- Animation systems
- Particles
- Physics integration

### Examples (~65)
- webgl_materials_physical
- webgl_materials_envmaps
- webgl_particles
- webgl_physics_*
- ... (60 more)

---

## Phase 5: WebGL Postprocessing
**Duration**: 3-4 weeks
**Goal**: Port all postprocessing examples

### Examples (26)
- webgl_postprocessing
- webgl_postprocessing_advanced
- webgl_postprocessing_dof
- webgl_postprocessing_dof2
- webgl_postprocessing_fxaa
- webgl_postprocessing_glitch
- webgl_postprocessing_godrays
- webgl_postprocessing_masking
- webgl_postprocessing_outline
- webgl_postprocessing_pixel
- webgl_postprocessing_procedural
- webgl_postprocessing_rgb_halftone
- webgl_postprocessing_sao
- webgl_postprocessing_smaa
- webgl_postprocessing_sobel
- webgl_postprocessing_ssaa
- webgl_postprocessing_ssao
- webgl_postprocessing_ssr
- webgl_postprocessing_taa
- webgl_postprocessing_unreal_bloom
- webgl_postprocessing_unreal_bloom_selective
- ... (5 more)

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

### Examples (24)
- webxr_vr_ballshooter
- webxr_vr_cubes
- webxr_vr_dragging
- webxr_vr_handinput_pointerclick
- webxr_vr_handinput_press
- webxr_vr_handinput_profiles
- webxr_vr_haptics
- webxr_vr_haptics_controller
- webxr_vr_layers
- webxr_vr_lorenzattractor
- webxr_vr_paint
- webxr_vr_panorama
- webxr_vr_panorama_depth
- webxr_vr_rollercoaster
- webxr_vr_sandbox
- webxr_vr_sculpt
- webxr_vr_video
- webxr_xr_ballshooter
- webxr_ar_cones
- webxr_ar_hittest
- webxr_ar_lighting
- webxr_ar_plane_detection
- webxr_sandbox
- webxr_video

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
Phase 1 (Foundation)
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
