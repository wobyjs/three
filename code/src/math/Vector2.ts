import { Node } from '../../three-types'
import { Vector2 } from 'three/src/math/Vector2.js'
export { Vector2 } from 'three/src/math/Vector2.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Vector2: typeof Vector2
    }
}

Three.Vector2 = Vector2

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vector2: Vector2Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        vector2: typeof vector2
        vector2Like: typeof vector2Like
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        vector2: typeof _vector2
        vector2Like: typeof _vector2Like
    }
}



const vector2Like = ([
] as const).distinct()
consParams.vector2Like = vector2Like
/**
 * 2D vector.
 */

const vector2 = ([
    'x',
    'y',
] as const).distinct()
consParams.vector2 = vector2



const _vector2Like = ([
] as const).distinct()
objProps.vector2Like = _vector2Like

/**
 * 2d vector.
 */

const _vector2 = ([
    /**
     * @default 0
     */
    'x',
    /**
     * @default 0
     */
    'y',
    'width',
    'height',
] as const).distinct()
objProps.vector2 = _vector2

export type Vector2Props = Node<Vector2, typeof Vector2, { x?: number; y?: number; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        vector2: { x?: number; y?: number; }
    }
}

defaults.vector2 = { x: 0, y: 0 }
