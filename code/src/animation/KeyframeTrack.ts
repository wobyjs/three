import { Object3DNode } from '../../three-types'
import { InterpolationModes } from 'three/src/constants.js'
import { KeyframeTrack } from 'three/src/animation/KeyframeTrack.js'
export { KeyframeTrack } from 'three/src/animation/KeyframeTrack.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
    interface Three {
        KeyframeTrack: typeof KeyframeTrack
    }
}

Three.KeyframeTrack = KeyframeTrack

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            keyframeTrack: KeyframeTrackProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        keyframeTrack: string[]
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        keyframeTrack: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\KeyframeTrack.d.ts

consParams.keyframeTrack = [
    /**
     * @param name
     * @param times
     * @param values
     * @param [interpolation=THREE.InterpolateLinear]
     */
    'name',
    'times',
    'values',
    'interpolation',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\AnimationUtils.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\KeyframeTrack.d.ts    

objParams.keyframeTrack = [
    'name',
    'times',
    'values',
    'ValueTypeName',
    'TimeBufferType',
    'ValueBufferType',
].distinct()

export type KeyframeTrackProps = Object3DNode<KeyframeTrack, typeof KeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<any>; interpolation?: InterpolationModes; }>

declare module '../../lib/3/defaults' {
    interface defaults {
        keyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<any>; interpolation?: InterpolationModes; }>
    }
}

defaults.keyframeTrack = {}