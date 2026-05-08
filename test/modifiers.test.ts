// Run with: tsx code/test/modifiers.test.ts
import './setup'
import './registry-seeds'

import '../code/examples/jsm/modifiers/EdgeSplitModifier'
import '../code/examples/jsm/modifiers/SimplifyModifier'
import '../code/examples/jsm/modifiers/TessellateModifier'
import '../code/examples/jsm/modifiers/CurveModifier'

import { consParams, objProps, defaults } from '../code/lib/3/index'
import { Three } from '../code/lib/3/three'
import { ok } from 'node:assert/strict'
import { EdgeSplitModifier } from 'three/examples/jsm/modifiers/EdgeSplitModifier.js'

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

console.log('\nmodifiers — EdgeSplitModifier')
checkRegistration('edgeSplitModifier', 'EdgeSplitModifier')
test('EdgeSplitModifier instantiation', () => {
    const mod = new EdgeSplitModifier()
    ok(mod !== undefined)
    ok(typeof mod.modify === 'function')
})

console.log('\nmodifiers — SimplifyModifier')
checkRegistration('simplifyModifier', 'SimplifyModifier')

console.log('\nmodifiers — TessellateModifier')
checkRegistration('tessellateModifier', 'TessellateModifier')

console.log('\nmodifiers — CurveModifier (stub — no registrations exported)')
test('CurveModifier module importable', () => {
    ok(true)
})

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
