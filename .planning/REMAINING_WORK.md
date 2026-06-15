# Three.js Examples Porting - Remaining Work

## Summary

| Metric | Count |
|--------|-------|
| Total Three.js Examples | 581 |
| Already Ported | 104 |
| Missing | 477 |
| Coverage | 18% |

## Missing by Category

| Category | Count | Priority |
|----------|-------|----------|
| webgpu | 206 | Medium (WIP in Three.js) |
| webgl | 200 | High |
| webxr | 26 | High |
| misc | 18 | Medium |
| physics | 13 | Medium |
| css3d | 6 | Low |
| webaudio | 4 | Low |
| svg | 2 | Low |
| css2d | 1 | Low |
| games | 1 | Low |

## Phase Plan

### Phase 13: WebGL Core (Priority 1)
**Target**: 100 webgl examples
**Duration**: 4-6 weeks

Categories to port:
- Animation (walk, multiple, skinning/additive)
- Cameras (logarithmic depth buffer)
- Clipping (stencil)
- Geometry (colors, lookup table, minecraft, spline editor, text stroke)
- Instancing (morph, dynamic, raycast)
- Interactive (buffergeometry, cubes/gpu, cubes/ortho, lines, points, raycasting/points)
- Lights (spotlights, lightprobes/complex, lightprobes/sponza)
- Loaders (3mf/materials, collada/kinematics, collada/skinning, fbx/nurbs, gltf variants)
- Materials (alphahash, blending/custom, cubemap/refraction, cubemap/mipmaps, subsurface/scattering)
- Postprocessing (remaining passes)
- Shaders (custom, ocean, lava)
- Shadows (pointlight, VSM)
- Textures (cube, hdr, exr, ktx, ktx2)

### Phase 14: WebXR (Priority 2)
**Target**: 26 webxr examples
**Duration**: 2-3 weeks

- VR hand tracking examples
- AR plane detection
- VR layers
- VR video
- VR sculpt
- VR sandbox

### Phase 15: Misc & Utilities (Priority 3)
**Target**: 18 misc examples
**Duration**: 1-2 weeks

- Animation groups
- Controls (arcball, drag, map, pointerlock)
- Exporters (draco, exr, gcode, gltf, ktx2, obj, ply, stl, usdz)
- Raycaster helper
- UV tests

### Phase 16: Physics (Priority 4)
**Target**: 13 physics examples
**Duration**: 2-3 weeks

- Ammo.js (break, cloth, instancing, rope, terrain, volume)
- Jolt (instancing)
- Rapier (basic, instancing, joints, terrain)

### Phase 17: CSS2D/CSS3D/SVG (Priority 5)
**Target**: 9 examples
**Duration**: 1 week

- css2d_label
- css3d_mixed, molecules, orthographic, sandbox, sprites, youtube
- svg_lines, svg_sandbox

### Phase 18: WebAudio (Priority 6)
**Target**: 4 examples
**Duration**: 1 week

- webaudio_orientation, sandbox, timing, visualizer

### Phase 19: Games (Priority 7)
**Target**: 1 example
**Duration**: 1 day

- games_fps

### Phase 20: WebGPU (Priority 8 - Future)
**Target**: 206 examples
**Duration**: 6-8 weeks (when WebGPU is stable)

- All webgpu_* examples
- TSL (Three.js Shading Language) examples

## Execution Strategy

1. **Batch Processing**: Port examples in batches of 10-20 per session
2. **Pattern Reuse**: Leverage existing patterns from ported examples
3. **Test Coverage**: Each batch includes test verification
4. **Documentation**: Update PATTERNS.md for each category

## Next Steps

1. Start with Phase 13 (WebGL Core) - highest impact
2. Focus on commonly used examples first
3. Skip WebGPU until browser support is stable
