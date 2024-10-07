import { Vector2 } from 'three/src/math/Vector2.js'
import { Node } from '../../../three-types'
import { Vector3 } from 'three/src/math/Vector3.js'
import { CurvePath } from 'three/src/extras/core/CurvePath.js'
export { CurvePath } from 'three/src/extras/core/CurvePath.js'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            curvePath: CurvePathProps<Vector2 | Vector3>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        curve: typeof curve
        curvePath: typeof curvePath
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        curve: typeof _curve
        curvePath: typeof _curvePath
    }
}

/**
 * A class containing utility functions for shapes.
 * @remarks Note that these are all linear functions so it is necessary to calculate separately for x, y (and z, w if present) components of a vector.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/ShapeUtils Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ShapeUtils.js}
 */

/**
 * An base class for creating a {@link Curve} object that contains methods for interpolation
 * @remarks
 * For an array of Curves see {@link THREE.CurvePath}.
 * @remarks
 * This following curves inherit from THREE.Curve:
 *
 * **2D curves**
 *  - {@link THREE.ArcCurve}
 *  - {@link THREE.CubicBezierCurve}
 *  - {@link THREE.EllipseCurve}
 *  - {@link THREE.LineCurve}
 *  - {@link THREE.QuadraticBezierCurve}
 *  - {@link THREE.SplineCurve}
 *
 * **3d curves**
 *  - {@link THREE.CatmullRomCurve3}
 *  - {@link THREE.CubicBezierCurve3}
 *  - {@link THREE.LineCurve3}
 *  - {@link THREE.QuadraticBezierCurve3}
 *
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Curve Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Curve.js}
 */

const curve = ([
] as const).distinct()
consParams.curve = curve

/**
 * A class containing utility functions for shapes.
 * @remarks Note that these are all linear functions so it is necessary to calculate separately for x, y (and z, w if present) components of a vector.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/ShapeUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ShapeUtils.js | Source}
 */

/**
 * An abstract base class for creating a {@link Curve} object that contains methods for interpolation
 * @remarks
 * For an array of Curves see {@link THREE.CurvePath | CurvePath}.
 * @remarks
 * This following curves inherit from THREE.Curve:
 *
 * **2d curves**
 *  - {@link THREE.ArcCurve}
 *  - {@link THREE.CubicBezierCurve}
 *  - {@link THREE.EllipseCurve}
 *  - {@link THREE.LineCurve}
 *  - {@link THREE.QuadraticBezierCurve}
 *  - {@link THREE.SplineCurve}
 *
 * **3d curves**
 *  - {@link THREE.CatmullRomCurve3}
 *  - {@link THREE.CubicBezierCurve3}
 *  - {@link THREE.LineCurve3}
 *  - {@link THREE.QuadraticBezierCurve3}
 *
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/Curve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/Curve.js | Source}
 */

const _curve = ([
    /**
     * This value determines the amount of divisions when calculating the cumulative segment lengths of a {@link Curve}
     * via {@link .getLengths}.
     * To ensure precision when using methods like {@link .getSpacedPoints it is recommended to increase {@link .arcLengthDivisions} if the {@link Curve} is very large.
     * @defaultValue `200`
     * @remarks Expects a `Integer`
     */
    'arcLengthDivisions',
] as const).distinct()
objProps.curve = _curve


/**
 * Curved Path - a curve path is simply a array of connected curves, but retains the api of a curve.
 * @remarks
 * A {@link CurvePath} is simply an array of connected curves, but retains the api of a curve.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/CurvePath Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/CurvePath.js}
 */

const curvePath = ([
] as const).distinct()
consParams.curvePath = curvePath


/**
 * Curved Path - a curve path is simply a array of connected curves, but retains the api of a curve.
 * @remarks
 * A {@link CurvePath} is simply an array of connected curves, but retains the api of a curve.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/core/CurvePath | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/core/CurvePath.js | Source}
 */

const _curvePath = ([
    /**
     * The array of {@link Curve | Curves}.
     * @defaultValue []`
     */
    'curves',
    /**
     * Whether or not to automatically close the path.
     * @defaultValue false
     */
    'autoClose',
] as const).distinct()
objProps.curvePath = _curvePath

export type CurvePathProps<T extends Vector2 | Vector3> = Node<CurvePath<T>, typeof CurvePath, {}>
