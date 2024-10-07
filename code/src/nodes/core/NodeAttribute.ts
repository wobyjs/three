import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import NodeAttribute from 'three/src/nodes/core/NodeAttribute.js'
export { NodeAttribute }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
export * from 'three/src/nodes/Nodes'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeAttribute: typeof NodeAttribute
    }
}

Three.NodeAttribute = NodeAttribute

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeAttribute: NodeAttributeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeAttribute: typeof nodeAttribute
        node: typeof node
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nodeAttribute: typeof _nodeAttribute
        node: typeof _node
    }
}



const node = ([
    'nodeType',
] as const).distinct()
consParams.node = node



const _node = ([
    'nodeType',
    'updateType',
    'updateBeforeType',
    'uuid',
    'version',
] as const).distinct()
objProps.node = _node



const nodeAttribute = ([
    'name',
    'type',
] as const).distinct()
consParams.nodeAttribute = nodeAttribute



const _nodeAttribute = ([
    'isNodeAttribute',
    'name',
    'type',
] as const).distinct()
objProps.nodeAttribute = _nodeAttribute

export type NodeAttributeProps = Node<NodeAttribute, typeof NodeAttribute, { name: string; type: string | null; node?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeAttribute: Partial<{ name: string; type: string | null; node?: ENode | null; }>
    }
}

defaults.nodeAttribute = {}

