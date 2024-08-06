import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { LottieLoader } from 'three/examples/jsm/loaders/LottieLoader.js'
export * from 'three/examples/jsm/loaders/LottieLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LottieLoader: typeof LottieLoader
    }
}

Three.LottieLoader = LottieLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lottieLoader: LottieLoaderProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lottieLoader: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lottieLoader: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LottieLoader.d.ts

consParams.lottieLoader = [
    'manager',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\loaders\LottieLoader.d.ts    

objParams.lottieLoader = [...objParams.loader,
].distinct()

export type LottieLoaderProps = Node<LottieLoader, typeof LottieLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lottieLoader: { manager?: LoadingManager; }
    }
}

defaults.lottieLoader = {}

