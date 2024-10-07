import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js'
export * from 'three/examples/jsm/loaders/TGALoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TGALoader: typeof TGALoader
    }
}

Three.TGALoader = TGALoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tgaLoader: TGALoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tgaLoader: typeof tgaLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        tgaLoader: typeof _tgaLoader
    }
}



const tgaLoader = ([
    'manager',
] as const).distinct()
consParams.tgaLoader = tgaLoader



const _tgaLoader = ([...objProps.dataTextureLoader,
] as const).distinct()
objProps.tgaLoader = _tgaLoader

export type TGALoaderProps = Node<TGALoader, typeof TGALoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tgaLoader: { manager?: LoadingManager; }
    }
}

defaults.tgaLoader = {}

