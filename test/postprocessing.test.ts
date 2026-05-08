// Run with: tsx code/test/postprocessing.test.ts
import './setup'
import './registry-seeds'

import '../code/examples/jsm/postprocessing/Pass'
import '../code/examples/jsm/postprocessing/EffectComposer'
import '../code/examples/jsm/postprocessing/RenderPass'
import '../code/examples/jsm/postprocessing/ShaderPass'
import '../code/examples/jsm/postprocessing/OutputPass'
import '../code/examples/jsm/postprocessing/BloomPass'
import '../code/examples/jsm/postprocessing/ClearPass'
import '../code/examples/jsm/postprocessing/DotScreenPass'
import '../code/examples/jsm/postprocessing/FilmPass'
import '../code/examples/jsm/postprocessing/GlitchPass'
import '../code/examples/jsm/postprocessing/HalftonePass'
import '../code/examples/jsm/postprocessing/MaskPass'
import '../code/examples/jsm/postprocessing/SavePass'
import '../code/examples/jsm/postprocessing/AfterimagePass'

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

console.log('\npostprocessing — Pass')
checkRegistration('pass', 'Pass')
test('pass objProps includes enabled/needsSwap/renderToScreen', () => {
    ok((objProps as any).pass.includes('enabled'))
    ok((objProps as any).pass.includes('needsSwap'))
    ok((objProps as any).pass.includes('renderToScreen'))
})
test('fullScreenQuad registered', () => {
    ok((consParams as any).fullScreenQuad !== undefined)
    ok((Three as any).FullScreenQuad !== undefined)
})

console.log('\npostprocessing — EffectComposer')
checkRegistration('effectComposer', 'EffectComposer')
test('effectComposer consParams includes renderer/renderTarget', () => {
    ok((consParams as any).effectComposer.includes('renderer'))
    ok((consParams as any).effectComposer.includes('renderTarget'))
})
test('effectComposer objProps includes passes/copyPass/clock', () => {
    ok((objProps as any).effectComposer.includes('passes'))
    ok((objProps as any).effectComposer.includes('clock'))
})

console.log('\npostprocessing — RenderPass')
checkRegistration('renderPass', 'RenderPass')
test('renderPass consParams includes scene/camera', () => {
    ok((consParams as any).renderPass.includes('scene'))
    ok((consParams as any).renderPass.includes('camera'))
})
test('renderPass objProps includes pass entries', () => {
    ok((objProps as any).renderPass.includes('enabled'))
    ok((objProps as any).renderPass.includes('clearAlpha'))
})

console.log('\npostprocessing — ShaderPass')
checkRegistration('shaderPass', 'ShaderPass')

console.log('\npostprocessing — OutputPass')
checkRegistration('outputPass', 'OutputPass')

console.log('\npostprocessing — BloomPass')
checkRegistration('bloomPass', 'BloomPass')

console.log('\npostprocessing — ClearPass')
checkRegistration('clearPass', 'ClearPass')

console.log('\npostprocessing — DotScreenPass')
checkRegistration('dotScreenPass', 'DotScreenPass')

console.log('\npostprocessing — FilmPass')
checkRegistration('filmPass', 'FilmPass')

console.log('\npostprocessing — GlitchPass')
checkRegistration('glitchPass', 'GlitchPass')

console.log('\npostprocessing — HalftonePass')
checkRegistration('halftonePass', 'HalftonePass')

console.log('\npostprocessing — MaskPass')
checkRegistration('maskPass', 'MaskPass')

console.log('\npostprocessing — SavePass')
checkRegistration('savePass', 'SavePass')

console.log('\npostprocessing — AfterimagePass')
checkRegistration('afterimagePass', 'AfterimagePass')

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
