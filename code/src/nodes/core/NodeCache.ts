import { Node } from '../../../three-types'
import NodeCache from 'three/src/nodes/core/NodeCache.js'
export { NodeCache }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        nodeCache: typeof nodeCache
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nodeCache: typeof _nodeCache
    }
}



const nodeCache = ([
] as const).distinct()
consParams.nodeCache = nodeCache



const _nodeCache = ([
    'id',
    'nodesData',
] as const).distinct()
objProps.nodeCache = _nodeCache

export type NodeCacheProps = Node<NodeCache, typeof NodeCache, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeCache: {}
    }
}

defaults.nodeCache = {}

