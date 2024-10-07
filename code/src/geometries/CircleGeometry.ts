import { BufferGeometryNode } from '../core/BufferGeometryNode'
import { CircleGeometry } from 'three/src/geometries/CircleGeometry.js'
export { CircleGeometry } from 'three/src/geometries/CircleGeometry.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        CircleGeometry: typeof CircleGeometry
    }
}

Three.CircleGeometry = CircleGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            circleGeometry: CircleGeometryProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        circleGeometry: typeof circleGeometry
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        circleGeometry: typeof _circleGeometry
    }
}


/**
 * {@link CircleGeometry} is a simple shape of Euclidean geometry
 * @remarks
 * It is constructed from a number of triangular segments that are oriented around a central point and extend as far out as a given radius
 * It is built counter-clockwise from a start angle and a given central angle
 * It can also be used to create regular polygons, where the number of segments determines the number of sides.
 * @example
 * ```typescript
 * const geometry = new THREE.CircleGeometry(5, 32,
 * const material = new THREE.MeshBasicMaterial({
 * color
 * 
 * const circle = new THREE.Mesh(geometry, material,
 * scene.add(circle,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CircleGeometry.js}
 */

const circleGeometry = ([
    /**
     * Create a new instance of {@link CircleGeometry}
     * @param radius Radius of the circle. Expects a `Float`. Default `1`
     * @param segments Number of segments (triangles). Expects a `Integer`. Minimum `3`. Default `32`
     * @param thetaStart Start angle for first segment. Expects a `Float`. Default `0`, _(three o'clock position)_.
     * @param thetaLength The central angle, often called theta, of the circular sector. Expects a `Float`. Default `Math.PI * 2`, _which makes for a complete circle_.
     */
    'radius',
    'segments',
    'thetaStart',
    'thetaLength',
] as const).distinct()
consParams.circleGeometry = circleGeometry


/**
 * {@link CircleGeometry} is a simple shape of Euclidean geometry
 * @remarks
 * It is constructed from a number of triangular segments that are oriented around a central point and extend as far out as a given radius
 * It is built counter-clockwise from a start angle and a given central angle
 * It can also be used to create regular polygons, where the number of segments determines the number of sides.
 * @example
 * ```typescript
 * const geometry = new THREE.CircleGeometry(5, 32)
 * const material = new THREE.MeshBasicMaterial({
 *     color: 0xffff00
 * })
 * const circle = new THREE.Mesh(geometry, material)
 * scene.add(circle)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/geometries/CircleGeometry | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/geometries/CircleGeometry.js | Source}
 */

const _circleGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.circleGeometry = _circleGeometry

export type CircleGeometryProps = BufferGeometryNode<CircleGeometry, typeof CircleGeometry, { radius?: number; segments?: number; thetaStart?: number; thetaLength?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        circleGeometry: { radius?: number; segments?: number; thetaStart?: number; thetaLength?: number; }
    }
}

defaults.circleGeometry = { radius: 1, segments: 32, thetaStart: 0, thetaLength: 2 * Math.PI, }
