import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
export * from 'three/examples/jsm/loaders/STLLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        STLLoader: typeof STLLoader
    }
}

Three.STLLoader = STLLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stlLoader: STLLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        stlLoader: typeof stlLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        stlLoader: typeof _stlLoader
    }
}



const stlLoader = ([
    'manager',
] as const).distinct()
consParams.stlLoader = stlLoader



const _stlLoader = ([...objProps.loader,
] as const).distinct()
objProps.stlLoader = _stlLoader

export type STLLoaderProps = Node<STLLoader, typeof STLLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stlLoader: { manager?: LoadingManager; }
    }
}

defaults.stlLoader = {}

