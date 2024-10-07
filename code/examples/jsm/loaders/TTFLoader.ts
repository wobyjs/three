import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js'
export * from 'three/examples/jsm/loaders/TTFLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TTFLoader: typeof TTFLoader
    }
}

Three.TTFLoader = TTFLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ttfLoader: TTFLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ttfLoader: typeof ttfLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        ttfLoader: typeof _ttfLoader
    }
}



const ttfLoader = ([
    'manager',
] as const).distinct()
consParams.ttfLoader = ttfLoader



const _ttfLoader = ([...objProps.loader,
    'reversed',
] as const).distinct()
objProps.ttfLoader = _ttfLoader

export type TTFLoaderProps = Node<TTFLoader, typeof TTFLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ttfLoader: { manager?: LoadingManager; }
    }
}

defaults.ttfLoader = {}

