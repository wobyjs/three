import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { IESLoader } from 'three/examples/jsm/loaders/IESLoader.js'
export * from 'three/examples/jsm/loaders/IESLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        IESLoader: typeof IESLoader
    }
}

Three.IESLoader = IESLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            iesLoader: IESLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        iesLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        iesLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\IESLoader.d.ts

consParams.iesLoader = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\IESLoader.d.ts    

objParams.iesLoader = [...objParams.loader,
].distinct()

export type IESLoaderProps = Node<IESLoader, typeof IESLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        iesLoader: { manager?: LoadingManager; }
    }
}

defaults.iesLoader = {}

