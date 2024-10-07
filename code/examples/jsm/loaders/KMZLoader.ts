import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { KMZLoader } from 'three/examples/jsm/loaders/KMZLoader.js'
export * from 'three/examples/jsm/loaders/KMZLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        KMZLoader: typeof KMZLoader
    }
}

Three.KMZLoader = KMZLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            kmzLoader: KMZLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        kmzLoader: typeof kmzLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        kmzLoader: typeof _kmzLoader
    }
}



const kmzLoader = ([
    'manager',
] as const).distinct()
consParams.kmzLoader = kmzLoader



const _kmzLoader = ([...objProps.loader,
] as const).distinct()
objProps.kmzLoader = _kmzLoader

export type KMZLoaderProps = Node<KMZLoader, typeof KMZLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        kmzLoader: { manager?: LoadingManager; }
    }
}

defaults.kmzLoader = {}

