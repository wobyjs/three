import { Vector3 } from '../../../three-types'
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js'
export * from 'three/examples/jsm/geometries/ConvexGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ConvexGeometry: typeof ConvexGeometry
    }
}

Three.ConvexGeometry = ConvexGeometry

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            convexGeometry: ConvexGeometryProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        convexGeometry: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        convexGeometry: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ConvexGeometry.d.ts

consParams.convexGeometry = [
    'points',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\ConvexGeometry.d.ts    

objParams.convexGeometry = [...objParams.bufferGeometry,
].distinct()

export type ConvexGeometryProps = BufferGeometryNode<ConvexGeometry, typeof ConvexGeometry, { points?: Vector3[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        convexGeometry: Partial<{ points?: Vector3[]; }>
    }
}

defaults.convexGeometry = {}

