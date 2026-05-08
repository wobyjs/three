// Run with: tsx code/test/lines.test.ts
import './setup'
import './registry-seeds'

import '../code/examples/jsm/lines/LineSegmentsGeometry'
import '../code/examples/jsm/lines/LineGeometry'
import '../code/examples/jsm/lines/LineMaterial'
import '../code/examples/jsm/lines/LineSegments2'
import '../code/examples/jsm/lines/Line2'
import '../code/examples/jsm/lines/Wireframe'
import '../code/examples/jsm/lines/WireframeGeometry2'

import { consParams, objProps, defaults } from '../code/lib/3/index'
import { Three } from '../code/lib/3/three'
import { ok } from 'node:assert/strict'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'

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

console.log('\nlines — LineSegmentsGeometry')
checkRegistration('lineSegmentsGeometry', 'LineSegmentsGeometry')
test('lineSegmentsGeometry objProps includes setPositions', () => ok((objProps as any).lineSegmentsGeometry.includes('setPositions')))
test('LineSegmentsGeometry instantiation', () => {
    const geo = new LineSegmentsGeometry()
    ok(geo !== undefined)
    geo.dispose()
})

console.log('\nlines — LineGeometry')
checkRegistration('lineGeometry', 'LineGeometry')
test('LineGeometry instantiation', () => {
    const geo = new LineGeometry()
    ok(geo !== undefined)
    geo.dispose()
})

console.log('\nlines — LineMaterial')
checkRegistration('lineMaterial', 'LineMaterial')
test('lineMaterial objProps includes linewidth', () => ok((objProps as any).lineMaterial.includes('linewidth')))
test('lineMaterial objProps includes color', () => ok((objProps as any).lineMaterial.includes('color')))

console.log('\nlines — LineSegments2')
checkRegistration('lineSegments2', 'LineSegments2')
test('lineSegments2 consParams includes geometry', () => ok((consParams as any).lineSegments2.includes('geometry')))
test('lineSegments2 consParams includes material', () => ok((consParams as any).lineSegments2.includes('material')))

console.log('\nlines — Line2')
checkRegistration('line2', 'Line2')
test('line2 consParams includes geometry', () => ok((consParams as any).line2.includes('geometry')))

console.log('\nlines — Wireframe')
checkRegistration('wireframe', 'Wireframe')
test('wireframe consParams includes geometry', () => ok((consParams as any).wireframe.includes('geometry')))

console.log('\nlines — WireframeGeometry2')
checkRegistration('wireframeGeometry2', 'WireframeGeometry2')

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
