import { Object3DNode } from '../../../three-types'
import { InterpolationModes } from 'three/src/constants.js'
import { ColorKeyframeTrack } from 'three/src/animation/tracks/ColorKeyframeTrack.js'
export { ColorKeyframeTrack } from 'three/src/animation/tracks/ColorKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ColorKeyframeTrack: typeof ColorKeyframeTrack
    }
}

Three.ColorKeyframeTrack = ColorKeyframeTrack

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            colorKeyframeTrack: ColorKeyframeTrackProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        colorKeyframeTrack: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        colorKeyframeTrack: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\ColorKeyframeTrack.d.ts

consParams.colorKeyframeTrack = [
    'name',
    'times',
    'values',
    'interpolation',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\ColorKeyframeTrack.d.ts    

objParams.colorKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'color'
     */
    'ValueTypeName',
].distinct()

export type ColorKeyframeTrackProps = Object3DNode<ColorKeyframeTrack, typeof ColorKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        colorKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>
    }
}

defaults.colorKeyframeTrack = {}