import { Node } from '../../three-types'
import { AnimationMixer } from 'three/src/animation/AnimationMixer.js'
import { Object3D } from 'three/src/core/Object3D.js'
import { AnimationClip } from 'three/src/animation/AnimationClip.js'
import { AnimationBlendMode } from 'three/src/constants.js'
import { AnimationAction } from 'three/src/animation/AnimationAction.js'
export { AnimationAction } from 'three/src/animation/AnimationAction.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        AnimationAction: typeof AnimationAction
    }
}

Three.AnimationAction = AnimationAction

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            animationAction: AnimationActionProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        animationAction: typeof animationAction
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        animationAction: typeof _animationAction
    }
}



// Animation ////////////////////////////////////////////////////////////////////////////////////////

const animationAction = ([
    'mixer',
    'clip',
    'localRoot',
    'blendMode',
] as const).distinct()
consParams.animationAction = animationAction



// Animation ////////////////////////////////////////////////////////////////////////////////////////

const _animationAction = ([
    'blendMode',
    /**
     * @default THREE.LoopRepeat
     */
    'loop',
    /**
     * @default 0
     */
    'time',
    /**
     * @default 1
     */
    'timeScale',
    /**
     * @default 1
     */
    'weight',
    /**
     * @default Infinity
     */
    'repetitions',
    /**
     * @default false
     */
    'paused',
    /**
     * @default true
     */
    'enabled',
    /**
     * @default false
     */
    'clampWhenFinished',
    /**
     * @default true
     */
    'zeroSlopeAtStart',
    /**
     * @default true
     */
    'zeroSlopeAtEnd',
] as const).distinct()
objProps.animationAction = _animationAction

export type AnimationActionProps = Node<AnimationAction, typeof AnimationAction, { mixer: AnimationMixer; clip: AnimationClip; localRoot?: Object3D; blendMode?: AnimationBlendMode; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        animationAction: Partial<{ mixer: AnimationMixer; clip: AnimationClip; localRoot?: Object3D; blendMode?: AnimationBlendMode; }>
    }
}

defaults.animationAction = {}

