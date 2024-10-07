import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { RGBMLoader } from 'three/examples/jsm/loaders/RGBMLoader.js'
export * from 'three/examples/jsm/loaders/RGBMLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        RGBMLoader: typeof RGBMLoader
    }
}

Three.RGBMLoader = RGBMLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rgbmLoader: RGBMLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rgbmLoader: typeof rgbmLoader
        rgbm: typeof rgbm
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        rgbmLoader: typeof _rgbmLoader
        rgbm: typeof _rgbm
    }
}



const rgbm = ([
    'width',
    'height',
    'data',
    'header',
    'format',
    'type',
    'flipY',
] as const).distinct()
consParams.rgbm = rgbm

const rgbmLoader = ([
    'manager',
] as const).distinct()
consParams.rgbmLoader = rgbmLoader



const _rgbm = ([
    'width',
    'height',
    'data',
    'header',
    'format',
    'type',
    'flipY',
] as const).distinct()
objProps.rgbm = _rgbm


const _rgbmLoader = ([...objProps.dataTextureLoader,
    'type',
    'maxrange',
] as const).distinct()
objProps.rgbmLoader = _rgbmLoader


export type RGBMLoaderProps = Node<RGBMLoader, typeof RGBMLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rgbmLoader: { manager?: LoadingManager; }
    }
}

defaults.rgbmLoader = {}

