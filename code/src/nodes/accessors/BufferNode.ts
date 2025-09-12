import { Node } from '../../../three-types'
import BufferNode from 'three/src/nodes/accessors/BufferNode.js'
export { BufferNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        BufferNode: typeof BufferNode
    }
}

Three.BufferNode = BufferNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bufferNode: BufferNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        bufferNode: typeof bufferNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        bufferNode: typeof _bufferNode
    }
}



const bufferNode = ([
    'value',
    'bufferType',
    'bufferCount',
] as const).distinct()
consParams.bufferNode = bufferNode



const _bufferNode = ([...objProps.uniformNode,
    'isBufferNode',
    'bufferType',
    'bufferCount',
] as const).distinct()
objProps.bufferNode = _bufferNode

export type BufferNodeProps = Node<BufferNode<unknown>, typeof BufferNode, { value: unknown; bufferType: string; bufferCount?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bufferNode: Partial<{ value: unknown; bufferType: string; bufferCount?: number; }>
    }
}

defaults.bufferNode = {}

