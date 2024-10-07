import { Node } from '../../../three-types'
import BufferAttributeNode from 'three/src/nodes/accessors/BufferAttributeNode.js'
export { BufferAttributeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { InterleavedBuffer } from '../../core/InterleavedBuffer'
import { BufferAttribute, TypedArray } from '../../core/BufferAttribute'
import '../core/InputNode'

declare module '../../../lib/3/three'
{
    interface Three {
        BufferAttributeNode: typeof BufferAttributeNode
    }
}

Three.BufferAttributeNode = BufferAttributeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bufferAttributeNode: BufferAttributeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        bufferAttributeNode: typeof bufferAttributeNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        bufferAttributeNode: typeof _bufferAttributeNode
    }
}


const bufferAttributeNode = ([...consParams.inputNode,
    'value',
    'bufferType',
    'bufferStride',
    'bufferOffset',
] as const).distinct()
consParams.bufferAttributeNode = bufferAttributeNode



const _bufferAttributeNode = ([...objProps.inputNode,
    'isBufferNode',
    'bufferType',
    'bufferStride',
    'bufferOffset',
    'usage',
    'instanced',
    'attribute',
] as const).distinct()
objProps.bufferAttributeNode = _bufferAttributeNode

export type BufferAttributeNodeProps = Node<BufferAttributeNode, typeof BufferAttributeNode, { value: TypedArray | InterleavedBuffer | BufferAttribute, bufferType?: string | null, bufferStride?: number, bufferOffset?: number, }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bufferAttributeNode: Partial<{ value: TypedArray | InterleavedBuffer | BufferAttribute, bufferType?: string | null, bufferStride?: number, bufferOffset?: number, }>
    }
}

defaults.bufferAttributeNode = {}

