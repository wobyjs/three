// Run with: tsx code/test/misc.test.ts
import './setup'
import './registry-seeds'

import '../code/examples/jsm/misc/Timer'
import '../code/examples/jsm/misc/Gyroscope'
import '../code/examples/jsm/misc/ConvexObjectBreaker'
import '../code/examples/jsm/misc/MorphAnimMesh'
import '../code/examples/jsm/misc/MorphBlendMesh'

import { consParams, objProps, defaults } from '../code/lib/3/index'
import { Three } from '../code/lib/3/three'
import { ok } from 'node:assert/strict'
import { Timer } from 'three/examples/jsm/misc/Timer.js'

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

console.log('\nmisc — Timer')
checkRegistration('timer', 'Timer')
test('Timer instantiation', () => {
    const t = new Timer()
    ok(t !== undefined)
    ok(typeof t.getDelta === 'function')
    ok(typeof t.getElapsed === 'function')
})
test('Timer.update does not throw', () => {
    const t = new Timer()
    t.update()
    ok(t.getDelta() >= 0)
})
test('fixedTimer registered in consParams', () => ok((consParams as any).fixedTimer !== undefined))

console.log('\nmisc — Gyroscope')
checkRegistration('gyroscope', 'Gyroscope')
test('gyroscope objProps has entries (spreads object3d)', () => ok(Array.isArray((objProps as any).gyroscope)))

console.log('\nmisc — ConvexObjectBreaker')
checkRegistration('convexObjectBreaker', 'ConvexObjectBreaker')

console.log('\nmisc — MorphAnimMesh')
checkRegistration('morphAnimMesh', 'MorphAnimMesh')

console.log('\nmisc — MorphBlendMesh')
checkRegistration('morphBlendMesh', 'MorphBlendMesh')

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
