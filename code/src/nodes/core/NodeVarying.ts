import { Node } from '../../../three-types'
import NodeVarying from 'three/src/nodes/core/NodeVarying.js'
export { NodeVarying }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeVarying: typeof NodeVarying
    }
}

Three.NodeVarying = NodeVarying

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeVarying: NodeVaryingProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeVarying: typeof nodeVarying
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nodeVarying: typeof _nodeVarying
    }
}



const nodeVarying = ([
    'name',
    'type',
] as const).distinct()
consParams.nodeVarying = nodeVarying



const _nodeVarying = ([...objProps.nodeVar,
    'needsInterpolation',
    'isNodeVarying',
] as const).distinct()
objProps.nodeVarying = _nodeVarying

export type NodeVaryingProps = Node<NodeVarying, typeof NodeVarying, { name: string; type: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeVarying: Partial<{ name: string; type: string | null; }>
    }
}

defaults.nodeVarying = {}

