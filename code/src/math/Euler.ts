import { Node } from '../../three-types'
import { Euler, EulerOrder } from 'three/src/math/Euler.js'
export * from 'three/src/math/Euler.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Euler: typeof Euler
    }
}

Three.Euler = Euler

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            euler: EulerProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        euler: typeof euler
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        euler: typeof _euler
    }
}



const euler = ([
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
consParams.euler = euler



const _euler = ([
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
     * @default THREE.Euler.DEFAULT_ORDER
     */
    'order',
] as const).distinct()
objProps.euler = _euler


export type EulerProps = Node<Euler, typeof Euler, { x?: number; y?: number; z?: number; order?: EulerOrder; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        euler: { x?: number; y?: number; z?: number; order?: EulerOrder; }
    }
}

defaults.euler = { x: 0, y: 0, z: 0, order: 'XYZ' }


