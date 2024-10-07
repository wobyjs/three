import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
export * from 'three/examples/jsm/loaders/RGBELoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../src/loaders/DataTextureLoader'

declare module '../../../lib/3/three'
{
    interface Three {
        RGBELoader: typeof RGBELoader
    }
}

Three.RGBELoader = RGBELoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rgbeLoader: RGBELoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rgbeLoader: typeof rgbeLoader
        rgbe: typeof rgbe
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        rgbeLoader: typeof _rgbeLoader
        rgbe: typeof _rgbe
    }
}



const rgbe = ([
    'width',
    'height',
    'data',
    'header',
    'gamma',
    'exposure',
    'type',
] as const).distinct()
consParams.rgbe = rgbe


const rgbeLoader = ([
    'manager',
] as const).distinct()
consParams.rgbeLoader = rgbeLoader



const _rgbe = ([
    'width',
    'height',
    'data',
    'header',
    'gamma',
    'exposure',
    'type',
] as const).distinct()
objProps.rgbe = _rgbe


const _rgbeLoader = ([...objProps.dataTextureLoader,
    'type',
] as const).distinct()
objProps.rgbeLoader = _rgbeLoader


export type RGBELoaderProps = Node<RGBELoader, typeof RGBELoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rgbeLoader: { manager?: LoadingManager; }
    }
}

defaults.rgbeLoader = {}

