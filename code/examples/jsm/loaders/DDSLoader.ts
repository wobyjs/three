import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js'
export * from 'three/examples/jsm/loaders/DDSLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        DDSLoader: typeof DDSLoader
    }
}

Three.DDSLoader = DDSLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ddsLoader: DDSLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ddsLoader: string[]
        dds: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        ddsLoader: string[]
        dds: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\DDSLoader.d.ts

consParams.dds = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct()


consParams.ddsLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\DDSLoader.d.ts

objParams.dds = [
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
].distinct()


objParams.ddsLoader = [...objParams.compressedTextureLoader,
].distinct()

export type DDSLoaderProps = Node<DDSLoader, typeof DDSLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ddsLoader: { manager?: LoadingManager; }
    }
}

defaults.ddsLoader = {}

