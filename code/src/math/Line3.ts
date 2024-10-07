import { Node, Vector3 } from '../../three-types'
import { Line3 } from 'three/src/math/Line3.js'
export { Line3 } from 'three/src/math/Line3.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        Line3: typeof Line3
    }
}

Three.Line3 = Line3

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            line3: Line3Props,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        line3: typeof line3
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        line3: typeof _line3
    }
}



const line3 = ([
    'start',
    'end',
    /**
     * @default new THREE.Vector3()
     */
    'start',
    /**
     * @default new THREE.Vector3()
     */
    'end',
] as const).distinct()
consParams.line3 = line3



const _line3 = ([
    /**
     * @default new THREE.Vector3()
     */
    'start',
    /**
     * @default new THREE.Vector3()
     */
    'end',
] as const).distinct()
objProps.line3 = _line3

export type Line3Props = Node<Line3, typeof Line3, { start?: Vector3; end?: Vector3; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        line3: { start?: Vector3; end?: Vector3; }
    }
}

defaults.line3 = {}

