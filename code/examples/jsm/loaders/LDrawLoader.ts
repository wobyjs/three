import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { LDrawLoader } from 'three/examples/jsm/loaders/LDrawLoader.js'
export * from 'three/examples/jsm/loaders/LDrawLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LDrawLoader: typeof LDrawLoader
    }
}

Three.LDrawLoader = LDrawLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lDrawLoader: LDrawLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lDrawLoader: typeof lDrawLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lDrawLoader: typeof _lDrawLoader
    }
}



const lDrawLoader = ([
    'manager',
] as const).distinct()
consParams.lDrawLoader = lDrawLoader



const _lDrawLoader = ([...objProps.loader,
    'materials',
    'materialsLibrary',
    'fileMap',
    'smoothNormals',
] as const).distinct()
objProps.lDrawLoader = _lDrawLoader


export type LDrawLoaderProps = Node<LDrawLoader, typeof LDrawLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lDrawLoader: { manager?: LoadingManager; }
    }
}

defaults.lDrawLoader = {}

