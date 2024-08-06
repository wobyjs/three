import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { TorusKnotGeometry } from 'three/src/geometries/TorusKnotGeometry.js'
export { TorusKnotGeometry } from 'three/src/geometries/TorusKnotGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import '../core/BufferGeometry'
import '../geometries/TubeGeometry'

declare module '../../lib/3/three'
{
    interface Three {
        TorusKnotGeometry: typeof TorusKnotGeometry
    }
}

Three.TorusKnotGeometry = TorusKnotGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            torusKnotGeometry: TorusKnotGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        torusKnotGeometry: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        torusKnotGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TorusKnotGeometry.d.ts
/**
 * Creates a torus knot, the particular shape of which is defined by a pair of coprime integers, p and q
 * If p and q are not coprime, the result will be a torus link.
 * @example
 * ```typescript
 * const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16,
 * const material = new THREE.MeshBasicMaterial({
 * color
 * 
 * const torusKnot = new THREE.Mesh(geometry, material,
 * scene.add(torusKnot,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusKnotGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusKnotGeometry.js}
 */

consParams.torusKnotGeometry = [
    /**
     * Create a new instance of {@link TorusKnotGeometry}
     * @param radius Radius of the torus.. Default `1`.
     * @param tube Expects a `Float`. Default `0.4`.
     * @param tubularSegments Expects a `Integer`. Default `64`.
     * @param radialSegments Expects a `Integer`. Default `8`.
     * @param p This value determines, how many times the geometry winds around its axis of rotational symmetry. Expects a `Integer`. Default `2`.
     * @param q This value determines, how many times the geometry winds around a circle in the interior of the torus. Expects a `Integer`. Default `3`.
     */

    'radius',
    'tube',
    'tubularSegments',
    'radialSegments',
    'p',
    'q',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\geometries\TorusKnotGeometry.d.ts
/**
 * Creates a torus knot, the particular shape of which is defined by a pair of coprime integers, p and q
 * If p and q are not coprime, the result will be a torus link.
 * @example
 * ```typescript
 * const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * })
 * const torusKnot = new THREE.Mesh(geometry, material)
 * scene.add(torusKnot)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/TorusKnotGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/TorusKnotGeometry.js | Source}
 */

objParams.torusKnotGeometry = [...objParams.bufferGeometry, ...objParams.tubeGeometry,
].distinct()

export type TorusKnotGeometryProps = BufferGeometryNode<TorusKnotGeometry, typeof TorusKnotGeometry, { radius?: number; tube?: number; tubularSegments?: number; radialSegments?: number; p?: number; q?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        torusKnotGeometry: { radius?: number; tube?: number; tubularSegments?: number; radialSegments?: number; p?: number; q?: number; }
    }
}

defaults.torusKnotGeometry = { radius: 1, tube: 0.4, tubularSegments: 64, radialSegments: 8, p: 2, q: 3, }
