import { Vector3, Euler, Node } from '../../../three-types'
import { BufferGeometryNode } from '../../../src/core/BufferGeometryNode'
import { Mesh } from 'three/src/objects/Mesh.js'
import { DecalGeometry, DecalVertex } from 'three/examples/jsm/geometries/DecalGeometry.js'
export * from 'three/examples/jsm/geometries/DecalGeometry.js'

import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        decalGeometry: string[]
        decalVertex: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        decalGeometry: string[]
        decalVertex: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\DecalGeometry.d.ts

consParams.decalGeometry = [
    'mesh',
    'position',
    'orientation',
    'size',
].distinct()


consParams.decalVertex = [
    'position',
    'normal',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\geometries\DecalGeometry.d.ts    

objParams.decalGeometry = [...objParams.bufferGeometry,
].distinct()


objParams.decalVertex = [
].distinct()

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

