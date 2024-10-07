import { Node } from '../../three-types'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import { DefaultLoadingManager, LoadingManager } from 'three/src/loaders/LoadingManager.js'
export { DefaultLoadingManager, LoadingManager } //from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        LoadingManager: typeof LoadingManager
    }
}

Three.LoadingManager = LoadingManager

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            loadingManager: LoadingManager,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        loadingManager: typeof loadingManager
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        loadingManager: typeof _loadingManager
    }
}


const loadingManager = ([
    'onLoad',
    'onProgress',
    'onError',
] as const).distinct()
consParams.loadingManager = loadingManager


const _loadingManager = ([
    /**
      * Will be called when loading of an item starts.
      * @param url The url of the item that started loading.
      * @param loaded The number of items already loaded so far.
      * @param total The total amount of items to be loaded.
      */

    'onStart',
    /**
     * Will be called when all items finish loading.
     * The default is a function with empty body.
     */
    'onLoad',
    /**
     * Will be called for each loaded item.
     * The default is a function with empty body.
     * @param url The url of the item just loaded.
     * @param loaded The number of items already loaded so far.
     * @param total The total amount of items to be loaded.
     */
    'onProgress',
    /**
     * Will be called when item loading fails.
     * The default is a function with empty body.
     * @param url The url of the item that errored.
     */
    'onError',
] as const).distinct()
objProps.loadingManager = _loadingManager

export type LoadingManagerProps = Node<LoadingManager, typeof LoadingManager, {
    onLoad?: () => void,
    onProgress?: (url: string, loaded: number, total: number) => void,
    onError?: (url: string) => void,
}>

declare module '../../lib/3/defaults' {
    interface defaults {
        loadingManager: {
            onLoad?: () => void,
            onProgress?: (url: string, loaded: number, total: number) => void,
            onError?: (url: string) => void,
        }
    }
}

defaults.loadingManager = {}

