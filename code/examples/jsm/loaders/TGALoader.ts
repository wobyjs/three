import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js'
export * from 'three/examples/jsm/loaders/TGALoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TGALoader: typeof TGALoader
    }
}

Three.TGALoader = TGALoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tgaLoader: TGALoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tgaLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        tgaLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TGALoader.d.ts

consParams.tgaLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TGALoader.d.ts    

objParams.tgaLoader = [...objParams.dataTextureLoader,
].distinct()

export type TGALoaderProps = Node<TGALoader, typeof TGALoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tgaLoader: { manager?: LoadingManager; }
    }
}

defaults.tgaLoader = {}

