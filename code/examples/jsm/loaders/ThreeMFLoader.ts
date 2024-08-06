import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MfLoader.js'
export * from 'three/examples/jsm/loaders/3MfLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ThreeMfLoader: typeof ThreeMFLoader
    }
}

Three.ThreeMfLoader = ThreeMFLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            threeMfLoader: ThreeMfLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        threeMfLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        threeMfLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3MfLoader.d.ts

consParams.threeMfLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\3MfLoader.d.ts    

objParams.threeMfLoader = [...objParams.loader,
].distinct()

export type ThreeMfLoaderProps = Node<ThreeMFLoader, typeof ThreeMFLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        threeMfLoader: { manager?: LoadingManager; }
    }
}

defaults.threeMfLoader = {}

