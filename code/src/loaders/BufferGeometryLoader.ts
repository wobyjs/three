import { Node } from '../../three-types'
import { BufferGeometryLoader } from 'three/src/loaders/BufferGeometryLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        BufferGeometryLoader: typeof BufferGeometryLoader
    }
}

Three.BufferGeometryLoader = BufferGeometryLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bufferGeometryLoader: BufferGeometryLoader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        bufferGeometryLoader: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        bufferGeometryLoader: string[]
    }
}


consParams.bufferGeometryLoader = [
    'manager',
].distinct()


objParams.bufferGeometryLoader = [...objParams.loader]

export type BufferGeometryLoaderProps = Node<BufferGeometryLoader, typeof BufferGeometryLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        bufferGeometryLoader: { manager?: LoadingManager }
    }
}

defaults.bufferGeometryLoader = {}

