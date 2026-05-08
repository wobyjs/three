// @jsx _h
// @jsxFrag _Fragment
// Run with:  tsx test/jsx.test.tsx
// Tests the @woby/three JSX pipeline using real JSX syntax.
// Core purpose of @woby/three: assembling Three.js scene graphs via <mesh>, <scene>, etc.
//
// Pragmas above route JSX to _h (defined below), which delegates to the actual
// jsx() function from @woby/three after setup has run. Classic JSX transform
// passes null for empty props — _h normalises that to {} and folds children
// extra-args back into props.children, matching the automatic-runtime shape.
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
import { jsx as _jsxFn } from '../code/lib/three/jsx'
import { ThreeContext } from '../code/lib/hooks/useThree'

// Classic JSX transform: <X a={1}><Y /></X> → _h('X', {a:1}, _h('Y', null))
// We normalise null props → {} and lift extra children into props.children.
const _h = (component: any, props: any, ...children: any[]) => {
    const p: any = props ?? {}
    if (children.length === 1) p.children = children[0]
    else if (children.length > 1) p.children = children
    return _jsxFn(component, p, undefined)
}
const _Fragment = ({ children }: any) => children

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
useRoot(() => { ThreeContext.Provider({ value: makeCtx(), children: null }) })

// Run fn synchronously with ThreeContext provided
const withCtx = <T,>(ctx: ReturnType<typeof makeCtx>, fn: () => T): T => {
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

// ── Group 6: Real JSX syntax — basic elements ────────────────────────────────

console.log('\nReal JSX syntax — basic elements')

test('<mesh /> returns a callable element', () => {
    // @ts-ignore
    const el = <mesh />
    ok(typeof el === 'function')
})

test('<mesh />() returns Mesh (isMesh=true)', () => {
    // @ts-ignore
    const mesh = useRoot(() => (<mesh /> as any)())
    ok((mesh as any).isMesh === true)
})

test('<mesh castShadow /> applies castShadow=true', () => {
    // @ts-ignore
    const mesh = useRoot(() => (<mesh castShadow /> as any)())
    ok((mesh as any).isMesh === true)
    strictEqual(mesh.castShadow, true)
})

test('<boxGeometry args={[2,3,4]} /> creates BoxGeometry with dimensions', () => {
    // @ts-ignore
    const geo = useRoot(() => (<boxGeometry args={[2, 3, 4]} /> as any)())
    strictEqual((geo as any).type, 'BoxGeometry')
    strictEqual((geo as any).parameters.width, 2)
    strictEqual((geo as any).parameters.height, 3)
    strictEqual((geo as any).parameters.depth, 4)
})

test('<meshStandardMaterial /> creates MeshStandardMaterial', () => {
    // @ts-ignore
    const mat = useRoot(() => (<meshStandardMaterial /> as any)())
    strictEqual((mat as any).type, 'MeshStandardMaterial')
})

test('<mesh position-x={10} /> sets position.x', () => {
    // @ts-ignore
    const mesh = useRoot(() => (<mesh position-x={10} /> as any)())
    strictEqual(mesh.position.x, 10)
})

test('<mesh geometry={geo} /> applies geometry instance', () => {
    const geo = new BoxGeometry(5, 5, 5)
    // @ts-ignore
    const mesh = useRoot(() => (<mesh geometry={geo} /> as any)())
    ok(mesh.geometry === geo)
    strictEqual((mesh.geometry as any).parameters.width, 5)
})

// ── Group 7: Scene graph assembly with ThreeContext ──────────────────────────

console.log('\nScene graph assembly with ThreeContext')

test('<scene /> creates Scene (isScene=true)', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        // @ts-ignore
        scene = (<scene /> as any)()
    }))
    ok(scene?.isScene === true)
})

test('<scene /> registers scene in ctx.scenes', () => {
    const ctx = makeCtx()
    useRoot(() => withCtx(ctx, () => {
        // @ts-ignore
        ;(<scene /> as any)()
    }))
    strictEqual(ctx.scenes.length, 1)
    ok((ctx.scenes[0] as any).isScene === true)
})

test('<scene><mesh /></scene> adds mesh as child', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        // @ts-ignore
        const meshF = <mesh />
        // @ts-ignore
        scene = (<scene>{meshF}</scene> as any)()
    }))
    ok(scene?.isScene === true)
    strictEqual(scene.children.length, 1)
    ok((scene.children[0] as any).isMesh === true)
})

test('<scene> with three mesh children', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        // @ts-ignore
        const m1 = <mesh name="a" />
        // @ts-ignore
        const m2 = <mesh name="b" />
        // @ts-ignore
        const m3 = <mesh name="c" />
        // @ts-ignore
        scene = (<scene>{m1}{m2}{m3}</scene> as any)()
    }))
    strictEqual(scene.children.length, 3)
    strictEqual(scene.children[0].name, 'a')
    strictEqual(scene.children[1].name, 'b')
    strictEqual(scene.children[2].name, 'c')
})

test('<mesh castShadow position-x={3} /> props preserved in scene', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        // @ts-ignore
        const meshF = <mesh castShadow position-x={3} />
        // @ts-ignore
        scene = (<scene>{meshF}</scene> as any)()
    }))
    const mesh = scene.children[0]
    strictEqual(mesh.castShadow, true)
    strictEqual(mesh.position.x, 3)
})

test('<ambientLight intensity={0.5} /> child in scene', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        // @ts-ignore
        const lightF = <ambientLight intensity={0.5} />
        // @ts-ignore
        scene = (<scene>{lightF}</scene> as any)()
    }))
    strictEqual(scene.children.length, 1)
    strictEqual(scene.children[0].type, 'AmbientLight')
    strictEqual(scene.children[0].intensity, 0.5)
})

test('<pointLight intensity={2} /> child in scene', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        // @ts-ignore
        const lightF = <pointLight intensity={2} />
        // @ts-ignore
        scene = (<scene>{lightF}</scene> as any)()
    }))
    strictEqual(scene.children.length, 1)
    strictEqual(scene.children[0].type, 'PointLight')
})

test('<scene> with mixed mesh and light children', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        // @ts-ignore
        const meshF = <mesh />
        // @ts-ignore
        const lightF = <ambientLight />
        // @ts-ignore
        scene = (<scene>{meshF}{lightF}</scene> as any)()
    }))
    strictEqual(scene.children.length, 2)
    ok(scene.children.some((c: any) => c.isMesh === true))
    ok(scene.children.some((c: any) => c.type === 'AmbientLight'))
})

// ── Group 8: Nested JSX scene graph ─────────────────────────────────────────

console.log('\nNested JSX scene graph')

test('<mesh geometry={geo} /> in scene has geometry', () => {
    const ctx = makeCtx()
    let scene: any
    const geo = new BoxGeometry(2, 2, 2)
    useRoot(() => withCtx(ctx, () => {
        // @ts-ignore
        const meshF = <mesh geometry={geo} />
        // @ts-ignore
        scene = (<scene>{meshF}</scene> as any)()
    }))
    const mesh = scene.children[0]
    ok(mesh.geometry === geo)
    strictEqual((mesh.geometry as any).parameters.width, 2)
})

test('<mesh material={mat} /> in scene has material', () => {
    const ctx = makeCtx()
    let scene: any
    const mat = new MeshStandardMaterial({ color: 0x00ff00 })
    useRoot(() => withCtx(ctx, () => {
        // @ts-ignore
        const meshF = <mesh material={mat} />
        // @ts-ignore
        scene = (<scene>{meshF}</scene> as any)()
    }))
    ok(scene.children[0].material === mat)
})

test('<scene> with lights + mesh assembly', () => {
    const ctx = makeCtx()
    let scene: any
    useRoot(() => withCtx(ctx, () => {
        // @ts-ignore
        const ambF  = <ambientLight intensity={1} />
        // @ts-ignore
        const ptF   = <pointLight position-y={2} />
        // @ts-ignore
        const meshF = <mesh castShadow />
        // @ts-ignore
        scene = (<scene>{ambF}{ptF}{meshF}</scene> as any)()
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
// Geometry/material as JSX children trigger createElement's reactive path:
// extractProps2constructor matches children to constructor params by component name,
// track() wraps them as reactive props → useMemo → Observable r=$() that resolves
// asynchronously via useEffect. Tests await ~100ms for the effect to fire.
//
// IMPORTANT: Both <boxGeometry> AND <meshStandardMaterial> must be provided as
// children. A single child leaves one constructor slot undefined; isNullR() returns
// true for the resulting [value, undefined] array and the effect exits early.

console.log('\nJSX children syntax (<mesh><geometry /><material /></mesh>)')

const tick = (ms = 100) => new Promise<void>(res => setTimeout(res, ms))

test('<mesh><boxGeometry args={[2,3,4]} /><meshStandardMaterial /></mesh>', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        // @ts-ignore
        meshObs = <mesh><boxGeometry args={[2, 3, 4]} /><meshStandardMaterial /></mesh>
    }))
    await tick()
    const mesh = $$(meshObs) as any
    ok(mesh?.isMesh === true)
    strictEqual(mesh.geometry?.type, 'BoxGeometry')
    strictEqual(mesh.geometry.parameters.width,  2)
    strictEqual(mesh.geometry.parameters.height, 3)
    strictEqual(mesh.geometry.parameters.depth,  4)
    strictEqual(mesh.material?.type, 'MeshStandardMaterial')
})

test('<mesh><boxGeometry /><meshStandardMaterial /></mesh> both children set', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        // @ts-ignore
        meshObs = <mesh><boxGeometry args={[1, 2, 3]} /><meshStandardMaterial /></mesh>
    }))
    await tick()
    const mesh = $$(meshObs) as any
    ok(mesh?.isMesh === true)
    strictEqual(mesh.geometry?.type, 'BoxGeometry')
    strictEqual(mesh.geometry.parameters.width, 1)
    strictEqual(mesh.material?.type, 'MeshStandardMaterial')
})

test('<mesh castShadow position-x={4}> with both children', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        // @ts-ignore
        meshObs = <mesh castShadow position-x={4}><boxGeometry args={[5, 5, 5]} /><meshStandardMaterial /></mesh>
    }))
    await tick()
    const mesh = $$(meshObs) as any
    ok(mesh?.isMesh === true)
    strictEqual(mesh.castShadow, true)
    strictEqual(mesh.position.x, 4)
    strictEqual(mesh.geometry?.type, 'BoxGeometry')
    strictEqual(mesh.material?.type, 'MeshStandardMaterial')
})

test('<mesh><boxGeometry /><meshStandardMaterial color={0xff0000} /></mesh>', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        // @ts-ignore
        meshObs = <mesh><boxGeometry /><meshStandardMaterial color={0xff0000} /></mesh>
    }))
    await tick()
    const mesh = $$(meshObs) as any
    ok(mesh?.isMesh === true)
    strictEqual(mesh.material?.type, 'MeshStandardMaterial')
    const c = mesh.material.color
    strictEqual(Math.round(c.r), 1)
    strictEqual(Math.round(c.g), 0)
    strictEqual(Math.round(c.b), 0)
})

test('<mesh><boxGeometry /><meshStandardMaterial roughness={0.3} metalness={0.7} /></mesh>', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        // @ts-ignore
        meshObs = <mesh><boxGeometry /><meshStandardMaterial roughness={0.3} metalness={0.7} /></mesh>
    }))
    await tick()
    const mesh = $$(meshObs) as any
    ok(mesh?.isMesh === true)
    const mat = mesh.material
    ok(Math.abs(mat.roughness - 0.3) < 0.001)
    ok(Math.abs(mat.metalness - 0.7) < 0.001)
})

test('<mesh><boxGeometry /><meshStandardMaterial /></mesh> default BoxGeometry dims', async () => {
    let meshObs: any
    useRoot(() => withCtx(makeCtx(), () => {
        // @ts-ignore
        meshObs = <mesh><boxGeometry /><meshStandardMaterial /></mesh>
    }))
    await tick()
    const mesh = $$(meshObs) as any
    ok(mesh?.isMesh === true)
    strictEqual(mesh.geometry?.type, 'BoxGeometry')
    strictEqual(mesh.geometry.parameters.width,  1)
    strictEqual(mesh.geometry.parameters.height, 1)
    strictEqual(mesh.geometry.parameters.depth,  1)
})

// ── summary ──────────────────────────────────────────────────────────────────

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    process.exit(failed > 0 ? 1 : 0)
})
