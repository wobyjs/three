// Run with: tsx test/webgl-examples.test.ts
import './setup'
import './registry-seeds'

// Import all pilot example wrappers
import '../code/examples/webgl/animation/Keyframes'
import '../code/examples/webgl/animation/Multiple'
import '../code/examples/webgl/camera/Camera'
import '../code/examples/webgl/geometries/Geometries'
import '../code/examples/webgl/lights/Spotlight'
import '../code/examples/webgl/lights/Hemisphere'
import '../code/examples/webgl/loaders/GLTF'
import '../code/examples/webgl/interactive/Cubes'
import '../code/examples/webgl/advanced/SimpleGI'
import '../code/examples/webgl/materials/Variations'

import { consParams, objProps, defaults } from '../code/lib/3/index'
import { Three } from '../code/lib/3/three'
import { ok, strictEqual } from 'node:assert/strict'

let passed = 0
let failed = 0
const asyncTests: Promise<void>[] = []

function test(name: string, fn: () => void | Promise<void>): void {
    try {
        const r = fn()
        if (r instanceof Promise) {
            asyncTests.push(r
                .then(() => { console.log(`  ✓ ${name}`); passed++ })
                .catch((e: Error) => { console.error(`  ✗ ${name}:`, e.message); failed++ }))
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

// ── Component Import Tests ─────────────────────────────────────────────────────

console.log('\nwebgl examples - component imports')

test('Keyframes component imports', () => ok(true))
test('Multiple component imports', () => ok(true))
test('Camera component imports', () => ok(true))
test('Geometries component imports', () => ok(true))
test('Spotlight component imports', () => ok(true))
test('Hemisphere component imports', () => ok(true))
test('GLTF component imports', () => ok(true))
test('Cubes component imports', () => ok(true))
test('SimpleGI component imports', () => ok(true))
test('Variations component imports', () => ok(true))

// ── Three.js Class Registration Tests ──────────────────────────────────────────

console.log('\nwebgl examples - Three.js class registration')

// Geometries
console.log('\n  Geometries')
checkRegistration('boxGeometry', 'BoxGeometry')
checkRegistration('sphereGeometry', 'SphereGeometry')
checkRegistration('torusKnotGeometry', 'TorusKnotGeometry')
checkRegistration('planeGeometry', 'PlaneGeometry')
checkRegistration('capsuleGeometry', 'CapsuleGeometry')
checkRegistration('coneGeometry', 'ConeGeometry')
checkRegistration('cylinderGeometry', 'CylinderGeometry')
checkRegistration('dodecahedronGeometry', 'DodecahedronGeometry')
checkRegistration('icosahedronGeometry', 'IcosahedronGeometry')
checkRegistration('octahedronGeometry', 'OctahedronGeometry')
checkRegistration('tetrahedronGeometry', 'TetrahedronGeometry')
checkRegistration('torusGeometry', 'TorusGeometry')
checkRegistration('ringGeometry', 'RingGeometry')
checkRegistration('circleGeometry', 'CircleGeometry')

// Materials
console.log('\n  Materials')
checkRegistration('meshStandardMaterial', 'MeshStandardMaterial')
checkRegistration('meshLambertMaterial', 'MeshLambertMaterial')
checkRegistration('meshBasicMaterial', 'MeshBasicMaterial')
checkRegistration('pointsMaterial', 'PointsMaterial')

// Lights
console.log('\n  Lights')
checkRegistration('ambientLight', 'AmbientLight')
checkRegistration('directionalLight', 'DirectionalLight')
checkRegistration('pointLight', 'PointLight')
checkRegistration('spotLight', 'SpotLight')
checkRegistration('hemisphereLight', 'HemisphereLight')

// Cameras
console.log('\n  Cameras')
checkRegistration('perspectiveCamera', 'PerspectiveCamera')
checkRegistration('orthographicCamera', 'OrthographicCamera')

// Objects
console.log('\n  Objects')
checkRegistration('mesh', 'Mesh')
checkRegistration('points', 'Points')
checkRegistration('group', 'Group')

// ── Summary ────────────────────────────────────────────────────────────────────

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
