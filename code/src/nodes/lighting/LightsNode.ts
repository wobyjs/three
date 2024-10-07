import LightingNode from 'three/src/nodes/lighting/LightingNode.js'
import { Node } from '../../../three-types'
import LightsNode from 'three/src/nodes/lighting/LightsNode.js'
export { LightsNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LightsNode: typeof LightsNode
    }
}

Three.LightsNode = LightsNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightsNode: LightsNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lightsNode: typeof lightsNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lightsNode: typeof _lightsNode
    }
}



const lightsNode = ([
    'lightNodes',
] as const).distinct()
consParams.lightsNode = lightsNode



const _lightsNode = ([...objProps.node,
    'lightNodes',
] as const).distinct()
objProps.lightsNode = _lightsNode

export type LightsNodeProps = Node<LightsNode, typeof LightsNode, { lightNodes?: LightingNode[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightsNode: { lightNodes?: LightingNode[]; }
    }
}

defaults.lightsNode = {}

