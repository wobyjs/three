import { Node } from '../../../three-types'
import NodeFunctionInput from 'three/src/nodes/core/NodeFunctionInput.js'
import NodeFunction from 'three/src/nodes/core/NodeFunction.js'
export { NodeFunction }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeFunction: typeof NodeFunction
    }
}

Three.NodeFunction = NodeFunction

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeFunction: NodeFunctionProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeFunction: typeof nodeFunction
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nodeFunction: typeof _nodeFunction
    }
}



const nodeFunction = ([
    'type',
    'inputs',
    'name',
    'presicion',
] as const).distinct()
consParams.nodeFunction = nodeFunction



const _nodeFunction = ([
    'isNodeFunction',
    'type',
    'inputs',
    'name',
    'presicion',
] as const).distinct()
objProps.nodeFunction = _nodeFunction

export type NodeFunctionProps = Node<NodeFunction, typeof NodeFunction, { type: string; inputs: NodeFunctionInput[]; name?: string; presicion?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeFunction: Partial<{ type: string; inputs: NodeFunctionInput[]; name?: string; presicion?: string; }>
    }
}

defaults.nodeFunction = {}

