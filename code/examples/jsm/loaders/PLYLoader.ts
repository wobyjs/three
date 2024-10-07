import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js'
export * from 'three/examples/jsm/loaders/PLYLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PLYLoader: typeof PLYLoader
    }
}

Three.PLYLoader = PLYLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            plyLoader: PLYLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        plyLoader: typeof plyLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        plyLoader: typeof _plyLoader
    }
}



const plyLoader = ([
    'manager',
] as const).distinct()
consParams.plyLoader = plyLoader



const _plyLoader = ([...objProps.loader,
    'propertyNameMapping',
    'customPropertyMapping',
] as const).distinct()
objProps.plyLoader = _plyLoader

export type PLYLoaderProps = Node<PLYLoader, typeof PLYLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        plyLoader: { manager?: LoadingManager; }
    }
}

defaults.plyLoader = {}

