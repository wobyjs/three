import { type LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js'
import { type LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
import { Object3DNode } from '../../../three-types'
import { Line2 } from 'three/examples/jsm/lines/Line2.js'
export * from 'three/examples/jsm/lines/Line2.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './LineSegments2'

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
        line2: typeof line2
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        line2: typeof _line2
    }
}

const line2 = ([//...consParams.lineSegments2,
    'geometry',
    'material',
] as const).distinct()
consParams.line2 = line2

const _line2 = ([...objProps.lineSegments2,
    // 'geometry',
    // 'material',
] as const).distinct()
objProps.line2 = _line2

export type Line2Props = Object3DNode<Line2, typeof Line2, { geometry?: LineGeometry; material?: LineMaterial; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        line2: { geometry?: LineGeometry; material?: LineMaterial; }
    }
}

defaults.line2 = {}

