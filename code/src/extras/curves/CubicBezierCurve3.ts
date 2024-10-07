import { Node, Vector3 } from '../../../three-types'
import { CubicBezierCurve3 } from 'three/src/extras/curves/CubicBezierCurve3.js'
export { CubicBezierCurve3 } from 'three/src/extras/curves/CubicBezierCurve3.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/CurvePath'

declare module '../../../lib/3/three'
{
    interface Three {
        CubicBezierCurve3: typeof CubicBezierCurve3
    }
}

Three.CubicBezierCurve3 = CubicBezierCurve3

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubicBezierCurve3: CubicBezierCurve3Props,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        cubicBezierCurve3: typeof cubicBezierCurve3
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        cubicBezierCurve3: typeof _cubicBezierCurve3
    }
}


/**
 * Create a smooth **3d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg bezier curve
 * defined by a start point, endpoint and two control points.
 * @example
 * ```typescript
 * const curve = new THREE.CubicBezierCurve(
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(-5, 15),
 * new THREE.Vector2(20, 15),
 * new THREE.Vector2(10, 0),
 * const points = curve.getPoints(50,
 * const geometry = new THREE.BufferGeometry().setFromPoints(points,
 * const material = new THREE.LineBasicMaterial({
 * color
 * 
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js}
 */

const cubicBezierCurve3 = ([
    /**
     * The starting point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v0',
    /**
     * The first control point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v1',
    /**
     * The second control point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v2',
    /**
     * The ending point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v3',
] as const).distinct()
consParams.cubicBezierCurve3 = cubicBezierCurve3


/**
 * Create a smooth **3d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:Bezier_curve.svg | cubic bezier curve
 * defined by a start point, endpoint and two control points.
 * @example
 * ```typescript
 * const curve = new THREE.CubicBezierCurve(
 * new THREE.Vector2(-10, 0),
 * new THREE.Vector2(-5, 15),
 * new THREE.Vector2(20, 15),
 * new THREE.Vector2(10, 0))
 * const points = curve.getPoints(50)
 * const geometry = new THREE.BufferGeometry().setFromPoints(points)
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * })
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/CubicBezierCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/CubicBezierCurve.js | Source}
 */

const _cubicBezierCurve3 = ([...objProps.curve,
    /**
   * The starting point.
   * @defaultValue `new THREE.Vector3()`.
   */
    'v0',
    /**
     * The first control point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v1',
    /**
     * The second control point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v2',
    /**
     * The ending point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v3',
] as const).distinct()
objProps.cubicBezierCurve3 = _cubicBezierCurve3

export type CubicBezierCurve3Props = Node<CubicBezierCurve3, typeof CubicBezierCurve3, { v0?: Vector3; v1?: Vector3; v2?: Vector3; v3?: Vector3; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cubicBezierCurve3: Partial<{ v0?: Vector3; v1?: Vector3; v2?: Vector3; v3?: Vector3; }>
    }
}

defaults.cubicBezierCurve3 = {}

