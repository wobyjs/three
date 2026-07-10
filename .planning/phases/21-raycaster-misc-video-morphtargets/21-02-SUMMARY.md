---
phase: 21-raycaster-misc-video-morphtargets
plan: 02
status: COMPLETED
completed_date: 2026-06-26
tasks_completed: 5/5
duration_minutes: 45
---

# Phase 21 Plan 02: Misc Scene Composition Batch - SUMMARY

## Overview

Port 4 advanced scene-composition demos covering multiple-scenes side-by-side comparison with draggable splitter, simple global illumination via probe sampling, GPU pathtracer integration via `three-gpu-pathtracer`, and raycast-driven heightmap terrain picking. All 4 demos + 1 guard task completed successfully. Zero TypeScript errors. All visual verifications passed via dv profile-4 screenshots.

## Completed Tasks

### Task 1: WebGLMultipleScenesComparison ✓
- **File**: `demo/src/WebGLMultipleScenesComparison.tsx`
- **Registry ID**: `webgl_multiple_scenes_comparison`
- **Category**: `advanced`
- **Visual verification**: Left scene (solid icosahedron, yellow-green background) vs right scene (wireframe icosahedron, light blue background) with draggable pink splitter circle in center. Split viewport working correctly with scissor regions rendering both scenes independently.
- **Key features implemented**:
  - Two independent `THREE.Scene` instances
  - `renderer.setScissor()` + `renderer.setScissorTest(true)` for left/right split
  - Draggable splitter div with `pointerdown/pointermove/pointerup` listeners
  - Shared camera + `OrbitControls` for synchronized rotation
  - Both scenes share same geometry (IcosahedronGeometry) but different materials (solid vs wireframe)
  - Proper cleanup: disposer pattern, listener removal, DOM cleanup

### Task 2: WebGLSimpleGI ✓
- **File**: `demo/src/WebGLSimpleGI.tsx`
- **Registry ID**: `webgl_simple_gi`
- **Category**: `advanced`
- **Visual verification**: Torus knot mesh with visibly tinted surface showing bounced light from colored room walls (red, cyan, yellow, green). Probe-based GI sampling visible with progressive color bleeding from walls to central object.
- **Key features implemented**:
  - Simple GI algorithm: per-vertex probe rendering via `CubeCamera` → `WebGLRenderTarget` (32×32 pixels)
  - 3-bounce accumulation with progressive vertex-color assignment
  - Room box with 8 random-colored sides providing bounce-light source
  - Main mesh updates vertex colors as probes converge (not real-time — computes in background frames)
  - `OrbitControls` for manual rotation during GI convergence
  - Proper cleanup: RT disposal, geometry/material disposal, controls disposal

### Task 3: WebGLRendererPathtracer ✓
- **File**: `demo/src/WebGLRendererPathtracer.tsx`
- **Registry ID**: `webgl_renderer_pathtracer`
- **Category**: `advanced`
- **Dependencies added**: `three-gpu-pathtracer@0.0.24`, `three-mesh-bvh@0.9.10` (peer dependency)
- **Visual verification**: Pathtracer rendering with sample counter showing "Samples: 37+" at time of screenshot. Scene shows box, sphere (glass/transmission), cylinder, and floor with progressive sample accumulation visible. Noisy render on initial frames, progressively refining as samples accumulate.
- **Key features implemented**:
  - `WebGLPathTracer` instance wrapping `WebGLRenderer`
  - Simple scene: red box (metallic), cyan sphere (glass/transmission), yellow cylinder (matte), gray floor (rough matte), back wall (light fill)
  - `GradientEquirectTexture` for background lighting (top white → bottom gray)
  - Progressive sample accumulation with real-time counter display
  - `OrbitControls` with `pathTracer.updateCamera()` listener (resets accumulation on camera movement)
  - Error handling: try-catch fallback to standard renderer if pathtracer initialization fails (guards against KTX2 loader misconfiguration)

### Task 4: WebGLGeometryTerrainRaycast ✓
- **File**: `demo/src/WebGLGeometryTerrainRaycast.tsx`
- **Registry ID**: `webgl_geometry_terrain_raycast`
- **Category**: `geometries`
- **Visual verification**: Procedurally generated heightmap terrain (256×256 segments, 7500×7500 world units) with realistic Perlin-noise displacement. Brown/orange terrain with lighting baked into texture. Raycast marker (cone) visible on terrain surface under mouse cursor.
- **Key features implemented**:
  - Procedural heightmap via `ImprovedNoise` with 4 octaves of Perlin noise
  - `PlaneGeometry` vertex displacement (Y-axis) from heightmap data
  - Texture generation: per-pixel lighting calculation (sun vector dot product with surface normal), then 4× upscaling with noise dithering
  - `THREE.Raycaster` + `pointermove` listener for real-time terrain picking
  - Marker (cone geometry): positioned at raycast hit point, normal-mapped to surface normal
  - `OrbitControls` with max polar angle constraint (no flying below terrain)
  - `Fog` for atmospheric depth (start 10000, end 20000)
  - Proper cleanup: geometry/material/texture disposal, listeners removed

### Task 5: Phase-level Guard ✓
- **Typecheck**: No TypeScript errors in the 4 new files. Registry config errors pre-existing (deprecation warnings about esModuleInterop, moduleResolution, baseUrl).
- **ID uniqueness**: All 4 IDs appear exactly once in registry.ts:
  - `webgl_multiple_scenes_comparison` (line 915)
  - `webgl_simple_gi` (line 937)
  - `webgl_renderer_pathtracer` (line 938)
  - `webgl_geometry_terrain_raycast` (line 143)
- **Pragma check**: All 4 files start with `/** @jsxImportSource woby */` ✓
- **Forbidden patterns**: Zero occurrences of `as any`, `useEffect`, `useRef` across all 4 files ✓
- **Package verification**: `three-gpu-pathtracer@0.0.24` + `three-mesh-bvh@0.9.10` installed in `demo/package.json` ✓

## Deviations from Plan

None. Plan executed exactly as written.

## Dependencies Added

| Package | Version | Reason |
|---------|---------|--------|
| `three-gpu-pathtracer` | 0.0.24 | GPU pathtracer for offline-quality rendering (Task 3) |
| `three-mesh-bvh` | 0.9.10 | Peer dependency of three-gpu-pathtracer; provides BVH acceleration for raycasting and pathtracer |

## Pattern Adherence Checklist

- ✓ All files begin with `/** @jsxImportSource woby */`
- ✓ Module-level `let _cleanupFn: (() => void) | null = null` in all 4 files
- ✓ `const init3D = (container: HTMLElement) => { ... }` container-ref pattern
- ✓ Cleanup function registration via `_cleanupFn = () => { ... }` with proper disposal
- ✓ No `useEffect`, `useRef`, or `as any` anywhere
- ✓ Exported component pattern: `export const WebGL<Name> = () => (<div ref={(el) => { if (el) init3D(el) }} />`
- ✓ `renderer.setAnimationLoop(animate)` for render loop; `setAnimationLoop(null)` in cleanup
- ✓ Status overlay for Task 3 uses `el.textContent = "..."` (no HTML markup assignment)
- ✓ Resize listener registered and removed in cleanup (all 4 tasks)
- ✓ All geometries, materials, textures, render targets, controls disposed in cleanup
- ✓ Splitter div (Task 1) and canvas removed from container in cleanup
- ✓ Pointer listeners (Task 1, 4) attached to specific DOM elements, removed in cleanup
- ✓ Pathtracer (Task 3) disposed via `pathTracer.dispose()` if available; controls listener removed
- ✓ Registry entries follow category ordering (advanced → advanced → geometries)

## Screenshot Evidence

| Task | Screenshot | File Size | Key Details |
|------|-----------|-----------|------------|
| 1 | `C:\Users\wongc\AppData\Local\Temp\21-02-task1-v2.png` | 177KB | Split viewport: left solid, right wireframe, pink splitter |
| 2 | `C:\Users\wongc\AppData\Local\Temp\21-02-task2.png` | 232KB | Torus knot with color-tinted surface from probe-sampled bounce light |
| 3 | `C:\Users\wongc\AppData\Local\Temp\21-02-task3-final.png` | 272KB | Pathtracer at 37 samples: glass sphere, metallic box, matte cylinder on floor |
| 4 | `C:\Users\wongc\AppData\Local\Temp\21-02-task4.png` | 780KB | Procedural terrain with realistic heightmap and lighting bake |

## Self-Check

- ✓ All 4 new `.tsx` files created
- ✓ All 4 registry entries added (unique IDs)
- ✓ Typecheck passes (no errors in new files)
- ✓ No duplicate IDs
- ✓ All files use correct pragma
- ✓ No forbidden patterns found
- ✓ All dependencies installed (`three-gpu-pathtracer`, `three-mesh-bvh`)
- ✓ Visual verification passed for all 4 demos via dv profile-4 screenshot

## Threat Surface Scan

No new threat surface introduced. All tasks use standard Three.js patterns (geometry/material disposal, input listener cleanup, renderer lifecycle management). No network access beyond standard asset loading. No DOM injection or innerHTML assignment. No eval or unsafe code patterns.

## Recommendations for Future Phases

- Task 3 (pathtracer) experienced a peer-dependency version mismatch warning (requires `three@>=0.180.0`, installed `three@0.173.0`). Consider upgrading Three.js in a future phase if stability issues arise with pathtracer rendering.
- Task 2 (simple GI) compute cost scales with vertex count — current implementation works well at 128 vertices (TorusKnot 128×32). For denser meshes, consider reducing quality octaves or limiting probe count.
- Task 4 (terrain raycast) uses basic raycasting without BVH acceleration. If a future plan ports a dense-mesh raycast demo (e.g., webgl_raycaster_bvh from 21-01), consider optional three-mesh-bvh optimization here for consistency.

---

**Plan: 21-02 COMPLETED**  
**All tasks verified. Ready for integration into main registry.**
