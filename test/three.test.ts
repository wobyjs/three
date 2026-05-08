// Run with:  tsx code/test/three.test.ts
// Setup MUST be first import - initialises window/requestAnimationFrame before any woby/three code.
import './setup'

import { strictEqual, ok } from 'node:assert/strict'
import { Mesh, BoxGeometry, MeshStandardMaterial, PointLight, Scene as ThreeScene } from 'three'
import { setNestedValue, fixReactiveProps } from '../code/lib/three/fixReactiveProps'
import { consParams, objProps, defaults } from '../code/lib/3/index'
import { $, useRoot } from 'woby'

// Seed the registry for 'mesh' so fixReactiveProps can look up objKey/consKey.
// This mirrors what code/src/objects/Mesh.ts does at import time.
;(consParams as any).mesh ??= ['geometry', 'material']
;(objProps as any).mesh ??= ['castShadow', 'receiveShadow', 'visible', 'name',
    'morphTargetInfluences', 'morphTargetDictionary']
;(defaults as any).mesh ??= {}

let passed = 0
let failed = 0
const asyncTests: Promise<void>[] = []

function test(name: string, fn: () => void | Promise<void>): void {
    try {
        const r = fn()
        if (r instanceof Promise) {
            const p = r
                .then(() => { console.log(`  ✓ ${name}`); passed++ })
                .catch((e: any) => { console.error(`  ✗ ${name}:`, e.message); failed++ })
            asyncTests.push(p)
        } else {
            console.log(`  ✓ ${name}`)
            passed++
        }
    } catch (e: any) {
        console.error(`  ✗ ${name}:`, e.message)
        failed++
    }
}

// ── setNestedValue: kebab props ──────────────────────────────────────────────

console.log('\nsetNestedValue (kebab props)')

test('position-x → mesh.position.x', () => {
    const mesh = new Mesh()
    setNestedValue(mesh, 'position-x', 5, null as any)
    strictEqual(mesh.position.x, 5)
})

test('position-y → mesh.position.y', () => {
    const mesh = new Mesh()
    setNestedValue(mesh, 'position-y', -3, null as any)
    strictEqual(mesh.position.y, -3)
})

test('position-z → mesh.position.z', () => {
    const mesh = new Mesh()
    setNestedValue(mesh, 'position-z', 7, null as any)
    strictEqual(mesh.position.z, 7)
})

test('scale-x → mesh.scale.x', () => {
    const mesh = new Mesh()
    setNestedValue(mesh, 'scale-x', 2, null as any)
    strictEqual(mesh.scale.x, 2)
})

test('rotation-y → mesh.rotation.y', () => {
    const mesh = new Mesh()
    setNestedValue(mesh, 'rotation-y', Math.PI, null as any)
    strictEqual(mesh.rotation.y, Math.PI)
})

// ── fixReactiveProps: plain props (objKey path via seeded registry) ──────────

console.log('\nfixReactiveProps (plain props via seeded registry)')

test('castShadow prop set on mesh', () => {
    const mesh = new Mesh()
    useRoot(() => {
        fixReactiveProps('mesh' as any, { castShadow: true }, mesh, null as any)
    })
    strictEqual(mesh.castShadow, true)
})

test('visible = false on mesh', () => {
    const mesh = new Mesh()
    useRoot(() => {
        fixReactiveProps('mesh' as any, { visible: false }, mesh, null as any)
    })
    strictEqual(mesh.visible, false)
})

test('name prop set on mesh', () => {
    const mesh = new Mesh()
    useRoot(() => {
        fixReactiveProps('mesh' as any, { name: 'myMesh' }, mesh, null as any)
    })
    strictEqual(mesh.name, 'myMesh')
})

test('position-x via fixReactiveProps (kebab)', () => {
    const mesh = new Mesh()
    useRoot(() => {
        fixReactiveProps('mesh' as any, { 'position-x': 42 }, mesh, null as any)
    })
    strictEqual(mesh.position.x, 42)
})

// ── fixReactiveProps: observable props ──────────────────────────────────────

console.log('\nfixReactiveProps (observable kebab props)')

test('observable position-x updates via setNestedValue', async () => {
    const posX = $(0)
    const mesh = new Mesh()

    useRoot(() => {
        // setNestedValue with an observable: tracks & re-runs effect when posX changes
        setNestedValue(mesh, 'position-x', posX, null as any)
    })

    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            posX(99)
            setTimeout(() => {
                try {
                    strictEqual(mesh.position.x, 99)
                    resolve()
                } catch (e) { reject(e) }
            }, 50)
        }, 50)
    })
})

// ── Three.js scene graph ─────────────────────────────────────────────────────

console.log('\nThree.js scene graph')

test('Mesh added to scene via scene.add', () => {
    const scene = new ThreeScene()
    const mesh = new Mesh()
    scene.add(mesh)
    strictEqual(scene.children.length, 1)
    strictEqual(scene.children[0], mesh)
})

test('Multiple meshes in scene', () => {
    const scene = new ThreeScene()
    scene.add(new Mesh(), new Mesh(), new Mesh())
    strictEqual(scene.children.length, 3)
})

test('BoxGeometry type and parameters', () => {
    const geo = new BoxGeometry(1, 2, 3)
    strictEqual(geo.type, 'BoxGeometry')
    strictEqual(geo.parameters.width, 1)
    strictEqual(geo.parameters.height, 2)
    strictEqual(geo.parameters.depth, 3)
})

test('MeshStandardMaterial type', () => {
    const mat = new MeshStandardMaterial()
    strictEqual(mat.type, 'MeshStandardMaterial')
    ok(mat.color !== undefined)
})

test('PointLight intensity default is 1', () => {
    const light = new PointLight()
    strictEqual(light.intensity, 1)
})

test('Mesh defaults: position (0,0,0)', () => {
    const mesh = new Mesh()
    strictEqual(mesh.position.x, 0)
    strictEqual(mesh.position.y, 0)
    strictEqual(mesh.position.z, 0)
})

// ── summary ──────────────────────────────────────────────────────────────────

Promise.all(asyncTests).then(() => {
    const total = passed + failed
    console.log(`\n${total} tests: ${passed} passed${failed ? `, ${failed} FAILED` : ''}`)
    if (failed > 0) process.exit(1)
})
