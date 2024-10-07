import { Node, Vector3 } from '../../../three-types'
import { LineCurve3 } from 'three/src/extras/curves/LineCurve3.js'
export { LineCurve3 } from 'three/src/extras/curves/LineCurve3.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/CurvePath'

declare module '../../../lib/3/three'
{
    interface Three {
        LineCurve3: typeof LineCurve3
    }
}

Three.LineCurve3 = LineCurve3

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineCurve3: LineCurve3Props,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lineCurve3: typeof lineCurve3
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lineCurve3: typeof _lineCurve3
    }
}


/**
 * A curve representing a **3d** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve3 Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve3.js}
 */

const lineCurve3 = ([
    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v1',
    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v2',
] as const).distinct()
consParams.lineCurve3 = lineCurve3


/**
 * A curve representing a **3d** line segment.
 * @see {@link https://threejs.org/docs/index.html#api/en/extras/curves/LineCurve3 | Official Documentation}
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/extras/curves/LineCurve3.js | Source}
 */

const _lineCurve3 = ([...objProps.curve,
    /**
     * The start point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v1',
    /**
     * The end point.
     * @defaultValue `new THREE.Vector3()`.
     */
    'v2',
] as const).distinct()
objProps.lineCurve3 = _lineCurve3

export type LineCurve3Props = Node<LineCurve3, typeof LineCurve3, { v1?: Vector3; v2?: Vector3; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lineCurve3: Partial<{ v1?: Vector3; v2?: Vector3; }>
    }
}

defaults.lineCurve3 = {}

