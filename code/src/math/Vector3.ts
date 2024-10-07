import { Node } from '../../three-types'
import { Vector3 } from 'three/src/math/Vector3.js'
export { Vector3 } from 'three/src/math/Vector3.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Vector3: typeof Vector3
    }
}

Three.Vector3 = Vector3

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vector3: Vector3Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        vector3: typeof vector3
        vector3Like: typeof vector3Like
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        vector3: typeof _vector3
        vector3Like: typeof _vector3Like
    }
}



const vector3Like = ([
] as const).distinct()
consParams.vector3Like = vector3Like

/**
 * 3d vector.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js}
 *
 * @example
 * const a = new THREE.Vector3( 1, 0, 0 ,
 * const b = new THREE.Vector3( 0, 1, 0 ,
 * const c = new THREE.Vector3(,
 * c.crossVectors( a, b ,
 */

const vector3 = ([
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
] as const).distinct()
consParams.vector3 = vector3



const _vector3Like = ([
] as const).distinct()
objProps.vector3Like = _vector3Like

/**
 * 3d vector.
 *
 * see {@link https://github.com/mrdoob/three.js/blob/master/src/math/Vector3.js}
 *
 * @example
 * const a = new THREE.Vector3( 1, 0, 0 )
 * const b = new THREE.Vector3( 0, 1, 0 )
 * const c = new THREE.Vector3()
 * c.crossVectors( a, b )
 */

const _vector3 = ([
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
] as const).distinct()
objProps.vector3 = _vector3

export type Vector3Props = Node<Vector3, typeof Vector3, { x?: number; y?: number; z?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        vector3: { x?: number; y?: number; z?: number; }
    }
}

defaults.vector3 = { x: 0, y: 0, z: 0 }
