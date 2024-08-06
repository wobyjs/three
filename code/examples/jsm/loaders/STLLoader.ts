import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js'
export * from 'three/examples/jsm/loaders/STLLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        STLLoader: typeof STLLoader
    }
}

Three.STLLoader = STLLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stlLoader: STLLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        stlLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        stlLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\stlLoader.d.ts

consParams.stlLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\STLLoader.d.ts    

objParams.stlLoader = [...objParams.loader,
].distinct()

export type STLLoaderProps = Node<STLLoader, typeof STLLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stlLoader: { manager?: LoadingManager; }
    }
}

defaults.stlLoader = {}

