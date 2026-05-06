# @woby/three Examples Port Project

## Project Overview

Convert/port all 629 Three.js examples from https://threejs.org/examples/ from vanilla JavaScript syntax to JSX syntax using @woby/three's declarative component system.

## Goal

Enable developers to write Three.js scenes declaratively using JSX syntax instead of imperative vanilla JavaScript, making 3D graphics more accessible and maintainable in Woby applications.

## Scope

### Categories to Port (Total: 629 examples)

| Category | Count | Priority |
|----------|-------|----------|
| webgl | 260 | High |
| webgl / postprocessing | 26 | High |
| webgl / advanced | 46 | Medium |
| webgl / tsl | 4 | Medium |
| webgpu (wip) | 219 | Medium |
| webaudio | 4 | Low |
| webxr | 24 | High |
| games | 1 | Low |
| physics | 13 | Medium |
| misc | 20 | Medium |
| css2d | 1 | Low |
| css3d | 7 | Low |
| svg | 2 | Low |
| tests | 2 | Low |

## Approach

- **Phased execution**: Port examples incrementally with full test coverage per phase
- **Dual output**: Both library components and demo showcase components
- **Quality gates**: Each phase includes verification before proceeding

## Success Criteria

1. All 629 examples ported to JSX syntax
2. Each ported example has corresponding test coverage
3. Demo showcase at three-demo.web.app displays all ported examples
4. Library components are reusable and documented
5. Performance parity with vanilla Three.js implementations

## Technical Context

### Existing Architecture

- **JSX Runtime**: `code/lib/jsx/runtime.tsx` - handles element creation
- **Three Registration**: `code/lib/3/three.ts` - registers Three.js classes as JSX elements
- **Constructor Params**: `code/lib/3/consParams.ts` - defines constructor parameter names
- **Object Props**: `code/lib/3/objProps.ts` - defines property setter names
- **Defaults**: `code/lib/3/defaults.tsx` - default values for elements
- **Hooks**: `code/lib/hooks/` - useFrame, useThree, useCamera, useRenderer, etc.
- **Components**: `code/lib/components/Canvas3D.tsx` - main canvas component

### JSX Syntax Mapping

```ts
// Vanilla Three.js
const box = new THREE.BoxGeometry(1, 1, 1)
const light = new THREE.PointLight(0xff0000, 1, 100)
light.shadow.camera.far = 333

// @woby/three JSX
const boxDom = <boxGeometry args={[1, 1, 1]} />
const lightDom = <pointLight position={[0, 5, 0]} intensity={10} castShadow shadow-camera-far={333} />
```

### Key Patterns

- `$vs$$`: `$()` creates observable, `$$()` unwraps value
- Kebab props: `shadow-camera-far` maps to `shadow.camera.far`
- Setter calls: `setPixelRatio={[window.devicePixelRatio]}` calls method with args
- `args` prop: Constructor arguments passed as array
- Reactive props: Pass observable for dynamic values

## Constraints

- Must maintain compatibility with Three.js r173+
- Must work with Woby reactive system
- Cannot use `as any` type assertions (per feedback memory)
- Must visually verify each ported example works correctly

## Dependencies

- three: ^0.173.0
- woby: workspace
- @woby/use: workspace
- @types/three: ^0.173.0

## Timeline Estimate

- Phase 1 (Foundation): 1-2 weeks
- Phase 2-5 (Core WebGL): 4-6 weeks per phase
- Phase 6-8 (WebGPU/WebXR): 3-4 weeks per phase
- Phase 9-12 (Remaining): 2-3 weeks per phase
- Total estimate: 30-40 weeks for full completion

## Related Projects

- [three-demo](https://github.com/wobyjs/three-demo) - Demo showcase repository
- [three-demo.web.app](https://three-demo.web.app/) - Live demo site