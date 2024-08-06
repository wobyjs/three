import { Object3DNode } from '../../../three-types'
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js'
export * from 'three/examples/jsm/lines/LineGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        lineGeometry: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lineGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineGeometry.d.ts

consParams.lineGeometry = [
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\lines\LineGeometry.d.ts    

objParams.lineGeometry = [...objParams.lineSegmentsGeometry,
].distinct()

export type LineGeometryProps = Object3DNode<LineGeometry, typeof LineGeometry, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lineGeometry: {}
    }
}

defaults.lineGeometry = {}

