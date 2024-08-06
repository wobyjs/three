import { Object3DNode } from '../../three-types'
import { Object3D } from 'three/src/core/Object3D.js'
import { AnimationMixer } from 'three/src/animation/AnimationMixer.js'
import { AnimationObjectGroup } from 'three/src/animation/AnimationObjectGroup.js'
export { AnimationMixer } from 'three/src/animation/AnimationMixer.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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
        animationMixerEventMap: string[]
        animationMixer: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        animationMixerEventMap: string[]
        animationMixer: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationMixer.d.ts

consParams.animationMixerEventMap = [
    'loop',
    'finished',
].distinct()

consParams.animationMixer = [
    'root',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationMixer.d.ts

objParams.animationMixerEventMap = [
    'loop',
    'finished',
].distinct()

objParams.animationMixer = [
    /**
     * @default 0
     */
    'time',
    /**
     * @default 1.0
     */
    'timeScale',
].distinct()


export type AnimationMixerProps = Object3DNode<AnimationMixer, typeof AnimationMixer, { root: Object3D | AnimationObjectGroup; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        animationMixer: Partial<{ root: Object3D | AnimationObjectGroup; }>
    }
}

defaults.animationMixer = {}