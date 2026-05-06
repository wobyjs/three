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

---

*Convention analysis: 2026-05-06*