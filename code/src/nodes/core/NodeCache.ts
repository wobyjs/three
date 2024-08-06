import { Node } from '../../../three-types'
import NodeCache from 'three/src/nodes/core/NodeCache.js'
export { NodeCache }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeCache: typeof NodeCache
    }
}

Three.NodeCache = NodeCache

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeCache: NodeCacheProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeCache: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeCache: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCache.d.ts

consParams.nodeCache = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCache.d.ts

objParams.nodeCache = [
    'id',
    'nodesData',
].distinct()

export type NodeCacheProps = Node<NodeCache, typeof NodeCache, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeCache: {}
    }
}

defaults.nodeCache = {}

