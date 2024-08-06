import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { GCodeLoader } from 'three/examples/jsm/loaders/GCodeLoader.js'
export * from 'three/examples/jsm/loaders/GCodeLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        GCodeLoader: typeof GCodeLoader
    }
}

Three.GCodeLoader = GCodeLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gCodeLoader: GCodeLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        gCodeLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        gCodeLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\GCodeLoader.d.ts

consParams.gCodeLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\GCodeLoader.d.ts    

objParams.gCodeLoader = [...objParams.loader,
    'splitLayer',
].distinct()

export type GCodeLoaderProps = Node<GCodeLoader, typeof GCodeLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gCodeLoader: { manager?: LoadingManager; }
    }
}

defaults.gCodeLoader = {}

