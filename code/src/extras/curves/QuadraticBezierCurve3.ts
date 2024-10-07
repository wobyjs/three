import { Node, Vector3 } from '../../../three-types'
import { QuadraticBezierCurve3 } from 'three/src/extras/curves/QuadraticBezierCurve3.js'
export { QuadraticBezierCurve3 } from 'three/src/extras/curves/QuadraticBezierCurve3.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/CurvePath'

declare module '../../../lib/3/three'
{
    interface Three {
        QuadraticBezierCurve3: typeof QuadraticBezierCurve3
    }
}

Three.QuadraticBezierCurve3 = QuadraticBezierCurve3

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            quadraticBezierCurve3: QuadraticBezierCurve3Props,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        quadraticBezierCurve3: typeof quadraticBezierCurve3
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        quadraticBezierCurve3: typeof _quadraticBezierCurve3
    }
}


/**
 * Create a smooth **3d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif bezier curve
 * defined by a start point, end point and a single control point.
 * @example
 * ```typescript
 * const curve = new THREE.QuadraticBezierCurve3(
 * new THREE.Vector3(-10, 0, 0),
 * new THREE.Vector3(20, 15, 0),
 * new THREE.Vector3(10, 0, 0),
 * const points = curve.getPoints(50,
 * const geometry = new THREE.BufferGeometry().setFromPoints(points,
 * const material = new THREE.LineBasicMaterial({
 * color
 * 
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve3 Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve3.js}
 */

const quadraticBezierCurve3 = ([
    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v0',
    /**
     * The control point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v1',
    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v2',
] as const).distinct()
consParams.quadraticBezierCurve3 = quadraticBezierCurve3


/**
 * Create a smooth **3d** {@link http://en.wikipedia.org/wiki/B%C3%A9zier_curve#mediaviewer/File:B%C3%A9zier_2_big.gif | quadratic bezier curve
 * defined by a start point, end point and a single control point.
 * @example
 * ```typescript
 * const curve = new THREE.QuadraticBezierCurve3(
 * new THREE.Vector3(-10, 0, 0),
 * new THREE.Vector3(20, 15, 0),
 * new THREE.Vector3(10, 0, 0))
 * const points = curve.getPoints(50)
 * const geometry = new THREE.BufferGeometry().setFromPoints(points)
 * const material = new THREE.LineBasicMaterial({
 *     color: 0xff0000
 * })
 * // Create the final object to add to the scene
 * const curveObject = new THREE.Line(geometry, material)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/QuadraticBezierCurve3 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/QuadraticBezierCurve3.js | Source}
 */

const _quadraticBezierCurve3 = ([...objProps.curve,
    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v0',
    /**
     * The control point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v1',
    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`
     */
    'v2',
] as const).distinct()
objProps.quadraticBezierCurve3 = _quadraticBezierCurve3

export type QuadraticBezierCurve3Props = Node<QuadraticBezierCurve3, typeof QuadraticBezierCurve3, { v0?: Vector3; v1?: Vector3; v2?: Vector3; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        quadraticBezierCurve3: Partial<{ v0?: Vector3; v1?: Vector3; v2?: Vector3; }>
    }
}

defaults.quadraticBezierCurve3 = {}

