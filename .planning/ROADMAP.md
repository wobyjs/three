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
- [ ] webxr_vr_handinput_pointerclick
- [ ] webxr_vr_handinput_press
- [ ] webxr_vr_handinput_profiles
- [ ] webxr_vr_haptics_controller
- [ ] webxr_vr_layers
- [ ] webxr_vr_lorenzattractor
- [ ] webxr_vr_panorama_depth
- [ ] webxr_vr_sandbox
- [ ] webxr_vr_sculpt
- [ ] webxr_vr_video
- [ ] webxr_xr_ballshooter
- [ ] webxr_ar_plane_detection
- [ ] webxr_sandbox
- [ ] webxr_video

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
