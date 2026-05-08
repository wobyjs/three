// Run with: tsx code/test/geometries.test.ts
import './setup'
import './registry-seeds'

import '../code/src/geometries/BoxGeometry'
import '../code/examples/jsm/geometries/BoxLineGeometry'
import '../code/examples/jsm/geometries/RoundedBoxGeometry'
import '../code/examples/jsm/geometries/ConvexGeometry'
import '../code/examples/jsm/geometries/DecalGeometry'
import '../code/examples/jsm/geometries/ParametricGeometry'
import '../code/examples/jsm/geometries/TeapotGeometry'
import '../code/examples/jsm/geometries/TextGeometry'

import { consParams, objProps, defaults } from '../code/lib/3/index'
import { Three } from '../code/lib/3/three'
import { ok, strictEqual } from 'node:assert/strict'
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry.js'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'

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

console.log('\ngeometries — BoxGeometry (core)')
checkRegistration('boxGeometry', 'BoxGeometry')
test('boxGeometry consParams has width/height/depth', () => {
    ok((consParams as any).boxGeometry.includes('width'))
    ok((consParams as any).boxGeometry.includes('height'))
    ok((consParams as any).boxGeometry.includes('depth'))
})

console.log('\ngeometries — BoxLineGeometry (jsm)')
checkRegistration('boxLineGeometry', 'BoxLineGeometry')
test('boxLineGeometry consParams includes width', () => ok((consParams as any).boxLineGeometry.includes('width')))
test('boxLineGeometry consParams includes widthSegments', () => ok((consParams as any).boxLineGeometry.includes('widthSegments')))
test('BoxLineGeometry instantiation', () => {
    const geo = new BoxLineGeometry(1, 1, 1, 2, 2, 2)
    ok(geo !== undefined)
    ok(geo.attributes !== undefined)
    geo.dispose()
})

console.log('\ngeometries — RoundedBoxGeometry (jsm)')
checkRegistration('roundedBoxGeometry', 'RoundedBoxGeometry')
test('roundedBoxGeometry consParams includes radius', () => ok((consParams as any).roundedBoxGeometry.includes('radius')))
test('RoundedBoxGeometry instantiation', () => {
    const geo = new RoundedBoxGeometry(1, 1, 1, 2, 0.1)
    ok(geo !== undefined)
    strictEqual(geo.type, 'BoxGeometry')
    geo.dispose()
})

console.log('\ngeometries — ConvexGeometry (jsm)')
checkRegistration('convexGeometry', 'ConvexGeometry')

console.log('\ngeometries — DecalGeometry (jsm)')
test('decalGeometry registered in consParams', () => ok((consParams as any).decalGeometry !== undefined))
test('decalGeometry registered in objProps', () => ok((objProps as any).decalGeometry !== undefined))
test('decalGeometry registered in defaults', () => ok((defaults as any).decalGeometry !== undefined))

console.log('\ngeometries — ParametricGeometry (jsm)')
checkRegistration('parametricGeometry', 'ParametricGeometry')

console.log('\ngeometries — TeapotGeometry (jsm)')
checkRegistration('teapotGeometry', 'TeapotGeometry')

console.log('\ngeometries — TextGeometry (jsm)')
checkRegistration('textGeometry', 'TextGeometry')

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
