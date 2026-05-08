// Run with: tsx code/test/controls.test.ts
import './setup'
import './registry-seeds'

import '../code/examples/jsm/controls/OrbitControls'
import '../code/examples/jsm/controls/DragControls'
import '../code/examples/jsm/controls/MapControls'
import '../code/examples/jsm/controls/TrackballControls'
import '../code/examples/jsm/controls/TransformControls'
import '../code/examples/jsm/controls/FlyControls'
import '../code/examples/jsm/controls/FirstPersonControls'
import '../code/examples/jsm/controls/PointerLockControls'
import '../code/examples/jsm/controls/ArcballControls'

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

console.log('\ncontrols — OrbitControls')
checkRegistration('orbitControls', 'OrbitControls')
test('orbitControls consParams includes camera', () => ok((consParams as any).orbitControls.includes('camera')))
test('orbitControls consParams includes domElement', () => ok((consParams as any).orbitControls.includes('domElement')))
test('orbitControls objProps includes enabled', () => ok((objProps as any).orbitControls.includes('enabled')))

console.log('\ncontrols — DragControls')
checkRegistration('dragControls', 'DragControls')
test('dragControls consParams includes objects', () => ok((consParams as any).dragControls.includes('objects')))

console.log('\ncontrols — MapControls')
checkRegistration('mapControls', 'MapControls')
test('mapControls objProps includes enabled (from orbitControls spread)', () => ok((objProps as any).mapControls.includes('enabled')))

console.log('\ncontrols — TrackballControls')
checkRegistration('trackballControls', 'TrackballControls')
test('trackballControls consParams includes object', () => ok((consParams as any).trackballControls.includes('object')))
test('trackballControls objProps includes rotateSpeed', () => ok((objProps as any).trackballControls.includes('rotateSpeed')))

console.log('\ncontrols — TransformControls')
checkRegistration('transformControls', 'TransformControls')
test('transformControls consParams includes object', () => ok((consParams as any).transformControls.includes('object')))

console.log('\ncontrols — FlyControls')
checkRegistration('flyControls', 'FlyControls')

console.log('\ncontrols — FirstPersonControls')
checkRegistration('firstPersonControls', 'FirstPersonControls')

console.log('\ncontrols — PointerLockControls')
checkRegistration('pointerLockControls', 'PointerLockControls')

console.log('\ncontrols — ArcballControls')
checkRegistration('arcballControls', 'ArcballControls')

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
