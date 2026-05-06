<!-- refreshed: 2026-05-06 -->
# Architecture

**Analysis Date:** 2026-05-06

## System Overview

```text
┌─────────────────────────────────────────────────────────────┐
│                      JSX Application Layer                   │
│         `<mesh>`, `<scene>`, `<boxGeometry>` etc.           │
├──────────────────┬──────────────────┬───────────────────────┤
│   createElement   │   Canvas3D      │    Hooks              │
│  `lib/three/      │  `lib/components│    `lib/hooks/        │
│   createElement`  │  /Canvas3D`     │    useThree,useFrame` │
└────────┬─────────┴────────┬─────────┴──────────┬────────────┘
         │                  │                     │
         ▼                  ▼                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    Registration Layer                        │
│  `lib/3/three.ts`, `lib/3/consParams.ts`, `lib/3/objProps`  │
│  Global registries: Three, consParams, objProps, defaults   │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│  Three.js Class Wrappers                                     │
│  `src/geometries/BoxGeometry.ts`, `src/core/Object3D.ts`    │
│  Register classes + define constructor params + object props │
└─────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│  Three.js Library (three npm package)                        │
│  Actual Three.js constructors and classes                    │
└─────────────────────────────────────────────────────────────┘
```

## Component Responsibilities

| Component | Responsibility | File |
|-----------|----------------|------|
| createElement | JSX element factory - creates Three.js instances from JSX | `code/lib/three/createElement.tsx` |
| Three | Global registry mapping component names to Three.js classes | `code/lib/3/three.ts` |
| consParams | Registry of constructor parameter names for each Three.js class | `code/lib/3/consParams.ts` |
| objProps | Registry of settable properties for each Three.js class | `code/lib/3/objProps.ts` |
| defaults | Registry of default values for constructor parameters | `code/lib/3/defaults.tsx` |
| Canvas3D | Root container component providing Three.js context | `code/lib/components/Canvas3D.tsx` |
| useThree | Context hook for accessing renderer/scene/camera | `code/lib/hooks/useThree.tsx` |
| useFrame | Animation frame hook for render loop | `code/lib/hooks/useFrame.tsx` |
| extractProps2constructor | Extracts constructor args from JSX props | `code/lib/three/extractProps2constructor.tsx` |
| getInstance | Creates Three.js instance and handles lifecycle | `code/lib/three/getInstance.tsx` |
| fixReactiveProps | Binds reactive props to Three.js instance properties | `code/lib/three/fixReactiveProps.tsx` |
| track | Deep tracks observables in constructor params | `code/lib/three/track.tsx` |

## Pattern Overview

**Overall:** JSX-to-Instance Factory with Reactive Bindings

**Key Characteristics:**
- Global singleton registries on `window` object for Three.js class metadata
- JSX intrinsic elements map to Three.js class constructors
- Constructor parameters extracted from JSX props using `consParams` registry
- Reactive properties tracked and bound via Woby observables
- Parent-child relationships established through `add2parent` for Object3D hierarchy

## Layers

**JSX Runtime Layer:**
- Purpose: Transform JSX syntax to Three.js instances
- Location: `code/lib/three/jsx.tsx`, `code/lib/jsx/runtime.tsx`
- Contains: `jsx()` function that wraps `createElement()`
- Depends on: createElement, Woby's wrapCloneElement
- Used by: Application code using JSX syntax

**Element Factory Layer:**
- Purpose: Create and configure Three.js instances from component props
- Location: `code/lib/three/createElement.tsx`
- Contains: Core `createElement()` function with branching logic
- Depends on: Registration layer, extractProps2constructor, getInstance
- Used by: JSX runtime

**Registration Layer:**
- Purpose: Store metadata about Three.js classes
- Location: `code/lib/3/`
- Contains: Global registries (Three, consParams, objProps, defaults)
- Depends on: Nothing (pure data stores)
- Used by: Element factory, class wrappers

**Class Wrapper Layer:**
- Purpose: Register Three.js classes with their metadata
- Location: `code/src/`, `code/examples/jsm/`
- Contains: Wrapper files that import Three.js classes and register them
- Depends on: Three.js library, registration layer
- Used by: Application imports

**Context/Hook Layer:**
- Purpose: Provide Three.js context and animation hooks
- Location: `code/lib/hooks/`, `code/lib/components/`
- Contains: Canvas3D, useThree, useFrame, useLoader, etc.
- Depends on: Woby context system
- Used by: Application components

## Data Flow

### Primary Request Path (Creating a Three.js Object)

1. JSX parsed, `jsx('mesh', props)` called (`code/lib/three/jsx.tsx:7`)
2. `createElement('mesh', props)` invoked (`code/lib/three/createElement.tsx:194`)
3. Component name normalized, lookup in `Three` registry (`code/lib/three/createElement.tsx:216`)
4. `extractProps2constructor()` extracts constructor params (`code/lib/three/extractProps2constructor.tsx:37`)
5. `track()` wraps reactive constructor params (`code/lib/three/track.tsx:122`)
6. `getInstance()` creates Three.js instance (`code/lib/three/getInstance.tsx:21`)
7. `fixReactiveProps()` binds reactive props to instance (`code/lib/three/fixReactiveProps.tsx:47`)
8. Instance returned (or factory function if reactive)

### Child Resolution Path

1. `fixReactiveProps()` processes `children` prop (`code/lib/three/fixReactiveProps.tsx:53`)
2. `add2parent()` recursively resolves children (`code/lib/components/add2parent.tsx:13`)
3. `resolveChild()` unwraps observable/function children (`code/lib/components/resolveChild.tsx`)
4. If child is Object3D, `parent.add(child)` called (`code/lib/components/add2parent.tsx:40`)

### Render Loop Path

1. Canvas3D creates context with `frames: []` (`code/lib/components/Canvas3D.tsx:97`)
2. WebGLRenderer created, `setAnimationLoop()` called (`code/lib/three/getInstance.tsx:84`)
3. Animation function iterates `frames` array (`code/lib/three/getInstance.tsx:81`)
4. Components register callbacks via `useFrame()` (`code/lib/hooks/useFrame.tsx:11`)
5. Each frame: callbacks executed, scene rendered

**State Management:**
- Woby observables (`$()`) for reactive state
- Context via `ThreeContext` for shared renderer/scene/camera
- No global state beyond registration registries

## Key Abstractions

**Three Registry:**
- Purpose: Maps component names to Three.js class constructors
- Examples: `Three.BoxGeometry`, `Three.Mesh`, `Three.Scene`
- Pattern: Global singleton on `window.__$$Three$$__`

**consParams:**
- Purpose: Defines which props become constructor arguments
- Examples: `consParams.boxGeometry = ['width', 'height', 'depth', ...]`
- Pattern: Array for positional args, object for named args

**objProps:**
- Purpose: Defines which props are settable on the instance after construction
- Examples: `objProps.object3d = ['position', 'rotation', 'scale', ...]`
- Pattern: Array of property names

**defaults:**
- Purpose: Default values for constructor parameters
- Examples: `defaults.boxGeometry = { width: 1, height: 1, depth: 1 }`
- Pattern: Object mapping param name to default value

**Node<T, P, C> Type:**
- Purpose: TypeScript type for JSX intrinsic element props
- Examples: `BoxGeometryProps`, `Object3DProps`
- Pattern: `Node<InstanceType, ConstructorType, ExtraProps>`

## Entry Points

**JSX Entry:**
- Location: `code/lib/three/jsx.tsx`
- Triggers: JSX transform (babel/swc) calls `jsx()`
- Responsibilities: Wrap createElement with Woby's wrapCloneElement

**Canvas3D Entry:**
- Location: `code/lib/components/Canvas3D.tsx`
- Triggers: Application renders `<Canvas3D>`
- Responsibilities: Create Three.js context, render container div

**Module Import Entry:**
- Location: `code/lib/index.tsx`
- Triggers: `import { ... } from '@woby/three'`
- Responsibilities: Re-export all public APIs

## Architectural Constraints

- **Threading:** Single-threaded; all Three.js operations on main thread
- **Global state:** Registration registries on `window` object (`__$$Three$$__`, `__$$consParams$$__`, etc.)
- **Circular imports:** None detected; clean layer separation
- **Browser-only:** Requires `window` and DOM APIs; no SSR support

## Anti-Patterns

### Global Window Registries

**What happens:** Three.js classes and metadata stored on `window.__$$Three$$__`, etc.
**Why it's wrong:** Pollutes global scope, makes testing harder, prevents multiple versions
**Do this instead:** Use module-level singletons or dependency injection (but current approach works for this use case)

### Implicit Registration via Import Side Effects

**What happens:** Importing `code/src/geometries/BoxGeometry` mutates global `Three` registry
**Why it's wrong:** Side effects make dependencies implicit, can cause ordering issues
**Do this instead:** Explicit registration function calls, but current pattern is common in Three.js ecosystems

### Mixed Array/Object Constructor Params

**What happens:** `consParams` can be array (positional) or object (named)
**Why it's wrong:** Increases complexity in `extractProps2constructor`
**Do this instead:** Standardize on one pattern, but Three.js classes have varying constructor signatures

## Error Handling

**Strategy:** Console errors with fallback behavior

**Patterns:**
- Unregistered component: `console.error('Three.${cname} not register')` then fall back to HTML element
- Missing consParams: `console.error('consParams.${component} not register')`
- Missing context: `console.error('Frames context not available yet')` with graceful degradation

## Cross-Cutting Concerns

**Logging:** Console.error for missing registrations; no structured logging
**Validation:** Runtime checks for registered classes; no compile-time enforcement
**Authentication:** Not applicable (client-side library)

---

*Architecture analysis: 2026-05-06*
