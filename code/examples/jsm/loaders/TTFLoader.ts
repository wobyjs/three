import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader.js'
export * from 'three/examples/jsm/loaders/TTFLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TTFLoader: typeof TTFLoader
    }
}

Three.TTFLoader = TTFLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ttfLoader: TTFLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ttfLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        ttfLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TTFLoader.d.ts

consParams.ttfLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TTFLoader.d.ts    

objParams.ttfLoader = [...objParams.loader,
    'reversed',
].distinct()

export type TTFLoaderProps = Node<TTFLoader, typeof TTFLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ttfLoader: { manager?: LoadingManager; }
    }
}

defaults.ttfLoader = {}

