import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { VRMLLoader } from 'three/examples/jsm/loaders/VRMLLoader.js'
export * from 'three/examples/jsm/loaders/VRMLLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VRMLLoader: typeof VRMLLoader
    }
}

Three.VRMLLoader = VRMLLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vrmlLoader: VRMLLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        vrmlLoader: typeof vrmlLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        vrmlLoader: typeof _vrmlLoader
    }
}



const vrmlLoader = ([
    'manager',
] as const).distinct()
consParams.vrmlLoader = vrmlLoader



const _vrmlLoader = ([...objProps.loader,
] as const).distinct()
objProps.vrmlLoader = _vrmlLoader

export type VRMLLoaderProps = Node<VRMLLoader, typeof VRMLLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vrmlLoader: { manager?: LoadingManager; }
    }
}

defaults.vrmlLoader = {}

