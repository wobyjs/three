import { Node, Vector4 } from '../../../three-types'
import { NURBSVolume } from 'three/examples/jsm/curves/NURBSVolume.js'
export * from 'three/examples/jsm/curves/NURBSVolume.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NURBSVolume: typeof NURBSVolume
    }
}

Three.NURBSVolume = NURBSVolume

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nurbsVolume: NURBSVolumeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nurbsVolume: typeof nurbsVolume
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nurbsVolume: typeof _nurbsVolume
    }
}




const nurbsVolume = ([
    'degree1',
    'degree2',
    'degree3',
    'knots1',
    'knots2',
    'knots3',
    'controlPoints',
] as const).distinct()
consParams.nurbsVolume = nurbsVolume




const _nurbsVolume = ([
    'degree1',
    'degree2',
    'degree3',
    'knots1',
    'knots2',
    'knots3',
    'controlPoints',
] as const).distinct()
objProps.nurbsVolume = _nurbsVolume

export type NURBSVolumeProps = Node<NURBSVolume, typeof NURBSVolume, { degree1: number; degree2: number; degree3: number; knots1: readonly number[]; knots2: readonly number[]; knots3: readonly number[]; controlPoints: Vector4[][][]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nURBSVolume: Partial<{ degree1: number; degree2: number; degree3: number; knots1: readonly number[]; knots2: readonly number[]; knots3: readonly number[]; controlPoints: Vector4[][][]; }>
    }
}

defaults.nURBSVolume = {}

