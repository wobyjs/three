# Phase 1: Foundation & Infrastructure - Research

**Researched:** 2026-05-06
**Domain:** Three.js examples porting to JSX syntax
**Confidence:** HIGH

## Summary

This research covers the technical requirements for porting Three.js vanilla examples to @woby/three JSX syntax. The @woby/three library provides a declarative JSX wrapper around Three.js, enabling reactive scene graphs with Woby observables. The porting process involves transforming imperative Three.js code into declarative JSX components while maintaining visual and behavioral parity.

**Primary recommendation:** Use the existing Fat Lines example in readme.md as the canonical pattern. Create a template based on this pattern with standardized imports, component structure, and test coverage.

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Scene graph assembly | Browser / Client | - | JSX elements create Three.js objects in browser |
| Reactive state management | Browser / Client | - | Woby observables drive updates |
| Rendering pipeline | Browser / Client | API / Backend | WebGLRenderer handles GPU rendering |
| Asset loading | Browser / Client | CDN / Static | Loaders fetch models/textures from URLs |
| Animation loop | Browser / Client | - | useFrame hook subscribes to render loop |

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| three | ^0.173.0 | 3D rendering engine | Core dependency |
| woby | workspace | Reactive framework | Provides observables, context, JSX runtime |
| @woby/three | 0.2.42 | JSX wrapper for Three.js | This project |
| tsx | global | TypeScript execution | Pure TSX test runner |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @playwright/test | ^1.56.1 | E2E testing | Visual verification of ported examples |
| vite | ^6.1.0 | Build tool | Development server, production builds |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| tsx test runner | vitest | vitest requires jsdom, violates project constraint |
| Playwright | Puppeteer | Playwright has better DX and multi-browser support |

**Installation:**
```bash
pnpm install
```

**Version verification:** [VERIFIED: package.json] - three@0.173.0, woby workspace, tsx global

## Architecture Patterns

### System Architecture Diagram

```text
┌─────────────────────────────────────────────────────────────────┐
│                     Ported Example (.tsx)                        │
│   JSX: <canvas3D><scene><mesh><boxGeometry /></mesh></scene>   │
└──────────────────────────────┬──────────────────────────────────┘
                               │ JSX transform
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    JSX Runtime Layer                             │
│   jsx() -> createElement() -> getInstance() -> Three.js object  │
│   Files: code/lib/three/jsx.tsx, createElement.tsx              │
└──────────────────────────────┬──────────────────────────────────┘
                               │ Registry lookup
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                   Registration Layer                             │
│   Three, consParams, objProps, defaults registries              │
│   Populated by wrapper imports (side effects)                   │
└──────────────────────────────┬──────────────────────────────────┘
                               │ Class instantiation
                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Three.js Library                              │
│   Actual Mesh, Scene, Camera, Renderer instances                │
│   Rendered via WebGL in browser                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Recommended Project Structure

```text
code/
├── examples/
│   └── webgl/                    # Ported webgl examples
│       ├── animation/
│       │   ├── Basic.tsx         # webgl_animation_basic
│       │   └── Keyframes.tsx     # webgl_animation_keyframes
│       ├── camera/
│       │   └── Camera.tsx        # webgl_camera
│       ├── geometries/
│       │   └── Geometries.tsx    # webgl_geometries
│       ├── materials/
│       │   └── Materials.tsx     # webgl_materials
│       ├── lights/
│       │   ├── PointLights.tsx   # webgl_lights_pointlights
│       │   └── SpotLight.tsx     # webgl_lights_spotlight
│       ├── loaders/
│       │   └── GLTF.tsx          # webgl_loader_gltf
│       ├── interactive/
│       │   └── Cubes.tsx         # webgl_interactive_cubes
│       └── advanced/
│           └── SimpleGI.tsx      # webgl_simple_gi
├── lib/
│   ├── three/                    # JSX runtime
│   ├── hooks/                    # useThree, useFrame
│   └── components/               # Canvas3D
└── src/                          # Three.js class wrappers
```

### Pattern 1: Basic Scene Template

**What:** Standard template for ported examples
**When to use:** All ported examples follow this structure

```tsx
/** @jsxImportSource @woby/three */

import { $, $$, useEffect } from "woby"
import { useFrame, useThree, useRenderer, useCamera } from '@woby/three'
import * as THREE from 'three'

export const ExampleName = () => {
    // 1. Reactive state
    const ref = $<THREE.Mesh>()
    const hovered = $(false)

    // 2. Hooks for context access
    const { scene } = useThree()
    const camera = useCamera<THREE.PerspectiveCamera>()
    const renderer = useRenderer<THREE.WebGLRenderer>()

    // 3. Animation frame callback
    useFrame(() => {
        const mesh = $$(ref)
        if (mesh) {
            mesh.rotation.x += 0.01
        }
    })

    // 4. JSX return
    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh ref={ref}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>
            <orbitControls />
        </canvas3D>
    )
}
```

### Pattern 2: Constructor Args via `args` Prop

**What:** Three.js constructor arguments passed via `args` prop
**When to use:** When constructing Three.js objects with non-zero constructor params

```tsx
// Vanilla Three.js
const geo = new THREE.BoxGeometry(1, 1, 1)
const light = new THREE.PointLight(0xff0000, 1, 100)

// @woby/three JSX
<boxGeometry args={[1, 1, 1]} />
<pointLight args={[0xff0000, 1, 100]} />
```

### Pattern 3: Nested Property Assignment via Kebab-Case

**What:** Set nested properties using kebab-case props
**When to use:** Setting properties like `light.shadow.camera.far`

```tsx
// Vanilla Three.js
light.shadow.camera.far = 333

// @woby/three JSX
<pointLight shadow-camera-far={333} />
```

### Pattern 4: Method Calls via Setter Syntax

**What:** Call methods on instances via array prop syntax
**When to use:** Methods like `setPixelRatio`, `setSize`, `setClearColor`

```tsx
// Vanilla Three.js
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000, 0.0)

// @woby/three JSX
<webGLRenderer
    setPixelRatio={[window.devicePixelRatio]}
    setSize={[window.innerWidth, window.innerHeight]}
    setClearColor={[0x000000, 0.0]}
/>
```

### Pattern 5: Reactive Props with Observables

**What:** Use Woby observables for reactive property updates
**When to use:** Dynamic values that change over time

```tsx
const posX = $(0)
const color = $('orange')

<mesh position-x={posX}>
    <meshStandardMaterial color={() => $$(color)} />
</mesh>

// Update triggers reactive change
posX(5)
color('hotpink')
```

### Anti-Patterns to Avoid

- **Using `$` to read context arrays:** Always use `$$` for `useThree()` arrays. `$(renderers)[0]` creates a new observable and fails; `$$($$(renderers))[0]` works correctly.
- **`as any` casts on reactive values:** TypeScript would flag errors - investigate instead of casting away.
- **Single child in mesh:** `<mesh><boxGeometry /></mesh>` fails because `isNullR` checks for undefined material slot. Always provide both geometry and material children.
- **Missing viewport reset after inset rendering:** Always call `r.setViewport(0, 0, window.innerWidth, window.innerHeight)` after `setScissorTest(false)` for multi-view examples.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Custom element registration | Manual `customElements.define` | Import wrapper file | Wrapper handles Three, consParams, objProps, defaults registration |
| Scene graph assembly | Manual `parent.add(child)` | JSX nesting | `add2parent` handles hierarchy automatically |
| Animation loop | Manual `requestAnimationFrame` | `useFrame` hook | Integrates with Canvas3D context, proper cleanup |
| Context access | Global variables | `useThree`, `useCamera`, `useRenderer` | Woby context system, reactive updates |

**Key insight:** The registration pattern (Three, consParams, objProps, defaults) is the core abstraction. All examples must import necessary wrapper files to populate registries before JSX elements can be created.

## Common Pitfalls

### Pitfall 1: Import Order Matters

**What goes wrong:** Parent wrapper must be imported before child wrapper that spreads from it
**Why it happens:** CJS module evaluation order; child spreads `[...objProps.parent]` which is undefined if parent not loaded
**How to avoid:** Use `test/registry-seeds.ts` pattern - import Object3D, BufferGeometry, Mesh wrappers first
**Warning signs:** "undefined is not iterable" or "Cannot spread undefined"

### Pitfall 2: Observable vs Non-Observable Context

**What goes wrong:** `useThree()` returns plain arrays, not observables
**Why it happens:** `frames`, `scenes`, `cameras`, `renderers` are plain arrays in context
**How to avoid:** Always use `$$()` to read context values, never `$()`
**Warning signs:** `undefined` when accessing array elements

### Pitfall 3: Auto-Render Conflicts

**What goes wrong:** Double rendering or viewport state issues
**Why it happens:** `getInstance` auto-registers render frame per camera; custom Panel `useFrame` adds second render
**How to avoid:** For custom render pipelines, use `noRender` prop on Canvas3D or verify auto-render behavior
**Warning signs:** Flickering, incorrect viewport sizes, performance degradation

### Pitfall 4: Scene Graph Tests vs Visual Correctness

**What goes wrong:** Playwright structure checks pass while screen is black
**Why it happens:** Shader-heavy examples (LineMaterial, post-processing) may have runtime issues not caught by DOM checks
**How to avoid:** Add pixel-color browser check or screenshot comparison for shader-heavy examples
**Warning signs:** All tests green but visual output incorrect

## Code Examples

### Basic Example: Rotating Cube

```tsx
/** @jsxImportSource @woby/three */

import { $, $$ } from "woby"
import { useFrame } from '@woby/three'
import * as THREE from 'three'

export const RotatingCube = () => {
    const ref = $<THREE.Mesh>()

    useFrame(() => {
        const mesh = $$(ref)
        if (mesh) {
            mesh.rotation.x += 0.01
            mesh.rotation.y += 0.01
        }
    })

    return (
        <canvas3D>
            <perspectiveCamera position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh ref={ref}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>
            <orbitControls />
        </canvas3D>
    )
}
```

### Interactive Example: Raycasting

```tsx
/** @jsxImportSource @woby/three */

import { $, $$, useEffect } from "woby"
import { useFrame, useThree } from '@woby/three'
import * as THREE from 'three'

export const InteractiveCubes = () => {
    const { scene } = useThree()
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()
    const INTERSECTED = $<THREE.Mesh | null>(null)

    const onPointerMove = (event: PointerEvent) => {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    useFrame(() => {
        const camera = $$(useThree().cameras)[0] as THREE.PerspectiveCamera
        raycaster.setFromCamera(pointer, camera)
        const intersects = raycaster.intersectObjects($$(scene)!.children)

        const prev = $$(INTERSECTED)
        if (prev && prev.material) {
            (prev.material as THREE.MeshLambertMaterial).emissive.setHex(0x000000)
        }

        if (intersects.length > 0) {
            const hit = intersects[0].object as THREE.Mesh
            INTERSECTED(hit)
            if (hit.material) {
                (hit.material as THREE.MeshLambertMaterial).emissive.setHex(0xff0000)
            }
        }
    })

    return (
        <canvas3D onpointermove={onPointerMove}>
            {/* ... scene setup ... */}
        </canvas3D>
    )
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| vitest + jsdom | Pure tsx runner | Project start | No framework dependency, simpler setup |
| `$(context)` | `$$($$(context))` | Discovered in testing | Correct observable resolution pattern |
| Manual render loop | `useFrame` hook | @woby/three design | Automatic cleanup, context integration |

**Deprecated/outdated:**
- `@jsxImportSource @woby/three` in test files: Use `// @jsx _h` pragma instead because ESM imports break Node.js CJS resolution

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | All 10 pilot examples exist at threejs.org/examples | Pilot Examples | May need to adjust example list |
| A2 | GLTFLoader example uses public model URLs | Pilot Examples | May need local model hosting |
| A3 | SimpleGI example uses vertex color approach | Pilot Examples | Implementation may differ |

**If this table is empty:** All claims in this research were verified or cited.

## Open Questions (RESOLVED)

1. **Where should ported examples live?**
   - **Decision:** `code/examples/webgl/` structure within main repo
   - **Rationale:** Keeps examples close to source code, enables direct imports in tests, follows existing `code/examples/jsm/` pattern

2. **What assets need local hosting?**
   - **Decision:** Use threejs.org CDN URLs for models/textures where available
   - **Examples requiring external assets:**
     - Keyframes.tsx: LittlestTokyo.glb from threejs.org
     - GLTF.tsx: Various models from threejs.org
     - Geometries.tsx: Textures from threejs.org
   - **Local hosting:** Not required for Phase 1 - all assets available via CDN

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| tsx | Test runner | ✓ | global | - |
| three | Core library | ✓ | 0.173.0 | - |
| woby | Reactive framework | ✓ | workspace | - |
| playwright | E2E tests | ✓ | 1.56.1 | - |
| vite | Build/dev | ✓ | 6.1.0 | - |

**Missing dependencies with no fallback:**
- None detected

**Missing dependencies with fallback:**
- None detected

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Pure tsx runner (no vitest/jsdom) |
| Config file | None - see setup pattern |
| Quick run command | `tsx test/<name>.test.ts` |
| Full suite command | `pnpm test` |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| FR-1.1 | Core classes registerable as JSX | unit | `tsx test/three.test.ts` | Yes |
| FR-2.1 | Constructor args via `args` prop | unit | `tsx test/jsx.test.tsx` | Yes |
| FR-2.2 | Kebab-case nested props | unit | `tsx test/jsx.test.tsx` | Yes |
| FR-2.4 | Reactive props via observables | unit | `tsx test/jsx.test.tsx` | Yes |
| FR-3.1 | Parent-child via JSX nesting | unit | `tsx test/jsx.test.tsx` | Yes |
| FR-4.1 | useFrame hook | integration | Manual verification | - |
| FR-4.2 | useThree hook | unit | `tsx test/jsx.test.tsx` | Yes |

### Sampling Rate
- **Per task commit:** `tsx test/<category>.test.ts`
- **Per wave merge:** `pnpm test`
- **Phase gate:** Full suite green + visual verification

### Wave 0 Gaps
- [ ] `test/webgl-examples.test.ts` - covers ported example registration
- [ ] `test/e2e/webgl-visual.test.ts` - Playwright visual checks

*(Existing test infrastructure covers JSX pipeline and registration patterns. New test files needed for ported examples.)*

## Security Domain

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | no | - |
| V3 Session Management | no | - |
| V4 Access Control | no | - |
| V5 Input Validation | yes | TypeScript strict mode |
| V6 Cryptography | no | - |

### Known Threat Patterns for Three.js/WebGL

| Pattern | STRIDE | Standard Mitigation |
|---------|--------|---------------------|
| WebGL context loss | Denial of Service | Handle `webglcontextlost` event |
| Shader injection | Tampering | Validate shader source, no user input |
| Model URL injection | Information Disclosure | Validate URLs, use allowlist |
| Memory exhaustion | Denial of Service | Dispose geometries/materials properly |

## 10 Pilot Examples Research

### 1. webgl_animation_keyframes

**Source:** [VERIFIED: threejs.org/examples]

**Three.js Classes Used:**
- `THREE.Timer` - animation timing
- `THREE.WebGLRenderer` - rendering
- `THREE.Scene` - scene container
- `Sky` - procedural sky (from addons)
- `THREE.PMREMGenerator` - environment maps
- `THREE.PerspectiveCamera` - view
- `OrbitControls` - camera control (from addons)
- `DRACOLoader` - Draco decompression (from addons)
- `GLTFLoader` - model loading (from addons)
- `THREE.AnimationMixer` - animation playback

**Complexity:** MEDIUM-HIGH
- HDR environment mapping
- Keyframe animation from GLTF
- PMREMGenerator for reflections
- External model dependency (LittlestTokyo.glb)

**Special Considerations:**
- Requires DRACOLoader for compressed models
- Timer class for consistent animation timing
- AnimationMixer for playing embedded animations

### 2. webgl_camera

**Source:** [VERIFIED: threejs.org/examples]

**Three.js Classes Used:**
- `THREE.Scene`, `THREE.PerspectiveCamera`, `THREE.OrthographicCamera`
- `THREE.CameraHelper`
- `THREE.Group`, `THREE.Mesh`, `THREE.SphereGeometry`
- `THREE.MeshBasicMaterial`
- `THREE.BufferGeometry`, `THREE.Float32BufferAttribute`
- `THREE.Points`, `THREE.PointsMaterial`
- `THREE.WebGLRenderer`

**Complexity:** MEDIUM
- Split-screen rendering (left/right viewports)
- Camera switching (O/P keys)
- CameraHelper visualization
- Particle system (10,000 points)

**Special Considerations:**
- Multiple camera types
- CameraHelper for visualization
- Keyboard event handling

### 3. webgl_geometries

**Source:** [VERIFIED: threejs.org/examples]

**Three.js Classes Used:**
- `THREE.PerspectiveCamera`, `THREE.Scene`
- `THREE.AmbientLight`, `THREE.PointLight`
- `THREE.TextureLoader`, `THREE.MeshPhongMaterial`
- Geometry classes: SphereGeometry, IcosahedronGeometry, OctahedronGeometry, TetrahedronGeometry, PlaneGeometry, BoxGeometry, CircleGeometry, RingGeometry, CylinderGeometry, LatheGeometry, TorusGeometry, TorusKnotGeometry, CapsuleGeometry, ParametricGeometry
- `THREE.Mesh`, `THREE.Vector2`
- `THREE.WebGLRenderer`

**Complexity:** LOW-MEDIUM
- 20 mesh objects in 4x5 grid
- Camera orbit animation
- Multiple geometry types

**Special Considerations:**
- ParametricGeometry from addons
- Texture loading for materials
- Grid layout positioning

### 4. webgl_lights_spotlight

**Source:** [VERIFIED: threejs.org/examples]

**Three.js Classes Used:**
- `THREE.WebGLRenderer`, `THREE.Scene`, `THREE.PerspectiveCamera`
- `THREE.HemisphereLight`, `THREE.SpotLight`
- `THREE.SpotLightHelper`, `THREE.CameraHelper`
- `THREE.PlaneGeometry`, `THREE.MeshLambertMaterial`, `THREE.Mesh`
- `THREE.TextureLoader`

**Addons:**
- `GUI` from lil-gui
- `PLYLoader`
- `OrbitControls`

**Complexity:** MEDIUM
- SpotLight configuration (angle, penumbra, decay, distance)
- Shadow mapping
- Light helper visualization
- GUI controls for light properties
- Orbiting light animation

**Special Considerations:**
- PLYLoader for model
- GUI integration for interactive controls
- Shadow configuration

### 5. webgl_loader_gltf

**Source:** [VERIFIED: threejs.org/examples]

**Three.js Classes Used:**
- `THREE.PerspectiveCamera`, `THREE.Scene`, `THREE.Timer`
- `THREE.WebGLRenderer`, `THREE.OrbitControls`
- `THREE.Box3`, `THREE.Vector3`
- `THREE.AnimationMixer`
- `THREE.ACESFilmicToneMapping`

**Addons:**
- `OrbitControls`
- `GLTFLoader`
- `UltraHDRLoader`
- `GUI` from lil-gui

**Complexity:** MEDIUM-HIGH
- HDR environment loading
- Model list from JSON
- Shader compilation
- Bounding box camera fitting
- Animation playback

**Special Considerations:**
- UltraHDRLoader for HDR environments
- Dynamic model loading
- fitCameraToSelection utility

### 6. webgl_interactive_cubes

**Source:** [VERIFIED: threejs.org/examples]

**Three.js Classes Used:**
- `THREE.PerspectiveCamera`, `THREE.Scene`, `THREE.DirectionalLight`
- `THREE.BoxGeometry`, `THREE.Mesh`, `THREE.MeshLambertMaterial`
- `THREE.Raycaster`, `THREE.WebGLRenderer`, `THREE.Vector2`
- `THREE.Color`, `THREE.MathUtils`

**Complexity:** MEDIUM
- 2000 randomly positioned cubes
- Raycasting for hover detection
- Camera orbit animation
- Emissive color highlighting

**Special Considerations:**
- Raycaster setup
- Mouse event handling
- Intersection testing

### 7. webgl_simple_gi

**Source:** [VERIFIED: threejs.org/examples]

**Three.js Classes Used:**
- `THREE.PerspectiveCamera`, `THREE.Scene`, `THREE.WebGLRenderer`
- `THREE.TorusKnotGeometry`, `THREE.Mesh`
- `THREE.BoxGeometry`
- Custom `GIMesh` class
- Custom `SimpleGI` function

**Addons:**
- `OrbitControls`

**Complexity:** HIGH
- Custom GI implementation
- Cube map rendering from vertices
- Vertex color baking
- Multi-bounce GI calculation

**Special Considerations:**
- Custom render pipeline
- Per-vertex GI computation
- 3 bounces, 32 vertices per frame

### 8-10. Additional Pilot Examples

**webgl_animation_basic:** Not found at threejs.org - may need alternative or removal from list.

**webgl_materials:** Not found at threejs.org - may need alternative or removal from list.

**webgl_lights_pointlights:** Not found at threejs.org - may need alternative or removal from list.

**Recommendation:** Replace missing examples with verified alternatives:
- `webgl_animation_multiple` - Multiple animation clips
- `webgl_materials_variations` - Material property variations
- `webgl_lights_hemisphere` - Hemisphere light example

## Sources

### Primary (HIGH confidence)
- threejs.org/examples - verified example existence and structure
- GitHub three.js repository - source code analysis
- code/lib/three/createElement.tsx - JSX factory implementation
- code/lib/hooks/useThree.tsx - context hook implementation

### Secondary (MEDIUM confidence)
- readme.md - Fat Lines example pattern
- test/jsx.test.tsx - JSX pipeline test patterns
- memory/feedback_sample_migration.md - migration lessons learned

### Tertiary (LOW confidence)
- WebFetch results for pilot examples - some examples not found, need verification

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - verified in package.json and codebase
- Architecture: HIGH - documented in .planning/codebase/ARCHITECTURE.md
- Pitfalls: HIGH - documented in memory files and test patterns
- Pilot examples: MEDIUM - some examples not found at expected URLs

**Research date:** 2026-05-06
**Valid until:** 30 days (stable Three.js API, Woby workspace may change)
