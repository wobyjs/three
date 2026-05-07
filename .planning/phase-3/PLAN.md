---
phase: 03-core-webgl-part2
plan: 01
type: execute
wave: 1
depends_on: [02-core-webgl-part1]
files_modified: []
autonomous: true
requirements: [PHASE3-01, PHASE3-02, PHASE3-03, PHASE3-04]
user_setup: []

must_haves:
  truths:
    - "All light examples demonstrate proper lighting and shadows"
    - "Texture examples show loading and manipulation of various formats"
    - "Shader examples compile and run without errors"
    - "Loader examples successfully load external 3D assets"
  artifacts:
    - path: "code/examples/webgl/lights/*.tsx"
      provides: "Lighting and shadow examples"
    - path: "code/examples/webgl/textures/*.tsx"
      provides: "Texture loading examples"
    - path: "code/examples/webgl/shaders/*.tsx"
      provides: "Custom shader examples"
    - path: "code/examples/webgl/loaders/*.tsx"
      provides: "Asset loader examples"
  key_links:
    - from: "code/examples/webgl/loaders/*"
      to: "three/examples/jsm/loaders/*"
      via: "import statements"
      pattern: "from 'three/examples/jsm/loaders/"
---

# Phase 3: Core WebGL - Part 2

**Duration**: 4-6 weeks
**Goal**: Port ~65 intermediate webgl examples covering lights & shadows, textures, basic shaders, and loaders.

## Overview

This phase continues the core WebGL port with intermediate examples. These examples demonstrate more complex Three.js features including advanced lighting, texture handling, custom shaders, and asset loading.

## Dependencies

- Phase 2 complete (basic scenes, cameras, geometries, basic materials)
- All loader wrappers available in `code/examples/jsm/loaders/`

## Categories

### Category 1: Lights & Shadows (~15 examples)
Lighting setup and shadow configuration.

**Examples:**
- `webgl_lights_hemisphere` - Hemisphere light (DONE in Phase 1)
- `webgl_lights_physical` - Physical light properties
- `webgl_lights_pointlights` - Multiple point lights
- `webgl_lights_pointlights2` - Point light variations
- `webgl_lights_rectarealight` - Rectangular area light
- `webgl_lights_spotlight` - SpotLight with shadows (DONE in Phase 1)
- `webgl_lights_tonemapping` - Tone mapping options
- `webgl_shadowmap` - Shadow mapping basics
- `webgl_shadowmap_performance` - Shadow performance
- `webgl_shadowmap_viewer` - Shadow map visualization
- `webgl_shadowmap_vsm` - Variance shadow maps
- `webgl_shadowmesh` - Shadow mesh projection
- `webgl_simple_gi` - Simple global illumination (DONE in Phase 1)
- `webgl_vr_cubemap` - VR cube map lighting
- `webgl_lightprobe` - Light probe sampling
- `webgl_lightprobe_cubecamera` - Light probe with cube camera

### Category 2: Textures (~15 examples)
Texture loading, manipulation, and rendering.

**Examples:**
- `webgl_texture2darray` - 2D texture arrays
- `webgl_texture3d` - 3D volume textures
- `webgl_texture3d_partialupdate` - Partial 3D texture updates
- `webgl_texturegradient` - Gradient textures
- `webgl_texturehdri` - HDRI environment loading
- `webgl_textureimage` - Image texture loading
- `webgl_texturelottie` - Lottie animation textures
- `webgl_texturemanualmipmap` - Manual mipmap generation
- `webgl_texturemediastream` - Media stream textures
- `webgl_texturepartialrender` - Partial texture rendering
- `webgl_texturerender` - Render to texture
- `webgl_texturerender_shared` - Shared render textures
- `webgl_textures` - Texture overview
- `webgl_textures_exr` - EXR texture loading
- `webgl_textures_hdr` - HDR texture handling
- `webgl_textures_ktx2` - KTX2 compressed textures
- `webgl_textures_logluv` - LogLuv encoding
- `webgl_textures_pvrtc` - PVR compressed textures
- `webgl_textures_rgbm` - RGBM encoding

### Category 3: Shaders - Basic (~15 examples)
Custom shader materials and effects.

**Examples:**
- `webgl_shader` - Basic custom shader
- `webgl_shader2` - Shader variations
- `webgl_shader3` - Advanced shader techniques
- `webgl_shader_lut` - LUT shader
- `webgl_shader_material` - ShaderMaterial basics
- `webgl_shader_materials` - Multiple shader materials
- `webgl_shader_water` - Water shader
- `webgl_shaders_ocean` - Ocean shader
- `webgl_shaders_sky` - Sky shader
- `webgl_shaders_tonemapping` - Tone mapping shader
- `webgl_shaders_vector` - Vector field visualization
- `webgl_shader_attribute` - Shader with attributes
- `webgl_shader_fog` - Fog in shaders
- `webgl_shader_grayscale` - Grayscale post-process
- `webgl_shader_instancing` - Instanced shader

### Category 4: Loaders (~20 examples)
Asset loading from various formats.

**Examples:**
- `webgl_loader_gltf` - GLTF/GLB loading (DONE in Phase 1)
- `webgl_loader_3dm` - Rhino 3DM loading
- `webgl_loader_3mf` - 3MF format loading
- `webgl_loader_amf` - AMF format loading
- `webgl_loader_bvh` - BVH motion capture
- `webgl_loader_collada` - Collada DAE loading
- `webgl_loader_drc` - Draco compressed
- `webgl_loader_fbx` - FBX format loading
- `webgl_loader_gcode` - G-code loading
- `webgl_loader_ifc` - IFC BIM format
- `webgl_loader_kmz` - Google Earth KMZ
- `webgl_loader_ldraw` - LEGO LDraw format
- `webgl_loader_mdd` - MDD point cache
- `webgl_loader_mtl` - MTL material library
- `webgl_loader_obj` - Wavefront OBJ
- `webgl_loader_pcd` - Point cloud data
- `webgl_loader_pdb` - Protein data bank
- `webgl_loader_ply` - Stanford PLY format
- `webgl_loader_stl` - STL 3D printing
- `webgl_loader_svg` - SVG vector graphics
- `webgl_loader_tilt` - Tilt Brush format
- `webgl_loader_usdz` - Apple USDZ format
- `webgl_loader_vox` - MagicaVoxel format
- `webgl_loader_vrm` - VRM avatar format
- `webgl_loader_vtk` - VTK visualization
- `webgl_loader_xyz` - XYZ point cloud

## Task Breakdown

### Wave 1: Lights & Shadows (Week 1-2)

#### Task 1.1: Port Physical Light Examples
**Files**: `code/examples/webgl/lights/`
**Action**: Port physical light property examples.
- Physical light attenuation
- RectAreaLight setup and positioning
- Light probe sampling
- Tone mapping configurations

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Physical light examples render with correct lighting.

#### Task 1.2: Port Shadow Mapping Examples
**Files**: `code/examples/webgl/lights/`
**Action**: Port shadow mapping examples.
- Basic shadow map setup
- VSM (Variance Shadow Maps)
- Shadow map performance optimization
- Shadow visualization tools

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Shadow examples show proper shadow casting.

#### Task 1.3: Port Light Probe Examples
**Files**: `code/examples/webgl/lights/`
**Action**: Port light probe and cube camera examples.
- Light probe generation from scene
- Cube camera reflection setup
- Dynamic environment updates

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Light probe examples capture scene lighting.

### Wave 2: Textures (Week 2-3)

#### Task 2.1: Port Basic Texture Examples
**Files**: `code/examples/webgl/textures/`
**Action**: Port standard texture loading examples.
- Image texture loading
- HDRI environment loading
- EXR texture handling
- Gradient texture generation

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Basic texture examples load textures correctly.

#### Task 2.2: Port Advanced Texture Examples
**Files**: `code/examples/webgl/textures/`
**Action**: Port advanced texture manipulation examples.
- 3D volume textures
- Texture arrays
- Render-to-texture
- Media stream textures

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Advanced texture examples manipulate textures correctly.

#### Task 2.3: Port Compressed Texture Examples
**Files**: `code/examples/webgl/textures/`
**Action**: Port compressed texture format examples.
- KTX2 loading with Basis Universal
- PVR compressed textures
- RGBM encoding
- LogLuv encoding

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Compressed texture examples load correctly.

### Wave 3: Shaders - Basic (Week 3-4)

#### Task 3.1: Port Basic Shader Examples
**Files**: `code/examples/webgl/shaders/`
**Action**: Port fundamental shader material examples.
- Basic ShaderMaterial setup
- Uniform and attribute handling
- Vertex and fragment shader coordination

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Basic shader examples compile and render.

#### Task 3.2: Port Environment Shader Examples
**Files**: `code/examples/webgl/shaders/`
**Action**: Port environment-based shader examples.
- Sky shader
- Ocean shader
- Water shader with reflections

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Environment shaders render realistic effects.

#### Task 3.3: Port Post-Process Shader Examples
**Files**: `code/examples/webgl/shaders/`
**Action**: Port post-processing shader examples.
- Tone mapping shaders
- Grayscale conversion
- LUT color grading

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Post-process shaders apply effects correctly.

### Wave 4: Loaders (Week 4-6)

#### Task 4.1: Port Standard Format Loaders
**Files**: `code/examples/webgl/loaders/`
**Action**: Port common 3D format loaders.
- OBJ with MTL materials
- FBX animation loading
- Collada DAE loading
- STL 3D printing format

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Standard format loaders load models correctly.

#### Task 4.2: Port GLTF and Draco Loaders
**Files**: `code/examples/webgl/loaders/`
**Action**: Port GLTF variants and Draco compression.
- GLTF with animations (already started)
- Draco compressed models
- GLTF variants and extensions

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: GLTF and Draco loaders work correctly.

#### Task 4.3: Port Specialized Format Loaders
**Files**: `code/examples/webgl/loaders/`
**Action**: Port specialized and niche format loaders.
- VRM avatar format
- LDraw LEGO format
- IFC BIM format
- Point cloud formats (PCD, PLY, XYZ)

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: Specialized loaders handle their formats.

#### Task 4.4: Port CAD and Visualization Loaders
**Files**: `code/examples/webgl/loaders/`
**Action**: Port CAD and scientific visualization loaders.
- 3DM Rhino format
- 3MF printing format
- VTK visualization format
- PDB molecular structure

**Verification**:
```bash
tsx test/webgl-examples.test.ts
```

**Done**: CAD/visualization loaders load correctly.

## File Structure

```
code/examples/webgl/
├── lights/
│   ├── Spotlight.tsx      # DONE in Phase 1
│   ├── Hemisphere.tsx     # DONE in Phase 1
│   ├── Physical.tsx
│   ├── Pointlights.tsx
│   ├── Pointlights2.tsx
│   ├── RectAreaLight.tsx
│   ├── ToneMapping.tsx
│   ├── Shadowmap.tsx
│   ├── ShadowmapPerformance.tsx
│   ├── ShadowmapViewer.tsx
│   ├── ShadowmapVSM.tsx
│   ├── ShadowMesh.tsx
│   ├── LightProbe.tsx
│   └── LightProbeCubeCamera.tsx
├── textures/
│   ├── Texture2DArray.tsx
│   ├── Texture3D.tsx
│   ├── Texture3DPartialUpdate.tsx
│   ├── TextureGradient.tsx
│   ├── TextureHDRI.tsx
│   ├── TextureImage.tsx
│   ├── TextureLottie.tsx
│   ├── TextureManualMipmap.tsx
│   ├── TextureMediaStream.tsx
│   ├── TexturePartialRender.tsx
│   ├── TextureRender.tsx
│   ├── TextureRenderShared.tsx
│   ├── Textures.tsx
│   ├── TexturesEXR.tsx
│   ├── TexturesHDR.tsx
│   ├── TexturesKTX2.tsx
│   ├── TexturesLogLuv.tsx
│   ├── TexturesPVRTC.tsx
│   └── TexturesRGBM.tsx
├── shaders/
│   ├── Shader.tsx
│   ├── Shader2.tsx
│   ├── Shader3.tsx
│   ├── ShaderLUT.tsx
│   ├── ShaderMaterial.tsx
│   ├── ShaderMaterials.tsx
│   ├── ShaderWater.tsx
│   ├── ShadersOcean.tsx
│   ├── ShadersSky.tsx
│   ├── ShadersToneMapping.tsx
│   ├── ShadersVector.tsx
│   ├── ShaderAttribute.tsx
│   ├── ShaderFog.tsx
│   ├── ShaderGrayscale.tsx
│   └── ShaderInstancing.tsx
└── loaders/
    ├── GLTF.tsx           # DONE in Phase 1
    ├── 3DM.tsx
    ├── 3MF.tsx
    ├── AMF.tsx
    ├── BVH.tsx
    ├── Collada.tsx
    ├── DRC.tsx
    ├── FBX.tsx
    ├── GCode.tsx
    ├── IFC.tsx
    ├── KMZ.tsx
    ├── LDraw.tsx
    ├── MDD.tsx
    ├── MTL.tsx
    ├── OBJ.tsx
    ├── PCD.tsx
    ├── PDB.tsx
    ├── PLY.tsx
    ├── STL.tsx
    ├── SVG.tsx
    ├── Tilt.tsx
    ├── USDZ.tsx
    ├── Vox.tsx
    ├── VRM.tsx
    ├── VTK.tsx
    └── XYZ.tsx
```

## Verification Criteria

### Automated Tests
1. All examples compile without TypeScript errors
2. All loader imports resolve correctly
3. Shader programs compile without errors
4. Test suite passes: `tsx test/webgl-examples.test.ts`

### Manual Verification
1. Each example renders in browser without console errors
2. Loaded models display correctly with materials
3. Shadows render with proper softness and resolution
4. Shader effects apply correctly to geometry

### Code Quality
1. No `as any` type casts
2. Proper `$$()` usage for context arrays
3. Correct loader setup and cleanup
4. Proper error handling for async loading

## Success Criteria

- [ ] ~65 examples ported and working
- [ ] All automated tests pass
- [ ] Visual verification complete for all examples
- [ ] No TypeScript errors
- [ ] Code review approved
- [ ] Documentation updated

## Dependencies

- Phase 2 complete
- All required loader wrappers in `code/examples/jsm/loaders/`
- Font files and model assets accessible

## Risks and Mitigations

| Risk | Mitigation |
|------|------------|
| External asset availability | Use threejs.org hosted assets |
| Loader compatibility | Test each loader with sample files |
| Shader compilation errors | Validate GLSL syntax before testing |
| Large file loading | Add loading progress indicators |

## Output

After completion, create `.planning/phase-3/03-01-SUMMARY.md` with:
- List of all ported examples
- Loader compatibility notes
- Shader patterns discovered
- Recommendations for Phase 4
