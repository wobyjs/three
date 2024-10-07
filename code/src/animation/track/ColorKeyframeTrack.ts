import { Node } from '../../../three-types'
import { InterpolationModes } from 'three/src/constants.js'
import { ColorKeyframeTrack } from 'three/src/animation/tracks/ColorKeyframeTrack.js'
export { ColorKeyframeTrack } from 'three/src/animation/tracks/ColorKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        colorKeyframeTrack: typeof colorKeyframeTrack
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        colorKeyframeTrack: typeof _colorKeyframeTrack
    }
}



const colorKeyframeTrack = ([
    'name',
    'times',
    'values',
    'interpolation',
] as const).distinct()
consParams.colorKeyframeTrack = colorKeyframeTrack



const _colorKeyframeTrack = ([...objProps.keyframeTrack,
    /**
     * @default 'color'
     */
    'ValueTypeName',
] as const).distinct()
objProps.colorKeyframeTrack = _colorKeyframeTrack

export type ColorKeyframeTrackProps = Node<ColorKeyframeTrack, typeof ColorKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        colorKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>
    }
}

defaults.colorKeyframeTrack = {}