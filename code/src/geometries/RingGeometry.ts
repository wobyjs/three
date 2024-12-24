import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { RingGeometry } from 'three/src/geometries/RingGeometry.js'
export { RingGeometry } from 'three/src/geometries/RingGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        RingGeometry: typeof RingGeometry
    }
}

Three.RingGeometry = RingGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ringGeometry: RingGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        ringGeometry: typeof ringGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        ringGeometry: typeof _ringGeometry
    }
}


/**
 * A class for generating a two-dimensional ring geometry.
 * @example
 * ```typescript
 * const geometry = new THREE.RingGeometry(1, 5, 32,
 * const material = new THREE.MeshBasicMaterial({
 * color,
 * side.DoubleSide
 * 
 * const mesh = new THREE.Mesh(geometry, material,
 * scene.add(mesh,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/RingGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/RingGeometry.js}
 */

const ringGeometry = ([
    /**
     * Create a new instance of {@link RingGeometry}
     * @param innerRadius Expects a `Float`. Default `0.5`.
     * @param outerRadius Expects a `Float`. Default `1`.
     * @param thetaSegments Number of segments. A higher number means the ring will be more round. Minimum is 3. Expects a `Integer`. Default `32`.
     * @param phiSegments Number of segments per ring segment. Minimum is `1`. Expects a `Integer`. Default `1`.
     * @param thetaStart Starting angle. Expects a `Float`. Default `0`.
     * @param thetaLength Central angle. Expects a `Float`. Default `Math.PI * 2`.
     */

    'innerRadius',
    'outerRadius',
    'thetaSegments',
    'phiSegments',
    'thetaStart',
    'thetaLength',
] as const).distinct()
consParams.ringGeometry = ringGeometry


/**
 * A class for generating a two-dimensional ring geometry.
 * @example
 * ```typescript
 * const geometry = new THREE.RingGeometry(1, 5, 32)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00,
 *     side: THREE.DoubleSide
 * })
 * const mesh = new THREE.Mesh(geometry, material)
 * scene.add(mesh)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/RingGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/RingGeometry.js | Source}
 */

const _ringGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.ringGeometry = _ringGeometry


export type RingGeometryProps = BufferGeometryNode<RingGeometry, typeof RingGeometry, [innerRadius?: number, outerRadius?: number, thetaSegments?: number, phiSegments?: number, thetaStart?: number, thetaLength?: number]>

declare module '../../lib/3/defaults' {
    interface defaults {
        ringGeometry: { innerRadius?: number; outerRadius?: number; thetaSegments?: number; phiSegments?: number; thetaStart?: number; thetaLength?: number; }
    }
}

defaults.ringGeometry = { innerRadius: 0.5, outerRadius: 1, thetaSegments: 32, phiSegments: 1, thetaStart: 0, thetaLength: Math.PI * 2, }
