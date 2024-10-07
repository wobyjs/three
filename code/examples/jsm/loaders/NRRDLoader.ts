import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { NRRDLoader } from 'three/examples/jsm/loaders/NRRDLoader.js'
export * from 'three/examples/jsm/loaders/NRRDLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NRRDLoader: typeof NRRDLoader
    }
}

Three.NRRDLoader = NRRDLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nrrdLoader: NRRDLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nrrdLoader: typeof nrrdLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nrrdLoader: typeof _nrrdLoader
    }
}



const nrrdLoader = ([
    'manager',
] as const).distinct()
consParams.nrrdLoader = nrrdLoader



const _nrrdLoader = ([...objProps.loader,
    'manager',
    'path',
    'fieldFunctions',
] as const).distinct()
objProps.nrrdLoader = _nrrdLoader

export type NRRDLoaderProps = Node<NRRDLoader, typeof NRRDLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nrrdLoader: { manager?: LoadingManager; }
    }
}

defaults.nrrdLoader = {}

