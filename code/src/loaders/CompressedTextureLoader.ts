import { Node } from '../../three-types'
import { CompressedTextureLoader } from 'three/src/loaders/CompressedTextureLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        compressedTextureLoader: typeof compressedTextureLoader
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        compressedTextureLoader: typeof _compressedTextureLoader
    }
}


const compressedTextureLoader = ([
    'manager',
] as const).distinct()
consParams.compressedTextureLoader = compressedTextureLoader

const _compressedTextureLoader = ([...objProps.loader] as const).distinct()
objProps.compressedTextureLoader = _compressedTextureLoader

export type CompressedTextureLoaderProps = Node<CompressedTextureLoader, typeof CompressedTextureLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        compressedTextureLoader: { manager?: LoadingManager }
    }
}

defaults.compressedTextureLoader = {}

