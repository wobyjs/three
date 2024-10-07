import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { TorusGeometry } from 'three/src/geometries/TorusGeometry.js'
export { TorusGeometry } from 'three/src/geometries/TorusGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        TorusGeometry: typeof TorusGeometry
    }
}

Three.TorusGeometry = TorusGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            torusGeometry: TorusGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        torusGeometry: typeof torusGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        torusGeometry: typeof _torusGeometry
    }
}


/**
 * A class for generating torus geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.TorusGeometry(10, 3, 16, 100,
 * const material = new THREE.MeshBasicMaterial({
 * color
 * 
 * const torus = new THREE.Mesh(geometry, material,
 * scene.add(torus,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js}
 */

const torusGeometry = ([
    /**
     * Create a new instance of {@link TorusGeometry}
     * @param radius Radius of the torus, from the center of the torus to the center of the tube. Expects a `Float`. Default `1`.
     * @param tube Radius of the tube. Expects a `Float`. Default `0.4`.
     * @param radialSegments Expects a `Integer`.Default is `12`.
     * @param tubularSegments Expects a `Integer`. Default `48`.
     * @param arc Central angle. Expects a `Float`. Default `Math.PI * 2`
     */
    'radius',
    'tube',
    'radialSegments',
    'tubularSegments',
    'arc',
] as const).distinct()
consParams.torusGeometry = torusGeometry


/**
 * A class for generating torus geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * })
 * const torus = new THREE.Mesh(geometry, material)
 * scene.add(torus)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusGeometry.js | Source}
 */

const _torusGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.torusGeometry = _torusGeometry

export type TorusGeometryProps = BufferGeometryNode<TorusGeometry, typeof TorusGeometry, { radius?: number; tube?: number; radialSegments?: number; tubularSegments?: number; arc?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        torusGeometry: { radius?: number; tube?: number; radialSegments?: number; tubularSegments?: number; arc?: number; }
    }
}

defaults.torusGeometry = { tube: 0.4, radialSegments: 12, tubularSegments: 48, arc: Math.PI * 2, }
