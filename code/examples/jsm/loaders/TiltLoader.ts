import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { TiltLoader } from 'three/examples/jsm/loaders/TiltLoader.js'
export * from 'three/examples/jsm/loaders/TiltLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        TiltLoader: typeof TiltLoader
    }
}

Three.TiltLoader = TiltLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            tiltLoader: TiltLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        tiltLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        tiltLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TiltLoader.d.ts

consParams.tiltLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\TiltLoader.d.ts    

objParams.tiltLoader = [...objParams.loader,
].distinct()


export type TiltLoaderProps = Node<TiltLoader, typeof TiltLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        tiltLoader: { manager?: LoadingManager; }
    }
}

defaults.tiltLoader = {}

