import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { TIFFLoader } from 'three/examples/jsm/loaders/TIFFLoader.js'
export * from 'three/examples/jsm/loaders/TIFFLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TIFFLoader: typeof TIFFLoader
    }
}

Three.TIFFLoader = TIFFLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tiffLoader: TIFFLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tiffLoader: typeof tiffLoader
        tiffResult: typeof tiffResult
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        tiffLoader: typeof _tiffLoader
        tiffResult: typeof _tiffResult
    }
}



const tiffResult = ([
    'width',
    'height',
    'data',
    'flipY',
    'magFilter',
    'minFilter',
] as const).distinct()
consParams.tiffResult = tiffResult


const tiffLoader = ([
    'manager',
] as const).distinct()
consParams.tiffLoader = tiffLoader



const _tiffResult = ([
    'width',
    'height',
    'data',
    'flipY',
    'magFilter',
    'minFilter',
] as const).distinct()
objProps.tiffResult = _tiffResult


const _tiffLoader = ([...objProps.dataTextureLoader,
] as const).distinct()
objProps.tiffLoader = _tiffLoader

export type TIFFLoaderProps = Node<TIFFLoader, typeof TIFFLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tiffLoader: { manager?: LoadingManager; }
    }
}

defaults.tiffLoader = {}

