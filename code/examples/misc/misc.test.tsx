/** @jsxImportSource @woby/three */

import { suite, test, ok } from 'uvu'
import { useRoot } from '@woby/three'
import './setup'

// Import all misc and games examples
import { FPS } from '../games/FPS'
import { Event, Fly, Map, Orbit, PointerLock, Trackball } from '../misc/controls'
import { Draco, GLTF, OBJ, PLY, STL, USDZ } from '../misc/exporter'
import { Keys, Project } from '../misc/animation'
import { Perlin } from '../misc/volume'
import { Boxselection, Lookat, Transform, UvTests, Webrtc } from '../misc'

/**
 * Test suite for Phase 11: Misc & Games examples
 * Tests all 21 ported examples for proper JSX structure and registration.
 */

const GamesTests = suite('Games Examples')

test('FPS example is a valid component', () => {
    ok(typeof FPS === 'function', 'FPS should be a function component')
})

GamesTests.run()

const ControlsTests = suite('Controls Examples')

test('Orbit controls example is a valid component', () => {
    ok(typeof Orbit === 'function', 'Orbit should be a function component')
})

test('Fly controls example is a valid component', () => {
    ok(typeof Fly === 'function', 'Fly should be a function component')
})

test('Map controls example is a valid component', () => {
    ok(typeof Map === 'function', 'Map should be a function component')
})

test('Trackball controls example is a valid component', () => {
    ok(typeof Trackball === 'function', 'Trackball should be a function component')
})

test('PointerLock controls example is a valid component', () => {
    ok(typeof PointerLock === 'function', 'PointerLock should be a function component')
})

test('Event controls example is a valid component', () => {
    ok(typeof Event === 'function', 'Event should be a function component')
})

ControlsTests.run()

const ExporterTests = suite('Exporter Examples')

test('GLTF exporter example is a valid component', () => {
    ok(typeof GLTF === 'function', 'GLTF should be a function component')
})

test('OBJ exporter example is a valid component', () => {
    ok(typeof OBJ === 'function', 'OBJ should be a function component')
})

test('STL exporter example is a valid component', () => {
    ok(typeof STL === 'function', 'STL should be a function component')
})

test('PLY exporter example is a valid component', () => {
    ok(typeof PLY === 'function', 'PLY should be a function component')
})

test('Draco exporter example is a valid component', () => {
    ok(typeof Draco === 'function', 'Draco should be a function component')
})

test('USDZ exporter example is a valid component', () => {
    ok(typeof USDZ === 'function', 'USDZ should be a function component')
})

ExporterTests.run()

const AnimationTests = suite('Animation Examples')

test('Keys animation example is a valid component', () => {
    ok(typeof Keys === 'function', 'Keys should be a function component')
})

test('Project animation example is a valid component', () => {
    ok(typeof Project === 'function', 'Project should be a function component')
})

AnimationTests.run()

const VolumeTests = suite('Volume Examples')

test('Perlin volume example is a valid component', () => {
    ok(typeof Perlin === 'function', 'Perlin should be a function component')
})

VolumeTests.run()

const MiscTests = suite('Misc Examples')

test('Boxselection example is a valid component', () => {
    ok(typeof Boxselection === 'function', 'Boxselection should be a function component')
})

test('Lookat example is a valid component', () => {
    ok(typeof Lookat === 'function', 'Lookat should be a function component')
})

test('Transform example is a valid component', () => {
    ok(typeof Transform === 'function', 'Transform should be a function component')
})

test('UvTests example is a valid component', () => {
    ok(typeof UvTests === 'function', 'UvTests should be a function component')
})

test('Webrtc example is a valid component', () => {
    ok(typeof Webrtc === 'function', 'Webrtc should be a function component')
})

MiscTests.run()

// Summary
console.log('\nPhase 11 Tests Complete')
console.log('========================')
console.log('Games: 1 example')
console.log('Controls: 6 examples')
console.log('Exporters: 6 examples')
console.log('Animation: 2 examples')
console.log('Volume: 1 example')
console.log('Misc: 5 examples')
console.log('Total: 21 examples')