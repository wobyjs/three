import { Object3DNode } from '../../../three-types'
import { EllipseCurve } from 'three/src/extras/curves/EllipseCurve.js'
export { EllipseCurve } from 'three/src/extras/curves/EllipseCurve.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../core/CurvePath'

declare module '../../../lib/3/three'
{
    interface Three {
        EllipseCurve: typeof EllipseCurve
    }
}

Three.EllipseCurve = EllipseCurve

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ellipseCurve: EllipseCurveProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ellipseCurve: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        ellipseCurve: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\Curves.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\EllipseCurve.d.ts
/**
 * Creates a 2d curve in the shape of an ellipse
 * @remarks
 * Setting the {@link xradius} equal to the {@link yRadius} will result in a circle.
 * @example
 * ```typescript
 * const curve = new THREE.EllipseCurve(
 *   0,
0,
 // ax, aY
 *   10, 10,
// xradius, yRadius
 *   0,
2 * Math.PI,
// aStartAngle, aEndAngle
 *   false,
 // aClockwise
 *   0       // aRotation
 *   ,
 * const points = curve.getPoints(50,
 * const geometry = new THREE.BufferGeometry().setFromPoints(points,
 * const material = new THREE.LineBasicMaterial({ color 
 * // Create the final object to add to the scene
 * const ellipse = new THREE.Line(geometry, material,
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/EllipseCurve Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/EllipseCurve.js}
 */

consParams.ellipseCurve = [
    /**
  * The X center of the ellipse.
  * @remarks Expects a `Float`
  * @defaultValue `0`
  */
    'aX',
    /**
     * The Y center of the ellipse.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    'aY',
    /**
     * The radius of the ellipse in the x direction.
     * @defaultValue `1`
     */
    'xradius',
    /**
     * The radius of the ellipse in the y direction.
     * @defaultValue `1`
     */
    'yRadius',
    /**
     * The start angle of the curve in radians starting from the middle right side.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    'aStartAngle',
    /**
     * The end angle of the curve in radians starting from the middle right side.
     * @remarks Expects a `Float`
     * @defaultValue `2 * Math.PI`
     */
    'aEndAngle',
    /**
     * Whether the ellipse is drawn clockwise.
     * @defaultValue `false``
     */
    'aClockwise',
    /**
     * The rotation angle of the ellipse in radians, counterclockwise from the positive X axis (optional).
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    'aRotation',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\Curves.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\extras\curves\EllipseCurve.d.ts
/**
 * Creates a 2d curve in the shape of an ellipse
 * @remarks
 * Setting the {@link xradius} equal to the {@link yRadius} will result in a circle.
 * @example
 * ```typescript
 * const curve = new THREE.EllipseCurve(
 *   0,  0,  // ax, aY
 *   10, 10, // xradius, yRadius
 *   0,  2 * Math.PI, // aStartAngle, aEndAngle
 *   false,  // aClockwise
 *   0       // aRotation
 *   )
 * const points = curve.getPoints(50)
 * const geometry = new THREE.BufferGeometry().setFromPoints(points)
 * const material = new THREE.LineBasicMaterial({ color: 0xff0000 })
 * // Create the final object to add to the scene
 * const ellipse = new THREE.Line(geometry, material)
 * ```
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/EllipseCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/EllipseCurve.js | Source}
 */

objParams.ellipseCurve = [...objParams.curve,
    /**
     * The X center of the ellipse.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    'aX',
    /**
     * The Y center of the ellipse.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    'aY',
    /**
     * The radius of the ellipse in the x direction.
     * @defaultValue `1`
     */
    'xradius',
    /**
     * The radius of the ellipse in the y direction.
     * @defaultValue `1`
     */
    'yRadius',
    /**
     * The start angle of the curve in radians starting from the middle right side.
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    'aStartAngle',
    /**
     * The end angle of the curve in radians starting from the middle right side.
     * @remarks Expects a `Float`
     * @defaultValue `2 * Math.PI`
     */
    'aEndAngle',
    /**
     * Whether the ellipse is drawn clockwise.
     * @defaultValue `false``
     */
    'aClockwise',
    /**
     * The rotation angle of the ellipse in radians, counterclockwise from the positive X axis (optional).
     * @remarks Expects a `Float`
     * @defaultValue `0`
     */
    'aRotation',
].distinct()

export type EllipseCurveProps = Object3DNode<EllipseCurve, typeof EllipseCurve, { aX?: number; aY?: number; xRadius?: number; yRadius?: number; aStartAngle?: number; aEndAngle?: number; aClockwise?: boolean; aRotation?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ellipseCurve: Partial<{ aX?: number; aY?: number; xRadius?: number; yRadius?: number; aStartAngle?: number; aEndAngle?: number; aClockwise?: boolean; aRotation?: number; }>
    }
}

defaults.ellipseCurve = { aX: 0, aY: 0, xRadius: 1, yRadius: 1, aStartAngle: 0, aEndAngle: 2 * Math.PI, aClockwise: false, aRotation: 0, }
