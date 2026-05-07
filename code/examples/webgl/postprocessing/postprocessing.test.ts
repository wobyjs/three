// Run with: tsx code/examples/webgl/postprocessing/postprocessing.test.ts
// Tests for all postprocessing example components
import '../../../test/setup'
import '../../../test/registry-seeds'

// Import postprocessing passes for registration
import '../../jsm/postprocessing/Pass'
import '../../jsm/postprocessing/EffectComposer'
import '../../jsm/postprocessing/RenderPass'
import '../../jsm/postprocessing/ShaderPass'
import '../../jsm/postprocessing/OutputPass'
import '../../jsm/postprocessing/BloomPass'
import '../../jsm/postprocessing/UnrealBloomPass'
import '../../jsm/postprocessing/SMAAPass'
import '../../jsm/postprocessing/SSAARenderPass'
import '../../jsm/postprocessing/TAARenderPass'
import '../../jsm/postprocessing/SSAOPass'
import '../../jsm/postprocessing/GlitchPass'
import '../../jsm/postprocessing/OutlinePass'
import '../../jsm/postprocessing/AfterimagePass'
import '../../jsm/postprocessing/BokehPass'
import '../../jsm/postprocessing/ClearPass'
import '../../jsm/postprocessing/DotScreenPass'
import '../../jsm/postprocessing/FilmPass'
import '../../jsm/postprocessing/HalftonePass'
import '../../jsm/postprocessing/MaskPass'
import '../../jsm/postprocessing/SavePass'
import '../../jsm/postprocessing/SSRPass'
import '../../jsm/postprocessing/GTAOPass'
import '../../jsm/postprocessing/LUTPass'
import '../../jsm/postprocessing/TexturePass'
import '../../jsm/postprocessing/CubeTexturePass'
import '../../jsm/postprocessing/RenderPixelatedPass'
import '../../jsm/postprocessing/RenderTransitionPass'
import '../../jsm/postprocessing/SAOPass'

// Import core wrappers for registration
import '../../src/scenes/Scene'
import '../../src/objects/Mesh'
import '../../src/geometries/BoxGeometry'
import '../../src/geometries/SphereGeometry'
import '../../src/geometries/TorusGeometry'
import '../../src/geometries/TorusKnotGeometry'
import '../../src/geometries/PlaneGeometry'
import '../../src/geometries/CylinderGeometry'
import '../../src/materials/MeshStandardMaterial'
import '../../src/materials/MeshBasicMaterial'
import '../../src/materials/ShaderMaterial'
import '../../src/lights/AmbientLight'
import '../../src/lights/PointLight'
import '../../src/lights/DirectionalLight'
import '../../src/cameras/PerspectiveCamera'
import '../../src/renderers/WebGLRenderer'

import { consParams, objProps, defaults } from '../../lib/3/index'
import { Three } from '../../lib/3/three'
import { ok } from 'node:assert/strict'
import { $, $$, useRoot, context } from 'woby'
import { jsx } from '../../lib/three/jsx'
import { ThreeContext } from '../../lib/hooks/useThree'

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

function checkRegistration(name: string, threeKey: string, consKey = name, objKey = name, defKey = name) {
    test(`${name} registered in consParams`, () => ok((consParams as any)[consKey] !== undefined))
    test(`${name} registered in objProps`, () => ok((objProps as any)[objKey] !== undefined))
    test(`${name} registered in defaults`, () => ok((defaults as any)[defKey] !== undefined))
    test(`Three.${threeKey} registered`, () => ok((Three as any)[threeKey] !== undefined))
}

// ── helpers ──────────────────────────────────────────────────────────────────

const makeCtx = () => ({ frames: [], scenes: [], cameras: [], renderers: [], update: $(0) })
const threeCtxSym = (ThreeContext as any).symbol

useRoot(() => { ThreeContext.Provider({ value: makeCtx(), children: null }) })

const withCtx = <T>(ctx: ReturnType<typeof makeCtx>, fn: () => T): T => {
    let r: T
    context({ [threeCtxSym]: ctx }, () => { r = fn() })
    return r!
}

// ── Group 1: Pass Registration Tests ─────────────────────────────────────────

console.log('\nPass Registration Tests')

checkRegistration('pass', 'Pass')
test('pass objProps includes enabled/needsSwap/renderToScreen', () => {
    ok((objProps as any).pass.includes('enabled'))
    ok((objProps as any).pass.includes('needsSwap'))
    ok((objProps as any).pass.includes('renderToScreen'))
})

console.log('\nEffectComposer Registration Tests')
checkRegistration('effectComposer', 'EffectComposer')
test('effectComposer consParams includes renderer/renderTarget', () => {
    ok((consParams as any).effectComposer.includes('renderer'))
    ok((consParams as any).effectComposer.includes('renderTarget'))
})

console.log('\nRenderPass Registration Tests')
checkRegistration('renderPass', 'RenderPass')

console.log('\nShaderPass Registration Tests')
checkRegistration('shaderPass', 'ShaderPass')

console.log('\nOutputPass Registration Tests')
checkRegistration('outputPass', 'OutputPass')

console.log('\nSMAAPass Registration Tests')
checkRegistration('smaaPass', 'SMAAPass')

console.log('\nTAARenderPass Registration Tests')
checkRegistration('taaRenderPass', 'TAARenderPass')

console.log('\nSSAARenderPass Registration Tests')
checkRegistration('ssaaRenderPass', 'SSAARenderPass')

console.log('\nUnrealBloomPass Registration Tests')
checkRegistration('unrealBloomPass', 'UnrealBloomPass')

console.log('\nBloomPass Registration Tests')
checkRegistration('bloomPass', 'BloomPass')

console.log('\nSSAOPass Registration Tests')
checkRegistration('ssaoPass', 'SSAOPass')

console.log('\nGlitchPass Registration Tests')
checkRegistration('glitchPass', 'GlitchPass')

console.log('\nOutlinePass Registration Tests')
checkRegistration('outlinePass', 'OutlinePass')

// ── Group 2: Example Component Tests ────────────────────────────────────────

console.log('\nExample Component Tests')

// Test that each example component exports a callable function
const examples = ['Basic', 'Bloom', 'SSAO', 'DOF', 'Glitch', 'Pixel', 'Outline', 'SSR', 'GodRays', 'Advanced', 'Masking', 'SMAA', 'FXAA', 'TAA', 'Procedural']

examples.forEach(name => {
    test(`${name} example module exists`, async () => {
        const mod = await import(`./${name}`)
        ok(mod[name] !== undefined || mod.default !== undefined)
    })
})

// ── Group 3: JSX Element Tests ──────────────────────────────────────────────

console.log('\nJSX Element Tests')

test('<effectComposer> returns callable element', () => {
    const el = jsx('effectComposer', {} as any)
    ok(typeof el === 'function')
})

test('<renderPass> returns callable element', () => {
    const el = jsx('renderPass', {} as any)
    ok(typeof el === 'function')
})

test('<shaderPass> returns callable element', () => {
    const el = jsx('shaderPass', { shader: {} } as any)
    ok(typeof el === 'function')
})

test('<smaaPass> returns callable element', () => {
    const el = jsx('smaaPass', { args: [800, 600] } as any)
    ok(typeof el === 'function')
})

test('<taaRenderPass> returns callable element', () => {
    const ctx = makeCtx()
    let pass: any
    useRoot(() => withCtx(ctx, () => {
        const sceneF = jsx('scene', {} as any)
        const camF = jsx('perspectiveCamera', {} as any)
        pass = jsx('taaRenderPass', { scene: sceneF, camera: camF } as any)
    }))
    ok(typeof pass === 'function')
})

test('<unrealBloomPass> returns callable element', () => {
    const el = jsx('unrealBloomPass', { args: [new Three.Vector2(800, 600)] } as any)
    ok(typeof el === 'function')
})

test('<ssaoPass> returns callable element', () => {
    const ctx = makeCtx()
    let pass: any
    useRoot(() => withCtx(ctx, () => {
        const sceneF = jsx('scene', {} as any)
        const camF = jsx('perspectiveCamera', {} as any)
        pass = jsx('ssaoPass', { args: [sceneF, camF, 800, 600] } as any)
    }))
    ok(typeof pass === 'function')
})

// ── Group 4: Pass Chain Tests ───────────────────────────────────────────────

console.log('\nPass Chain Tests')

test('EffectComposer can be created with renderer', () => {
    const ctx = makeCtx()
    let composer: any
    useRoot(() => withCtx(ctx, () => {
        const rendererF = jsx('webGLRenderer', {} as any)
        composer = jsx('effectComposer', { args: [rendererF] } as any)
    }))
    ok(typeof composer === 'function')
})

test('RenderPass requires scene and camera', () => {
    const ctx = makeCtx()
    let pass: any
    useRoot(() => withCtx(ctx, () => {
        const sceneF = jsx('scene', {} as any)
        const camF = jsx('perspectiveCamera', {} as any)
        pass = jsx('renderPass', { args: [sceneF, camF] } as any)
    }))
    ok(typeof pass === 'function')
})

// ── summary ──────────────────────────────────────────────────────────────────

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
