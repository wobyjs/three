import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { AMFLoader } from 'three/examples/jsm/loaders/AMFLoader.js'
export * from 'three/examples/jsm/loaders/AMFLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AMFLoader: typeof AMFLoader
    }
}

Three.AMFLoader = AMFLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            amfLoader: AMFLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        amfLoader: typeof amfLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        amfLoader: typeof _amfLoader
    }
}



const amfLoader = ([
    'manager',
] as const).distinct()
consParams.amfLoader = amfLoader



const _amfLoader = ([...objProps.loader,
] as const).distinct()
objProps.amfLoader = _amfLoader

export type AMFLoaderProps = Node<AMFLoader, typeof AMFLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        amfLoader: { manager?: LoadingManager; }
    }
}

defaults.amfLoader = {}

