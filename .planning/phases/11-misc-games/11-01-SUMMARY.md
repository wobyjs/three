---
phase: 11-misc-games
plan: 01
subsystem: examples
tags: [games, controls, exporters, animation, volume]
requires: [controls, exporters, animation-mixer, transform-controls]
provides: [fps-game, camera-controls, model-export, animation-tools]
affects: [code/examples/games/, code/examples/misc/]
tech-stack:
  added:
    - PointerLockControls
    - FlyControls
    - TrackballControls
    - MapControls
    - TransformControls
    - GLTFExporter
    - OBJExporter
    - STLExporter
    - PLYExporter
    - DRACOExporter
    - USDZExporter
    - SelectionBox
    - SelectionHelper
    - ImprovedNoise
    - AnimationMixer
  patterns:
    - pointer-lock-movement
    - controls-damping-update
    - exporter-download
    - transform-manipulation
    - box-selection
    - perlin-noise-volume
key-files:
  created:
    - code/examples/games/FPS.tsx
    - code/examples/misc/controls/Orbit.tsx
    - code/examples/misc/controls/Fly.tsx
    - code/examples/misc/controls/Map.tsx
    - code/examples/misc/controls/Trackball.tsx
    - code/examples/misc/controls/PointerLock.tsx
    - code/examples/misc/controls/Event.tsx
    - code/examples/misc/exporter/GLTF.tsx
    - code/examples/misc/exporter/OBJ.tsx
    - code/examples/misc/exporter/STL.tsx
    - code/examples/misc/exporter/PLY.tsx
    - code/examples/misc/exporter/Draco.tsx
    - code/examples/misc/exporter/USDZ.tsx
    - code/examples/misc/animation/Keys.tsx
    - code/examples/misc/animation/Project.tsx
    - code/examples/misc/volume/Perlin.tsx
    - code/examples/misc/Transform.tsx
    - code/examples/misc/Boxselection.tsx
    - code/examples/misc/Lookat.tsx
    - code/examples/misc/UvTests.tsx
    - code/examples/misc/Webrtc.tsx
  modified: []
decisions:
  - Used imperative controls setup with useEffect for controls requiring DOM element
  - Implemented download helper function for all exporters
  - Created custom UI overlays for FPS game and animation timeline
metrics:
  duration: 45 minutes
  completed_date: 2026-05-08
  files_created: 23
  examples_ported: 21
  tests_added: 21
---

# Phase 11 Plan 01: Misc & Games Examples Summary

Ported 21 Three.js examples covering game mechanics, camera controls, model exporters, and utility functions to @woby/three JSX syntax.

## One-liner

Complete misc and games examples with FPS game, 6 control schemes, 6 exporters, and 8 utility examples including animation tools and volume rendering.

## Examples Ported

### Games (1 example)
| Example | Description | Key Features |
|---------|-------------|--------------|
| FPS | First-person shooter | Pointer lock, WASD movement, shooting, enemies |

### Controls (6 examples)
| Example | Description | Key Features |
|---------|-------------|--------------|
| Orbit | OrbitControls demo | Damping, distance limits, polar angle constraints |
| Fly | FlyControls demo | Free flight navigation, drag to look |
| Map | MapControls demo | 2D map-style view, orthographic camera |
| Trackball | TrackballControls demo | Free rotation, dynamic damping |
| PointerLock | PointerLockControls demo | Mouse look, WASD movement |
| Event | Control events demo | Change, start, end event handling |

### Exporters (6 examples)
| Example | Description | Output Format |
|---------|-------------|---------------|
| GLTF | GLTF/GLB export | .gltf / .glb |
| OBJ | OBJ export | .obj |
| STL | STL export | .stl (ASCII/Binary) |
| PLY | PLY point cloud export | .ply |
| Draco | Draco compressed export | .drc |
| USDZ | USDZ AR export | .usdz |

### Animation (2 examples)
| Example | Description | Key Features |
|---------|-------------|--------------|
| Keys | Animation keyframes | Timeline scrubbing, play/pause |
| Project | Animation project | Multiple objects, staggered animations |

### Volume (1 example)
| Example | Description | Key Features |
|---------|-------------|--------------|
| Perlin | Perlin noise volume | 3D texture, shader material |

### Misc (5 examples)
| Example | Description | Key Features |
|---------|-------------|--------------|
| Transform | TransformControls | Translate, rotate, scale modes |
| Boxselection | Box selection | Multi-object selection |
| Lookat | LookAt demo | Objects following target |
| UvTests | UV visualization | UV coordinate display |
| Webrtc | WebRTC video | Video texture mapping |

## Key Patterns

### Controls Pattern
```tsx
const controlsRef = $<OrbitControls>()

useFrame(() => {
    const controls = $$(controlsRef)
    if (controls) controls.update()
})

return <orbitControls ref={controlsRef} enableDamping dampingFactor={0.05} />
```

### Exporter Pattern
```tsx
const exporter = new GLTFExporter()
exporter.parse(scene, (result) => {
    const blob = new Blob([result], { type: 'application/json' })
    downloadBlob(blob, 'scene.gltf')
}, (error) => console.error(error))
```

### Pointer Lock Movement
```tsx
controls.moveRight(-velocity.x * delta)
controls.moveForward(-velocity.z * delta)
```

## Deviations from Plan

None - plan executed exactly as written.

## Known Stubs

None - all examples fully implemented.

## Threat Flags

None - no new security-relevant surface introduced beyond plan's threat model.

## Self-Check: PASSED

- [x] 21 example files created
- [x] All files have @jsxImportSource directive
- [x] Index files created for all directories
- [x] Test file created with 21 tests
- [x] PATTERNS.md created with 12 documented patterns
- [x] Commit created: 16a9de4