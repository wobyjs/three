import { type LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { Object3DNode } from '../../../three-types'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js'
export * from 'three/examples/jsm/lines/LineSegments2.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../../../src/materials'

declare module '../../../lib/3/three'
{
    interface Three {
        LineSegments2: typeof LineSegments2
    }
}

Three.LineSegments2 = LineSegments2

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineSegments2: LineSegments2Props,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lineSegments2: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lineSegments2: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegments2.d.ts

consParams.lineSegments2 = [
    'geometry',
    'material',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegments2.d.ts    

objParams.lineSegments2 = [
    'geometry',
    'material',
].distinct()


export type LineSegments2Props = Object3DNode<LineSegments2, typeof LineSegments2, { geometry?: LineSegmentsGeometry; material?: LineMaterial; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lineSegments2: { geometry?: LineSegmentsGeometry; material?: LineMaterial; }
    }
}

defaults.lineSegments2 = {}

