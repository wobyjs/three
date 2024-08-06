import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { TDSLoader } from 'three/examples/jsm/loaders/TDSLoader.js'
export * from 'three/examples/jsm/loaders/TDSLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TDSLoader: typeof TDSLoader
    }
}

Three.TDSLoader = TDSLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tdsLoader: TDSLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tdsLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        tdsLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TDSLoader.d.ts

consParams.tdsLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TDSLoader.d.ts    

objParams.tdsLoader = [...objParams.loader,
    'debug',
    'group',
    'manager',
    'materials',
    'meshes',
    'position',
].distinct()

export type TDSLoaderProps = Node<TDSLoader, typeof TDSLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tdsLoader: { manager?: LoadingManager; }
    }
}

defaults.tdsLoader = {}

