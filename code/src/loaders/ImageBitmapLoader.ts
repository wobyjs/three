import { Node } from '../../three-types'
import { ImageBitmapLoader } from 'three/src/loaders/ImageBitmapLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        ImageBitmapLoader: typeof ImageBitmapLoader
    }
}

Three.ImageBitmapLoader = ImageBitmapLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            imageBitmapLoader: ImageBitmapLoader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        imageBitmapLoader: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        imageBitmapLoader: string[]
    }
}


consParams.imageBitmapLoader = [
    'manager',
].distinct()


objParams.imageBitmapLoader = [...objParams.loader,
    /**
    * @default { premultiplyAlpha: 'none' }
    */
    'options',
]

export type ImageBitmapLoaderProps = Node<ImageBitmapLoader, typeof ImageBitmapLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        imageBitmapLoader: { manager?: LoadingManager }
    }
}

defaults.imageBitmapLoader = {}

