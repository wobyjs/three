import { Node, Vector2, Vector3, Vector4 } from '../../../three-types'
import { NURBSCurve } from 'three/examples/jsm/curves/NURBSCurve.js'
export * from 'three/examples/jsm/curves/NURBSCurve.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NURBSCurve: typeof NURBSCurve
    }
}

Three.NURBSCurve = NURBSCurve

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nurbsCurve: NURBSCurveProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nurbsCurve: typeof nurbsCurve
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nurbsCurve: typeof _nurbsCurve
    }
}



const nurbsCurve = ([

    'degree',
    'knots',
    'controlPoints',
    'startKnot',
    'endKnot',
] as const).distinct()
consParams.nurbsCurve = nurbsCurve



const _nurbsCurve = ([...objProps.curve,
    'degree',
    'knots',
    'controlPoints',
    'startKnot',
    'endKnot',
] as const).distinct()
objProps.nurbsCurve = _nurbsCurve

export type NURBSCurveProps = Node<NURBSCurve, typeof NURBSCurve, { degree: number; knots: number[]; controlPoints: Vector2[] | Vector3[] | Vector4[]; startKnot?: number; endKnot?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nURBSCurve: Partial<{ degree: number; knots: number[]; controlPoints: Vector2[] | Vector3[] | Vector4[]; startKnot?: number; endKnot?: number; }>
    }
}

defaults.nURBSCurve = {}

