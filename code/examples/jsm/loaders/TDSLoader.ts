import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader.js'
export * from 'three/examples/jsm/loaders/TDSLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TDSLoader: typeof TDSLoader
    }
}

Three.TDSLoader = TDSLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tdsLoader: TDSLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tdsLoader: typeof tdsLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        tdsLoader: typeof _tdsLoader
    }
}



const tdsLoader = ([
    'manager',
] as const).distinct()
consParams.tdsLoader = tdsLoader



const _tdsLoader = ([...objProps.loader,
    'debug',
    'group',
    'manager',
    'materials',
    'meshes',
    'position',
] as const).distinct()
objProps.tdsLoader = _tdsLoader

export type TDSLoaderProps = Node<TDSLoader, typeof TDSLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tdsLoader: { manager?: LoadingManager; }
    }
}

defaults.tdsLoader = {}

