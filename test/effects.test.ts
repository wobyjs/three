// Run with: tsx code/test/effects.test.ts
import './setup'
import './registry-seeds'

import '../code/examples/jsm/effects/AnaglyphEffect'
import '../code/examples/jsm/effects/StereoEffect'
import '../code/examples/jsm/effects/OutlineEffect'
import '../code/examples/jsm/effects/AsciiEffect'
import '../code/examples/jsm/effects/ParallaxBarrierEffect'
import '../code/examples/jsm/effects/PeppersGhostEffect'

import { consParams, objProps, defaults } from '../code/lib/3/index'
import { Three } from '../code/lib/3/three'
import { ok } from 'node:assert/strict'

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

console.log('\neffects — AnaglyphEffect')
checkRegistration('anaglyphEffect', 'AnaglyphEffect')
test('anaglyphEffect consParams includes renderer/width/height', () => {
    ok((consParams as any).anaglyphEffect.includes('renderer'))
    ok((consParams as any).anaglyphEffect.includes('width'))
    ok((consParams as any).anaglyphEffect.includes('height'))
})

console.log('\neffects — StereoEffect')
checkRegistration('stereoEffect', 'StereoEffect')
test('stereoEffect consParams includes renderer', () => ok((consParams as any).stereoEffect.includes('renderer')))

console.log('\neffects — OutlineEffect')
checkRegistration('outlineEffect', 'OutlineEffect')
test('outlineEffect consParams includes renderer', () => ok((consParams as any).outlineEffect.includes('renderer')))

console.log('\neffects — AsciiEffect')
checkRegistration('asciiEffect', 'AsciiEffect')
test('asciiEffect consParams includes renderer', () => ok((consParams as any).asciiEffect.includes('renderer')))

console.log('\neffects — ParallaxBarrierEffect')
checkRegistration('parallaxBarrierEffect', 'ParallaxBarrierEffect')

console.log('\neffects — PeppersGhostEffect')
checkRegistration('peppersGhostEffect', 'PeppersGhostEffect')

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
