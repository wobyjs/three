import { Node } from '../../three-types'
import { MaterialLoader } from 'three/src/loaders/MaterialLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        MaterialLoader: typeof MaterialLoader
    }
}

Three.MaterialLoader = MaterialLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            materialLoader: MaterialLoader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        materialLoader: typeof materialLoader
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        materialLoader: typeof _materialLoader
    }
}


const materialLoader = ([
    'manager',
] as const).distinct()
consParams.materialLoader = materialLoader


const _materialLoader = ([...objProps.loader,
    /**
     * @default {}
     */
    'textures',
] as const).distinct()
objProps.materialLoader = _materialLoader

export type MaterialLoaderProps = Node<MaterialLoader, typeof MaterialLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        materialLoader: { manager?: LoadingManager }
    }
}

defaults.materialLoader = {}

