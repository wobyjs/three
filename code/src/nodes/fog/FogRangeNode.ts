import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import FogRangeNode from 'three/src/nodes/fog/FogRangeNode.js'
export { FogRangeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FogRangeNode: typeof FogRangeNode
    }
}

Three.FogRangeNode = FogRangeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fogRangeNode: FogRangeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        fogRangeNode: typeof fogRangeNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        fogRangeNode: typeof _fogRangeNode
    }
}



const fogRangeNode = ([
    'colorNode',
    'nearNode',
    'farNode',
] as const).distinct()
consParams.fogRangeNode = fogRangeNode



const _fogRangeNode = ([...objProps.fogNode,
    'isFogRangeNode',
    'nearNode',
    'farNode',
] as const).distinct()
objProps.fogRangeNode = _fogRangeNode

export type FogRangeNodeProps = Node<FogRangeNode, typeof FogRangeNode, { colorNode: ENode | null; nearNode: ENode | null; farNode: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fogRangeNode: Partial<{ colorNode: ENode | null; nearNode: ENode | null; farNode: ENode | null; }>
    }
}

defaults.fogRangeNode = {}

