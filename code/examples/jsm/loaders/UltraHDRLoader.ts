import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { UltraHDRLoader } from 'three/examples/jsm/loaders/UltraHDRLoader.js'
export * from 'three/examples/jsm/loaders/UltraHDRLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        UltraHDRLoader: typeof UltraHDRLoader
    }
}

Three.UltraHDRLoader = UltraHDRLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ultraHdrLoader: UltraHDRLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ultraHdrLoader: typeof ultraHdrLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        ultraHdrLoader: typeof _ultraHdrLoader
    }
}


const ultraHdrLoader = ([
    'manager',
] as const).distinct()
consParams.ultraHdrLoader = ultraHdrLoader



const _ultraHdrLoader = ([...objProps.loader,
    'type',
] as const).distinct()
objProps.ultraHdrLoader = _ultraHdrLoader

export type UltraHDRLoaderProps = Node<UltraHDRLoader, typeof UltraHDRLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ultraHdrLoader: { manager?: LoadingManager; }
    }
}

defaults.ultraHdrLoader = {}

