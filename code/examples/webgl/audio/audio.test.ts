// Run with: tsx code/examples/webgl/audio/audio.test.ts
// Tests for all audio example components
import '../../../../test/setup'
import '../../../../test/registry-seeds'

// Import audio wrappers for registration
import '../../../src/audio/AudioListener'
import '../../../src/audio/PositionalAudio'
import '../../../src/audio/AudioAnalyser'
import '../../../src/audio/Audio'

// Import core wrappers for registration
import '../../../src/scenes/Scene'
import '../../../src/objects/Mesh'
import '../../../src/geometries/BoxGeometry'
import '../../../src/geometries/SphereGeometry'
import '../../../src/materials/MeshStandardMaterial'
import '../../../src/materials/MeshBasicMaterial'
import '../../../src/lights/AmbientLight'
import '../../../src/lights/PointLight'
import '../../../src/lights/DirectionalLight'
import '../../../src/cameras/PerspectiveCamera'
import '../../../src/renderers/WebGLRenderer'

import { consParams, objProps, defaults } from '../../../lib/3/index'
import { Three } from '../../../lib/3/three'
import { ok } from 'node:assert/strict'
import { $, $$, useRoot, context } from 'woby'
import { jsx } from '../../../lib/three/jsx'
import { ThreeContext } from '../../../lib/hooks/useThree'

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

// ── Group 1: Audio Class Registration Tests ───────────────────────────────────

console.log('\nAudioListener Registration Tests')
checkRegistration('audioListener', 'AudioListener')

console.log('\nPositionalAudio Registration Tests')
checkRegistration('positionalAudio', 'PositionalAudio')

console.log('\nAudioAnalyser Registration Tests')
checkRegistration('audioAnalyser', 'AudioAnalyser')

console.log('\nAudio Registration Tests')
checkRegistration('audio', 'Audio')

// ── Group 2: Example Component Tests ────────────────────────────────────────

console.log('\nExample Component Tests')

// Test that each example component exports a callable function
const examples = ['AudioOrientation', 'AudioSandbox', 'AudioTiming', 'AudioVisualizer']

examples.forEach(name => {
    test(`${name} example module exists`, async () => {
        const mod = await import(`./${name}`)
        ok(mod[name] !== undefined || mod.default !== undefined)
    })
})

// ── Group 3: JSX Element Tests ──────────────────────────────────────────────

console.log('\nJSX Element Tests')

test('<audioListener> returns callable element', () => {
    const el = jsx('audioListener', {} as any)
    ok(typeof el === 'function')
})

test('<positionalAudio> returns callable element', () => {
    const el = jsx('positionalAudio', {} as any)
    ok(typeof el === 'function')
})

test('<audioAnalyser> returns callable element', () => {
    const el = jsx('audioAnalyser', {} as any)
    ok(typeof el === 'function')
})

test('<audio> returns callable element', () => {
    const el = jsx('audio', {} as any)
    ok(typeof el === 'function')
})

// ── Group 4: Audio Integration Tests ────────────────────────────────────────

console.log('\nAudio Integration Tests')

test('AudioListener can be created with camera', () => {
    const ctx = makeCtx()
    let listener: any
    useRoot(() => withCtx(ctx, () => {
        const camF = jsx('perspectiveCamera', {} as any)
        listener = jsx('audioListener', {} as any)
    }))
    ok(typeof listener === 'function')
})

test('PositionalAudio can be created with listener', () => {
    const ctx = makeCtx()
    let sound: any
    useRoot(() => withCtx(ctx, () => {
        const listenerF = jsx('audioListener', {} as any)
        sound = jsx('positionalAudio', { args: [listenerF] } as any)
    }))
    ok(typeof sound === 'function')
})

test('AudioAnalyser can be created with audio', () => {
    const ctx = makeCtx()
    let analyser: any
    useRoot(() => withCtx(ctx, () => {
        const listenerF = jsx('audioListener', {} as any)
        const audioF = jsx('audio', { args: [listenerF] } as any)
        analyser = jsx('audioAnalyser', { args: [audioF, 256] } as any)
    }))
    ok(typeof analyser === 'function')
})

// ── Group 5: Audio Properties Tests ─────────────────────────────────────────

console.log('\nAudio Properties Tests')

test('audioListener objProps includes volume', () => {
    ok((objProps as any).audioListener.includes('volume'))
})

test('positionalAudio objProps includes refDistance/maxDistance', () => {
    ok((objProps as any).positionalAudio.includes('refDistance'))
    ok((objProps as any).positionalAudio.includes('maxDistance'))
})

test('positionalAudio objProps includes panningModel/distanceModel', () => {
    ok((objProps as any).positionalAudio.includes('panningModel'))
    ok((objProps as any).positionalAudio.includes('distanceModel'))
})

test('audio objProps includes loop/autoplay', () => {
    ok((objProps as any).audio.includes('loop'))
    ok((objProps as any).audio.includes('autoplay'))
})

// ── summary ──────────────────────────────────────────────────────────────────

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
