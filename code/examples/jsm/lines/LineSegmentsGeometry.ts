import { Object3DNode } from '../../../three-types'
import { LineSegmentsGeometry } from 'three/examples/jsm/lines/LineSegmentsGeometry.js'
export * from 'three/examples/jsm/lines/LineSegmentsGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        lineSegmentsGeometry: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lineSegmentsGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegmentsGeometry.d.ts

consParams.lineSegmentsGeometry = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineSegmentsGeometry.d.ts    

objParams.lineSegmentsGeometry = [...objParams.instancedBufferGeometry,
].distinct()

export type LineSegmentsGeometryProps = Object3DNode<LineSegmentsGeometry, typeof LineSegmentsGeometry, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lineSegmentsGeometry: {}
    }
}

defaults.lineSegmentsGeometry = {}

