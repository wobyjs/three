// Run with: tsx code/test/renderers.test.ts
import './setup'
import './registry-seeds'

import '../code/examples/jsm/renderers/CSS2DRenderer'
import '../code/examples/jsm/renderers/CSS3DRenderer'
import '../code/examples/jsm/renderers/SVGRenderer'

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

console.log('\nrenderers — CSS2DRenderer')
checkRegistration('css2dRenderer', 'CSS2DRenderer')
test('css2dObject registered', () => {
    ok((consParams as any).css2dObject !== undefined)
    ok((Three as any).CSS2DObject !== undefined)
})
test('css2dRenderer objProps includes domElement/render', () => {
    ok((objProps as any).css2dRenderer.includes('domElement'))
    ok((objProps as any).css2dRenderer.includes('render'))
})

console.log('\nrenderers — CSS3DRenderer')
checkRegistration('css3dRenderer', 'CSS3DRenderer')
test('css3dObject registered', () => {
    ok((consParams as any).css3dObject !== undefined)
    ok((Three as any).CSS3DObject !== undefined)
})
test('css3dSprite registered', () => ok((consParams as any).css3dSprite !== undefined))

console.log('\nrenderers — SVGRenderer')
checkRegistration('svgRenderer', 'SVGRenderer')
test('svgObject registered in consParams', () => ok((consParams as any).svgObject !== undefined))
test('svgObject objProps includes node', () => ok((objProps as any).svgObject.includes('node')))

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
