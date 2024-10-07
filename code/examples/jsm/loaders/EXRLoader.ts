import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js'
export * from 'three/examples/jsm/loaders/EXRLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        EXRLoader: typeof EXRLoader
    }
}

Three.EXRLoader = EXRLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            exrLoader: EXRLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        exrLoader: typeof exrLoader
        exr: typeof exr
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        exrLoader: typeof _exrLoader
        exr: typeof _exr
    }
}



const exr = ([
    'header',
    'width',
    'height',
    'data',
    'format',
    'colorSpace',
    'type',
] as const).distinct()
consParams.exr = exr


const exrLoader = ([
    'manager',
] as const).distinct()
consParams.exrLoader = exrLoader


const _exr = ([
    'header',
    'width',
    'height',
    'data',
    'format',
    'colorSpace',
    'type',
] as const).distinct()
objProps.exr = _exr


const _exrLoader = ([...objProps.dataTextureLoader,
    'type',
] as const).distinct()
objProps.exrLoader = _exrLoader

export type EXRLoaderProps = Node<EXRLoader, typeof EXRLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        exrLoader: { manager?: LoadingManager; }
    }
}

defaults.exrLoader = {}

