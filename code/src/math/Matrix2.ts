import { Node } from '../../three-types'
import { Matrix2 } from 'three/src/math/Matrix2.js'
export * from 'three/src/math/Matrix2.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Matrix2: typeof Matrix2
    }
}

Three.Matrix2 = Matrix2

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            Matrix2: Matrix2Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        matrix2: typeof matrix2
        matrix: typeof matrix
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        matrix2: typeof _matrix2
        matrix: typeof _matrix
    }
}



// https://threejs.org/docs/#api/en/math/Matrix2
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



// https://threejs.org/docs/#api/en/math/Matrix2
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
 * ( class Matrix2 implements Matrix )
 */

const matrix2 = ([
    /**
     * Creates an identity matrix.
     */
    /**
     * Creates a 3x3 matrix with the given arguments in row-major order.
     */

    'n11',
    'n12',
    'n21',
    'n22',
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]
     */
    'elements',
] as const).distinct()
consParams.matrix2 = matrix2

/**
 * ( class Matrix2 implements Matrix )
 */

const _matrix2 = ([...objProps.matrix,
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 1, 0, 0, 0, 1]

     */
    'elements',
] as const).distinct()
objProps.matrix2 = _matrix2

export type Matrix2Props = Node<Matrix2, typeof Matrix2, { n11: number; n12: number; n21: number; n22: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        Matrix2: Partial<{ n11: number; n12: number; n21: number; n22: number; }>
    }
}

defaults.Matrix2 = {}

