import { Node } from '../../three-types'
import { Matrix3 } from 'three/src/math/Matrix3.js'
export * from 'three/src/math/Matrix3.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Matrix3: typeof Matrix3
    }
}

Three.Matrix3 = Matrix3

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            matrix3: Matrix3Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        matrix3: typeof matrix3
        matrix: typeof matrix
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        matrix3: typeof _matrix3
        matrix: typeof _matrix
    }
}



// https://threejs.org/docs/#api/en/math/Matrix3
/**
 * ( interface Matrix )
 */

const matrix = ([
    /**
     * Array with matrix values.
     */
    'elements',
] as const).distinct()
consParams.matrix = matrix



// https://threejs.org/docs/#api/en/math/Matrix3
/**
 * ( interface Matrix )
 */

const _matrix = ([
    /**
     * Array with matrix values.
     */
    'elements',
] as const).distinct()
objProps.matrix = _matrix

/**
 * ( class Matrix3 implements Matrix )
 */

const matrix3 = ([
    /**
     * Creates an identity matrix.
     */
    /**
     * Creates a 3x3 matrix with the given arguments in row-major order.
     */

    'n11',
    'n12',
    'n13',
    'n21',
    'n22',
    'n23',
    'n31',
    'n32',
    'n33',
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]
     */
    'elements',
] as const).distinct()
consParams.matrix3 = matrix3

/**
 * ( class Matrix3 implements Matrix )
 */

const _matrix3 = ([...objProps.matrix,
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1] 

     */
    'elements',
] as const).distinct()
objProps.matrix3 = _matrix3

export type Matrix3Props = Node<Matrix3, typeof Matrix3, { n11: number; n12: number; n13: number; n21: number; n22: number; n23: number; n31: number; n32: number; n33: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        matrix3: Partial<{ n11: number; n12: number; n13: number; n21: number; n22: number; n23: number; n31: number; n32: number; n33: number; }>
    }
}

defaults.matrix3 = {}

