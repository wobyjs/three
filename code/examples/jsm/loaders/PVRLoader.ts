import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader.js'
export * from 'three/examples/jsm/loaders/PVRLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PVRLoader: typeof PVRLoader
    }
}

Three.PVRLoader = PVRLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pvrLoader: PVRLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pvrLoader: typeof pvrLoader
        pvr: typeof pvr
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        pvrLoader: typeof _pvrLoader
        pvr: typeof _pvr
    }
}



const pvr = ([
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
] as const).distinct()
consParams.pvr = pvr


const pvrLoader = ([
    'manager',
] as const).distinct()
consParams.pvrLoader = pvrLoader



const _pvr = ([
    'mipmaps',
    'width',
    'height',
    'format',
    'mipmapCount',
    'isCubemap',
] as const).distinct()
objProps.pvr = _pvr


const _pvrLoader = ([...objProps.compressedTextureLoader,
] as const).distinct()
objProps.pvrLoader = _pvrLoader


export type PVRLoaderProps = Node<PVRLoader, typeof PVRLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pvrLoader: { manager?: LoadingManager; }
    }
}

defaults.pvrLoader = {}

