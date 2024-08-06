import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { Node } from '../../../three-types'
import NodeMaterialLoader from 'three/src/nodes/loaders/NodeMaterialLoader.js'
export { NodeMaterialLoader }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeMaterialLoader: typeof NodeMaterialLoader
    }
}

Three.NodeMaterialLoader = NodeMaterialLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeMaterialLoader: NodeMaterialLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeMaterialLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeMaterialLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeMaterialLoader.d.ts

consParams.nodeMaterialLoader = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\loaders\NodeMaterialLoader.d.ts    

objParams.nodeMaterialLoader = [...objParams.materialLoader,
    'nodes',
].distinct()

export type NodeMaterialLoaderProps = Node<NodeMaterialLoader, typeof NodeMaterialLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeMaterialLoader: { manager?: LoadingManager; }
    }
}

defaults.nodeMaterialLoader = {}

