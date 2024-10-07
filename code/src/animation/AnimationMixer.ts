import { Node } from '../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { AnimationMixer } from 'three/src/animation/AnimationMixer.js'
import { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup.js'
export { AnimationMixer } from 'three/src/animation/AnimationMixer.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        AnimationMixer: typeof AnimationMixer
    }
}

Three.AnimationMixer = AnimationMixer

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            animationMixer: AnimationMixerProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        animationMixerEventMap: typeof animationMixerEventMap
        animationMixer: typeof animationMixer
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        animationMixerEventMap: typeof _animationMixerEventMap
        animationMixer: typeof _animationMixer
    }
}



const animationMixerEventMap = ([
    'loop',
    'finished',
] as const).distinct()
consParams.animationMixerEventMap = animationMixerEventMap

const animationMixer = ([
    'root',
] as const).distinct()
consParams.animationMixer = animationMixer



const _animationMixerEventMap = ([
    'loop',
    'finished',
] as const).distinct()
objProps.animationMixerEventMap = _animationMixerEventMap

const _animationMixer = ([
    /**
     * @default 0
     */
    'time',
    /**
     * @default 1.0
     */
    'timeScale',
] as const).distinct()
objProps.animationMixer = _animationMixer


export type AnimationMixerProps = Node<AnimationMixer, typeof AnimationMixer, { root: Object3D | AnimationObjectGroup; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        animationMixer: Partial<{ root: Object3D | AnimationObjectGroup; }>
    }
}

defaults.animationMixer = {}