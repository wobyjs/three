import { type LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { type LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import { Object3DNode } from '../../../three-types'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
export * from 'three/examples/jsm/lines/Line2.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        Line2: typeof Line2
    }
}

Three.Line2 = Line2

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            line2: Line2Props,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        line2: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        line2: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\Line2.d.ts
consParams.line2 = [
    'geometry',
    'material',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\Line2.d.ts
objParams.line2 = [
    'geometry',
    'material',
].distinct()

export type Line2Props = Object3DNode<Line2, typeof Line2, { geometry?: LineGeometry; material?: LineMaterial; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        line2: { geometry?: LineGeometry; material?: LineMaterial; }
    }
}

defaults.line2 = {}

