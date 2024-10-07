import { Node } from '../../three-types'
import { ImageLoader } from 'three/src/loaders/ImageLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        imageLoader: typeof imageLoader
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        imageLoader: typeof _imageLoader
    }
}


const imageLoader = ([
    'manager',
] as const).distinct()
consParams.imageLoader = imageLoader

const _imageLoader = ([...objProps.loader] as const).distinct()
objProps.imageLoader = _imageLoader

export type ImageLoaderProps = Node<ImageLoader, typeof ImageLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        imageLoader: { manager?: LoadingManager }
    }
}

defaults.imageLoader = {}

