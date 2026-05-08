// Run with: tsx code/test/math.test.ts
import './setup'
import './registry-seeds'

import '../code/examples/jsm/math/Capsule'
import '../code/examples/jsm/math/OBB'
import '../code/examples/jsm/math/Octree'
import '../code/examples/jsm/math/ConvexHull'
import '../code/examples/jsm/math/ImprovedNoise'
import '../code/examples/jsm/math/SimplexNoise'
import '../code/examples/jsm/math/Lut'
import '../code/examples/jsm/math/MeshSurfaceSampler'
import '../code/examples/jsm/math/ColorConverter'

import { consParams, objProps, defaults } from '../code/lib/3/index'
import { Three } from '../code/lib/3/three'
import { ok, strictEqual } from 'node:assert/strict'
import { Capsule } from 'three/examples/jsm/math/Capsule.js'
import { OBB } from 'three/examples/jsm/math/OBB.js'
import { Octree } from 'three/examples/jsm/math/Octree.js'
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js'
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise.js'
import { Lut } from 'three/examples/jsm/math/Lut.js'
import { Vector3 } from 'three'

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

console.log('\nmath — Capsule')
checkRegistration('capsule', 'Capsule')
test('capsule consParams includes start/end/radius', () => {
    ok((consParams as any).capsule.includes('start'))
    ok((consParams as any).capsule.includes('end'))
    ok((consParams as any).capsule.includes('radius'))
})
test('Capsule instantiation with defaults', () => {
    const c = new Capsule()
    ok(c !== undefined)
    ok(c.start instanceof Vector3)
    ok(c.end instanceof Vector3)
    strictEqual(c.radius, 1)
})
test('Capsule clone', () => {
    const c = new Capsule(new Vector3(0, 0, 0), new Vector3(0, 1, 0), 0.5)
    const clone = c.clone()
    strictEqual(clone.radius, 0.5)
})

console.log('\nmath — OBB')
checkRegistration('obb', 'OBB', 'obb', 'obb', 'oBB')
test('obb consParams includes center/halfSize/rotation', () => {
    ok((consParams as any).obb.includes('center'))
    ok((consParams as any).obb.includes('halfSize'))
    ok((consParams as any).obb.includes('rotation'))
})
test('OBB instantiation', () => {
    const obb = new OBB()
    ok(obb !== undefined)
    ok(obb.center instanceof Vector3)
    ok(obb.halfSize instanceof Vector3)
})

console.log('\nmath — Octree')
checkRegistration('octree', 'Octree')
test('Octree instantiation', () => {
    const tree = new Octree()
    ok(tree !== undefined)
})

console.log('\nmath — ConvexHull')
checkRegistration('convexHull', 'ConvexHull')

console.log('\nmath — ImprovedNoise')
checkRegistration('improvedNoise', 'ImprovedNoise')
test('ImprovedNoise instantiation and noise()', () => {
    const noise = new ImprovedNoise()
    const val = noise.noise(0.5, 0.5, 0.5)
    ok(typeof val === 'number')
})

console.log('\nmath — SimplexNoise')
checkRegistration('simplexNoise', 'SimplexNoise')
test('SimplexNoise instantiation and noise()', () => {
    const noise = new SimplexNoise()
    const val = noise.noise(0.1, 0.2)
    ok(typeof val === 'number')
})

console.log('\nmath — Lut')
checkRegistration('lut', 'Lut')
test('Lut instantiation', () => {
    const lut = new Lut()
    ok(lut !== undefined)
})

console.log('\nmath — MeshSurfaceSampler')
checkRegistration('meshSurfaceSampler', 'MeshSurfaceSampler')

console.log('\nmath — ColorConverter (registers hsl/cmyk)')
test('hsl registered in consParams', () => ok((consParams as any).hsl !== undefined))
test('cmyk registered in consParams', () => ok((consParams as any).cmyk !== undefined))
test('hsl registered in objProps', () => ok((objProps as any).hsl !== undefined))
test('cmyk registered in objProps', () => ok((objProps as any).cmyk !== undefined))
test('hsl registered in defaults', () => ok((defaults as any).hsl !== undefined))
test('cmyk registered in defaults', () => ok((defaults as any).cmyk !== undefined))

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
