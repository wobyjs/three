import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { PCDLoader } from 'three/examples/jsm/loaders/PCDLoader.js'
export * from 'three/examples/jsm/loaders/PCDLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PCDLoader: typeof PCDLoader
    }
}

Three.PCDLoader = PCDLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pcdLoader: PCDLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pcdLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        pcdLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PCDLoader.d.ts

consParams.pcdLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PCDLoader.d.ts    

objParams.pcdLoader = [...objParams.loader,
    'littleEndian',
].distinct()

export type PCDLoaderProps = Node<PCDLoader, typeof PCDLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pcdLoader: { manager?: LoadingManager; }
    }
}

defaults.pcdLoader = {}

