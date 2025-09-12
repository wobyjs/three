import { AnimationClipCreator } from 'three/examples/jsm/animation/AnimationClipCreator.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'


declare module '../../../lib/3/three' {
    interface Three {
        AnimationClipCreator: typeof AnimationClipCreator
    }
}

Three.AnimationClipCreator = AnimationClipCreator

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            animationClipCreator: AnimationClipCreatorProps
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        animationClipCreator: typeof animationClipCreator
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        animationClipCreator: typeof _animationClipCreator
    }
}

const animationClipCreator = ([
] as const).distinct()
consParams.animationClipCreator = animationClipCreator

const _animationClipCreator = ([
] as const).distinct()
objProps.animationClipCreator = _animationClipCreator

export type AnimationClipCreatorProps = {
    // Static utility class - no specific props needed
}

declare module '../../../lib/3/defaults' {
    interface defaults {
        animationClipCreator: Partial<AnimationClipCreatorProps>
    }
}

defaults.animationClipCreator = {}
