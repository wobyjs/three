import { Node } from '../../three-types'
import { KeyframeTrack } from 'three/src/animation/KeyframeTrack.js'
import { AnimationBlendMode } from 'three/src/constants.js'
import { AnimationClip } from 'three/src/animation/AnimationClip.js'
export { AnimationClip } from 'three/src/animation/AnimationClip.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'


declare module '../../lib/3/three'
{
    interface Three {
        AnimationClip: typeof AnimationClip
    }
}

Three.AnimationClip = AnimationClip

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            animationClip: AnimationClipProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        animationClip: typeof animationClip
        morphTarget: typeof morphTarget
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        animationClip: typeof _animationClip
        morphTarget: typeof _morphTarget
    }
}

const morphTarget = ([
    'name',
    'vertices'
] as const).distinct()
consParams.morphTarget = morphTarget

const animationClip = ([
    'name',
    'duration',
    'tracks',
    'blendMode',
] as const).distinct()
consParams.animationClip = animationClip

const _morphTarget = ([
    'name',
    'vertices',
] as const).distinct()
objProps.morphTarget = _morphTarget


const _animationClip = ([
    'name',
    'tracks',
    /**
     * @default THREE.NormalAnimationBlendMode
     */
    'blendMode',
    /**
     * @default -1
     */
    'duration',
    'uuid',
    'results',
] as const).distinct()
objProps.animationClip = _animationClip

export type AnimationClipProps = Node<AnimationClip, typeof AnimationClip, { name?: string; duration?: number; tracks?: KeyframeTrack[]; blendMode?: AnimationBlendMode; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        animationClip: { name?: string; duration?: number; tracks?: KeyframeTrack[]; blendMode?: AnimationBlendMode; }
    }
}

defaults.animationClip = {}

