# Technology Stack

**Analysis Date:** 2026-05-06

## Languages

**Primary:**
- TypeScript - Core library implementation in `code/` directory
- TSX (TypeScript JSX) - Component files with `.tsx` extension for JSX integration

**Secondary:**
- JavaScript - Some example files in `code/examples/jsm/` (legacy Three.js examples ported)

## Runtime

**Environment:**
- Node.js - Build tooling and test execution
- Browser - Runtime target for Three.js rendering

**Package Manager:**
- pnpm - Package manager (pnpm-lock.yaml present)
- Workspace configuration with local dependencies

## Frameworks

**Core:**
- Three.js ^0.173.0 - 3D graphics library (peer dependency)
- woby (workspace:../woby) - Reactive UI framework (peer dependency)
- @woby/use (workspace:../use) - Woby utility hooks (peer dependency)

**Testing:**
- Node.js assert - Unit testing with `node:assert/strict`
- tsx - TypeScript test runner for unit tests
- @playwright/test ^1.56.1 - E2E browser testing

**Build/Dev:**
- Vite ^6.1.0 - Primary build tool and dev server
- vite-plugin-dts ^4.5.0 - TypeScript declaration generation
- @rollup/plugin-alias ^5.1.1 - Path alias resolution in builds
- TypeScript - Type checking and declaration emission

**Styling:**
- Tailwind CSS ^4.0.17 - CSS framework
- @tailwindcss/vite ^4.0.6 - Vite integration
- @tailwindcss/postcss ^4.1.18 - PostCSS integration
- autoprefixer ^10.4.20 - CSS vendor prefixes
- postcss ^8.5.6 - CSS processing

## Key Dependencies

**Critical:**
- three ^0.173.0 - 3D rendering engine (peer dependency)
- @types/three ^0.173.0 - TypeScript definitions for Three.js (peer dependency)
- woby - Reactive observable-based UI framework (peer dependency, workspace)
- @woby/use - Utility functions for woby (peer dependency, workspace)

**Infrastructure:**
- @three.ez/batched-mesh-extensions ^0.0.11 - Extended mesh batching
- @three.ez/simplify-geometry ^0.0.1 - Geometry simplification utilities
- three-mesh-bvh ^0.9.9 - Bounding Volume Hierarchy for meshes
- madge ^8.0.0 - Dependency graph analysis (dev tool)

## Configuration

**Environment:**
- TypeScript strict mode enabled (with some relaxations: `noImplicitAny: false`, `strictNullChecks: false`)
- JSX transform: `react-jsx` with `jsxImportSource: woby`
- ESNext module and target

**Build:**
- `tsconfig.json` - TypeScript configuration
- `vite.config.mts` - ES module build output
- `vite.config.umd.mts` - UMD build output for browser/CDN

**Exports:**
- ES module: `./dist/index.es.js`
- UMD: `./dist/woby3.umd.js` (browser, unpkg, jsdelivr)
- JSX Runtime: `./dist/jsx-runtime.es.js`, `./dist/jsx-dev-runtime.es.js`
- Types: `./lib/index.d.ts`

## Platform Requirements

**Development:**
- Node.js with pnpm
- Modern browser with WebGL support

**Production:**
- Browser environment with WebGL support
- ES modules or UMD bundle support

## NPM Scripts

**Build:**
- `pnpm build` - Full build (clean, ES, UMD)
- `pnpm build:es` - ES module build via Vite
- `pnpm build:umd` - UMD bundle build via Vite
- `pnpm declaration` - Generate TypeScript declarations
- `pnpm watch` - Watch mode for Vite build

**Development:**
- `pnpm dev` - Start Vite dev server on port 5173

**Testing:**
- `pnpm test` - Run unit tests via tsx (14 test files)
- `pnpm test:e2e` - Run Playwright E2E tests
- `pnpm test:ui` - Playwright test UI mode
- `pnpm test:report` - View Playwright test report

**Release:**
- `pnpm release` - Commit, bump version, and publish to npm
- `pnpm bump` - Increment patch version
- `pnpm npmjs` - Publish to npm registry

---

*Stack analysis: 2026-05-06*