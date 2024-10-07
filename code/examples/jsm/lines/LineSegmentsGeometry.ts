import { Node } from '../../../three-types'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'
export * from 'three/examples/jsm/lines/LineSegmentsGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../src/core/InstancedBufferGeometry'

declare module '../../../lib/3/three'
{
    interface Three {
        LineSegmentsGeometry: typeof LineSegmentsGeometry
    }
}

Three.LineSegmentsGeometry = LineSegmentsGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineSegmentsGeometry: LineSegmentsGeometryProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lineSegmentsGeometry: typeof lineSegmentsGeometry
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lineSegmentsGeometry: typeof _lineSegmentsGeometry
    }
}



const lineSegmentsGeometry = ([
] as const).distinct()
consParams.lineSegmentsGeometry = lineSegmentsGeometry



const _lineSegmentsGeometry = ([...objProps.instancedBufferGeometry,
    'applyMatrix4',
    'computeBoundingBox',
    'computeBoundingSphere',
    'fromEdgesGeometry',
    'fromLineSegments',
    'fromMesh',
    'fromWireframeGeometry',
    'setColors',
    'setPositions',
] as const).distinct()
objProps.lineSegmentsGeometry = _lineSegmentsGeometry

export type LineSegmentsGeometryProps = Node<LineSegmentsGeometry, typeof LineSegmentsGeometry, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lineSegmentsGeometry: {}
    }
}

defaults.lineSegmentsGeometry = {}

