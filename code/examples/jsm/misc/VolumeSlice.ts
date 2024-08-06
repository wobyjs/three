import { Node } from '../../../three-types'
import { VolumeSlice } from 'three/examples/jsm/misc/VolumeSlice.js'
export * from 'three/examples/jsm/misc/VolumeSlice.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VolumeSlice: typeof VolumeSlice
    }
}

Three.VolumeSlice = VolumeSlice

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            volumeSlice: VolumeSliceProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        volumeSlice: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        volumeSlice: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\VolumeSliceSlice.d.ts

consParams.volumeSlice = [
    'volumeSlice',
    'index',
    'axis',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\misc\VolumeSliceSlice.d.ts

objParams.volumeSlice = [
    'index',
    'axis',
    'canvas',
    'canvasBuffer',
    'ctx',
    'ctxBuffer',
    'mesh',
    'geometryNeedsUpdate',
    'sliceAccess',
    'jLength',
    'iLength',
    'matrix',
].distinct()

export type VolumeSliceProps = Node<VolumeSlice, typeof VolumeSlice, { xLenvolumeSlice: VolumeSlice, index?: number, axis?: string }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        volumeSlice: Partial<{ xLenvolumeSlice: VolumeSlice, index?: number, axis?: string }>
    }
}

defaults.volumeSlice = {}

