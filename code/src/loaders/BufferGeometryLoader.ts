import { Node } from '../../three-types'
import { BufferGeometryLoader } from 'three/src/loaders/BufferGeometryLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        bufferGeometryLoader: typeof bufferGeometryLoader
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        bufferGeometryLoader: typeof _bufferGeometryLoader
    }
}


const bufferGeometryLoader = ([
    'manager',
] as const).distinct()
consParams.bufferGeometryLoader = bufferGeometryLoader


const _bufferGeometryLoader = ([...objProps.loader] as const).distinct()
objProps.bufferGeometryLoader = _bufferGeometryLoader

export type BufferGeometryLoaderProps = Node<BufferGeometryLoader, typeof BufferGeometryLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        bufferGeometryLoader: { manager?: LoadingManager }
    }
}

defaults.bufferGeometryLoader = {}

