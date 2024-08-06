import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { AMFLoader } from 'three/examples/jsm/loaders/AMFLoader.js'
export * from 'three/examples/jsm/loaders/AMFLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AMFLoader: typeof AMFLoader
    }
}

Three.AMFLoader = AMFLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            amfLoader: AMFLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        amfLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        amfLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\AMFLoader.d.ts

consParams.amfLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\AMFLoader.d.ts    

objParams.amfLoader = [...objParams.loader,
].distinct()

export type AMFLoaderProps = Node<AMFLoader, typeof AMFLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        amfLoader: { manager?: LoadingManager; }
    }
}

defaults.amfLoader = {}

