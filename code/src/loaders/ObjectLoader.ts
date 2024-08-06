import { Node } from '../../three-types'
import { ObjectLoader } from 'three/src/loaders/ObjectLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        ObjectLoader: typeof ObjectLoader
    }
}

Three.ObjectLoader = ObjectLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            objectLoader: ObjectLoader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        objectLoader: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        objectLoader: string[]
    }
}


consParams.objectLoader = [
    'manager',
].distinct()


objParams.objectLoader = [...objParams.loader]

export type ObjectLoaderProps = Node<ObjectLoader, typeof ObjectLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        objectLoader: { manager?: LoadingManager }
    }
}

defaults.objectLoader = {}

