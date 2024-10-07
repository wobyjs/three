import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import ComputeNode from 'three/src/nodes/gpgpu/ComputeNode.js'
export { ComputeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        computeNode: typeof computeNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        computeNode: typeof _computeNode
    }
}

const computeNode = ([
    'computeNode',
    'count',
    'workgroupSize',
] as const).distinct()
consParams.computeNode = computeNode

const _computeNode = ([
    'isComputeNode',
    'count',
    'workgroupSize',
    'dispatchCount',
] as const).distinct()
objProps.computeNode = _computeNode

export type ComputeNodeProps = Node<ComputeNode, typeof ComputeNode, { computeNode: ENode; count: number; workgroupSize?: number[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        computeNode: Partial<{ computeNode: ENode; count: number; workgroupSize?: number[]; }>
    }
}

defaults.computeNode = {}

