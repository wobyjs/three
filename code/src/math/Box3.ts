import { Node, Vector3 } from '../../three-types'
import { Box3 } from 'three/src/math/Box3.js'
export { Box3 } from 'three/src/math/Box3.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Box3: typeof Box3
    }
}

Three.Box3 = Box3

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            box3: Box3Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        box3: typeof box3
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        box3: typeof _box3
    }
}



const box3 = ([
    'min',
    'max',
] as const).distinct()
consParams.box3 = box3



const _box3 = ([
    /**
     * @default new THREE.Vector3( + Infinity, + Infinity, + Infinity )
     */
    'min',
    /**
     * @default new THREE.Vector3( - Infinity, - Infinity, - Infinity )
     */
    'max',
] as const).distinct()
objProps.box3 = _box3

export type Box3Props = Node<Box3, typeof Box3, { min?: Vector3; max?: Vector3; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        box3: { min?: Vector3; max?: Vector3; }
    }
}

defaults.box3 = {}

