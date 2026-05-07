---
phase: 02-core-webgl-part1
plan: 01
type: execute
wave: 1
depends_on: []
files_modified: []
autonomous: true
requirements: [PHASE2-01, PHASE2-02, PHASE2-03]
user_setup: []

must_haves:
  truths:
    - "All basic scene examples render without errors"
    - "Camera examples demonstrate multiple camera types and controls"
    - "Geometry examples showcase all standard Three.js geometries"
    - "Material examples show basic material properties and variations"
  artifacts:
    - path: "code/examples/webgl/basic/*.tsx"
      provides: "Basic scene setup examples"
    - path: "code/examples/webgl/camera/*.tsx"
      provides: "Camera configuration examples"
    - path: "code/examples/webgl/geometries/*.tsx"
      provides: "Geometry showcase examples"
    - path: "code/examples/webgl/materials/*.tsx"
      provides: "Material property examples"
  key_links:
    - from: "code/examples/webgl/*"
      to: "@woby/three JSX components"
      via: "import statements"
      pattern: "@jsxImportSource @woby/three"
---

# Phase 2: Core WebGL - Part 1

**Duration**: 4-6 weeks
**Goal**: Port ~65 foundational webgl examples covering basic scenes, cameras, geometries, and basic materials.

## Overview

This phase builds on the Phase 1 foundation to port the core WebGL examples. These examples form the backbone of Three.js knowledge and demonstrate fundamental 3D rendering concepts.

## Categories

### Category 1: Basic Scenes (~15 examples)
Simple scene setups demonstrating core Three.js concepts.

**Examples:**
- `webgl_animation_scene` - Animated scene with multiple objects
- `webgl_backgrounds` - Scene background options (color, texture, cube)
- `webgl_clipping` - Clipping planes demonstration
- `webgl_custom_attributes` - Custom shader attributes
- `webgl_custom_attributes_lines` - Custom attributes on lines
- `webgl_custom_attributes_points` - Custom attributes on points
- `webgl_custom_attributes_points2` - Advanced point attributes
- `webgl_custom_attributes_points3` - Complex point attributes
- `webgl_decals` - Decal projection
- `webgl_drawcalls` - Draw call optimization
- `webgl_furnace_test` - PBR furnace test
- `webgl_fog` - Fog effects
- `webgl_helpers` - Scene helpers
- `webgl_lod` - Level of detail
- `webgl_morphtargets` - Morph target animation

### Category 2: Cameras (~10 examples)
Camera configuration and control demonstrations.

**Examples:**
- `webgl_camera` - Basic camera setup (DONE in Phase 1)
- `webgl_camera_array` - Multiple camera rendering
- `webgl_camera_cinematic` - Cinematic camera effects
- `webgl_camera_logarithmicdepthbuffer` - Logarithmic depth buffer
- `webgl_camera_orthographic` - Orthographic camera
- `webgl_camera_orthographic2` - Advanced orthographic
- `webgl_layers` - Camera layers
- `webgl_mirror` - Mirror/camera reflection
- `webgl_panorama` - Panoramic camera
- `webgl_panorama_equirectangular` - Equirectangular panorama

### Category 3: Geometries (~20 examples)
All standard and extended geometry types.

**Examples:**
- `webgl_geometries` - Standard geometries (DONE in Phase 1)
- `webgl_geometries_parametric` - Parametric geometry generation
- `webgl_geometry_colors` - Vertex colors
- `webgl_geometry_colors_lookuptable` - LUT vertex colors
- `webgl_geometry_convex` - Convex hull geometry
- `webgl_geometry_csg` - Constructive solid geometry
- `webgl_geometry_cube` - Cube geometry variations
- `webgl_geometry_dynamic` - Dynamic geometry updates
- `webgl_geometry_extrude` - Extruded shapes
- `webgl_geometry_extrude_splines` - Extruded splines
- `webgl_geometry_minecraft` - Minecraft-style geometry
- `webgl_geometry_nurbs` - NURBS curves and surfaces
- `webgl_geometry_shapes` - 2D shape geometry
- `webgl_geometry_spline_editor` - Spline editing
- `webgl_geometry_teapot` - Utah teapot
- `webgl_geometry_terrain` - Terrain generation
- `webgl_geometry_terrain_raycast` - Terrain with raycasting
- `webgl_geometry_text` - Text geometry
- `webgl_geometry_text_shapes` - Text from shapes
- `webgl_instancing_modified` - Modified instanced geometry

### Category 4: Materials - Basic (~20 examples)
Fundamental material properties and variations.

**Examples:**
- `webgl_materials` - Material overview
- `webgl_materials_blending` - Blending modes
- `webgl_materials_blending_custom` - Custom blending
- `webgl_materials_car` - Car paint material
- `webgl_materials_cubemap` - Cube map reflection
- `webgl_materials_cubemap_dynamic` - Dynamic cube maps
- `webgl_materials_cubemap_refraction` - Refraction
- `webgl_materials_curvature` - Curvature-based shading
- `webgl_materials_displacementmap` - Displacement mapping
- `webgl_materials_envmaps` - Environment maps
- `webgl_materials_envmaps_exr` - EXR environment maps
- `webgl_materials_envmaps_groundprojected` - Ground-projected env maps
- `webgl_materials_lightmap` - Light maps
- `webgl_materials_modified` - Modified materials
- `webgl_materials_normalmap` - Normal mapping
- `webgl_materials_normalmap_object_space` - Object-space normals
- `webgl_materials_physical` - Physical material
- `webgl_materials_physical_clearcoat` - Clearcoat
- `webgl_materials_physical_transmission` - Transmission
- `webgl_materials_texture_anisotropy` - Anisotropic filtering
- `webgl_materials_texture_canvas` - Canvas texture
- `webgl_materials_texture_manualmipmap` - Manual mipmaps
- `webgl_materials_texture_partialrender` - Partial render
- `webgl_materials_texture_render` - Render to texture
- `webgl_materials_variations` - Material variations (DONE in Phase 1)
- `webgl_materials_video` - Video texture
- `webgl_materials_wireframe` - Wireframe materials

## Task Breakdown

### Wave 1: Basic Scenes (Week 1-2)

#### Task 1.1: Port Basic Scene Examples
**Files**: `code/examples/webgl/basic/`
**Action**: Port 15 basic scene examples following the established template pattern.
- Create directory structure: `basic/`
- Port each example with proper JSX syntax
- Ensure all imports follow registration order
- Add `useFrame` for animated examples

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: All 15 basic examples compile and render without errors.

#### Task 1.2: Port Clipping and Decal Examples
**Files**: `code/examples/webgl/clipping/`, `code/examples/webgl/decals/`
**Action**: Port clipping planes and decal projection examples.
- Implement clipping plane setup via JSX props
- Handle decal geometry generation
- Test intersection-based decal placement

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Clipping and decal examples render correctly.

### Wave 2: Cameras (Week 2-3)

#### Task 2.1: Port Camera Array and Cinematic Examples
**Files**: `code/examples/webgl/camera/`
**Action**: Port advanced camera examples.
- Camera array: multiple viewport rendering
- Cinematic: depth of field, focus effects
- Logarithmic depth buffer configuration

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Camera examples demonstrate all camera types.

#### Task 2.2: Port Panorama and Mirror Examples
**Files**: `code/examples/webgl/camera/`
**Action**: Port panoramic and reflective camera examples.
- Equirectangular panorama rendering
- Mirror/reflection camera setup
- Camera layer management

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Panorama and mirror examples work correctly.

### Wave 3: Geometries (Week 3-4)

#### Task 3.1: Port Parametric and Dynamic Geometries
**Files**: `code/examples/webgl/geometries/`
**Action**: Port geometry generation examples.
- Parametric geometry with custom functions
- Dynamic geometry updates with `useFrame`
- CSG operations (if library available)

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Dynamic geometry examples update correctly.

#### Task 3.2: Port Shape-Based Geometries
**Files**: `code/examples/webgl/geometries/`
**Action**: Port extrude, shape, and text geometry examples.
- 2D shape to 3D extrusion
- Text geometry with font loading
- NURBS curve/surface generation

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Shape-based geometries render correctly.

#### Task 3.3: Port Terrain and Special Geometries
**Files**: `code/examples/webgl/geometries/`
**Action**: Port terrain and special geometry examples.
- Heightmap-based terrain generation
- Utah teapot with proper material
- Minecraft-style block geometry

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Special geometries render correctly.

### Wave 4: Materials - Basic (Week 4-6)

#### Task 4.1: Port Material Blending and Environment Examples
**Files**: `code/examples/webgl/materials/`
**Action**: Port material blending and environment map examples.
- Blending mode demonstrations
- Cube map environment reflections
- Dynamic environment map generation

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Blending and environment examples work correctly.

#### Task 4.2: Port Texture Material Examples
**Files**: `code/examples/webgl/materials/`
**Action**: Port texture-based material examples.
- Anisotropic filtering demonstration
- Canvas texture rendering
- Video texture materials
- Render-to-texture setup

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Texture material examples render correctly.

#### Task 4.3: Port Physical Material Examples
**Files**: `code/examples/webgl/materials/`
**Action**: Port MeshPhysicalMaterial examples.
- Clearcoat demonstration
- Transmission (glass-like materials)
- Curvature-based shading

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Physical material examples demonstrate all properties.

## File Structure

```
code/examples/webgl/
├── _template.tsx          # Template file (exists)
├── basic/
│   ├── AnimationScene.tsx
│   ├── Backgrounds.tsx
│   ├── Clipping.tsx
│   ├── CustomAttributes.tsx
│   ├── CustomAttributesLines.tsx
│   ├── CustomAttributesPoints.tsx
│   ├── Decals.tsx
│   ├── Drawcalls.tsx
│   ├── Fog.tsx
│   ├── FurnaceTest.tsx
│   ├── Helpers.tsx
│   ├── LOD.tsx
│   └── MorphTargets.tsx
├── camera/
│   ├── Camera.tsx         # DONE in Phase 1
│   ├── Array.tsx
│   ├── Cinematic.tsx
│   ├── LogarithmicDepthBuffer.tsx
│   ├── Orthographic.tsx
│   ├── Orthographic2.tsx
│   ├── Layers.tsx
│   ├── Mirror.tsx
│   ├── Panorama.tsx
│   └── PanoramaEquirectangular.tsx
├── geometries/
│   ├── Geometries.tsx     # DONE in Phase 1
│   ├── Parametric.tsx
│   ├── Colors.tsx
│   ├── ColorsLookupTable.tsx
│   ├── Convex.tsx
│   ├── CSG.tsx
│   ├── Cube.tsx
│   ├── Dynamic.tsx
│   ├── Extrude.tsx
│   ├── ExtrudeSplines.tsx
│   ├── Minecraft.tsx
│   ├── Nurbs.tsx
│   ├── Shapes.tsx
│   ├── SplineEditor.tsx
│   ├── Teapot.tsx
│   ├── Terrain.tsx
│   ├── TerrainRaycast.tsx
│   ├── Text.tsx
│   └── TextShapes.tsx
└── materials/
    ├── Variations.tsx     # DONE in Phase 1
    ├── Blending.tsx
    ├── BlendingCustom.tsx
    ├── Car.tsx
    ├── Cubemap.tsx
    ├── CubemapDynamic.tsx
    ├── CubemapRefraction.tsx
    ├── Curvature.tsx
    ├── DisplacementMap.tsx
    ├── Envmaps.tsx
    ├── EnvmapsEXR.tsx
    ├── EnvmapsGroundProjected.tsx
    ├── Lightmap.tsx
    ├── Modified.tsx
    ├── NormalMap.tsx
    ├── NormalMapObjectSpace.tsx
    ├── Physical.tsx
    ├── PhysicalClearcoat.tsx
    ├── PhysicalTransmission.tsx
    ├── TextureAnisotropy.tsx
    ├── TextureCanvas.tsx
    ├── TextureManualMipmap.tsx
    ├── TexturePartialRender.tsx
    ├── TextureRender.tsx
    ├── Video.tsx
    └── Wireframe.tsx
```

## Verification Criteria

### Automated Tests
1. All examples compile without TypeScript errors
2. All component imports resolve correctly
3. All Three.js class registrations are present
4. Test suite passes: `tsx test/webgl-examples.test.ts`

### Manual Verification
1. Each example renders in browser without console errors
2. Animations run smoothly at 60fps
3. Interactive controls respond correctly
4. Visual output matches original Three.js example

### Code Quality
1. No `as any` type casts
2. Proper `$$()` usage for context arrays
3. Correct import order (parent before child)
4. Consistent code style with existing examples

## Success Criteria

- [ ] ~65 examples ported and working
- [ ] All automated tests pass
- [ ] Visual verification complete for all examples
- [ ] No TypeScript errors
- [ ] Code review approved
- [ ] Documentation updated

## Dependencies

- Phase 1 complete (template, patterns, test infrastructure)
- All required Three.js class wrappers available
- JSM addons ported for special geometries (TextGeometry, etc.)

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| Complex geometry generation | Use existing JSM addons where possible |
| Font loading for text geometry | Ensure FontLoader wrapper exists |
| CSG library availability | May need to skip or implement alternative |
| Performance with many examples | Batch test runs by category |

## Output

After completion, create `.planning/phase-2/02-01-SUMMARY.md` with:
- List of all ported examples
- Any issues encountered
- Patterns discovered
- Recommendations for Phase 3
