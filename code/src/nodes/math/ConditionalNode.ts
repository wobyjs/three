import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import ConditionalNode from 'three/src/nodes/math/ConditionalNode.js'
export { ConditionalNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ConditionalNode: typeof ConditionalNode
    }
}

Three.ConditionalNode = ConditionalNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            condNode: ConditionalNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        condNode: typeof condNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        condNode: typeof _condNode
    }
}



const condNode = ([
    'condNode',
    'ifNode',
    'elseNode',
] as const).distinct()
consParams.condNode = condNode



const _condNode = ([...objProps.node,
    'condNode',
    'ifNode',
    'elseNode',
] as const).distinct()
objProps.condNode = _condNode

export type ConditionalNodeProps = Node<ConditionalNode, typeof ConditionalNode, { condNode: ENode; ifNode: ENode; elseNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        condNode: Partial<{ condNode: ENode; ifNode: ENode; elseNode: ENode; }>
    }
}

defaults.condNode = {}

