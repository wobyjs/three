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
        curvePath: typeof curvePath
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
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
 * A class containing utility functions for shapes.
 * @remarks Note that these are all linear functions so it is necessary to calculate separately for x, y (and z, w if present) components of a vector.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/ShapeUtils | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/ShapeUtils.js | Source}
 */

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
