import { Object3DNode } from '../../../three-types'
import { InterpolationModes } from 'three/src/constants.js'
import { NumberKeyframeTrack } from 'three/src/animation/tracks/NumberKeyframeTrack.js'
export { NumberKeyframeTrack } from 'three/src/animation/tracks/NumberKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NumberKeyframeTrack: typeof NumberKeyframeTrack
    }
}

Three.NumberKeyframeTrack = NumberKeyframeTrack

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            numberKeyframeTrack: NumberKeyframeTrackProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        numberKeyframeTrack: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        numberKeyframeTrack: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\NumberKeyframeTrack.d.ts

consParams.numberKeyframeTrack = [
    'name',
    'times',
    'values',
    'interpolation',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\NumberKeyframeTrack.d.ts    

objParams.numberKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'number'
     */
    'ValueTypeName',
].distinct()

export type NumberKeyframeTrackProps = Object3DNode<NumberKeyframeTrack, typeof NumberKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        numberKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>
    }
}

defaults.numberKeyframeTrack = {}