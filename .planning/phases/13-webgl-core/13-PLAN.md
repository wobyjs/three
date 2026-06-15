---
phase: 13
name: WebGL Core Examples
wave: 1
depends_on: []
files_modified: []
autonomous: true
---

# Phase 13: WebGL Core Examples

**Goal:** Port ~200 remaining WebGL examples from threejs.org to @woby/three JSX syntax

## Strategy

Port examples in focused batches by category. Each batch:
1. Create example TSX files in `code/examples/webgl/{category}/`
2. Follow established patterns from phases 1-12
3. Add test entries to appropriate test suite

## Batches (Wave 1 - 10 plans)

| Plan | Category | Count | Focus |
|------|----------|-------|-------|
| 13-01 | Camera | 3 | Perspective, Array, LogarithmicDepthBuffer |
| 13-02 | Clipping | 4 | Basic, Advanced, Intersection, Stencil |
| 13-03 | Decals | 1 | Decal splatter |
| 13-04 | Effects | 4 | Anaglyph, Ascii, ParallaxBarrier, Stereo |
| 13-05 | Geometry | 19 | Colors, Convex, CSG, Cube, Extrude, Minecraft, NURBS, Shapes, SplineEditor, Teapot, Terrain, Text |
| 13-06 | Helpers | 1 | GridHelper, AxesHelper, etc. |
| 13-07 | Instancing | 5 | Morph, Dynamic, Performance, Raycast, Scatter |
| 13-08 | Interactive | 8 | BufferGeometry, Cubes, GPU, Ortho, Lines, Points, Raycasting, VoxelPainter |
| 13-09 | Lensflares | 1 | Point light flares |
| 13-10 | Lightprobes | 5 | Basic, CubeCamera, Multiple, Complex, Sponza |

## Pattern Reference

From existing ported examples in `code/examples/`:
```tsx
/** @jsxImportSource @woby/three */
import { $, $$, useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { OrbitControls } from '@woby/three/lib/examples/jsm/controls/OrbitControls'
// Side-effect imports for Three.js classes
import '@woby/three/src/...'
```

## Must-Haves

- [ ] 10+ example files per batch category
- [ ] Each example compiles without TypeScript errors
- [ ] Pattern consistency with existing examples
- [ ] Test coverage for each category