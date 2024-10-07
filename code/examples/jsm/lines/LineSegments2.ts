import { type LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { Object3DNode } from '../../../three-types'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'
import { LineSegments2 } from 'three/examples/jsm/lines/LineSegments2.js'
export * from 'three/examples/jsm/lines/LineSegments2.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
// import '../../../src/materials/Material'
import '../../../src/objects/Mesh'

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
        lineSegments2: typeof lineSegments2
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lineSegments2: typeof _lineSegments2
    }
}



const lineSegments2 = ([//...consParams.mesh,
    'geometry',
    'material',
] as const).distinct()
consParams.lineSegments2 = lineSegments2



const _lineSegments2 = ([...objProps.mesh,
    'geometry',
    'material',
] as const).distinct()
objProps.lineSegments2 = _lineSegments2


export type LineSegments2Props = Object3DNode<LineSegments2, typeof LineSegments2, { geometry?: LineSegmentsGeometry; material?: LineMaterial; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lineSegments2: { geometry?: LineSegmentsGeometry; material?: LineMaterial; }
    }
}

defaults.lineSegments2 = {}

