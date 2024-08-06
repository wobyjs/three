import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { MaterialXLoader } from 'three/examples/jsm/loaders/MaterialXLoader.js'
export * from 'three/examples/jsm/loaders/MaterialXLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MaterialXLoader: typeof MaterialXLoader
    }
}

Three.MaterialXLoader = MaterialXLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            materialXLoader: MaterialXLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        materialXLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        materialXLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MaterialXLoader.d.ts

consParams.materialXLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\MaterialXLoader.d.ts    

objParams.materialXLoader = [...objParams.loader,
].distinct()

export type MaterialXLoaderProps = Node<MaterialXLoader, typeof MaterialXLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        materialXLoader: { manager?: LoadingManager; }
    }
}

defaults.materialXLoader = {}

