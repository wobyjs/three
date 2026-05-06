# External Integrations

**Analysis Date:** 2026-05-06

## APIs & External Services

**3D Graphics Engine:**
- Three.js - Core 3D rendering library
  - SDK/Client: `three` npm package
  - Types: `@types/three`
  - Usage: Direct imports from `three` and `three/src/*` paths
  - Integration: Wraps Three.js classes as reactive Woby components

**Physics Extensions:**
- Rapier Physics - Physics engine integration (`code/examples/jsm/physics/RapierPhysics.js x`)
- Jolt Physics - Alternative physics engine (`code/examples/jsm/physics/JoltPhysics.js x`)

## Data Storage

**Databases:**
- None - Client-side rendering library

**File Storage:**
- Browser localStorage/sessionStorage - For any client-side state
- No server-side storage

**Caching:**
- Browser memory - Three.js object caching
- No external caching service

## Authentication & Identity

**Auth Provider:**
- None - This is a UI component library, no authentication

## Monitoring & Observability

**Error Tracking:**
- None configured

**Logs:**
- Console logging during development
- No production logging service

## CI/CD & Deployment

**Hosting:**
- npm registry - Package distribution
- CDN delivery via unpkg and jsdelivr

**CI Pipeline:**
- None detected in repository

**Build Process:**
- Vite for bundling
- TypeScript for type checking and declaration generation

## Workspace Dependencies

**Monorepo Structure:**
- `woby` (workspace:../woby) - Reactive UI framework
  - Provides: `$`, `$$`, `createContext`, `useContext`, `Observable`, JSX runtime
  - Integration: Core reactivity system for Three.js component wrappers
- `@woby/use` (workspace:../use) - Woby utility hooks
  - Provides: `assign` and other utility functions
  - Integration: Used in loaders and reactive property handling

## NPM Package Exports

**Main Entry Points:**
- `.` - Main library export
- `./jsx-runtime` - JSX runtime for Woby Three components
- `./jsx-dev-runtime` - JSX dev runtime
- `./examples/fonts/*` - Font assets
- `./examples/jsm/*` - Three.js examples/addons
- `./addons` - Alias to examples/jsm/Addons.js
- `./addons/*` - Alias to examples/jsm/*
- `./src/*` - Source files
- `./lib/*` - Library files
- `./3` - Three.js core export
- `./nodes` - Node-based material system

## Three.js Module Integration

**Core Imports:**
- `three` - Main Three.js module
- `three/src/*` - Tree-shakeable source imports
- `three/examples/jsm/*` - Examples and addons

**Custom Wrappers:**
- `code/src/` - Woby-wrapped Three.js core classes
- `code/examples/jsm/` - Woby-wrapped Three.js examples/addons
- `code/lib/` - Main library components (Canvas3D, hooks, JSX runtime)

**Integration Pattern:**
1. Import Three.js class
2. Create reactive wrapper with Woby observables
3. Register as custom element via `customElement` from woby
4. Export with type definitions for JSX

## Environment Configuration

**Required env vars:**
- None - Pure client-side library

**Secrets location:**
- Not applicable - No secrets required

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

## Browser APIs Used

**WebGL:**
- WebGLRenderingContext / WebGL2RenderingContext - 3D rendering

**DOM:**
- HTMLCanvasElement - Render target
- HTMLDivElement - Container elements (Canvas3D)
- ResizeObserver - Canvas resize handling

**Events:**
- Standard DOM events for interaction
- Three.js event system for 3D object events

---

*Integration audit: 2026-05-06*