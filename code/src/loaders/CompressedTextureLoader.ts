import { Node } from '../../three-types'
import { CompressedTextureLoader } from 'three/src/loaders/CompressedTextureLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        CompressedTextureLoader: typeof CompressedTextureLoader
    }
}

Three.CompressedTextureLoader = CompressedTextureLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            compressedTextureLoader: CompressedTextureLoader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        compressedTextureLoader: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        compressedTextureLoader: string[]
    }
}


consParams.compressedTextureLoader = [
    'manager',
].distinct()


objParams.compressedTextureLoader = [...objParams.loader]

export type CompressedTextureLoaderProps = Node<CompressedTextureLoader, typeof CompressedTextureLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        compressedTextureLoader: { manager?: LoadingManager }
    }
}

defaults.compressedTextureLoader = {}

