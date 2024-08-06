import { Object3DNode } from '../../../three-types'
import { BooleanKeyframeTrack } from 'three/src/animation/tracks/BooleanKeyframeTrack.js'
export { BooleanKeyframeTrack } from 'three/src/animation/tracks/BooleanKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        booleanKeyframeTrack: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        booleanKeyframeTrack: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\BooleanKeyframeTrack.d.ts

consParams.booleanKeyframeTrack = [
    'name',
    'times',
    'values',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\BooleanKeyframeTrack.d.ts    

objParams.booleanKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'bool'
     */
    'ValueTypeName',
].distinct()

export type BooleanKeyframeTrackProps = Object3DNode<BooleanKeyframeTrack, typeof BooleanKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<any> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        booleanKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<any> }>
    }
}

defaults.booleanKeyframeTrack = {}