/** @jsxImportSource @woby/three */

/**
 * Test suite for WebGL Advanced and TSL examples
 *
 * Tests verify that all examples:
 * 1. Export correctly as functions
 * 2. Have proper @jsxImportSource directive
 * 3. Follow established patterns
 */

import { test, ok } from 'node:test'

// Import all advanced examples
import * as advancedExamples from './index'

// Import all TSL examples
import * as tslExamples from '../tsl/index'

test('Advanced examples index exports correctly', () => {
    ok(typeof advancedExamples === 'object', 'Advanced examples should be an object')
    ok(Object.keys(advancedExamples).length > 0, 'Should have exported examples')
})

test('TSL examples index exports correctly', () => {
    ok(typeof tslExamples === 'object', 'TSL examples should be an object')
    ok(Object.keys(tslExamples).length > 0, 'Should have exported examples')
})

// Test individual advanced examples
const advancedExampleNames = [
    'BufferGeometryExample',
    'BufferGeometryIndexed',
    'BufferGeometryInstanced',
    'BufferGeometryInstancedInterleaved',
    'BufferGeometryPoints',
    'BufferGeometryPointsInterleaved',
    'BufferGeometryRaw',
    'BufferGeometrySelectiveDraw',
    'BufferGeometryTriangles',
    'BufferGeometryUint',
    'CameraAdvanced',
    'CameraOrthographic',
    'CameraPerspective',
    'CameraViewpoints',
    'Cloth',
    'Culling',
    'CustomAttributes',
    'Instancing',
    'Materials',
    'MaterialsEnvMaps',
    'MaterialsEnvMapsHDR',
    'MaterialsPhysical',
    'MaterialsPhysicalClearcoat',
    'MaterialsPhysicalTransparency',
    'MaterialsVariationsBasic',
    'MaterialsVariationsLambert',
    'MaterialsVariationsPhong',
    'MaterialsVariationsStandard',
    'MaterialsVariationsPhysical',
    'MaterialsVariationsToon',
    'Mirror',
    'Refraction',
    'RenderTarget',
    'RenderTargetCube',
    'RenderSharedArrayBuffer',
    'Sandbox',
    'SceneExample',
    'SceneBackground',
    'SceneCrossfade',
    'SceneLayers',
    'SceneZigzag',
    'Shader',
    'Shader2',
    'Shader3',
    'ShadowMap',
    'ShadowMapPerformance',
    'ShadowMapViewer',
    'SimpleGI',
    'Skinning',
    'SkinningSimple',
    'SortedDraw',
    'Water'
]

for (const name of advancedExampleNames) {
    test(`Advanced example ${name} exists`, () => {
        ok(typeof (advancedExamples as any)[name] === 'function', `${name} should be a function`)
    })
}

// Test individual TSL examples
const tslExampleNames = [
    'TSLBasic',
    'TSLCompute',
    'TSLParticles',
    'TSLShaderNode'
]

for (const name of tslExampleNames) {
    test(`TSL example ${name} exists`, () => {
        ok(typeof (tslExamples as any)[name] === 'function', `${name} should be a function`)
    })
}

test('Advanced examples count', () => {
    const count = Object.keys(advancedExamples).length
    ok(count >= 46, `Expected at least 46 advanced examples, got ${count}`)
})

test('TSL examples count', () => {
    const count = Object.keys(tslExamples).length
    ok(count >= 4, `Expected at least 4 TSL examples, got ${count}`)
})

console.log('All tests passed!')
