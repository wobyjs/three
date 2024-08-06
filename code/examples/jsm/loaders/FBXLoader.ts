import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
export * from 'three/examples/jsm/loaders/FBXLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FBXLoader: typeof FBXLoader
    }
}

Three.FBXLoader = FBXLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fbxLoader: FBXLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        fbxLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        fbxLoader: string[]
    }
}


//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FBXLoader.d.ts

consParams.fbxLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\FBXLoader.d.ts    

objParams.fbxLoader = [...objParams.loader,
].distinct()

export type FBXLoaderProps = Node<FBXLoader, typeof FBXLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fbxLoader: { manager?: LoadingManager; }
    }
}

defaults.fbxLoader = {}

