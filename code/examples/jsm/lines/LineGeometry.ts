import { Node } from '../../../three-types'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
export * from 'three/examples/jsm/lines/LineGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './LineSegmentsGeometry'

declare module '../../../lib/3/three'
{
    interface Three {
        LineGeometry: typeof LineGeometry
    }
}

Three.LineGeometry = LineGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineGeometry: LineGeometryProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lineGeometry: typeof lineGeometry
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lineGeometry: typeof _lineGeometry
    }
}



const lineGeometry = ([
] as const).distinct()
consParams.lineGeometry = lineGeometry



const _lineGeometry = ([...objProps.lineSegmentsGeometry,
] as const).distinct()
objProps.lineGeometry = _lineGeometry

export type LineGeometryProps = Node<LineGeometry, typeof LineGeometry, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lineGeometry: {}
    }
}

defaults.lineGeometry = {}

