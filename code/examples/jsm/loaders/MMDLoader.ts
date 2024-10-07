import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader.js'
export * from 'three/examples/jsm/loaders/MMDLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        MMDLoader: typeof MMDLoader
    }
}

Three.MMDLoader = MMDLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mmdLoader: MMDLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        mmdLoader: typeof mmdLoader
        mmdLoaderAnimationObject: typeof mmdLoaderAnimationObject
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        mmdLoader: typeof _mmdLoader
        mmdLoaderAnimationObject: typeof _mmdLoaderAnimationObject
    }
}



const mmdLoaderAnimationObject = ([
    'animation',
    'mesh',
] as const).distinct()
consParams.mmdLoaderAnimationObject = mmdLoaderAnimationObject


const mmdLoader = ([
    'manager',
] as const).distinct()
consParams.mmdLoader = mmdLoader



const _mmdLoaderAnimationObject = ([
    'animation',
    'mesh',
] as const).distinct()
objProps.mmdLoaderAnimationObject = _mmdLoaderAnimationObject


const _mmdLoader = ([...objProps.loader,
    'animationBuilder',
    'animationPath',
    'loader',
    'meshBuilder',
    'parser',
] as const).distinct()
objProps.mmdLoader = _mmdLoader

export type MMDLoaderProps = Node<MMDLoader, typeof MMDLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mmdLoader: { manager?: LoadingManager; }
    }
}

defaults.mmdLoader = {}

