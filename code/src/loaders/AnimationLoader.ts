import { Node } from '../../three-types'
import { AnimationLoader } from 'three/src/loaders/AnimationLoader.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import './Loader'

declare module '../../lib/3/three'
{
    interface Three {
        AnimationLoader: typeof AnimationLoader
    }
}

Three.AnimationLoader = AnimationLoader

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            animationLoader: AnimationLoaderProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        animationLoader: typeof animationLoader
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        animationLoader: typeof _animationLoader
    }
}


const animationLoader = ([
    'manager',
] as const).distinct()
consParams.animationLoader = animationLoader

const _animationLoader = ([...objProps.loader] as const).distinct()
objProps.animationLoader = _animationLoader

export type AnimationLoaderProps = Node<AnimationLoader, typeof AnimationLoader, { manager?: LoadingManager }>

declare module '../../lib/3/defaults' {
    interface defaults {
        animationLoader: { manager?: LoadingManager }
    }
}

defaults.animationLoader = {}

