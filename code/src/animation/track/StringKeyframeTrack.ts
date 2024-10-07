import { Node } from '../../../three-types'
import { StringKeyframeTrack } from 'three/src/animation/tracks/StringKeyframeTrack.js'
export { StringKeyframeTrack } from 'three/src/animation/tracks/StringKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        StringKeyframeTrack: typeof StringKeyframeTrack
    }
}

Three.StringKeyframeTrack = StringKeyframeTrack

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stringKeyframeTrack: StringKeyframeTrackProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        stringKeyframeTrack: typeof stringKeyframeTrack
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        stringKeyframeTrack: typeof _stringKeyframeTrack
    }
}



const stringKeyframeTrack = ([
    'name',
    'times',
    'values',
    'interpolation',
] as const).distinct()
consParams.stringKeyframeTrack = stringKeyframeTrack



const _stringKeyframeTrack = ([...objProps.keyframeTrack,
    /**
     * @default 'string'
     */
    'ValueTypeName',
] as const).distinct()
objProps.stringKeyframeTrack = _stringKeyframeTrack

export type StringKeyframeTrackProps = Node<StringKeyframeTrack, typeof StringKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<any> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stringKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<any> }>
    }
}

defaults.stringKeyframeTrack = {}