import { Node } from '../../three-types'
import { Quaternion } from 'three/src/math/Quaternion.js'
// export { Quaternion } from 'three/src/math/Quaternion.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Quaternion: typeof Quaternion
    }
}

Three.Quaternion = Quaternion

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            quaternion: QuaternionProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        quaternion: typeof quaternion
        quaternionLike: typeof quaternionLike
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        quaternion: typeof _quaternion
        quaternionLike: typeof _quaternionLike
    }
}



const quaternionLike = ([
] as const).distinct()
consParams.quaternionLike = quaternionLike



const _quaternionLike = ([
] as const).distinct()
objProps.quaternionLike = _quaternionLike

/**
 * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
 *
 * @example
 * const quaternion = new THREE.Quaternion(,
 * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 ,
 * const vector = new THREE.Vector3( 1, 0, 0 ,
 * vector.applyQuaternion( quaternion ,
 */

const quaternion = ([
    /**
     * @default 0
     */
    'x',
    /**
     * @default 0
     */
    'y',
    /**
     * @default 0
     */
    'z',
    /**
     * @default 1
     */
    'w',
] as const).distinct()
consParams.quaternion = quaternion

/**
 * Implementation of a quaternion. This is used for rotating things without incurring in the dreaded gimbal lock issue, amongst other advantages.
 *
 * @example
 * const quaternion = new THREE.Quaternion()
 * quaternion.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 )
 * const vector = new THREE.Vector3( 1, 0, 0 )
 * vector.applyQuaternion( quaternion )
 */

const _quaternion = ([
    /**
     * @default 0
     */
    'x',
    /**
     * @default 0
     */
    'y',
    /**
     * @default 0
     */
    'z',
    /**
     * @default 1
     */
    'w',
] as const).distinct()
objProps.quaternion = _quaternion

export type QuaternionProps = Node<Quaternion, typeof Quaternion, { x?: number; y?: number; z?: number; w?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        quaternion: { x?: number; y?: number; z?: number; w?: number; }
    }
}

defaults.quaternion = {}

