import { Vector3 } from '../../../three-types'
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode'
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js'
export * from 'three/examples/jsm/geometries/ConvexGeometry.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        convexGeometry: typeof convexGeometry
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        convexGeometry: typeof _convexGeometry
    }
}



const convexGeometry = ([
    'points',
] as const).distinct()
consParams.convexGeometry = convexGeometry



const _convexGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.convexGeometry = _convexGeometry

export type ConvexGeometryProps = BufferGeometryNode<ConvexGeometry, typeof ConvexGeometry, { points?: Vector3[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        convexGeometry: Partial<{ points?: Vector3[]; }>
    }
}

defaults.convexGeometry = {}

