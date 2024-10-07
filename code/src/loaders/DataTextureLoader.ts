import { Node } from '../../three-types'
import { DataTextureLoader } from 'three/src/loaders/DataTextureLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        dataTextureLoader: typeof dataTextureLoader
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        dataTextureLoader: typeof _dataTextureLoader
    }
}


const dataTextureLoader = ([
    'manager',
] as const).distinct()
consParams.dataTextureLoader = dataTextureLoader

const _dataTextureLoader = ([...objProps.loader] as const).distinct()
objProps.dataTextureLoader = _dataTextureLoader

export type DataTextureLoaderProps = Node<DataTextureLoader, typeof DataTextureLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        dataTextureLoader: { manager?: LoadingManager }
    }
}

defaults.dataTextureLoader = {}

