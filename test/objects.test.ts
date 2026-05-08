// Run with: tsx code/test/objects.test.ts
import './setup'
import './registry-seeds'

import '../code/examples/jsm/objects/Sky'
import '../code/examples/jsm/objects/ShadowMesh'
import '../code/examples/jsm/objects/MarchingCubes'
import '../code/examples/jsm/objects/Reflector'
import '../code/examples/jsm/objects/Refractor'
import '../code/examples/jsm/objects/GroundedSkybox'
import '../code/examples/jsm/objects/LensflareMesh'

import { consParams, objProps, defaults } from '../code/lib/3/index'
import { Three } from '../code/lib/3/three'
import { ok } from 'node:assert/strict'
import { Sky } from 'three/examples/jsm/objects/Sky.js'

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

console.log('\nobjects — Sky')
checkRegistration('sky', 'Sky')
test('sky objProps includes geometry/material (from mesh spread)', () => {
    ok((objProps as any).sky.includes('geometry'))
    ok((objProps as any).sky.includes('material'))
})
test('Sky instantiation', () => {
    const sky = new Sky()
    ok(sky !== undefined)
    ok(sky.isMesh)
})

console.log('\nobjects — ShadowMesh')
checkRegistration('shadowMesh', 'ShadowMesh')
test('shadowMesh consParams includes mesh', () => ok((consParams as any).shadowMesh.includes('mesh')))
test('shadowMesh objProps includes meshMatrix (from mesh spread)', () => ok((objProps as any).shadowMesh.includes('meshMatrix')))

console.log('\nobjects — MarchingCubes')
checkRegistration('marchingCubes', 'MarchingCubes')

console.log('\nobjects — Reflector')
checkRegistration('reflector', 'Reflector')

console.log('\nobjects — Refractor')
checkRegistration('refractor', 'Refractor')

console.log('\nobjects — GroundedSkybox')
checkRegistration('groundedSkybox', 'GroundedSkybox')

console.log('\nobjects — LensflareMesh (registers Lensflare)')
checkRegistration('lensflare', 'Lensflare')
test('lensflareElement registered', () => {
    ok((consParams as any).lensflareElement !== undefined)
    ok((objProps as any).lensflareElement !== undefined)
})

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
