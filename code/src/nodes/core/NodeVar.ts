import { Node } from '../../../three-types'
import NodeVar from 'three/src/nodes/core/NodeVar.js'
export { NodeVar }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeVar: typeof NodeVar
    }
}

Three.NodeVar = NodeVar

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeVar: NodeVarProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeVar: typeof nodeVar
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nodeVar: typeof _nodeVar
    }
}



const nodeVar = ([
    'name',
    'type',
] as const).distinct()
consParams.nodeVar = nodeVar



const _nodeVar = ([
    'isNodeVar',
    'name',
    'type',
] as const).distinct()
objProps.nodeVar = _nodeVar

export type NodeVarProps = Node<NodeVar, typeof NodeVar, { name: string; type: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeVar: Partial<{ name: string; type: string | null; }>
    }
}

defaults.nodeVar = {}

