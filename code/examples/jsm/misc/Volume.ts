import { Node } from '../../../three-types'
import { Volume } from 'three/examples/jsm/misc/Volume.js'
export * from 'three/examples/jsm/misc/Volume.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        volume: typeof volume
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        volume: typeof _volume
    }
}



const volume = ([
    'xLength',
    'yLength',
    'zLength',
    'type',
    'arrayBuffer',
] as const).distinct()
consParams.volume = volume



const _volume = ([
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
] as const).distinct()
objProps.volume = _volume

export type VolumeProps = Node<Volume, typeof Volume, { xLength?: number; yLength?: number; zLength?: number; type?: string; arrayBuffer?: ArrayLike<number> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        volume: Partial<{ xLength?: number; yLength?: number; zLength?: number; type?: string; arrayBuffer?: ArrayLike<number> }>
    }
}
defaults.volume = {}
