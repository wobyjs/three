import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { VRMLLoader } from 'three/examples/jsm/loaders/VRMLLoader.js'
export * from 'three/examples/jsm/loaders/VRMLLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VRMLLoader: typeof VRMLLoader
    }
}

Three.VRMLLoader = VRMLLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vrmlLoader: VRMLLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        vrmlLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        vrmlLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VRMLLoader.d.ts

consParams.vrmlLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\VRMLLoader.d.ts    

objParams.vrmlLoader = [...objParams.loader,
].distinct()

export type VRMLLoaderProps = Node<VRMLLoader, typeof VRMLLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vrmlLoader: { manager?: LoadingManager; }
    }
}

defaults.vrmlLoader = {}

