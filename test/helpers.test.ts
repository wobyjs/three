// Run with: tsx code/test/helpers.test.ts
import './setup'
import './registry-seeds'

import '../code/examples/jsm/helpers/RectAreaLightHelper'
import '../code/examples/jsm/helpers/VertexNormalsHelper'
import '../code/examples/jsm/helpers/OctreeHelper'
import '../code/examples/jsm/helpers/PositionalAudioHelper'
import '../code/examples/jsm/helpers/VertexTangentsHelper'

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

console.log('\nhelpers — RectAreaLightHelper')
checkRegistration('rectAreaLightHelper', 'RectAreaLightHelper')
test('rectAreaLightHelper consParams includes light/color', () => {
    ok((consParams as any).rectAreaLightHelper.includes('light'))
    ok((consParams as any).rectAreaLightHelper.includes('color'))
})

console.log('\nhelpers — VertexNormalsHelper')
checkRegistration('vertexNormalsHelper', 'VertexNormalsHelper')
test('vertexNormalsHelper consParams includes object/size/color', () => {
    ok((consParams as any).vertexNormalsHelper.includes('object'))
    ok((consParams as any).vertexNormalsHelper.includes('size'))
    ok((consParams as any).vertexNormalsHelper.includes('color'))
})
test('vertexNormalsHelper defaults has size=1', () => {
    ok((defaults as any).vertexNormalsHelper.size === 1)
})

console.log('\nhelpers — OctreeHelper')
checkRegistration('octreeHelper', 'OctreeHelper')
test('octreeHelper consParams includes octree/color', () => {
    ok((consParams as any).octreeHelper.includes('octree'))
    ok((consParams as any).octreeHelper.includes('color'))
})

console.log('\nhelpers — PositionalAudioHelper')
checkRegistration('positionalAudioHelper', 'PositionalAudioHelper')

console.log('\nhelpers — VertexTangentsHelper')
checkRegistration('vertexTangentsHelper', 'VertexTangentsHelper')

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
