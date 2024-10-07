import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader.js'
export * from 'three/examples/jsm/loaders/KTXLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        ktxLoader: typeof ktxLoader
        ktx: typeof ktx
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        ktxLoader: typeof _ktxLoader
        ktx: typeof _ktx
    }
}



const ktx = ([
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
] as const).distinct()
consParams.ktx = ktx


const ktxLoader = ([
    'manager',
] as const).distinct()
consParams.ktxLoader = ktxLoader



const _ktx = ([
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
] as const).distinct()
objProps.ktx = _ktx


const _ktxLoader = ([...objProps.compressedTextureLoader,
] as const).distinct()
objProps.ktxLoader = _ktxLoader

export type KTXLoaderProps = Node<KTXLoader, typeof KTXLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ktxLoader: { manager?: LoadingManager; }
    }
}

defaults.ktxLoader = {}

