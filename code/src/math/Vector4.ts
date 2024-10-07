import { Vector4 } from 'three/src/math/Vector4.js';
import { Node } from '../../three-types'
export { Vector4 } from 'three/src/math/Vector4.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Vector4: typeof Vector4
    }
}

Three.Vector4 = Vector4

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vector4: Vector4Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        vector4: typeof vector4
        vector4Like: typeof vector4Like
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        vector4: typeof _vector4
        vector4Like: typeof _vector4Like
    }
}



const vector4Like = ([
] as const).distinct()
consParams.vector4Like = vector4Like

/**
 * 4D vector.
 */

const vector4 = ([
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
     * @default 0
     */
    'w',
] as const).distinct()
consParams.vector4 = vector4



const _vector4Like = ([
] as const).distinct()
objProps.vector4Like = _vector4Like

/**
 * 4D vector.
 */

const _vector4 = ([
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
     * @default 0
     */
    'w',
    'width',
    'height',
] as const).distinct()
objProps.vector4 = _vector4

export type Vector4Props = Node<Vector4, typeof Vector4, { x?: number; y?: number; z?: number; w?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        vector4: { x?: number; y?: number; z?: number; w?: number; }
    }
}

defaults.vector4 = { x: 0, y: 0, z: 0, w: 0 }
