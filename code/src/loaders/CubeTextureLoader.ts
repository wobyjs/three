import { Node } from '../../three-types'
import { CubeTextureLoader } from 'three/src/loaders/CubeTextureLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        cubeTextureLoader: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        cubeTextureLoader: string[]
    }
}


consParams.cubeTextureLoader = [
    'manager',
].distinct()


objParams.cubeTextureLoader = [...objParams.loader]

export type CubeTextureLoaderProps = Node<CubeTextureLoader, typeof CubeTextureLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        cubeTextureLoader: { manager?: LoadingManager }
    }
}

defaults.cubeTextureLoader = {}

