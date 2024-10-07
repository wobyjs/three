import { Node } from '../../../three-types'
import { VolumeSlice } from 'three/examples/jsm/misc/VolumeSlice.js'
export * from 'three/examples/jsm/misc/VolumeSlice.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        volumeSlice: typeof volumeSlice
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        volumeSlice: typeof _volumeSlice
    }
}



const volumeSlice = ([
    'volumeSlice',
    'index',
    'axis',
] as const).distinct()
consParams.volumeSlice = volumeSlice



const _volumeSlice = ([
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
] as const).distinct()
objProps.volumeSlice = _volumeSlice

export type VolumeSliceProps = Node<VolumeSlice, typeof VolumeSlice, { xLenvolumeSlice: VolumeSlice, index?: number, axis?: string }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        volumeSlice: Partial<{ xLenvolumeSlice: VolumeSlice, index?: number, axis?: string }>
    }
}

defaults.volumeSlice = {}

