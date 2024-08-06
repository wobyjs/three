import { Node } from '../../three-types'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
export * from 'three/src/loaders/TextureLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
export * from 'three/src/loaders/LoadingManager.js'

import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        TextureLoader: typeof TextureLoader
    }
}

Three.TextureLoader = TextureLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            textureLoader: TextureLoader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        textureLoader: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        textureLoader: string[]
    }
}


consParams.textureLoader = [
    'manager',
].distinct()


objParams.textureLoader = [...objParams.loader]

export type TextureLoaderProps = Node<TextureLoader, typeof TextureLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        textureLoader: { manager?: LoadingManager }
    }
}

defaults.textureLoader = {}

