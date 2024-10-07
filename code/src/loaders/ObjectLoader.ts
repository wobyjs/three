import { Node } from '../../three-types'
import { ObjectLoader } from 'three/src/loaders/ObjectLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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
        objectLoader: typeof objectLoader
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        objectLoader: typeof _objectLoader
    }
}


const objectLoader = ([
    'manager',
] as const).distinct()
consParams.objectLoader = objectLoader

const _objectLoader = ([...objProps.loader] as const).distinct()
objProps.objectLoader = _objectLoader

export type ObjectLoaderProps = Node<ObjectLoader, typeof ObjectLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        objectLoader: { manager?: LoadingManager }
    }
}

defaults.objectLoader = {}

