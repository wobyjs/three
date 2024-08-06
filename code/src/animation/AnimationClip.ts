import { Object3DNode } from '../../three-types'
import { KeyframeTrack } from 'three/src/animation/KeyframeTrack.js'
import { AnimationBlendMode } from 'three/src/constants.js'
import { AnimationClip } from 'three/src/animation/AnimationClip.js'
export { AnimationClip } from 'three/src/animation/AnimationClip.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        animationClip: string[]
        morphTarget: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        animationClip: string[]
        morphTarget: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationClip.d.ts

consParams.animationClip = [
    'name',
    'duration',
    'tracks',
    'blendMode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationClip.d.ts

objParams.morphTarget = [
    'name',
    'vertices',
].distinct()


objParams.animationClip = [
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
].distinct()

export type AnimationClipProps = Object3DNode<AnimationClip, typeof AnimationClip, { name?: string; duration?: number; tracks?: KeyframeTrack[]; blendMode?: AnimationBlendMode; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        animationClip: { name?: string; duration?: number; tracks?: KeyframeTrack[]; blendMode?: AnimationBlendMode; }
    }
}

defaults.animationClip = {}

