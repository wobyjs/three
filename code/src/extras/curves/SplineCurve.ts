import { Node, Vector2 } from '../../../three-types'
import { SplineCurve } from 'three/src/extras/curves/SplineCurve.js'
export { SplineCurve } from 'three/src/extras/curves/SplineCurve.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/CurvePath'

declare module '../../../lib/3/three'
{
    interface Three {
        SplineCurve: typeof SplineCurve
    }
}

Three.SplineCurve = SplineCurve

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            splineCurve: SplineCurveProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        splineCurve: typeof splineCurve
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        splineCurve: typeof _splineCurve
    }
}


/**
 * Create a smooth **2D** spline curve from a series of points.
 * @example
 * ```typescript
 * // Create a sine-like wave
 * const curve = new THREE.SplineCurve([
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(-5, 5),
 * new THREE.Vector2(0, 0),
 * new THREE.Vector2(5,
-5),
 * new THREE.Vector2(10, 0)].distinct()
 * const points = curve.getPoints(50,
 * const geometry = new THREE.BufferGeometry().setFromPoints(points,
 * const material = new THREE.LineBasicMaterial({
 * color
 * 
 * // Create the final object to add to the scene
 * const splineObject = new THREE.Line(geometry, material,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/SplineCurve Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/SplineCurve.js}
 */

const splineCurve = ([
    /**
     * The array of {@link THREE.Vector2} points that define the curve.
     * @defaultValue `[]`
     */
    'points',
] as const).distinct()
consParams.splineCurve = splineCurve


/**
 * Create a smooth **2d** spline curve from a series of points.
 * @example
 * ```typescript
 * // Create a sine-like wave
 * const curve = new THREE.SplineCurve([
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(-5, 5),
 * new THREE.Vector2(0, 0),
 * new THREE.Vector2(5, -5),
 * new THREE.Vector2(10, 0)].distinct())
 * const points = curve.getPoints(50)
 * const geometry = new THREE.BufferGeometry().setFromPoints(points)
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * })
 * // Create the final object to add to the scene
 * const splineObject = new THREE.Line(geometry, material)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/SplineCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/SplineCurve.js | Source}
 */

const _splineCurve = ([...objProps.curve,
    /**
     * The array of {@link THREE.Vector2 | Vector2} points that define the curve.
     * @defaultValue []
     */
    'points',
] as const).distinct()
objProps.splineCurve = _splineCurve

export type SplineCurveProps = Node<SplineCurve, typeof SplineCurve, { points?: Vector2[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        splineCurve: Partial<{ points?: Vector2[]; }>
    }
}

defaults.splineCurve = {}

