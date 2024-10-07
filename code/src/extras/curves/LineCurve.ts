import { Node, Vector2 } from '../../../three-types'
import { LineCurve } from 'three/src/extras/curves/LineCurve.js'
export { LineCurve } from 'three/src/extras/curves/LineCurve.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/CurvePath'

declare module '../../../lib/3/three'
{
    interface Three {
        LineCurve: typeof LineCurve
    }
}

Three.LineCurve = LineCurve

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineCurve: LineCurveProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lineCurve: typeof lineCurve
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lineCurve: typeof _lineCurve
    }
}


/**
 * A curve representing a **2D** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve.js}
 */

const lineCurve = ([
    /**
     * The start point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v1',
    /**
     * The end point
     * @defaultValue `new THREE.Vector2()`
     */
    'v2',
] as const).distinct()
consParams.lineCurve = lineCurve


/**
 * A curve representing a **2d** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve.js | Source}
 */

const _lineCurve = ([...objProps.curve,
    /**
     * The start point.
     * @defaultValue `new THREE.Vector2()`
     */
    'v1',
    /**
     * The end point
     * @defaultValue `new THREE.Vector2()`
     */
    'v2',
] as const).distinct()
objProps.lineCurve = _lineCurve

export type LineCurveProps = Node<LineCurve, typeof LineCurve, { v1?: Vector2; v2?: Vector2; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lineCurve: Partial<{ v1?: Vector2; v2?: Vector2; }>
    }
}

defaults.lineCurve = {}

