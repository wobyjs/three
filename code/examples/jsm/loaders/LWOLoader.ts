import { LWOLoaderParameters, LWOLoader } from 'three/examples/jsm/loaders/LWOLoader.js'
export * from 'three/examples/jsm/loaders/LWOLoader.js'
import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        LWOLoader: typeof LWOLoader
    }
}

Three.LWOLoader = LWOLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lwoLoader: LWOLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lwoLoader: typeof lwoLoader
        lwo: typeof lwo
        lwoLoaderParameters: { resourcePath: 'resourcePath' }
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lwoLoader: typeof _lwoLoader
        lwo: typeof _lwo
        lwoLoaderParameters: typeof _lwoLoaderParameters
    }
}



const lwo = ([
    'materials',
    'meshes',
] as const).distinct()
consParams.lwo = lwo


consParams.lwoLoaderParameters = ([
    /**
     * Base content delivery folder path, use when it differs from Lightwave default structure
     */
    'resourcePath',
] as const).toObject()


const lwoLoader = ([
    'manager',
    'parameters', //lwoLoaderParameters
] as const).distinct()
consParams.lwoLoader = lwoLoader



const _lwo = ([
    'materials',
    'meshes',
] as const).distinct()
objProps.lwo = _lwo


const _lwoLoaderParameters = ([
    /**
     * Base content delivery folder path, use when it differs from Lightwave default structure
     */
    'resourcePath',
] as const).distinct()
objProps.lwoLoaderParameters = _lwoLoaderParameters


const _lwoLoader = ([...objProps.loader,
] as const).distinct()
objProps.lwoLoader = _lwoLoader

export type LWOLoaderProps = Node<LWOLoader, typeof LWOLoader, { manager?: LoadingManager; parameters?: LWOLoaderParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lwoLoader: { manager?: LoadingManager; parameters?: LWOLoaderParameters; }
    }
}

defaults.lwoLoader = {}

