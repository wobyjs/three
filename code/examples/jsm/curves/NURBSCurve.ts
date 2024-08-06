import { Node, Vector2, Vector3, Vector4 } from '../../../three-types'
import { NURBSCurve } from 'three/examples/jsm/curves/NURBSCurve.js'
export * from 'three/examples/jsm/curves/NURBSCurve.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        nurbsCurve: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nurbsCurve: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSCurve.d.ts

consParams.nurbsCurve = [

    'degree',
    'knots',
    'controlPoints',
    'startKnot',
    'endKnot',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\curves\NURBSCurve.d.ts    

objParams.nurbsCurve = [...objParams.curve,
    'degree',
    'knots',
    'controlPoints',
    'startKnot',
    'endKnot',
].distinct()

export type NURBSCurveProps = Node<NURBSCurve, typeof NURBSCurve, { degree: number; knots: number[]; controlPoints: Vector2[] | Vector3[] | Vector4[]; startKnot?: number; endKnot?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nURBSCurve: Partial<{ degree: number; knots: number[]; controlPoints: Vector2[] | Vector3[] | Vector4[]; startKnot?: number; endKnot?: number; }>
    }
}

defaults.nURBSCurve = {}

