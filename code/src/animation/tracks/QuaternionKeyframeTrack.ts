import { Node } from '../../../three-types'
import { InterpolationModes } from 'three/src/constants.js'
import { QuaternionKeyframeTrack } from 'three/src/animation/tracks/QuaternionKeyframeTrack.js'
export { QuaternionKeyframeTrack } from 'three/src/animation/tracks/QuaternionKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        quaternionKeyframeTrack: typeof quaternionKeyframeTrack
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        quaternionKeyframeTrack: typeof _quaternionKeyframeTrack
    }
}



const quaternionKeyframeTrack = ([
    'name',
    'times',
    'values',
    'interpolation',
] as const).distinct()
consParams.quaternionKeyframeTrack = quaternionKeyframeTrack



const _quaternionKeyframeTrack = ([...objProps.keyframeTrack,
    /**
     * @default 'quaternion'
     */
    'ValueTypeName',
] as const).distinct()
objProps.quaternionKeyframeTrack = _quaternionKeyframeTrack

export type QuaternionKeyframeTrackProps = Node<QuaternionKeyframeTrack, typeof QuaternionKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        quaternionKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>
    }
}

defaults.quaternionKeyframeTrack = {}