import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js'
export * from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        HDRCubeTextureLoader: typeof HDRCubeTextureLoader
    }
}

Three.HDRCubeTextureLoader = HDRCubeTextureLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hdrCubeTextureLoader: HDRCubeTextureLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        hdrCubeTextureLoader: typeof hdrCubeTextureLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        hdrCubeTextureLoader: typeof _hdrCubeTextureLoader
    }
}



const hdrCubeTextureLoader = ([
    'manager',
] as const).distinct()
consParams.hdrCubeTextureLoader = hdrCubeTextureLoader



const _hdrCubeTextureLoader = ([...objProps.loader,
    'hdrLoader',
    'type',
] as const).distinct()
objProps.hdrCubeTextureLoader = _hdrCubeTextureLoader

export type HDRCubeTextureLoaderProps = Node<HDRCubeTextureLoader, typeof HDRCubeTextureLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        hdrCubeTextureLoader: { manager?: LoadingManager; }
    }
}

defaults.hdrCubeTextureLoader = {}

