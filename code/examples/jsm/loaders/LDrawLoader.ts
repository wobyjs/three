import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { LDrawLoader } from 'three/examples/jsm/loaders/LDrawLoader.js'
export * from 'three/examples/jsm/loaders/LDrawLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LDrawLoader: typeof LDrawLoader
    }
}

Three.LDrawLoader = LDrawLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lDrawLoader: LDrawLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lDrawLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lDrawLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LDrawLoader.d.ts

consParams.lDrawLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LDrawLoader.d.ts    

objParams.lDrawLoader = [...objParams.loader,
    'materials',
    'materialsLibrary',
    'fileMap',
    'smoothNormals',
].distinct()


export type LDrawLoaderProps = Node<LDrawLoader, typeof LDrawLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lDrawLoader: { manager?: LoadingManager; }
    }
}

defaults.lDrawLoader = {}

