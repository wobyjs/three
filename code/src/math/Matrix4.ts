import { Node } from '../../three-types'
import { Matrix4 } from 'three/src/math/Matrix4.js'
// export { Matrix4 } from 'three/src/math/Matrix4.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Matrix3'

declare module '../../lib/3/three'
{
    interface Three {
        Matrix4: typeof Matrix4
    }
}

Three.Matrix4 = Matrix4

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            matrix4: Matrix4Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        matrix4: typeof matrix4
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        matrix4: typeof _matrix4
    }
}


/**
 * A 4x4 Matrix.
 *
 * @example
 * // Simple rig for rotating around 3 axes
 * const m = new THREE.Matrix4(,
 * const m1 = new THREE.Matrix4(,
 * const m2 = new THREE.Matrix4(,
 * const m3 = new THREE.Matrix4(,
 * const alpha = 0,
 * const beta = Math.PI,
 * const gamma = Math.PI/2,
 * m1.makeRotationX( alpha ,
 * m2.makeRotationY( beta ,
 * m3.makeRotationZ( gamma ,
 * m.multiplyMatrices( m1, m2 ,
 * m.multiply( m3 ,
 */

const matrix4 = ([
    /**
     * Creates an identity matrix.
     */

    /**
     * Creates a 4x4 matrix with the given arguments in row-major order.
     */
    'n11',
    'n12',
    'n13',
    'n14',
    'n21',
    'n22',
    'n23',
    'n24',
    'n31',
    'n32',
    'n33',
    'n34',
    'n41',
    'n42',
    'n43',
    'n44',
] as const).distinct()
consParams.matrix4 = matrix4


/**
 * A 4x4 Matrix.
 *
 * @example
 * // Simple rig for rotating around 3 axes
 * const m = new THREE.Matrix4()
 * const m1 = new THREE.Matrix4()
 * const m2 = new THREE.Matrix4()
 * const m3 = new THREE.Matrix4()
 * const alpha = 0
 * const beta = Math.PI
 * const gamma = Math.PI/2
 * m1.makeRotationX( alpha )
 * m2.makeRotationY( beta )
 * m3.makeRotationZ( gamma )
 * m.multiplyMatrices( m1, m2 )
 * m.multiply( m3 )
 */

const _matrix4 = ([...objProps.matrix,
    /**
     * Array with matrix values.
     * @default [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]

     */
    'elements',
] as const).distinct()
objProps.matrix4 = _matrix4

export type Matrix4Props = Node<Matrix4, typeof Matrix4, { n11: number; n12: number; n13: number; n14: number; n21: number; n22: number; n23: number; n24: number; n31: number; n32: number; n33: number; n34: number; n41: number; n42: number; n43: number; n44: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        matrix4: Partial<{ n11: number; n12: number; n13: number; n14: number; n21: number; n22: number; n23: number; n24: number; n31: number; n32: number; n33: number; n34: number; n41: number; n42: number; n43: number; n44: number; }>
    }
}

defaults.matrix4 = {}

