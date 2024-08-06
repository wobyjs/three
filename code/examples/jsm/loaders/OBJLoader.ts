import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
export * from 'three/examples/jsm/loaders/OBJLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        OBJLoader: typeof OBJLoader
    }
}

Three.OBJLoader = OBJLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            objLoader: OBJLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        objLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        objLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\OBJLoader.d.ts

consParams.objLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\OBJLoader.d.ts    

objParams.objLoader = [...objParams.loader,
    'materials',
].distinct()

export type OBJLoaderProps = Node<OBJLoader, typeof OBJLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        objLoader: { manager?: LoadingManager; }
    }
}

defaults.objLoader = {}

