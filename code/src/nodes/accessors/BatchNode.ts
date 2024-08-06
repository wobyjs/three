import { Object3DNode } from '../../../three-types'
import { BatchedMesh } from 'three/src/objects/BatchedMesh.js'
import BatchNode from 'three/src/nodes/accessors/BatchNode.js'
export { BatchNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        BatchNode: typeof BatchNode
    }
}

Three.BatchNode = BatchNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            batchNode: BatchNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        batchNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        batchNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BatchNode.d.ts

consParams.batchNode = [
    'batchMesh',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BatchNode.d.ts    

objParams.batchNode = [...objParams.node,
    'batchMesh',
    'instanceColorNode',
    'batchingIdNode',
].distinct()

export type BatchNodeProps = Object3DNode<BatchNode, typeof BatchNode, { batchMesh: BatchedMesh; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        batchNode: Partial<{ batchMesh: BatchedMesh; }>
    }
}

defaults.batchNode = {}

