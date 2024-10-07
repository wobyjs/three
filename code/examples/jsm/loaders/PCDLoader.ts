import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js'
export * from 'three/examples/jsm/loaders/PCDLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PCDLoader: typeof PCDLoader
    }
}

Three.PCDLoader = PCDLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pcdLoader: PCDLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pcdLoader: typeof pcdLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        pcdLoader: typeof _pcdLoader
    }
}



const pcdLoader = ([
    'manager',
] as const).distinct()
consParams.pcdLoader = pcdLoader



const _pcdLoader = ([...objProps.loader,
    'littleEndian',
] as const).distinct()
objProps.pcdLoader = _pcdLoader

export type PCDLoaderProps = Node<PCDLoader, typeof PCDLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pcdLoader: { manager?: LoadingManager; }
    }
}

defaults.pcdLoader = {}

