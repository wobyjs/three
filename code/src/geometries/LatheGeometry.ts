import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { Vector2 } from '../../three-types'
import { LatheGeometry } from 'three/src/geometries/LatheGeometry.js'
export { LatheGeometry } from 'three/src/geometries/LatheGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        LatheGeometry: typeof LatheGeometry
    }
}

Three.LatheGeometry = LatheGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            latheGeometry: LatheGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        latheGeometry: typeof latheGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        latheGeometry: typeof _latheGeometry
    }
}


/**
 * Creates meshes with axial symmetry like vases
 * @remarks
 * The lathe rotates around the Y axis.
 * @example
 * ```typescript
 * const points = ,
 * for (let i = 0, i & lt, 10, i++) {
 * points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5,
(i - 5) * 2),
 * }
 * const geometry = new THREE.LatheGeometry(points,
 * const material = new THREE.MeshBasicMaterial({
 * color
 * 
 * const lathe = new THREE.Mesh(geometry, material,
 * scene.add(lathe,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/LatheGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/LatheGeometry.js}
 */

const latheGeometry = ([
    /**
     * This creates a {@link LatheGeometry} based on the parameters.
     * @param points Array of Vector2s. The x-coordinate of each point must be greater than zero.
     *           default `[new Vector2(0,
-0.5), new Vector2(0.5, 0), new Vector2(0, 0.5)]` _which creates a simple diamond shape_.
     * @param segments The number of circumference segments to generate. Expects a `Integer`. Default `12`.
     * @param phiStart The starting angle in radians. Expects a `Float`. Default `0`.
     * @param phiLength The radian (0 to 2*PI) range of the lathed section 2*PI is a closed lathe, less than 2PI is a portion. Expects a `Float`. Default `Math.PI * 2`.
     */
    'points',
    'segments',
    'phiStart',
    'phiLength',
] as const).distinct()
consParams.latheGeometry = latheGeometry


/**
 * Creates meshes with axial symmetry like vases
 * @remarks
 * The lathe rotates around the Y axis.
 * @example
 * ```typescript
 * const points = [].distinct()
 * for (let i = 0; i & lt; 10; i++) {
 *     points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2))
 * }
 * const geometry = new THREE.LatheGeometry(points)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * })
 * const lathe = new THREE.Mesh(geometry, material)
 * scene.add(lathe)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/LatheGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/LatheGeometry.js | Source}
 */

const _latheGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.latheGeometry = _latheGeometry


export type LatheGeometryProps = BufferGeometryNode<LatheGeometry, typeof LatheGeometry, { points?: Vector2[]; segments?: number; phiStart?: number; phiLength?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        latheGeometry: { points?: Vector2[]; segments?: number; phiStart?: number; phiLength?: number; }
    }
}

defaults.latheGeometry = { points: [[0, -0.5], [0.5, 0], [0, 0.5]], segments: 12, phiStart: 0, phiLength: 2 * Math.PI, }
