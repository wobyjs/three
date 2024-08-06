import { Node } from '../../../three-types'
import { Volume } from 'three/examples/jsm/misc/Volume.js'
export * from 'three/examples/jsm/misc/Volume.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Volume: typeof Volume
    }
}

Three.Volume = Volume

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            volume: VolumeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        volume: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        volume: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Volume.d.ts

consParams.volume = [
    'xLength',
    'yLength',
    'zLength',
    'type',
    'arrayBuffer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\Volume.d.ts

objParams.volume = [
    'xLength',
    'yLength',
    'zLength',
    'axisOrder',
    'data',
    'spacing',
    'offset',
    'matrix',
    'lowerThreshold',
    'upperThreshold',
    'sliceList',
].distinct()

export type VolumeProps = Node<Volume, typeof Volume, { xLength?: number; yLength?: number; zLength?: number; type?: string; arrayBuffer?: ArrayLike<number> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        volume: Partial<{ xLength?: number; yLength?: number; zLength?: number; type?: string; arrayBuffer?: ArrayLike<number> }>
    }
}
defaults.volume = {}
