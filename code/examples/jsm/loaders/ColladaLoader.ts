import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'
export * from 'three/examples/jsm/loaders/ColladaLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ColladaLoader: typeof ColladaLoader
    }
}

Three.ColladaLoader = ColladaLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            colladaLoader: ColladaLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        colladaLoader: typeof colladaLoader
        collada: typeof collada
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        colladaLoader: typeof _colladaLoader
        collada: typeof _collada
    }
}



const collada = ([
    'kinematics',
    'library',
    'scene',
] as const).distinct()
consParams.collada = collada


const colladaLoader = ([
] as const).distinct()
consParams.colladaLoader = colladaLoader



const _collada = ([
    'kinematics',
    'library',
    'scene',
] as const).distinct()
objProps.collada = _collada


const _colladaLoader = ([...objProps.loader,
] as const).distinct()
objProps.colladaLoader = _colladaLoader

export type ColladaLoaderProps = Node<ColladaLoader, typeof ColladaLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        colladaLoader: { manager?: LoadingManager; }
    }
}

defaults.colladaLoader = {}

