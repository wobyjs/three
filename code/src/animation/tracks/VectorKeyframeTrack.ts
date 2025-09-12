import { Node } from '../../../three-types'
import { InterpolationModes } from 'three/src/constants.js'
import { VectorKeyframeTrack } from 'three/src/animation/tracks/VectorKeyframeTrack.js'
export { VectorKeyframeTrack } from 'three/src/animation/tracks/VectorKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VectorKeyframeTrack: typeof VectorKeyframeTrack
    }
}

Three.VectorKeyframeTrack = VectorKeyframeTrack

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            vectorKeyframeTrack: VectorKeyframeTrackProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        vectorKeyframeTrack: typeof vectorKeyframeTrack
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        vectorKeyframeTrack: typeof _vectorKeyframeTrack
    }
}



const vectorKeyframeTrack = ([
    'name',
    'times',
    'values',
    'interpolation',
] as const).distinct()
consParams.vectorKeyframeTrack = vectorKeyframeTrack



const _vectorKeyframeTrack = ([...objProps.keyframeTrack,
    /**
     * @default 'vector'
     */
    'ValueTypeName',
] as const).distinct()
objProps.vectorKeyframeTrack = _vectorKeyframeTrack

export type VectorKeyframeTrackProps = Node<VectorKeyframeTrack, typeof VectorKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vectorKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>
    }
}

defaults.vectorKeyframeTrack = {}