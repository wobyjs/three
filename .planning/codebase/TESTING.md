# Testing Patterns

**Analysis Date:** 2026-05-06

## Test Framework

**Runner:**
- Pure TSX test runner (no vitest/jsdom per memory)
- `tsx` CLI executes test files directly
- Node.js `assert/strict` for assertions

**Assertion Library:**
- `node:assert/strict` - `strictEqual`, `ok`, `deepStrictEqual`

**Run Commands:**
```bash
tsx test/three.test.ts              # Single test file
tsx test/jsx.test.tsx               # JSX test file
pnpm test                           # All unit tests (14 files)
pnpm test:e2e                       # Playwright E2E tests
pnpm test:ui                        # Playwright UI mode
pnpm test:report                    # Playwright report viewer
```

## Test File Organization

**Location:**
- Unit tests: `test/*.test.ts` and `test/*.test.tsx` (co-located in `test/` directory)
- Check tests: `test1/*.chk.test.ts` and `test1/*.chk.test.tsx`
- Demo tests: `demo/test/**/*.test.tsx`
- E2E tests: `playwright.test/tests/*.test.ts` and `playwright.test/tests/*.test.tsx`

**Naming:**
- Pattern: `{category}.test.ts` for unit tests
- Pattern: `{name}.chk.test.ts` for check tests
- Pattern: `{name}.test.tsx` for JSX tests

**Structure:**
```
test/
├── setup.ts              # Global setup (must be first import)
├── registry-seeds.ts     # Registry seeding
├── three.test.ts         # Core Three.js tests
├── jsx.test.ts           # JSX runtime tests (programmatic)
├── jsx.test.tsx          # JSX syntax tests (real JSX)
├── geometries.test.ts    # Geometry registration tests
├── controls.test.ts      # Controls tests
├── effects.test.ts       # Effects tests
├── postprocessing.test.ts # Post-processing tests
├── objects.test.ts       # Object tests
├── helpers.test.ts       # Helper tests
├── loaders.test.ts       # Loader tests
├── math.test.ts          # Math tests
├── lines.test.ts         # Line tests
├── misc.test.ts          # Misc tests
├── modifiers.test.ts     # Modifier tests
├── renderers.test.ts     # Renderer tests
```

## Test Structure

**Suite Organization:**
```typescript
// test/jsx.test.ts pattern
let passed = 0
let failed = 0
const asyncTests: Promise<void>[] = []

function test(name: string, fn: () => void | Promise<void>): void {
    try {
        const r = fn()
        if (r instanceof Promise) {
            asyncTests.push(r
                .then(() => { console.log(`  ✓ ${name}`); passed++ })
                .catch((e: any) => { console.error(`  ✗ ${name}:`, e.message); failed++ }))
        } else {
            console.log(`  ✓ ${name}`)
            passed++
        }
    } catch (e: any) {
        console.error(`  ✗ ${name}:`, e.message)
        failed++
    }
}

// Group tests by category
console.log('\ncreateElement factory')
test('factory is a function', () => { ... })

console.log('\nProps applied via createElement')
test('castShadow=true applied to mesh', () => { ... })

// Summary at end
Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
```

**Patterns:**
- Setup: `import './setup'` MUST be first import
- Registry seeding: `import './registry-seeds'` after setup
- Wrapper imports: Parent wrappers before children
- Helpers defined inline: `makeCtx`, `withCtx`, `tick`
- Async tests collected in array, awaited at end

## Setup Pattern

**Global setup (`test/setup.ts`):**
```typescript
// Must be the first import in any test file.
// Sets up globals before woby/three modules load.

;(globalThis as any).isDeno = true
;(globalThis as any).window = globalThis

if (!globalThis.location)
    Object.defineProperty(globalThis, 'location', {
        value: { href: 'http://localhost', origin: 'http://localhost' },
        writable: true,
        configurable: true,
    })

// Timing shims required by woby effects
;(globalThis as any).requestAnimationFrame ??= (cb: Function) => setTimeout(cb, 0)
;(globalThis as any).cancelAnimationFrame ??= clearTimeout
;(globalThis as any).dispatchEvent ??= () => true

// Three.js source files check instanceof HTMLElement
if (typeof HTMLElement === 'undefined')
    (globalThis as any).HTMLElement = class HTMLElement {}
```

**Registry seeding (`test/registry-seeds.ts`):**
```typescript
// Shared parent registry seeds — import BEFORE wrapper files
import '../code/src/core/Object3D'
import '../code/src/core/BufferGeometry'
import '../code/src/objects/Mesh'

import { objProps, consParams } from '../code/lib/3/index'

// Seed entries for wrapper registries
;(objProps as any).line ??= []
;(objProps as any).lineSegments ??= []
;(consParams as any).materialParameters ??= {}
```

## Mocking

**Framework:** No dedicated mocking framework

**Patterns:**
- Context mocking: Create fake context objects
```typescript
const makeCtx = () => ({
    frames: [],
    scenes: [],
    cameras: [],
    renderers: [],
    update: $(0)
})
```

- ThreeContext seeding:
```typescript
useRoot(() => { ThreeContext.Provider({ value: makeCtx(), children: null }) })
```

- Context injection:
```typescript
const withCtx = <T,>(ctx: ReturnType<typeof makeCtx>, fn: () => T): T => {
    let r: T
    context({ [threeCtxSym]: ctx }, () => { r = fn() })
    return r!
}
```

**What to Mock:**
- ThreeContext for scene graph assembly tests
- Global environment (window, requestAnimationFrame, HTMLElement)

**What NOT to Mock:**
- Three.js classes (use real instances)
- Woby observables (use real `$()` and `$$()`)

## Fixtures and Factories

**Test Data:**
```typescript
// Create real Three.js instances
const geo = new BoxGeometry(2, 3, 4)
const mat = new MeshStandardMaterial({ color: 0xff0000 })

// Observable fixtures
const posX = $(0)
const shadow = $(false)
```

**Location:**
- Inline in test files (no separate fixture directory)
- Helper functions create fresh instances per test

## Coverage

**Requirements:** None enforced

**Coverage approach:**
- Registration tests verify all wrappers are registered
- JSX tests cover createElement, jsx(), and real JSX syntax
- Props tests cover kebab props, observable props, direct props

## Test Types

**Unit Tests:**
- Scope: Individual function/class behavior
- Approach: Direct function calls with assertions
- Files: `test/*.test.ts`

**JSX Tests:**
- Scope: JSX pipeline (createElement, jsx runtime)
- Approach: Both programmatic `jsx()` calls and real JSX syntax
- Files: `test/jsx.test.ts` (programmatic), `test/jsx.test.tsx` (real JSX)

**Registration Tests:**
- Scope: Verify Three.js wrappers are registered
- Pattern: `checkRegistration(name, threeKey, consKey, objKey, defKey)`
- Files: `test/geometries.test.ts`, `test/controls.test.ts`, etc.

**E2E Tests:**
- Framework: Playwright
- Scope: Browser rendering verification
- Files: `playwright.test/tests/*.test.ts`

## Common Patterns

**Async Testing:**
```typescript
test('observable position-x updates reactively', async () => {
    const posX = $(0)
    const mesh = useRoot(() => createElement('mesh', { 'position-x': posX }))
    strictEqual(mesh.position.x, 0)

    return new Promise<void>((resolve, reject) => {
        setTimeout(() => { posX(99) }, 10)
        setTimeout(() => {
            try { strictEqual(mesh.position.x, 99); resolve() }
            catch (e) { reject(e) }
        }, 60)
    })
})
```

**Tick helper for async:**
```typescript
const tick = (ms = 100) => new Promise<void>(res => setTimeout(res, ms))

test('<mesh> with geometry child', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        meshObs = <mesh><boxGeometry args={[2,3,4]} /></mesh>
    }))
    await tick()
    const mesh = $$(meshObs)
    strictEqual(mesh.geometry?.type, 'BoxGeometry')
})
```

**Error Testing:**
```typescript
test('Three.${cname} not register error', () => {
    // Console.error is called, but test continues
    const factory = createElement('unknownElement', {})
    // No throw - returns fallback
})
```

**Registration check pattern:**
```typescript
function checkRegistration(name: string, threeKey: string, consKey = name, objKey = name, defKey = name) {
    test(`${name} registered in consParams`, () => ok((consParams as any)[consKey] !== undefined))
    test(`${name} registered in objProps`, () => ok((objProps as any)[objKey] !== undefined))
    test(`${name} registered in defaults`, () => ok((defaults as any)[defKey] !== undefined))
    test(`Three.${threeKey} registered`, () => ok((Three as any)[threeKey] !== undefined))
}
```

## E2E Testing (Playwright)

**Framework:** Playwright

**Config:** `playwright.config.ts` (not present - uses defaults)

**Test pattern:**
```typescript
import { test, expect } from '@playwright/test'

test('verify Canvas3D instance', async ({ page }) => {
    await page.setContent('<div id="root"></div>')
    await page.addScriptTag({ path: '../../woby/dist/woby.umd.cjs' })
    await page.addScriptTag({ path: '../../three/dist/woby3.umd.js' })

    const result = await page.evaluate(async () => {
        const woby = (window as any).woby
        const { jsx, render } = woby

        const canvasComponent = jsx('Canvas3D', {
            children: [jsx('scene', {})]
        })

        render(canvasComponent, document.getElementById('root'))
        return { success: true, hasCanvasElement: ... }
    })

    expect(result.success).toBe(true)
})
```

## Test Count Summary

**Unit tests:** 14 test files covering:
- Core Three.js functionality
- JSX pipeline (createElement, jsx)
- Geometry registration
- Controls, effects, postprocessing
- Objects, helpers, loaders
- Math, lines, misc, modifiers
- Renderers

**Check tests:** 6 files in `test1/` (placeholder tests)

**Demo tests:** 10 geometry tests in `demo/test/geometries/`

**E2E tests:** 4 Playwright tests in `playwright.test/tests/`

---

*Testing analysis: 2026-05-06*