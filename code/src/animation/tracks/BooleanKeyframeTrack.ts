import { Node } from '../../../three-types'
import { BooleanKeyframeTrack } from 'three/src/animation/tracks/BooleanKeyframeTrack.js'
export { BooleanKeyframeTrack } from 'three/src/animation/tracks/BooleanKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        BooleanKeyframeTrack: typeof BooleanKeyframeTrack
    }
}

Three.BooleanKeyframeTrack = BooleanKeyframeTrack

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            booleanKeyframeTrack: BooleanKeyframeTrackProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        booleanKeyframeTrack: typeof booleanKeyframeTrack
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        booleanKeyframeTrack: typeof _booleanKeyframeTrack
    }
}



const booleanKeyframeTrack = ([
    'name',
    'times',
    'values',
] as const).distinct()
consParams.booleanKeyframeTrack = booleanKeyframeTrack



const _booleanKeyframeTrack = ([...objProps.keyframeTrack,
    /**
     * @default 'bool'
     */
    'ValueTypeName',
] as const).distinct()
objProps.booleanKeyframeTrack = _booleanKeyframeTrack

export type BooleanKeyframeTrackProps = Node<BooleanKeyframeTrack, typeof BooleanKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<any> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        booleanKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<any> }>
    }
}

defaults.booleanKeyframeTrack = {}