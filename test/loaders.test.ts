// Run with: tsx code/test/loaders.test.ts
import './setup'
import './registry-seeds'

import '../code/examples/jsm/loaders/FontLoader'

import { consParams, objProps, defaults } from '../code/lib/3/index'
import { Three } from '../code/lib/3/three'
import { ok } from 'node:assert/strict'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js'

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

console.log('\nloaders — FontLoader')
checkRegistration('fontLoader', 'FontLoader')
test('fontLoader consParams includes manager', () => ok((consParams as any).fontLoader.includes('manager')))
test('font registered in consParams/objProps', () => {
    ok((consParams as any).font !== undefined)
    ok((objProps as any).font !== undefined)
})
test('fontData registered in consParams', () => {
    ok((consParams as any).fontData !== undefined)
    ok((consParams as any).fontData.includes('glyphs'))
    ok((consParams as any).fontData.includes('familyName'))
})
test('FontLoader instantiation', () => {
    const loader = new FontLoader()
    ok(loader !== undefined)
    ok(typeof loader.load === 'function')
})

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
