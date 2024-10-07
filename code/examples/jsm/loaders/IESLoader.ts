import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { IESLoader } from 'three/examples/jsm/loaders/IESLoader.js'
export * from 'three/examples/jsm/loaders/IESLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        IESLoader: typeof IESLoader
    }
}

Three.IESLoader = IESLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            iesLoader: IESLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        iesLoader: typeof iesLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        iesLoader: typeof _iesLoader
    }
}



const iesLoader = ([
] as const).distinct()
consParams.iesLoader = iesLoader



const _iesLoader = ([...objProps.loader,
] as const).distinct()
objProps.iesLoader = _iesLoader

export type IESLoaderProps = Node<IESLoader, typeof IESLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        iesLoader: { manager?: LoadingManager; }
    }
}

defaults.iesLoader = {}

