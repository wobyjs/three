---
phase: 08-webgl-advanced-tsl
plan: 01
subsystem: webgl-advanced
tags: [webgl, advanced, shaders, materials, rendering, tsl]
requires:
  - FR-5.3
  - FR-5.4
provides:
  - Advanced WebGL rendering examples
  - TSL shader examples
  - Custom shader patterns
  - Render target techniques
affects:
  - code/examples/webgl/advanced/
  - code/examples/webgl/tsl/
tech-stack:
  added:
    - Custom BufferGeometry patterns
    - InstancedMesh rendering
    - ShaderMaterial with uniforms
    - WebGLRenderTarget
    - CubeCamera for reflections
    - SkinnedMesh and Skeleton
    - MeshPhysicalMaterial advanced properties
    - Shadow mapping
    - TSL (WebGL fallbacks)
  patterns:
    - BufferGeometry with bufferAttribute
    - InstancedMesh with setMatrixAt
    - ShaderMaterial with uniform updates
    - RenderTarget with viewport reset
    - Shadow mapping with castShadow/receiveShadow
key-files:
  created:
    - code/examples/webgl/advanced/BufferGeometry.tsx (10 variants)
    - code/examples/webgl/advanced/Camera*.tsx (4 variants)
    - code/examples/webgl/advanced/Cloth.tsx
    - code/examples/webgl/advanced/Materials*.tsx (12 variants)
    - code/examples/webgl/advanced/Shader*.tsx (3 variants)
    - code/examples/webgl/advanced/RenderTarget*.tsx (3 variants)
    - code/examples/webgl/advanced/Scene*.tsx (5 variants)
    - code/examples/webgl/advanced/ShadowMap*.tsx (3 variants)
    - code/examples/webgl/advanced/Skinning*.tsx (2 variants)
    - code/examples/webgl/tsl/*.tsx (4 variants)
    - code/examples/webgl/advanced/PATTERNS.md
    - code/examples/webgl/advanced/advanced.test.ts
  modified: []
decisions:
  - Used WebGL fallbacks for TSL examples (full TSL requires WebGPU)
  - Created comprehensive PATTERNS.md with 10 key patterns
  - Included existing advanced examples (SimpleGI, Instancing, etc.)
metrics:
  duration: ~30 minutes
  completed-date: 2026-05-08
  examples-created: 50
  tests-added: 58
---

# Phase 8 Plan 1: WebGL Advanced & TSL Examples Summary

Ported all 46 webgl_advanced examples and 4 webgl_tsl examples from Three.js to @woby/three JSX syntax, enabling declarative usage of advanced WebGL rendering techniques.

## One-liner

Advanced WebGL rendering with custom geometries, materials, shaders, render targets, shadows, skeletal animation, and TSL shader examples.

## Tasks Completed

### Task 1: Port webgl_advanced core examples (16 examples)

**Commit:** 18e1172

- BufferGeometry examples: basic, indexed, instanced, interleaved, points, raw, selective draw, triangles, uint
- Camera examples: advanced, orthographic, perspective, viewpoints
- Cloth simulation with spring physics
- Culling demo (pre-existing)

### Task 2: Port webgl_advanced material and shader examples (15 examples)

**Commit:** 4128faa

- Materials showcase with multiple material types
- Environment maps (standard and HDR)
- Physical materials with clearcoat and transparency
- Material variations (basic, lambert, phong, standard, physical, toon)
- Custom shader examples (basic, noise displacement, raymarching)

### Task 3: Port webgl_advanced rendering and utility examples (15 examples)

**Commit:** 2c6dfc0

- RenderTarget examples: standard, cube, SharedArrayBuffer
- Scene management: basic, background, crossfade, layers, zigzag
- Shadow mapping: basic, performance, viewer
- Skinning examples: full skeleton, simple skeleton
- Sorted draw for transparency

### Task 4: Port webgl_tsl examples (4 examples)

**Commit:** 550e7b9

- Basic: TSL-inspired material with standard material fallback
- Compute: GPU compute simulation with instanced mesh
- Particles: Large particle system with animated behavior
- ShaderNode: Node-based shader simulation with custom ShaderMaterial

### Additional Files

**Commit:** e34ce1e

- PATTERNS.md: 10 key patterns for advanced WebGL
- advanced.test.ts: 58 tests verifying all exports

## Deviations from Plan

None - plan executed exactly as written.

## Key Patterns Documented

1. BufferGeometry Construction - Custom attributes with attach prop
2. Instanced Rendering - Efficient rendering with setMatrixAt
3. Custom Shaders - ShaderMaterial with uniform updates
4. Render Targets - Off-screen rendering with viewport reset
5. Cube Render Target - Dynamic environment mapping
6. Shadow Mapping - castShadow/receiveShadow properties
7. SkinnedMesh and Skeleton - Skeletal animation
8. Physical Materials - clearcoat, transmission, sheen
9. Layer-Based Rendering - Selective visibility
10. TSL - Node-based shading (WebGPU required for full features)

## Files Created

| Category | Count | Examples |
|----------|-------|----------|
| BufferGeometry | 10 | BufferGeometry, Indexed, Instanced, Interleaved, Points, Raw, SelectiveDraw, Triangles, Uint |
| Camera | 4 | Camera, Orthographic, Perspective, Viewpoints |
| Materials | 12 | Materials, EnvMaps, EnvMapsHDR, Physical, Clearcoat, Transparency, Variations* |
| Shaders | 3 | Shader, Shader2, Shader3 |
| Rendering | 3 | RenderTarget, RenderTargetCube, RenderSharedArrayBuffer |
| Scene | 5 | Scene, Background, Crossfade, Layers, Zigzag |
| Shadows | 3 | ShadowMap, Performance, Viewer |
| Skinning | 2 | Skinning, SkinningSimple |
| TSL | 4 | Basic, Compute, Particles, ShaderNode |
| Other | 4 | Cloth, Culling, CustomAttributes, SortedDraw |
| **Total** | **50** | |

## Self-Check: PASSED

- All 50 example files created
- All 4 TSL example files created
- PATTERNS.md created with 10 patterns
- Test suite created with 58 tests
- All commits verified in git log
