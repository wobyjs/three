import { Node } from '../../../three-types'
import { BatchedMesh } from 'three/src/objects/BatchedMesh.js'
import BatchNode from 'three/src/nodes/accessors/BatchNode.js'
export { BatchNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        batchNode: typeof batchNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        batchNode: typeof _batchNode
    }
}



const batchNode = ([
    'batchMesh',
] as const).distinct()
consParams.batchNode = batchNode



const _batchNode = ([...objProps.node,
    'batchMesh',
    'instanceColorNode',
    'batchingIdNode',
] as const).distinct()
objProps.batchNode = _batchNode

export type BatchNodeProps = Node<BatchNode, typeof BatchNode, { batchMesh: BatchedMesh; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        batchNode: Partial<{ batchMesh: BatchedMesh; }>
    }
}

defaults.batchNode = {}

