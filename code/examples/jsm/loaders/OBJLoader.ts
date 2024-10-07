import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
export * from 'three/examples/jsm/loaders/OBJLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        OBJLoader: typeof OBJLoader
    }
}

Three.OBJLoader = OBJLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            objLoader: OBJLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        objLoader: typeof objLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        objLoader: typeof _objLoader
    }
}



const objLoader = ([
    'manager',
] as const).distinct()
consParams.objLoader = objLoader



const _objLoader = ([...objProps.loader,
    'materials',
] as const).distinct()
objProps.objLoader = _objLoader

export type OBJLoaderProps = Node<OBJLoader, typeof OBJLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        objLoader: { manager?: LoadingManager; }
    }
}

defaults.objLoader = {}

