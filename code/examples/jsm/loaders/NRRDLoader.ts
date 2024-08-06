import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { NRRDLoader } from 'three/examples/jsm/loaders/NRRDLoader.js'
export * from 'three/examples/jsm/loaders/NRRDLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NRRDLoader: typeof NRRDLoader
    }
}

Three.NRRDLoader = NRRDLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nrrdLoader: NRRDLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nrrdLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nrrdLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\NRRDLoader.d.ts

consParams.nrrdLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\NRRDLoader.d.ts    

objParams.nrrdLoader = [...objParams.loader,
    'manager',
    'path',
    'fieldFunctions',
].distinct()

export type NRRDLoaderProps = Node<NRRDLoader, typeof NRRDLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nrrdLoader: { manager?: LoadingManager; }
    }
}

defaults.nrrdLoader = {}

