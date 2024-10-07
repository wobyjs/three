import { Node, Vector2, Vector3, Vector4 } from '../../../three-types'
import { NURBSSurface } from 'three/examples/jsm/curves/NURBSSurface.js'
export * from 'three/examples/jsm/curves/NURBSSurface.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NURBSSurface: typeof NURBSSurface
    }
}

Three.NURBSSurface = NURBSSurface

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nurbsSurface: NURBSSurfaceProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nurbsSurface: typeof nurbsSurface
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nurbsSurface: typeof _nurbsSurface
    }
}



const nurbsSurface = ([

    'degree1',
    'degree2',
    'knots1',
    'knots2',
    'controlPoints',
] as const).distinct()
consParams.nurbsSurface = nurbsSurface



const _nurbsSurface = ([
] as const).distinct()
objProps.nurbsSurface = _nurbsSurface

export type NURBSSurfaceProps = Node<NURBSSurface, typeof NURBSSurface, { degree1: number; degree2: number; knots1: number[]; knots2: number[]; controlPoints: Vector2[][] | Vector3[][] | Vector4[][]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nURBSSurface: Partial<{ degree1: number; degree2: number; knots1: number[]; knots2: number[]; controlPoints: Vector2[][] | Vector3[][] | Vector4[][]; }>
    }
}

defaults.nURBSSurface = {}

