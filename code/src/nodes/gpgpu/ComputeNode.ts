import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import ComputeNode from 'three/src/nodes/gpgpu/ComputeNode.js'
export { ComputeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ComputeNode: typeof ComputeNode
    }
}

Three.ComputeNode = ComputeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            computeNode: ComputeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        computeNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        computeNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\gpgpu\ComputeNode.d.ts

consParams.computeNode = [
    'computeNode',
    'count',
    'workgroupSize',
].distinct()


objParams.computeNode = [
    'isComputeNode',
    'count',
    'workgroupSize',
    'dispatchCount',
]

export type ComputeNodeProps = Node<ComputeNode, typeof ComputeNode, { computeNode: ENode; count: number; workgroupSize?: number[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        computeNode: Partial<{ computeNode: ENode; count: number; workgroupSize?: number[]; }>
    }
}

defaults.computeNode = {}

