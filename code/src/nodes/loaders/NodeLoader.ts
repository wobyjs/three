import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { Node } from '../../../three-types'
import NodeLoader from 'three/src/nodes/loaders/NodeLoader.js'
export { NodeLoader }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeLoader: typeof NodeLoader
    }
}

Three.NodeLoader = NodeLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeLoader: NodeLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeLoader: string[]
        nodeLoaderResult: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeLoader: string[]
        nodeLoaderResult: string[]
    }
}
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeLoader.d.ts

consParams.nodeLoaderResult = [
].distinct()


consParams.nodeLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeLoader.d.ts

objParams.nodeLoaderResult = [

].distinct()


objParams.nodeLoader = [...objParams.loader,
].distinct()

export type NodeLoaderProps = Node<NodeLoader, typeof NodeLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeLoader: { manager?: LoadingManager; }
    }
}

defaults.nodeLoader = {}

