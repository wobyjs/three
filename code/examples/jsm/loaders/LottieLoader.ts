import { Node } from '../../../three-types'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { LottieLoader } from 'three/examples/jsm/loaders/LottieLoader.js'
export * from 'three/examples/jsm/loaders/LottieLoader.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        lottieLoader: typeof lottieLoader
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lottieLoader: typeof _lottieLoader
    }
}



const lottieLoader = ([
    'manager',
] as const).distinct()
consParams.lottieLoader = lottieLoader



const _lottieLoader = ([...objProps.loader,
] as const).distinct()
objProps.lottieLoader = _lottieLoader

export type LottieLoaderProps = Node<LottieLoader, typeof LottieLoader, { manager?: LoadingManager; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lottieLoader: { manager?: LoadingManager; }
    }
}

defaults.lottieLoader = {}

