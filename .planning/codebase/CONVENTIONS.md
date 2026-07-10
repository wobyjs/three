# Coding Conventions

**Analysis Date:** 2026-05-06

## Naming Patterns

**Files:**
- Source files: PascalCase for class wrappers (`Mesh.ts`, `BoxGeometry.ts`, `Scene.ts`)
- Test files: camelCase with `.test.ts` or `.test.tsx` suffix (`three.test.ts`, `jsx.test.tsx`)
- Configuration: lowercase with dots (`tsconfig.json`, `package.json`)
- JSX pragma files: lowercase (`jsx.tsx`, `createElement.tsx`)

**Functions:**
- Factory functions: camelCase (`createElement`, `fixReactiveProps`, `setNestedValue`)
- Helper functions: camelCase (`makeCtx`, `withCtx`, `tick`)
- Test functions: lowercase `test` function defined inline in test files

**Variables:**
- Observables: camelCase with `$()` creation (`posX`, `shadow`, `sceneRef`)
- Registry objects: camelCase (`consParams`, `objProps`, `defaults`, `Three`)
- Constants: camelCase or UPPER_CASE for well-known values (`html`, `SYMBOL_CLONE`)

**Types:**
- Props types: PascalCase with `Props` suffix (`MeshProps`, `BoxGeometryProps`, `SceneProps`)
- Node types: PascalCase with `Node` suffix (`Object3DNode`, `BufferGeometryNode`)
- Interface extensions: PascalCase (`consParams`, `objProps`, `defaults` as interfaces)

## JSX Element Naming

**Intrinsic elements use camelCase:**
```tsx
<mesh />
<scene />
<boxGeometry args={[1, 1, 1]} />
<meshStandardMaterial color="red" />
<ambientLight intensity={0.5} />
```

**Alternative three- prefix (kebab-case):**
```tsx
<three-mesh />
<three-box-geometry />
<three-mesh-standard-material />
```

**Custom elements registered via `customElements.define`:**
- Pattern: `three-{kebab-case-name}` (e.g., `three-box-geometry`)
- Conversion: `three-webgl-renderer` -> `WebGLRenderer` (strip prefix, PascalCase)

## Code Style

**Formatting:**
- No dedicated formatter config (no `.prettierrc` detected)
- TypeScript strict mode enabled in `tsconfig.json`
- LF line endings enforced (`"newLine": "lf"`)

**Linting:**
- No ESLint config at project root
- Relies on TypeScript compiler for type checking

**Key TypeScript settings (`tsconfig.json`):**
```json
{
  "strict": true,
  "noImplicitReturns": true,
  "noImplicitThis": true,
  "noUnusedLocals": false,
  "noUnusedParameters": false,
  "strictNullChecks": false,
  "noImplicitAny": false
}
```

## Import Organization

**Order:**
1. Setup imports (must be first in test files): `import './setup'`
2. Registry seeds: `import './registry-seeds'`
3. Parent wrapper imports (before children): `import '../code/src/core/Object3D'`
4. Three.js imports: `import { Mesh, BoxGeometry } from 'three'`
5. Woby imports: `import { $, $$, useRoot, context } from 'woby'`
6. Internal utilities: `import { createElement } from '../code/lib/three/createElement'`
7. Node.js built-ins: `import { strictEqual, ok } from 'node:assert/strict'`

**Path Aliases:**
- `@woby/three/jsx-runtime` -> `code/lib/jsx/runtime.tsx`
- Source imports use relative paths from `code/` directory

**Module imports pattern:**
```typescript
// Side-effect imports for registration
import '../code/src/scenes/Scene'
import '../code/src/objects/Mesh'

// Named exports for usage
import { Scene } from '../../src/scenes/Scene'
export { Mesh } from 'three/src/objects/Mesh.js'
```

## Observable Patterns

**$() - Observable creation:**
```typescript
const posX = $(0)           // Creates observable with initial value 0
const sceneRef = $<Scene>(null)  // Typed observable
```

**$$() - Observable resolution:**
```typescript
const mesh = $$(meshObs)    // Resolves observable to current value
const scene = $$(sceneRef)  // Gets current Scene instance
```

**Reactive props pattern:**
```typescript
// Observable prop updates mesh.position.x reactively
const posX = $(0)
const mesh = createElement('mesh', { 'position-x': posX })
posX(99)  // Update triggers reactive change
```

**useRoot wrapper:**
```typescript
// All observable operations must be wrapped in useRoot
useRoot(() => {
    const factory = createElement('mesh', {})
    return factory()
})
```

## Error Handling

**Patterns:**
- Console errors for missing registrations: `console.error(`Three.${cname} not register`)`
- Test assertions use Node.js `assert/strict`: `strictEqual`, `ok`
- No try-catch in production code; errors propagate to caller

**Test error handling:**
```typescript
function test(name: string, fn: () => void | Promise<void>): void {
    try {
        const r = fn()
        if (r instanceof Promise) {
            asyncTests.push(r.then(...).catch(...))
        } else {
            passed++
        }
    } catch (e: any) {
        console.error(`  ✗ ${name}:`, e.message)
        failed++
    }
}
```

## Logging

**Framework:** Console-based (no dedicated logging library)

**Patterns:**
- Test output: `console.log('\nGroup name')`, `console.log(`  ✓ ${name}`)`
- Errors: `console.error(`message`)`
- Debug info: Conditional logging in development

## Comments

**When to Comment:**
- JSDoc for exported types and interfaces
- Inline comments explaining Three.js-specific patterns
- Test file headers explaining purpose and run command

**JSDoc/TSDoc:**
```typescript
/**
 * {@link BoxGeometry} is a geometry class for a rectangular cuboid
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry | Official Documentation}
 */
```

**Test file headers:**
```typescript
// Run with:  tsx test/jsx.test.tsx
// Tests the @woby/three JSX pipeline using real JSX syntax.
```

## Function Design

**Size:** Functions typically under 50 lines

**Parameters:**
- Props objects use `any` type with runtime validation
- Observable parameters wrapped in `FunctionMaybe<T>`
- Constructor params extracted via `extractProps2constructor`

**Return Values:**
- createElement returns callable factory function or Observable
- JSX elements return `JSX.Element` (function or observable)

## Module Design

**Exports:**
- Named exports for types and classes
- Side-effect imports for registry population
- Barrel files in index.ts for category exports

**Barrel Files:**
```typescript
// code/src/geometries/index.ts (commented out in code/index.ts)
export * from './BoxGeometry'
export * from './Geometries'
```

**Registry pattern:**
Each wrapper file:
1. Imports parent wrapper (for inheritance)
2. Exports Three.js class
3. Registers in `Three`, `consParams`, `objProps`, `defaults`
4. Declares JSX.IntrinsicElements types

## Demo Porting Pattern (MANDATORY)

**This section is the authoritative rule for all demo porting work. Plans created by /gsd-plan-phase MUST follow this pattern. /gsd-verify-work MUST reject demos that violate it.**

### Required Pattern: Canvas3D JSX

Every ported demo MUST use the `@woby/three` JSX pragma and Canvas3D component:

```tsx
/** @jsxImportSource @woby/three */
// One-line description

import { useEffect } from "woby"
import { ... } from "three"

import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { Event } from '@woby/three/lib/components/Event'
import { useThree } from '@woby/three/lib/hooks/useThree'

// Register intrinsics BEFORE use
import '@woby/three/src/scenes/Scene'
import '@woby/three/src/cameras/PerspectiveCamera'
import '@woby/three/src/renderers/WebGLRenderer'

export const DemoName = () => {
    return <Canvas3D>
        <webglRenderer setPixelRatio={[window.devicePixelRatio]} setSize={[window.innerWidth, window.innerHeight]} />
        <scene>
            {/* declarative children */}
        </scene>
        <perspectiveCamera args={[...]} position={[...]} />
        <Event />
    </Canvas3D>
}

export default DemoName
```

### Sub-component Pattern (for complex setup)

When a demo needs postprocessing, custom render loops, or imperative scene setup (e.g. EffectComposer, OrbitControls, loaded assets), wrap setup in a child component placed **inside** Canvas3D. This gives proper ThreeContext access via `useContext`.

```tsx
/** @jsxImportSource @woby/three */

import { useEffect } from "woby"
import { Canvas3D } from '@woby/three/lib/components/Canvas3D'
import { Event } from '@woby/three/lib/components/Event'
import { useThree } from '@woby/three/lib/hooks/useThree'

const SceneSetup = () => {
    const ctx = useThree()          // <-- has context because it IS inside Canvas3D

    useEffect(() => {
        const gl = ctx.renderers?.[0]
        const scene = ctx.scenes?.[0]
        const camera = ctx.cameras?.[0]
        if (!gl || !scene || !camera) return

        // Imperative setup: add meshes, create composer, etc.
        const mesh = new THREE.Mesh(...)
        scene.add(mesh)

        // Override default render loop
        if (ctx.frames) {
            ctx.frames.length = 0           // MUST clear to prevent double-render
            ctx.frames.push(() => {
                composer.render()
            })
        }

        return () => { scene.remove(mesh); mesh.geometry.dispose() }
    })

    return null
}

export const DemoName = () => (
    <Canvas3D>
        <webglRenderer ... />
        <scene />
        <perspectiveCamera ... />
        <SceneSetup />
        <Event />
    </Canvas3D>
)
```

### Rules (ENFORCED)

| Rule | Required | Forbidden |
|------|----------|-----------|
| JSX pragma | `/** @jsxImportSource @woby/three */` | `/** @jsxImportSource woby */` |
| Root element | `<Canvas3D>` | Raw `init3D` / container-ref pattern |
| `useThree()` location | Inside a component rendered by Canvas3D | At top level of the page component |
| `ctx.frames` override | Clear before push: `ctx.frames.length = 0; ctx.frames.push(...)` | Pushing without clearing (causes double-render) |
| Intrinsic imports | `import '@woby/three/src/...'` for every JSX element used | Skipping registration |

### /gsd-verify-work Checklist

When verifying a ported demo, confirm all of the following:

- [ ] File starts with `/** @jsxImportSource @woby/three */`
- [ ] Root JSX is `<Canvas3D>` (not a `<div ref>` container)
- [ ] Every JSX intrinsic element has a corresponding `import '@woby/three/src/...'`
- [ ] `useThree()` is called only inside a component that lives inside `<Canvas3D>`
- [ ] If `ctx.frames` is overridden, it clears before pushing: `ctx.frames.length = 0`
- [ ] Demo renders visually (screenshot via dv CLI, approval from human)
- [ ] Demo is registered in `demo/src/registry.ts` with correct snake_case id

---

*Convention analysis: 2026-05-06 | Demo porting rules added: 2026-06-24*