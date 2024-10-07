import { Node } from '../../../three-types'
import NodeParser from 'three/src/nodes/core/NodeParser.js'
export { NodeParser }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeParser: typeof NodeParser
    }
}

Three.NodeParser = NodeParser

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeParser: NodeParserProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeParser: typeof nodeParser
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nodeParser: typeof _nodeParser
    }
}



const nodeParser = ([
] as const).distinct()
consParams.nodeParser = nodeParser



const _nodeParser = ([
] as const).distinct()
objProps.nodeParser = _nodeParser

export type NodeParserProps = Node<NodeParser, typeof NodeParser, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeParser: {}
    }
}

defaults.nodeParser = {}

