import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import NodeCache from 'three/src/nodes/core/NodeCache.js'
import CacheNode from 'three/src/nodes/core/CacheNode.js'
export { CacheNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CacheNode: typeof CacheNode
    }
}

Three.CacheNode = CacheNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cacheNode: CacheNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        cacheNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        cacheNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\CacheNode.d.ts

consParams.cacheNode = [
    'node',
    'cache',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\CacheNode.d.ts    

objParams.cacheNode = [...objParams.node,
    'isCacheNode',
    'node',
    'cache',
].distinct()

export type CacheNodeProps = Node<CacheNode, typeof CacheNode, { node: ENode; cache?: NodeCache; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cacheNode: Partial<{ node: ENode; cache?: NodeCache; }>
    }
}

defaults.cacheNode = {}

