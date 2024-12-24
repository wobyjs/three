import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { TiltLoader } from 'three/examples/jsm/loaders/TiltLoader.js'
export * from 'three/examples/jsm/loaders/TiltLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TiltLoader: typeof TiltLoader
    }
}

Three.TiltLoader = TiltLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tiltLoader: TiltLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tiltLoader: typeof tiltLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        tiltLoader: typeof _tiltLoader
    }
}



const tiltLoader = ([
    'manager',
] as const).distinct()
consParams.tiltLoader = tiltLoader



const _tiltLoader = ([...objProps.loader,
] as const).distinct()
objProps.tiltLoader = _tiltLoader


export type TiltLoaderProps = Node<TiltLoader, typeof TiltLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tiltLoader: { manager?: LoadingManager; }
    }
}

defaults.tiltLoader = {}

