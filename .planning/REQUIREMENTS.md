# Requirements: Three.js Examples Port

## Functional Requirements

### FR-1: JSX Element Coverage
- **FR-1.1**: All Three.js core classes must be registerable as JSX elements
- **FR-1.2**: All jsm/addon classes must be registerable as JSX elements
- **FR-1.3**: Custom elements support `three-` prefix for disambiguation

### FR-2: Syntax Parity
- **FR-2.1**: Constructor arguments via `args` prop: `<boxGeometry args={[1,1,1]} />`
- **FR-2.2**: Property assignment via kebab-case: `<light shadow-camera-far={333} />`
- **FR-2.3**: Method calls via setter syntax: `<renderer setPixelRatio={[ratio]} />`
- **FR-2.4**: Reactive props via Woby observables: `<mesh position-x={$(0)} />`

### FR-3: Scene Graph Assembly
- **FR-3.1**: Parent-child relationships via JSX nesting
- **FR-3.2**: Automatic scene registration in ThreeContext
- **FR-3.3**: Support for conditional rendering with observables

### FR-4: Lifecycle Integration
- **FR-4.1**: `useFrame` hook for render-loop subscription
- **FR-4.2**: `useThree` hook for context access
- **FR-4.3**: Proper cleanup on component unmount

### FR-5: Example Categories
- **FR-5.1**: Port all 260 webgl examples
- **FR-5.2**: Port all 26 webgl/postprocessing examples
- **FR-5.3**: Port all 46 webgl/advanced examples
- **FR-5.4**: Port all 4 webgl/tsl examples
- **FR-5.5**: Port all 219 webgpu examples
- **FR-5.6**: Port all 4 webaudio examples
- **FR-5.7**: Port all 24 webxr examples
- **FR-5.8**: Port all 1 games example
- **FR-5.9**: Port all 13 physics examples
- **FR-5.10**: Port all 20 misc examples
- **FR-5.11**: Port all 1 css2d example
- **FR-5.12**: Port all 7 css3d examples
- **FR-5.13**: Port all 2 svg examples
- **FR-5.14**: Port all 2 tests examples

## Non-Functional Requirements

### NFR-1: Performance
- **NFR-1.1**: Ported examples must achieve comparable FPS to vanilla implementations
- **NFR-1.2**: No memory leaks from observable subscriptions
- **NFR-1.3**: Efficient reactive updates (only affected elements re-render)

### NFR-2: Code Quality
- **NFR-2.1**: No `as any` type assertions
- **NFR-2.2**: TypeScript strict mode compatible
- **NFR-2.3**: ESLint clean with project rules

### NFR-3: Testability
- **NFR-3.1**: Each ported example has unit test coverage
- **NFR-3.2**: Visual verification test suite
- **NFR-3.3**: E2E tests for critical examples

### NFR-4: Documentation
- **NFR-4.1**: Each example has JSDoc comments
- **NFR-4.2**: README with usage examples
- **NFR-4.3**: Migration guide from vanilla to JSX

## Technical Requirements

### TR-1: Dependencies
- Three.js r173+
- Woby reactive framework
- TypeScript 5.x

### TR-2: Build System
- Vite for development and build
- TypeScript declaration generation
- Tree-shaking support

### TR-3: Testing Infrastructure
- Pure TSX test runner (no vitest/jsdom)
- Playwright for E2E tests
- Visual regression capability

## Constraints

### C-1: Backward Compatibility
- Must not break existing @woby/three API
- New registrations must follow existing patterns

### C-2: Bundle Size
- Tree-shakeable exports
- No forced dependencies on unused features

### C-3: Browser Support
- Modern browsers (ES2020+)
- WebGL 2.0 support required
- WebGPU support optional (progressive enhancement)

## Out of Scope

- Three.js source code modifications
- New Three.js features not in upstream
- Server-side rendering (SSR) support
- React/Vue/Svelte integrations