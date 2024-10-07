import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader.js'
export * from 'three/examples/jsm/loaders/DDSLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        ddsLoader: typeof ddsLoader
        dds: typeof dds
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        ddsLoader: typeof _ddsLoader
        dds: typeof _dds
    }
}



const dds = ([
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
] as const).distinct()
consParams.dds = dds


const ddsLoader = ([
    'manager',
] as const).distinct()
consParams.ddsLoader = ddsLoader



const _dds = ([
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
] as const).distinct()
objProps.dds = _dds


const _ddsLoader = ([...objProps.compressedTextureLoader,
] as const).distinct()
objProps.ddsLoader = _ddsLoader

export type DDSLoaderProps = Node<DDSLoader, typeof DDSLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ddsLoader: { manager?: LoadingManager; }
    }
}

defaults.ddsLoader = {}

