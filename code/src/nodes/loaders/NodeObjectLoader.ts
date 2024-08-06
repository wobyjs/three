import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import NodeObjectLoader from 'three/src/nodes/loaders/NodeObjectLoader.js'
export { NodeObjectLoader }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeObjectLoader: typeof NodeObjectLoader
    }
}

Three.NodeObjectLoader = NodeObjectLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeObjectLoader: NodeObjectLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeObjectLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeObjectLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeObjectLoader.d.ts

consParams.nodeObjectLoader = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeObjectLoader.d.ts    

objParams.nodeObjectLoader = [...objParams.objectLoader,
].distinct()

export type NodeObjectLoaderProps = Node<NodeObjectLoader, typeof NodeObjectLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeObjectLoader: { manager?: LoadingManager; }
    }
}

defaults.nodeObjectLoader = {}

