import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { MDDLoader } from 'three/examples/jsm/loaders/MDDLoader.js'
export * from 'three/examples/jsm/loaders/MDDLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MDDLoader: typeof MDDLoader
    }
}

Three.MDDLoader = MDDLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mddLoader: MDDLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        mddLoader: typeof mddLoader
        mdd: typeof mdd
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        mddLoader: typeof _mddLoader
        mdd: typeof _mdd
    }
}



const mdd = ([
    'morphTargets',
    'clip',
] as const).distinct()
consParams.mdd = mdd


const mddLoader = ([
    'manager',
] as const).distinct()
consParams.mddLoader = mddLoader



const _mdd = ([
    'morphTargets',
    'clip',
] as const).distinct()
objProps.mdd = _mdd


const _mddLoader = ([...objProps.loader,
] as const).distinct()
objProps.mddLoader = _mddLoader

export type MDDLoaderProps = Node<MDDLoader, typeof MDDLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mddLoader: { manager?: LoadingManager; }
    }
}

defaults.mddLoader = {}

