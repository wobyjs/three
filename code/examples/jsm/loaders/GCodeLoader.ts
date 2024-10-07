import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { GCodeLoader } from 'three/examples/jsm/loaders/GCodeLoader.js'
export * from 'three/examples/jsm/loaders/GCodeLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        GCodeLoader: typeof GCodeLoader
    }
}

Three.GCodeLoader = GCodeLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gCodeLoader: GCodeLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        gCodeLoader: typeof gCodeLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        gCodeLoader: typeof _gCodeLoader
    }
}



const gCodeLoader = ([
    'manager',
] as const).distinct()
consParams.gCodeLoader = gCodeLoader



const _gCodeLoader = ([...objProps.loader,
    'splitLayer',
] as const).distinct()
objProps.gCodeLoader = _gCodeLoader

export type GCodeLoaderProps = Node<GCodeLoader, typeof GCodeLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gCodeLoader: { manager?: LoadingManager; }
    }
}

defaults.gCodeLoader = {}

