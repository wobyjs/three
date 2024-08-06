import { Object3DNode } from '../../../three-types'
import { InterpolationModes } from 'three/src/constants.js'
import { VectorKeyframeTrack } from 'three/src/animation/tracks/VectorKeyframeTrack.js'
export { VectorKeyframeTrack } from 'three/src/animation/tracks/VectorKeyframeTrack.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        vectorKeyframeTrack: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        vectorKeyframeTrack: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\VectorKeyframeTrack.d.ts

consParams.vectorKeyframeTrack = [
    'name',
    'times',
    'values',
    'interpolation',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\animation\tracks\VectorKeyframeTrack.d.ts    

objParams.vectorKeyframeTrack = [...objParams.keyframeTrack,
    /**
     * @default 'vector'
     */
    'ValueTypeName',
].distinct()

export type VectorKeyframeTrackProps = Object3DNode<VectorKeyframeTrack, typeof VectorKeyframeTrack, { name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        vectorKeyframeTrack: Partial<{ name: string; times: ArrayLike<number>; values: ArrayLike<number>; interpolation?: InterpolationModes; }>
    }
}

defaults.vectorKeyframeTrack = {}