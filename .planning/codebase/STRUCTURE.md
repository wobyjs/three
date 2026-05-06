# Codebase Structure

**Analysis Date:** 2026-05-06

## Directory Layout

```
D:\Developments\tslib\@woby\three/
├── code/                    # Source code
│   ├── lib/                 # Core library implementation
│   ├── src/                 # Three.js source class wrappers
│   ├── examples/jsm/        # JSM addon wrappers
│   ├── three-types.ts       # TypeScript type definitions
│   ├── index.ts             # Main entry point
│   └── 3.ts                 # Re-export of registration system
├── test/                    # Test files
├── demo/                    # Demo application
├── lib/                     # Built output (dist)
├── dist/                    # Built output
└── .planning/               # Planning documents
```

## Directory Purposes

**`code/lib/`:**
- Purpose: Core library implementation
- Contains: JSX runtime, createElement, hooks, components, registration system
- Key files: `index.tsx`, `three/createElement.tsx`, `hooks/useThree.tsx`, `components/Canvas3D.tsx`

**`code/lib/3/`:**
- Purpose: Registration system for Three.js class metadata
- Contains: Global registries and parameter utilities
- Key files: `three.ts`, `consParams.ts`, `objProps.ts`, `defaults.tsx`, `useParams.tsx`

**`code/lib/three/`:**
- Purpose: Core Three.js integration logic
- Contains: createElement, prop extraction, instance creation, reactive binding
- Key files: `createElement.tsx`, `extractProps2constructor.tsx`, `getInstance.tsx`, `fixReactiveProps.tsx`, `track.tsx`

**`code/lib/hooks/`:**
- Purpose: React-like hooks for Three.js context
- Contains: useThree, useFrame, useLoader, useCamera, useRenderer, useScene
- Key files: `useThree.tsx`, `useFrame.tsx`, `index.tsx`

**`code/lib/components/`:**
- Purpose: High-level components
- Contains: Canvas3D, Frame, Event handling, utilities
- Key files: `Canvas3D.tsx`, `Frame.tsx`, `add2parent.tsx`, `resolveChild.tsx`

**`code/lib/jsx/`:**
- Purpose: JSX runtime for build tools
- Contains: jsx, jsxs, jsxDEV, render, Fragment exports
- Key files: `runtime.tsx`, `jsx-runtime.tsx`, `jsx-dev-runtime.tsx`

**`code/src/`:**
- Purpose: Three.js core class wrappers
- Contains: Wrappers for geometries, materials, lights, cameras, objects, etc.
- Key files: `index.ts`, `geometries/Geometries.ts`, `core/Object3D.ts`, `materials/Materials.ts`

**`code/examples/jsm/`:**
- Purpose: Three.js JSM addon wrappers
- Contains: Wrappers for controls, loaders, postprocessing, effects, etc.
- Key files: `controls/OrbitControls.ts`, `postprocessing/*.ts`, `geometries/*.ts`

**`code/src/core/`:**
- Purpose: Core Three.js class wrappers (Object3D, BufferGeometry, etc.)
- Contains: Base class wrappers with property definitions
- Key files: `Object3D.ts`, `BufferGeometryNode.ts`

**`code/src/geometries/`:**
- Purpose: Geometry class wrappers
- Contains: BoxGeometry, SphereGeometry, PlaneGeometry, etc.
- Key files: `BoxGeometry.ts`, `Geometries.ts` (barrel export)

**`code/src/materials/`:**
- Purpose: Material class wrappers
- Contains: MeshStandardMaterial, MeshBasicMaterial, etc.
- Key files: `Materials.ts` (barrel export)

**`test/`:**
- Purpose: Test files
- Contains: Unit tests for JSX pipeline, geometries, controls, etc.
- Key files: `jsx.test.tsx`, `geometries.test.ts`, `setup.ts`, `registry-seeds.ts`

## Key File Locations

**Entry Points:**
- `code/index.ts`: Main package entry, re-exports from lib
- `code/3.ts`: Re-exports `lib/3/three` for registration access
- `code/lib/index.tsx`: Core library entry, exports all public APIs
- `code/lib/jsx/runtime.tsx`: JSX runtime for automatic transform

**Configuration:**
- `tsconfig.json`: TypeScript configuration
- `package.json`: Package metadata and exports
- `vite.config.mts`: Build configuration

**Core Logic:**
- `code/lib/three/createElement.tsx`: JSX element factory (279 lines)
- `code/lib/three/extractProps2constructor.tsx`: Constructor param extraction (174 lines)
- `code/lib/three/getInstance.tsx`: Instance creation (101 lines)
- `code/lib/three/fixReactiveProps.tsx`: Reactive prop binding (172 lines)
- `code/lib/three/track.tsx`: Deep observable tracking (123 lines)

**Registration:**
- `code/lib/3/three.ts`: Three.js class registry
- `code/lib/3/consParams.ts`: Constructor parameter registry
- `code/lib/3/objProps.ts`: Object property registry
- `code/lib/3/defaults.tsx`: Default values registry
- `code/lib/3/useParams.tsx`: Unified parameter access (45 lines)

**Types:**
- `code/three-types.ts`: TypeScript types for JSX elements (1139 lines)
- `code/src/core/BufferGeometryNode.ts`: BufferGeometry node type

**Testing:**
- `test/jsx.test.tsx`: JSX pipeline tests
- `test/setup.ts`: Test environment setup
- `test/registry-seeds.ts`: Seed registrations for tests

## Naming Conventions

**Files:**
- PascalCase for class wrappers: `BoxGeometry.ts`, `Object3D.ts`
- camelCase for utilities: `createElement.tsx`, `fixReactiveProps.tsx`
- kebab-case for custom elements: `three-box-geometry` in JSX

**Directories:**
- camelCase: `geometries/`, `materials/`, `postprocessing/`
- Abbreviations: `jsm/` (JavaScript Modules), `csm/` (Cascaded Shadow Maps)

**Generated/Registration Files:**
- `code/3.ts`: Short alias for registration exports
- `code/lib/3/`: Registration system directory

## Where to Add New Code

**New Three.js Core Class Wrapper:**
1. Create wrapper in appropriate `code/src/` subdirectory
2. Import Three.js class from `three/src/...`
3. Register in `Three` object: `Three.ClassName = ClassName`
4. Define `consParams[className]` with constructor param names
5. Define `objProps[className]` with settable property names
6. Define `defaults[className]` with default values
7. Declare JSX intrinsic element in `woby` namespace

**Example - Adding a new geometry:**
```typescript
// code/src/geometries/CustomGeometry.ts
import { CustomGeometry } from 'three/src/geometries/CustomGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

Three.CustomGeometry = CustomGeometry

consParams.customGeometry = ['param1', 'param2']
objProps.customGeometry = [...objProps.bufferGeometry]
defaults.customGeometry = { param1: 1, param2: 1 }

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            customGeometry: CustomGeometryProps
        }
    }
}
```

**New JSM Addon Wrapper:**
- Location: `code/examples/jsm/<category>/<AddonName>.ts`
- Pattern: Same as core class, import from `three/examples/jsm/...`

**New Hook:**
- Location: `code/lib/hooks/use<Name>.tsx`
- Export from: `code/lib/hooks/index.tsx`

**New Component:**
- Location: `code/lib/components/<Name>.tsx`
- Export from: `code/lib/components/index.ts`

**New Utility:**
- Location: `code/lib/utils.ts` (add to existing file)
- Or create new file in `code/lib/` for larger utilities

## Special Directories

**`code/lib/3/`:**
- Purpose: Registration system (Three, consParams, objProps, defaults)
- Generated: No (hand-written registries)
- Committed: Yes

**`dist/`:**
- Purpose: Built output
- Generated: Yes (by build process)
- Committed: No (in .gitignore)

**`lib/` (root level):**
- Purpose: Built output copy
- Generated: Yes
- Committed: No

**`demo/`:**
- Purpose: Demo application
- Contains: Example scenes and components
- Committed: Yes

**`test/`:**
- Purpose: Test files
- Contains: Unit tests using Node.js assert
- Committed: Yes

## Import Patterns

**Importing the library:**
```typescript
import { Canvas3D, useFrame, useThree } from '@woby/three'
```

**Using JSX:**
```tsx
/** @jsxImportSource @woby/three */
import { Canvas3D } from '@woby/three'

<Canvas3D>
  <mesh>
    <boxGeometry />
    <meshStandardMaterial color="red" />
  </mesh>
</Canvas3D>
```

**Registering a class:**
```typescript
import './code/src/geometries/BoxGeometry'  // Side effect import registers class
```

---

*Structure analysis: 2026-05-06*
