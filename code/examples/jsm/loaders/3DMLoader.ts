import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { Rhino3dmLoader } from 'three/examples/jsm/loaders/3DMLoader.js'
export * from 'three/examples/jsm/loaders/3DMLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Rhino3dmLoader: typeof Rhino3dmLoader
    }
}

Three.Rhino3dmLoader = Rhino3dmLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rhino3dmLoader: Rhino3dmLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rhino3dmLoader: typeof rhino3dmLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        rhino3dmLoader: typeof _rhino3dmLoader
    }
}



const rhino3dmLoader = ([
    'manager',
] as const).distinct()
consParams.rhino3dmLoader = rhino3dmLoader



const _rhino3dmLoader = ([...objProps.loader,
] as const).distinct()
objProps.rhino3dmLoader = _rhino3dmLoader

export type Rhino3dmLoaderProps = Node<Rhino3dmLoader, typeof Rhino3dmLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rhino3dmLoader: { manager?: LoadingManager; }
    }
}

defaults.rhino3dmLoader = {}

