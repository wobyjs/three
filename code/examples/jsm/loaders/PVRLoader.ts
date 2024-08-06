import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader.js'
export * from 'three/examples/jsm/loaders/PVRLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PVRLoader: typeof PVRLoader
    }
}

Three.PVRLoader = PVRLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pvrLoader: PVRLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pvrLoader: string[]
        pvr: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        pvrLoader: string[]
        pvr: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PVRLoader.d.ts

consParams.pvr = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct()


consParams.pvrLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PVRLoader.d.ts

objParams.pvr = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct()


objParams.pvrLoader = [...objParams.compressedTextureLoader,
].distinct()


export type PVRLoaderProps = Node<PVRLoader, typeof PVRLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pvrLoader: { manager?: LoadingManager; }
    }
}

defaults.pvrLoader = {}

