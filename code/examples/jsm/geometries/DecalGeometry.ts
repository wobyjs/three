import { Vector3, Euler, Node } from '../../../three-types'
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode'
import { Mesh } from 'three/src/objects/Mesh.js'
import { DecalGeometry, DecalVertex } from 'three/examples/jsm/geometries/DecalGeometry.js'
export * from 'three/examples/jsm/geometries/DecalGeometry.js'

import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            decalGeometry: DecalGeometryProps,
            decalVertex: DecalVertexProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        decalGeometry: typeof decalGeometry
        decalVertex: typeof decalVertex
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        decalGeometry: typeof _decalGeometry
        decalVertex: typeof _decalVertex
    }
}



const decalGeometry = ([
    'mesh',
    'position',
    'orientation',
    'size',
] as const).distinct()
consParams.decalGeometry = decalGeometry


const decalVertex = ([
    'position',
    'normal',
] as const).distinct()
consParams.decalVertex = decalVertex



const _decalGeometry = ([...objProps.bufferGeometry,
] as const).distinct()
objProps.decalGeometry = _decalGeometry


const _decalVertex = ([
] as const).distinct()
objProps.decalVertex = _decalVertex

export type DecalGeometryProps = BufferGeometryNode<DecalGeometry, typeof DecalGeometry, { mesh: Mesh; position: Vector3; orientation: Euler; size: Vector3; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        decalGeometry: Partial<{ mesh: Mesh; position: Vector3; orientation: Euler; size: Vector3; }>
    }
}

defaults.decalGeometry = {}

export type DecalVertexProps = Node<DecalVertex, typeof DecalVertex, { position: Vector3; normal: Vector3; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        decalVertex: Partial<{ position: Vector3; normal: Vector3; }>
    }
}

defaults.decalVertex = {}

