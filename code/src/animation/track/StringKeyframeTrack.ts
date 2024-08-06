import { Object3DNode } from '../../../three-types'
import { StringKeyframeTrack } from 'three/src/animation/tracks/StringKeyframeTrack.js'
export { StringKeyframeTrack } from 'three/src/animation/tracks/StringKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        stringKeyframeTrack: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        stringKeyframeTrack: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\StringKeyframeTrack.d.ts

consParams.stringKeyframeTrack = [
    'name',
    'times',
    'values',
    'interpolation',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\StringKeyframeTrack.d.ts    

objParams.stringKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'string'
     */
    'ValueTypeName',
].distinct()

export type StringKeyframeTrackProps = Object3DNode<StringKeyframeTrack, typeof StringKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<any> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stringKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<any> }>
    }
}

defaults.stringKeyframeTrack = {}