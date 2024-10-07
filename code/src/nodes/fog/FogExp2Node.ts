import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import FogExp2Node from 'three/src/nodes/fog/FogExp2Node.js'
export { FogExp2Node }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FogExp2Node: typeof FogExp2Node
    }
}

Three.FogExp2Node = FogExp2Node

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fogExp2Node: FogExp2NodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        fogExp2Node: typeof fogExp2Node
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        fogExp2Node: typeof _fogExp2Node
    }
}



const fogExp2Node = ([
    'colorNode',
    'densityNode',
] as const).distinct()
consParams.fogExp2Node = fogExp2Node



const _fogExp2Node = ([...objProps.fogNode,
    'isFogExp2Node',
    'densityNode',
] as const).distinct()
objProps.fogExp2Node = _fogExp2Node

export type FogExp2NodeProps = Node<FogExp2Node, typeof FogExp2Node, { colorNode: ENode; densityNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fogExp2Node: Partial<{ colorNode: ENode; densityNode: ENode; }>
    }
}

defaults.fogExp2Node = {}

