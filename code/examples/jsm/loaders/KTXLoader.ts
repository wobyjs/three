import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader.js'
export * from 'three/examples/jsm/loaders/KTXLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        KTXLoader: typeof KTXLoader
    }
}

Three.KTXLoader = KTXLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ktxLoader: KTXLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ktxLoader: string[]
        ktx: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        ktxLoader: string[]
        ktx: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTXLoader.d.ts

consParams.ktx = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct()


consParams.ktxLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KTXLoader.d.ts

objParams.ktx = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct()


objParams.ktxLoader = [...objParams.compressedTextureLoader,
].distinct()

export type KTXLoaderProps = Node<KTXLoader, typeof KTXLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ktxLoader: { manager?: LoadingManager; }
    }
}

defaults.ktxLoader = {}

