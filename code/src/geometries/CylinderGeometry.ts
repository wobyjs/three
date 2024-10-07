import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { CylinderGeometry } from 'three/src/geometries/CylinderGeometry.js'
export { CylinderGeometry } from 'three/src/geometries/CylinderGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        CylinderGeometry: typeof CylinderGeometry
    }
}

Three.CylinderGeometry = CylinderGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cylinderGeometry: CylinderGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        cylinderGeometry: typeof cylinderGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        cylinderGeometry: typeof _cylinderGeometry
    }
}


/**
 * A class for generating cylinder geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.CylinderGeometry(5, 5, 20, 32,
 * const material = new THREE.MeshBasicMaterial({
 * color
 * 
 * const cylinder = new THREE.Mesh(geometry, material,
 * scene.add(cylinder,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CylinderGeometry.js}
 */

const cylinderGeometry = ([
    /**
     * Create a new instance of {@link CylinderGeometry}
     * @param radiusTop Radius of the cylinder at the top. Default `1`
     * @param radiusBottom Radius of the cylinder at the bottom. Default `1`
     * @param height Height of the cylinder. Default `1`
     * @param radialSegments Number of segmented faces around the circumference of the cylinder. Default `32`
     * @param heightSegments Number of rows of faces along the height of the cylinder. Expects a `Integer`. Default `1`
     * @param openEnded A Boolean indicating whether the ends of the cylinder are open or capped. Default `false`, _meaning capped_.
     * @param thetaStart Start angle for first segment. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Default `Math.PI * 2`, _which makes for a complete cylinder.
     */

    'radiusTop',
    'radiusBottom',
    'height',
    'radialSegments',
    'heightSegments',
    'openEnded',
    'thetaStart',
    'thetaLength',
] as const).distinct()
consParams.cylinderGeometry = cylinderGeometry


/**
 * A class for generating cylinder geometries.
 * @example
 * ```typescript
 * const geometry = new THREE.CylinderGeometry(5, 5, 20, 32)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * })
 * const cylinder = new THREE.Mesh(geometry, material)
 * scene.add(cylinder)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CylinderGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CylinderGeometry.js | Source}
 */

const _cylinderGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.cylinderGeometry = _cylinderGeometry

export type CylinderGeometryProps = BufferGeometryNode<CylinderGeometry, typeof CylinderGeometry, { radiusTop?: number; radiusBottom?: number; height?: number; radialSegments?: number; heightSegments?: number; openEnded?: boolean; thetaStart?: number; thetaLength?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        cylinderGeometry: { radiusTop?: number; radiusBottom?: number; height?: number; radialSegments?: number; heightSegments?: number; openEnded?: boolean; thetaStart?: number; thetaLength?: number; }
    }
}

defaults.cylinderGeometry = { radiusTop: 1, radiusBottom: 1, height: 1, radialSegments: 32, heightSegments: 1, openEnded: false, thetaStart: 0, thetaLength: 2 * Math.PI, }
