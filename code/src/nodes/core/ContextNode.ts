import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import NodeBuilderContext from 'three/src/nodes/core/NodeBuilder.js'
import ContextNode from 'three/src/nodes/core/ContextNode.js'
export { ContextNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ContextNode: typeof ContextNode
    }
}

Three.ContextNode = ContextNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            contextNode: ContextNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        contextNode: typeof contextNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        contextNode: typeof _contextNode
    }
}



const contextNode = ([
    'node',
    'context',
] as const).distinct()
consParams.contextNode = contextNode



const _contextNode = ([...objProps.node,
    'isContextNode',
    'node',
    'context',
] as const).distinct()
objProps.contextNode = _contextNode

export type ContextNodeProps = Node<ContextNode, typeof ContextNode, { node: ENode; context: NodeBuilderContext; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        contextNode: Partial<{ node: ENode; context: NodeBuilderContext; }>
    }
}

defaults.contextNode = {}

