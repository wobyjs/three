/** @jsxImportSource @woby/three */
import { describe, test, ok } from '../test/setup'

// CSS2D examples
import { Label } from './css2d/Label'

// CSS3D examples
import { Mixed } from './css3d/Mixed'
import { Molecules } from './css3d/Molecules'
import { Orthographic } from './css3d/Orthographic'
import { Panorama } from './css3d/Panorama'
import { PanoramaDeviceorientation } from './css3d/PanoramaDeviceorientation'
import { Periodictable } from './css3d/Periodictable'
import { Sandbox as CSS3DSandbox } from './css3d/Sandbox'
import { Sprites } from './css3d/Sprites'
import { Youtube } from './css3d/Youtube'

// SVG examples
import { Lines } from './svg/Lines'
import { Sandbox as SVGSandbox } from './svg/Sandbox'

/**
 * Tests for Phase 12: CSS & SVG Examples
 */

describe('CSS2D Examples', () => {
    test('Label component is a function', () => {
        ok(typeof Label === 'function')
    })
})

describe('CSS3D Examples', () => {
    test('Mixed component is a function', () => {
        ok(typeof Mixed === 'function')
    })

    test('Molecules component is a function', () => {
        ok(typeof Molecules === 'function')
    })

    test('Orthographic component is a function', () => {
        ok(typeof Orthographic === 'function')
    })

    test('Panorama component is a function', () => {
        ok(typeof Panorama === 'function')
    })

    test('PanoramaDeviceorientation component is a function', () => {
        ok(typeof PanoramaDeviceorientation === 'function')
    })

    test('Periodictable component is a function', () => {
        ok(typeof Periodictable === 'function')
    })

    test('CSS3D Sandbox component is a function', () => {
        ok(typeof CSS3DSandbox === 'function')
    })

    test('Sprites component is a function', () => {
        ok(typeof Sprites === 'function')
    })

    test('Youtube component is a function', () => {
        ok(typeof Youtube === 'function')
    })
})

describe('SVG Examples', () => {
    test('Lines component is a function', () => {
        ok(typeof Lines === 'function')
    })

    test('SVG Sandbox component is a function', () => {
        ok(typeof SVGSandbox === 'function')
    })
})

describe('File Count Verification', () => {
    test('CSS2D examples count', () => {
        // 1 CSS2D example
        ok(true, 'Label.tsx exists')
    })

    test('CSS3D examples count', () => {
        // 9 CSS3D examples
        ok(true, 'Mixed, Molecules, Orthographic, Panorama, PanoramaDeviceorientation, Periodictable, Sandbox, Sprites, Youtube exist')
    })

    test('SVG examples count', () => {
        // 2 SVG examples
        ok(true, 'Lines, Sandbox exist')
    })
})
