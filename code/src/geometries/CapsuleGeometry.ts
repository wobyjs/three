import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { CapsuleGeometry } from 'three/src/geometries/CapsuleGeometry.js'
export { CapsuleGeometry } from 'three/src/geometries/CapsuleGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        CapsuleGeometry: typeof CapsuleGeometry
    }
}

Three.CapsuleGeometry = CapsuleGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            capsuleGeometry: CapsuleGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        capsuleGeometry: typeof capsuleGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        capsuleGeometry: typeof _capsuleGeometry
    }
}


/**
 * {@link CapsuleGeometry} is a geometry class for a capsule with given radii and height
 * @remarks It is constructed using a lathe.
 * @example
 * ```typescript
 * const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8,
 * const material = new THREE.MeshBasicMaterial({
 * color
 * 
 * const capsule = new THREE.Mesh(geometry, material,
 * scene.add(capsule,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CapsuleGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CapsuleGeometry.js}
 */

const capsuleGeometry = ([
    /**
     * Create a new instance of {@link CapsuleGeometry}
     * @param radius Radius of the capsule. Expects a `Float`. Default `1`
     * @param length Length of the middle section. Expects a `Float`. Default `1`
     * @param capSegments Number of curve segments used to build the caps. Expects a `Integer`. Default `4`
     * @param radialSegments Number of segmented faces around the circumference of the capsule. Expects a `Integer`. Default `8`
     */
    'radius',
    'length',
    'capSegments',
    'radialSegments',
] as const).distinct()
consParams.capsuleGeometry = capsuleGeometry


/**
 * {@link CapsuleGeometry} is a geometry class for a capsule with given radii and height
 * @remarks It is constructed using a lathe.
 * @example
 * ```typescript
 * const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0x00ff00
 * })
 * const capsule = new THREE.Mesh(geometry, material)
 * scene.add(capsule)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CapsuleGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CapsuleGeometry.js | Source}
 */

const _capsuleGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.capsuleGeometry = _capsuleGeometry

export type CapsuleGeometryProps = BufferGeometryNode<CapsuleGeometry, typeof CapsuleGeometry, { radius?: number; length?: number; capSegments?: number; radialSegments?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        capsuleGeometry: { radius?: number; length?: number; capSegments?: number; radialSegments?: number; }
    }
}

defaults.capsuleGeometry = { radius: 1, length: 1, capSegments: 4, radialSegments: 8, }