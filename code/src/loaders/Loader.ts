import { Node } from '../../three-types'
import { Loader } from 'three/src/loaders/Loader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import { LoadingManager } from 'three/src/loaders/LoadingManager.js'

declare module '../../lib/3/three'
{
    interface Three {
        Loader: typeof Loader
    }
}

Three.Loader = Loader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            loader: Loader,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        loader: typeof loader
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        loader: typeof _loader
    }
}


const loader = ([
    'manager',
] as const).distinct()
consParams.loader = loader


const _loader = ([
    /**
     * @default 'anonymous'
     */
    'crossOrigin',
    /**
     * @default false
     */
    'withCredentials',
    /**
     * @default ''
     */
    'path',
    /**
     * @default ''
     */
    'resourcePath',
    'manager',
    /**
     * @default {}
     */
    'requestHeader',
] as const).distinct()
objProps.loader = _loader

export type LoaderProps = Node<Loader, typeof Loader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        loader: { manager?: LoadingManager }
    }
}

defaults.loader = {}

