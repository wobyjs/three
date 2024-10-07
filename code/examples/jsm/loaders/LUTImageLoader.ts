import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { LUTImageLoader } from 'three/examples/jsm/loaders/LUTImageLoader.js'
export * from 'three/examples/jsm/loaders/LUTImageLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LUTImageLoader: typeof LUTImageLoader
    }
}

Three.LUTImageLoader = LUTImageLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lutImageLoader: LUTImageLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lutImageLoader: typeof lutImageLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lutImageLoader: typeof _lutImageLoader
    }
}



const lutImageLoader = ([
    'flipVertical',
] as const).distinct()
consParams.lutImageLoader = lutImageLoader



const _lutImageLoader = ([...objProps.loader,
    'flip',
] as const).distinct()
objProps.lutImageLoader = _lutImageLoader

export type LUTImageLoaderProps = Node<LUTImageLoader, typeof LUTImageLoader, { flipVertical?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lutImageLoader: { manager?: LoadingManager; }
    }
}

defaults.lutImageLoader = {}

