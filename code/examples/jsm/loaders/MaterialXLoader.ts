import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { MaterialXLoader } from 'three/examples/jsm/loaders/MaterialXLoader.js'
export * from 'three/examples/jsm/loaders/MaterialXLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MaterialXLoader: typeof MaterialXLoader
    }
}

Three.MaterialXLoader = MaterialXLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            materialXLoader: MaterialXLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        materialXLoader: typeof materialXLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        materialXLoader: typeof _materialXLoader
    }
}



const materialXLoader = ([
    'manager',
] as const).distinct()
consParams.materialXLoader = materialXLoader



const _materialXLoader = ([...objProps.loader,
] as const).distinct()
objProps.materialXLoader = _materialXLoader

export type MaterialXLoaderProps = Node<MaterialXLoader, typeof MaterialXLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        materialXLoader: { manager?: LoadingManager; }
    }
}

defaults.materialXLoader = {}

