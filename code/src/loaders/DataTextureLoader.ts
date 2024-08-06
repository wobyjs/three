import { Node } from '../../three-types'
import { DataTextureLoader } from 'three/src/loaders/DataTextureLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        DataTextureLoader: typeof DataTextureLoader
    }
}

Three.DataTextureLoader = DataTextureLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            dataTextureLoader: DataTextureLoader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        dataTextureLoader: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        dataTextureLoader: string[]
    }
}


consParams.dataTextureLoader = [
    'manager',
].distinct()


objParams.dataTextureLoader = [...objParams.loader]

export type DataTextureLoaderProps = Node<DataTextureLoader, typeof DataTextureLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        dataTextureLoader: { manager?: LoadingManager }
    }
}

defaults.dataTextureLoader = {}

