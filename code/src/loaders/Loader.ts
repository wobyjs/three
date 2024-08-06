import { Node } from '../../three-types'
import { Loader } from 'three/src/loaders/Loader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        loader: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        loader: string[]
    }
}


consParams.loader = [
    'manager',
].distinct()


objParams.loader = [
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
].distinct()

export type LoaderProps = Node<Loader, typeof Loader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        loader: { manager?: LoadingManager }
    }
}

defaults.loader = {}

