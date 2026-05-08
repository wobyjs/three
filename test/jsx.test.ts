// Run with:  tsx test/jsx.test.ts
// Tests the three-jsx JSX pipeline: createElement/jsx factory, props, nested scene graphs.
// This is the core purpose of @woby/three — assembling Three.js scene graphs via JSX syntax.
import './setup'
import './registry-seeds'

// Register Three.js wrappers (parent wrappers must precede children)
import '../code/src/scenes/Scene'
import '../code/src/objects/Mesh'
import '../code/src/geometries/BoxGeometry'
import '../code/src/materials/MeshStandardMaterial'
import '../code/src/lights/AmbientLight'
import '../code/src/lights/PointLight'

import { strictEqual, ok } from 'node:assert/strict'
import { BoxGeometry, MeshStandardMaterial } from 'three'
import { $, $$, useRoot, context } from 'woby'
import { createElement } from '../code/lib/three/createElement'
import { jsx } from '../code/lib/three/jsx'
import { ThreeContext } from '../code/lib/hooks/useThree'

// ── test runner ──────────────────────────────────────────────────────────────

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

// ── helpers ──────────────────────────────────────────────────────────────────

const makeCtx = () => ({ frames: [], scenes: [], cameras: [], renderers: [], update: $(0) })
const threeCtxSym = (ThreeContext as any).symbol

// Seed CONTEXTS_DATA so useContext(ThreeContext) can find the symbol.
// ThreeContext.Provider populates the internal CONTEXTS_DATA map on first call.
// After this seeding call, context({ [threeCtxSym]: val }, fn) makes useContext work.
useRoot(() => { ThreeContext.Provider({ value: makeCtx(), children: null }) })

// Shorthand: run fn synchronously with ThreeContext provided
const withCtx = <T>(ctx: ReturnType<typeof makeCtx>, fn: () => T): T => {
    let r: T
    context({ [threeCtxSym]: ctx }, () => { r = fn() })
    return r!
}

// ── Group 1: createElement returns a callable factory ────────────────────────

console.log('\ncreateElement factory')

test('factory is a function', () => {
    const factory = useRoot(() => createElement('mesh' as any, {} as any))
    ok(typeof factory === 'function')
})

test('factory() returns a Mesh (isMesh=true)', () => {
    const mesh = useRoot(() => {
        const f = createElement('mesh' as any, {} as any)
        return (f as Function)()
    })
    ok((mesh as any).isMesh === true)
})

test('factory() for boxGeometry returns BoxGeometry', () => {
    const geo = useRoot(() => {
        const f = createElement('boxGeometry' as any, {} as any)
        return (f as Function)()
    })
    strictEqual((geo as any).type, 'BoxGeometry')
})

test('factory() for meshStandardMaterial returns MeshStandardMaterial', () => {
    const mat = useRoot(() => {
        const f = createElement('meshStandardMaterial' as any, {} as any)
        return (f as Function)()
    })
    strictEqual((mat as any).type, 'MeshStandardMaterial')
})

// ── Group 2: Props applied via createElement ─────────────────────────────────

console.log('\nProps applied via createElement')

test('castShadow=true applied to mesh', () => {
    const mesh = useRoot(() => {
        const f = createElement('mesh' as any, { castShadow: true } as any)
        return (f as Function)()
    })
    strictEqual(mesh.castShadow, true)
})

test('visible=false applied to mesh', () => {
    const mesh = useRoot(() => {
        const f = createElement('mesh' as any, { visible: false } as any)
        return (f as Function)()
    })
    strictEqual(mesh.visible, false)
})

test('name prop applied to mesh', () => {
    const mesh = useRoot(() => {
        const f = createElement('mesh' as any, { name: 'testMesh' } as any)
        return (f as Function)()
    })
    strictEqual(mesh.name, 'testMesh')
})

test('geometry prop (instance) applied to mesh', () => {
    const geo = new BoxGeometry(2, 3, 4)
    const mesh = useRoot(() => {
        const f = createElement('mesh' as any, { geometry: geo } as any)
        return (f as Function)()
    })
    ok(mesh.geometry === geo)
})

test('material prop (instance) applied to mesh', () => {
    const mat = new MeshStandardMaterial({ color: 0xff0000 })
    const mesh = useRoot(() => {
        const f = createElement('mesh' as any, { material: mat } as any)
        return (f as Function)()
    })
    ok(mesh.material === mat)
})

// ── Group 3: Kebab props (nested property paths) ─────────────────────────────

console.log('\nKebab props (nested property paths)')

test('position-x prop sets mesh.position.x', () => {
    const mesh = useRoot(() => (createElement('mesh' as any, { 'position-x': 7 } as any) as Function)())
    strictEqual(mesh.position.x, 7)
})

test('position-y prop sets mesh.position.y', () => {
    const mesh = useRoot(() => (createElement('mesh' as any, { 'position-y': -3 } as any) as Function)())
    strictEqual(mesh.position.y, -3)
})

test('position-z prop sets mesh.position.z', () => {
    const mesh = useRoot(() => (createElement('mesh' as any, { 'position-z': 5 } as any) as Function)())
    strictEqual(mesh.position.z, 5)
})

test('scale-x prop sets mesh.scale.x', () => {
    const mesh = useRoot(() => (createElement('mesh' as any, { 'scale-x': 2.5 } as any) as Function)())
    strictEqual(mesh.scale.x, 2.5)
})

test('rotation-z prop sets mesh.rotation.z', () => {
    const mesh = useRoot(() => (createElement('mesh' as any, { 'rotation-z': Math.PI } as any) as Function)())
    strictEqual(mesh.rotation.z, Math.PI)
})

// ── Group 4: Observable/reactive props ──────────────────────────────────────

console.log('\nObservable props (reactive updates)')

test('observable position-x updates mesh.position.x reactively', async () => {
    const posX = $(0)
    const mesh = useRoot(() => (createElement('mesh' as any, { 'position-x': posX } as any) as Function)())
    strictEqual(mesh.position.x, 0)
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => { posX(99) }, 10)
        setTimeout(() => {
            try { strictEqual(mesh.position.x, 99); resolve() }
            catch (e) { reject(e) }
        }, 60)
    })
})

test('observable castShadow updates mesh reactively', async () => {
    const shadow = $(false)
    const mesh = useRoot(() => (createElement('mesh' as any, { castShadow: shadow } as any) as Function)())
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => { shadow(true) }, 10)
        setTimeout(() => {
            try { strictEqual(mesh.castShadow, true); resolve() }
            catch (e) { reject(e) }
        }, 60)
    })
})

// ── Group 5: three- prefix custom element names ──────────────────────────────

console.log('\nthree- prefix custom element names')

test('three-mesh creates Mesh (isMesh=true)', () => {
    const mesh = useRoot(() => (createElement('three-mesh' as any, {} as any) as Function)())
    ok((mesh as any).isMesh === true)
})

test('three-box-geometry creates BoxGeometry', () => {
    const geo = useRoot(() => (createElement('three-box-geometry' as any, {} as any) as Function)())
    strictEqual((geo as any).type, 'BoxGeometry')
})

test('three-mesh-standard-material creates MeshStandardMaterial', () => {
    const mat = useRoot(() => (createElement('three-mesh-standard-material' as any, {} as any) as Function)())
    strictEqual((mat as any).type, 'MeshStandardMaterial')
})

// ── Group 6: jsx() runtime (simulates JSX compilation) ──────────────────────

console.log('\njsx() runtime (simulates JSX compilation)')

test('jsx(mesh) returns a callable element', () => {
    const el = jsx('mesh', {} as any)
    ok(typeof el === 'function')
})

test('jsx(mesh)() returns Mesh (isMesh=true)', () => {
    const mesh = useRoot(() => (jsx('mesh', {} as any) as Function)())
    ok((mesh as any).isMesh === true)
})

test('jsx(mesh) with castShadow=true', () => {
    const mesh = useRoot(() => (jsx('mesh', { castShadow: true } as any) as Function)())
    ok((mesh as any).isMesh === true)
    strictEqual(mesh.castShadow, true)
})

test('jsx(boxGeometry) with args=[2,3,4]', () => {
    const geo = useRoot(() => (jsx('boxGeometry', { args: [2, 3, 4] } as any) as Function)())
    strictEqual((geo as any).type, 'BoxGeometry')
    strictEqual((geo as any).parameters.width, 2)
    strictEqual((geo as any).parameters.height, 3)
    strictEqual((geo as any).parameters.depth, 4)
})

test('jsx(meshStandardMaterial)() returns MeshStandardMaterial', () => {
    const mat = useRoot(() => (jsx('meshStandardMaterial', {} as any) as Function)())
    strictEqual((mat as any).type, 'MeshStandardMaterial')
})

test('jsx(mesh) with position-x=10', () => {
    const mesh = useRoot(() => (jsx('mesh', { 'position-x': 10 } as any) as Function)())
    strictEqual(mesh.position.x, 10)
})

test('jsx(mesh) with geometry instance prop', () => {
    const geo = new BoxGeometry(5, 5, 5)
    const mesh = useRoot(() => (jsx('mesh', { geometry: geo } as any) as Function)())
    ok(mesh.geometry === geo)
    strictEqual((mesh.geometry as any).parameters.width, 5)
})

// ── Group 7: Scene graph assembly (needs ThreeContext) ───────────────────────

console.log('\nScene graph assembly with ThreeContext')

test('jsx(scene) creates Scene (isScene=true)', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        scene = (jsx('scene', {} as any) as Function)()
    }))
    ok(scene?.isScene === true)
})

test('jsx(scene) registers scene in ctx.scenes', () => {
    const ctx = makeCtx()
    useRoot(() => withCtx(ctx, () => {
        ;(jsx('scene', {} as any) as Function)()
    }))
    strictEqual(ctx.scenes.length, 1)
    ok((ctx.scenes[0] as any).isScene === true)
})

test('mesh added to scene as JSX child', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        const meshF = jsx('mesh', {} as any)
        const sceneF = jsx('scene', { children: [meshF] } as any)
        scene = (sceneF as Function)()
    }))
    ok(scene?.isScene === true)
    strictEqual(scene.children.length, 1)
    ok((scene.children[0] as any).isMesh === true)
})

test('multiple meshes added to scene as JSX children', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        const m1 = jsx('mesh', { name: 'a' } as any)
        const m2 = jsx('mesh', { name: 'b' } as any)
        const m3 = jsx('mesh', { name: 'c' } as any)
        scene = (jsx('scene', { children: [m1, m2, m3] } as any) as Function)()
    }))
    strictEqual(scene.children.length, 3)
    strictEqual(scene.children[0].name, 'a')
    strictEqual(scene.children[1].name, 'b')
    strictEqual(scene.children[2].name, 'c')
})

test('mesh props preserved when added to scene', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        const meshF = jsx('mesh', { castShadow: true, 'position-x': 3 } as any)
        scene = (jsx('scene', { children: [meshF] } as any) as Function)()
    }))
    const mesh = scene.children[0]
    strictEqual(mesh.castShadow, true)
    strictEqual(mesh.position.x, 3)
})

test('ambientLight child with intensity=0.5', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        const lightF = jsx('ambientLight', { intensity: 0.5 } as any)
        scene = (jsx('scene', { children: [lightF] } as any) as Function)()
    }))
    strictEqual(scene.children.length, 1)
    strictEqual(scene.children[0].type, 'AmbientLight')
    strictEqual(scene.children[0].intensity, 0.5)
})

test('pointLight child added to scene', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        const lightF = jsx('pointLight', { intensity: 2 } as any)
        scene = (jsx('scene', { children: [lightF] } as any) as Function)()
    }))
    strictEqual(scene.children.length, 1)
    strictEqual(scene.children[0].type, 'PointLight')
})

test('mixed children: mesh + light', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        const meshF = jsx('mesh', {} as any)
        const lightF = jsx('ambientLight', {} as any)
        scene = (jsx('scene', { children: [meshF, lightF] } as any) as Function)()
    }))
    strictEqual(scene.children.length, 2)
    ok(scene.children.some((c: any) => c.isMesh === true))
    ok(scene.children.some((c: any) => c.type === 'AmbientLight'))
})

// ── Group 8: Nested JSX scene graph ─────────────────────────────────────────

console.log('\nNested JSX scene graph')

test('scene → mesh with geometry prop', () => {
    const ctx = makeCtx()
    let scene: any
    const geo = new BoxGeometry(2, 2, 2)
    useRoot(() => withCtx(ctx, () => {
        const meshF = jsx('mesh', { geometry: geo } as any)
        scene = (jsx('scene', { children: [meshF] } as any) as Function)()
    }))
    const mesh = scene.children[0]
    ok(mesh.geometry === geo)
    strictEqual((mesh.geometry as any).parameters.width, 2)
})

test('scene → mesh with material prop', () => {
    const ctx = makeCtx()
    let scene: any
    const mat = new MeshStandardMaterial({ color: 0x00ff00 })
    useRoot(() => withCtx(ctx, () => {
        const meshF = jsx('mesh', { material: mat } as any)
        scene = (jsx('scene', { children: [meshF] } as any) as Function)()
    }))
    ok(scene.children[0].material === mat)
})

test('scene → lights + mesh assembly', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        const ambF = jsx('ambientLight', { intensity: 1 } as any)
        const ptF = jsx('pointLight', { 'position-y': 2 } as any)
        const meshF = jsx('mesh', { castShadow: true } as any)
        scene = (jsx('scene', { children: [ambF, ptF, meshF] } as any) as Function)()
    }))
    strictEqual(scene.children.length, 3)
    const lights = scene.children.filter((c: any) => c.isLight)
    const meshes = scene.children.filter((c: any) => c.isMesh)
    strictEqual(lights.length, 2)
    strictEqual(meshes.length, 1)
    strictEqual(meshes[0].castShadow, true)
    strictEqual(scene.children[1].position.y, 2)
})

// ── Group 9: JSX children syntax — <mesh><geometry /><material /></mesh> ─────
//
// When geometry/material are passed as JSX children (not direct props), the jsx()
// function uses wrapCloneElement so extractProps2constructor can match children to
// constructor params by component name (e.g. boxGeometry → 'geometry').
// The constructor-param array then contains reactive function props, so track()
// returns a useMemo, which triggers createElement's reactive path: it returns an
// Observable r=$() that is resolved asynchronously via useEffect.
// Tests therefore await ~100ms for the effect to fire.

console.log('\nJSX children syntax (<mesh><geometry /><material /></mesh>)')

const tick = (ms = 100) => new Promise<void>(res => setTimeout(res, ms))

test('<mesh> with <boxGeometry args=[2,3,4]> child sets geometry', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        const geoF  = jsx('boxGeometry', { args: [2, 3, 4] } as any)
        meshObs = jsx('mesh', { children: [geoF] } as any)
    }))
    await tick()
    const mesh = $$(meshObs) as any
    ok(mesh?.isMesh === true)
    strictEqual(mesh.geometry?.type, 'BoxGeometry')
    strictEqual(mesh.geometry.parameters.width,  2)
    strictEqual(mesh.geometry.parameters.height, 3)
    strictEqual(mesh.geometry.parameters.depth,  4)
})

test('<mesh> with <meshStandardMaterial> child sets material', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        const matF = jsx('meshStandardMaterial', {} as any)
        meshObs = jsx('mesh', { children: [matF] } as any)
    }))
    await tick()
    const mesh = $$(meshObs) as any
    ok(mesh?.isMesh === true)
    strictEqual(mesh.material?.type, 'MeshStandardMaterial')
})

test('<mesh> with both <boxGeometry> and <meshStandardMaterial> children', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        const geoF = jsx('boxGeometry', { args: [1, 2, 3] } as any)
        const matF = jsx('meshStandardMaterial', {} as any)
        meshObs = jsx('mesh', { children: [geoF, matF] } as any)
    }))
    await tick()
    const mesh = $$(meshObs) as any
    ok(mesh?.isMesh === true)
    strictEqual(mesh.geometry?.type, 'BoxGeometry')
    strictEqual(mesh.geometry.parameters.width, 1)
    strictEqual(mesh.material?.type, 'MeshStandardMaterial')
})

test('<mesh> children: castShadow + position-x props also applied', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        const geoF = jsx('boxGeometry', { args: [5, 5, 5] } as any)
        meshObs = jsx('mesh', { castShadow: true, 'position-x': 4, children: [geoF] } as any)
    }))
    await tick()
    const mesh = $$(meshObs) as any
    ok(mesh?.isMesh === true)
    strictEqual(mesh.castShadow, true)
    strictEqual(mesh.position.x, 4)
    strictEqual(mesh.geometry?.type, 'BoxGeometry')
})

test('<mesh> children: material color is set', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        const matF = jsx('meshStandardMaterial', { color: 0xff0000 } as any)
        meshObs = jsx('mesh', { children: [matF] } as any)
    }))
    await tick()
    const mesh = $$(meshObs) as any
    strictEqual(mesh.material?.type, 'MeshStandardMaterial')
    // color 0xff0000 → r=1 g=0 b=0
    const c = mesh.material.color
    strictEqual(Math.round(c.r), 1)
    strictEqual(Math.round(c.g), 0)
    strictEqual(Math.round(c.b), 0)
})

test('<mesh> children: meshStandardMaterial with roughness/metalness', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        const matF = jsx('meshStandardMaterial', { roughness: 0.3, metalness: 0.7 } as any)
        meshObs = jsx('mesh', { children: [matF] } as any)
    }))
    await tick()
    const mesh = $$(meshObs) as any
    const mat = mesh.material
    ok(Math.abs(mat.roughness - 0.3) < 0.001)
    ok(Math.abs(mat.metalness - 0.7) < 0.001)
})

test('<mesh> children: default BoxGeometry (no args) has width=1', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        const geoF = jsx('boxGeometry', {} as any)
        meshObs = jsx('mesh', { children: [geoF] } as any)
    }))
    await tick()
    const mesh = $$(meshObs) as any
    strictEqual(mesh.geometry?.type, 'BoxGeometry')
    strictEqual(mesh.geometry.parameters.width,  1)
    strictEqual(mesh.geometry.parameters.height, 1)
    strictEqual(mesh.geometry.parameters.depth,  1)
})

// ── summary ──────────────────────────────────────────────────────────────────

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
