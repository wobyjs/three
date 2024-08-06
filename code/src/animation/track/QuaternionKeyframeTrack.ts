import { Object3DNode } from '../../../three-types'
import { InterpolationModes } from 'three/src/constants.js'
import { QuaternionKeyframeTrack } from 'three/src/animation/tracks/QuaternionKeyframeTrack.js'
export { QuaternionKeyframeTrack } from 'three/src/animation/tracks/QuaternionKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        QuaternionKeyframeTrack: typeof QuaternionKeyframeTrack
    }
}

Three.QuaternionKeyframeTrack = QuaternionKeyframeTrack

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            quaternionKeyframeTrack: QuaternionKeyframeTrackProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        quaternionKeyframeTrack: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        quaternionKeyframeTrack: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\QuaternionKeyframeTrack.d.ts

consParams.quaternionKeyframeTrack = [
    'name',
    'times',
    'values',
    'interpolation',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\QuaternionKeyframeTrack.d.ts    

objParams.quaternionKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'quaternion'
     */
    'ValueTypeName',
].distinct()

export type QuaternionKeyframeTrackProps = Object3DNode<QuaternionKeyframeTrack, typeof QuaternionKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        quaternionKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>
    }
}

defaults.quaternionKeyframeTrack = {}