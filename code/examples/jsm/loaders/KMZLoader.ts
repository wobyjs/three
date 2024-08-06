import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { KMZLoader } from 'three/examples/jsm/loaders/KMZLoader.js'
export * from 'three/examples/jsm/loaders/KMZLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        KMZLoader: typeof KMZLoader
    }
}

Three.KMZLoader = KMZLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            kmzLoader: KMZLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        kmzLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        kmzLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KMZLoader.d.ts

consParams.kmzLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\KMZLoader.d.ts    

objParams.kmzLoader = [...objParams.loader,
].distinct()

export type KMZLoaderProps = Node<KMZLoader, typeof KMZLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        kmzLoader: { manager?: LoadingManager; }
    }
}

defaults.kmzLoader = {}

