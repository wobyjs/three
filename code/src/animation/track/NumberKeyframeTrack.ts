import { Node } from '../../../three-types'
import { InterpolationModes } from 'three/src/constants.js'
import { NumberKeyframeTrack } from 'three/src/animation/tracks/NumberKeyframeTrack.js'
export { NumberKeyframeTrack } from 'three/src/animation/tracks/NumberKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        numberKeyframeTrack: typeof numberKeyframeTrack
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        numberKeyframeTrack: typeof _numberKeyframeTrack
    }
}



const numberKeyframeTrack = ([
    'name',
    'times',
    'values',
    'interpolation',
] as const).distinct()
consParams.numberKeyframeTrack = numberKeyframeTrack



const _numberKeyframeTrack = ([...objProps.keyframeTrack,
    /**
     * @default 'number'
     */
    'ValueTypeName',
] as const).distinct()
objProps.numberKeyframeTrack = _numberKeyframeTrack

export type NumberKeyframeTrackProps = Node<NumberKeyframeTrack, typeof NumberKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        numberKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>
    }
}

defaults.numberKeyframeTrack = {}