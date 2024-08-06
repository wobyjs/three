import { Node } from '../../three-types'
import { ImageLoader } from 'three/src/loaders/ImageLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        ImageLoader: typeof ImageLoader
    }
}

Three.ImageLoader = ImageLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            imageLoader: ImageLoader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        imageLoader: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        imageLoader: string[]
    }
}


consParams.imageLoader = [
    'manager',
].distinct()


objParams.imageLoader = [...objParams.loader]

export type ImageLoaderProps = Node<ImageLoader, typeof ImageLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        imageLoader: { manager?: LoadingManager }
    }
}

defaults.imageLoader = {}

