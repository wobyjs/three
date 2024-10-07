import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { USDZLoader } from 'three/examples/jsm/loaders/USDZLoader.js'
export * from 'three/examples/jsm/loaders/USDZLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        USDZLoader: typeof USDZLoader
    }
}

Three.USDZLoader = USDZLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            usdzLoader: USDZLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        usdzLoader: typeof usdzLoader
        usdaParser: typeof usdaParser
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        usdzLoader: typeof _usdzLoader
        usdaParser: typeof _usdaParser
    }
}



const usdaParser = ([
] as const).distinct()
consParams.usdaParser = usdaParser


const usdzLoader = ([
    'manager',
] as const).distinct()
consParams.usdzLoader = usdzLoader



const _usdaParser = ([
] as const).distinct()
objProps.usdaParser = _usdaParser


const _usdzLoader = ([...objProps.loader,
] as const).distinct()
objProps.usdzLoader = _usdzLoader

export type USDZLoaderProps = Node<USDZLoader, typeof USDZLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        usdzLoader: { manager?: LoadingManager; }
    }
}

defaults.usdzLoader = {}

