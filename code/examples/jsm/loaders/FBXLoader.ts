import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'
export * from 'three/examples/jsm/loaders/FBXLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FBXLoader: typeof FBXLoader
    }
}

Three.FBXLoader = FBXLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fbxLoader: FBXLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        fbxLoader: typeof fbxLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        fbxLoader: typeof _fbxLoader
    }
}




const fbxLoader = ([
    'manager',
] as const).distinct()
consParams.fbxLoader = fbxLoader



const _fbxLoader = ([...objProps.loader,
] as const).distinct()
objProps.fbxLoader = _fbxLoader

export type FBXLoaderProps = Node<FBXLoader, typeof FBXLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fbxLoader: { manager?: LoadingManager; }
    }
}

defaults.fbxLoader = {}

