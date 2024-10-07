import { Node } from '../../../three-types'
import NodeCode from 'three/src/nodes/core/NodeCode.js'
export { NodeCode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeCode: typeof NodeCode
    }
}

Three.NodeCode = NodeCode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeCode: NodeCodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeCode: typeof nodeCode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nodeCode: typeof _nodeCode
    }
}



const nodeCode = ([
    'name',
    'type',
    'code',
] as const).distinct()
consParams.nodeCode = nodeCode



const _nodeCode = ([
    'isNodeCode',
] as const).distinct()
objProps.nodeCode = _nodeCode

export type NodeCodeProps = Node<NodeCode, typeof NodeCode, { name: string; type: string; code?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeCode: Partial<{ name: string; type: string; code?: string; }>
    }
}

defaults.nodeCode = {}

