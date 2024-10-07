import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import RemapNode from 'three/src/nodes/utils/RemapNode.js'
export { RemapNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        RemapNode: typeof RemapNode
    }
}

Three.RemapNode = RemapNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            remapNode: RemapNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        remapNode: typeof remapNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        remapNode: typeof _remapNode
    }
}



const remapNode = ([
    'node',
    'inLowNode',
    'inHighNode',
    'outLowNode',
    'outHighNode',
] as const).distinct()
consParams.remapNode = remapNode



const _remapNode = ([...objProps.node,
    'node',
    'inLowNode',
    'inHighNode',
    'outLowNode',
    'outHighNode',
    'doClamp',
] as const).distinct()
objProps.remapNode = _remapNode

export type RemapNodeProps = Node<RemapNode, typeof RemapNode, { node: ENode; inLowNode: ENode; inHighNode: ENode; outLowNode?: ENode; outHighNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        remapNode: Partial<{ node: ENode; inLowNode: ENode; inHighNode: ENode; outLowNode?: ENode; outHighNode?: ENode; }>
    }
}

defaults.remapNode = {}

