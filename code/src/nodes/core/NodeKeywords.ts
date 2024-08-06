import { Node } from '../../../three-types'
import NodeKeywords from 'three/src/nodes/core/NodeKeywords.js'
export { NodeKeywords }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeKeywords: typeof NodeKeywords
    }
}

Three.NodeKeywords = NodeKeywords

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeKeywords: NodeKeywordsProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeKeywords: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeKeywords: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeKeywords.d.ts

consParams.nodeKeywords = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeKeywords.d.ts

objParams.nodeKeywords = [
    'keywords',
    'nodes',
    'keywordsCallback',
].distinct()

export type NodeKeywordsProps = Node<NodeKeywords, typeof NodeKeywords, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeKeywords: {}
    }
}

defaults.nodeKeywords = {}

