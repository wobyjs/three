import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js'
export * from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        HDRCubeTextureLoader: typeof HDRCubeTextureLoader
    }
}

Three.HDRCubeTextureLoader = HDRCubeTextureLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hdrCubeTextureLoader: HDRCubeTextureLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        hdrCubeTextureLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        hdrCubeTextureLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\HDRCubeTextureLoader.d.ts

consParams.hdrCubeTextureLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\HDRCubeTextureLoader.d.ts    

objParams.hdrCubeTextureLoader = [...objParams.loader,
    'hdrLoader',
    'type',
].distinct()

export type HDRCubeTextureLoaderProps = Node<HDRCubeTextureLoader, typeof HDRCubeTextureLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        hdrCubeTextureLoader: { manager?: LoadingManager; }
    }
}

defaults.hdrCubeTextureLoader = {}

