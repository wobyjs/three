import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader.js'
export * from 'three/examples/jsm/loaders/3MFLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ThreeMFLoader: typeof ThreeMFLoader
    }
}

Three.ThreeMFLoader = ThreeMFLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            threeMfLoader: ThreeMFLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        threeMfLoader: typeof threeMfLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        threeMfLoader: typeof _threeMfLoader
    }
}


const threeMfLoader = ([
    'manager',
] as const).distinct()
consParams.threeMfLoader = threeMfLoader



const _threeMfLoader = ([...objProps.loader,
    'availableExtensions',
] as const).distinct()
objProps.threeMfLoader = _threeMfLoader

export type ThreeMFLoaderProps = Node<ThreeMFLoader, typeof ThreeMFLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        threeMfLoader: { manager?: LoadingManager; }
    }
}

defaults.threeMfLoader = {}

