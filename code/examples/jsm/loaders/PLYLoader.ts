import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js'
export * from 'three/examples/jsm/loaders/PLYLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PLYLoader: typeof PLYLoader
    }
}

Three.PLYLoader = PLYLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            plyLoader: PLYLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        plyLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        plyLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\plyLoader.d.ts

consParams.plyLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\PLYLoader.d.ts    

objParams.plyLoader = [...objParams.loader,
    'propertyNameMapping',
    'customPropertyMapping',
].distinct()

export type PLYLoaderProps = Node<PLYLoader, typeof PLYLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        plyLoader: { manager?: LoadingManager; }
    }
}

defaults.plyLoader = {}

