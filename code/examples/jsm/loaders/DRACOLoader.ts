import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
export * from 'three/examples/jsm/loaders/DRACOLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        DRACOLoader: typeof DRACOLoader
    }
}

Three.DRACOLoader = DRACOLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dracoLoader: DRACOLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        dracoLoader: typeof dracoLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        dracoLoader: typeof _dracoLoader
    }
}



const dracoLoader = ([
    'manager',
] as const).distinct()
consParams.dracoLoader = dracoLoader



const _dracoLoader = ([...objProps.loader,
] as const).distinct()
objProps.dracoLoader = _dracoLoader

export type DRACOLoaderProps = Node<DRACOLoader, typeof DRACOLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        dracoLoader: { manager?: LoadingManager; }
    }
}

defaults.dracoLoader = {}

