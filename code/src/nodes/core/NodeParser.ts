import { Node } from '../../../three-types'
import NodeParser from 'three/src/nodes/core/NodeParser.js'
export { NodeParser }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        nodeParser: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeParser: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeParser.d.ts

consParams.nodeParser = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeParser.d.ts

objParams.nodeParser = [
].distinct()

export type NodeParserProps = Node<NodeParser, typeof NodeParser, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeParser: {}
    }
}

defaults.nodeParser = {}

