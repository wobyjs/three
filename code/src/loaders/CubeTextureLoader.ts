import { Node } from '../../three-types'
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        CubeTextureLoader: typeof CubeTextureLoader
    }
}

Three.CubeTextureLoader = CubeTextureLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubeTextureLoader: CubeTextureLoader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        cubeTextureLoader: typeof cubeTextureLoader
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        cubeTextureLoader: typeof _cubeTextureLoader
    }
}


const cubeTextureLoader = ([
    'manager',
] as const).distinct()
consParams.cubeTextureLoader = cubeTextureLoader

const _cubeTextureLoader = ([...objProps.loader] as const).distinct()
objProps.cubeTextureLoader = _cubeTextureLoader

export type CubeTextureLoaderProps = Node<CubeTextureLoader, typeof CubeTextureLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        cubeTextureLoader: { manager?: LoadingManager }
    }
}

defaults.cubeTextureLoader = {}

