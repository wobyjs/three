import { Node } from '../../../three-types'
import StorageBufferAttribute from 'three/src/renderers/common/StorageBufferAttribute.js'
import StorageInstancedBufferAttribute from 'three/src/renderers/common/StorageInstancedBufferAttribute.js'
import StorageBufferNode from 'three/src/nodes/accessors/StorageBufferNode.js'
export { StorageBufferNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        StorageBufferNode: typeof StorageBufferNode
    }
}

Three.StorageBufferNode = StorageBufferNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            storageBufferNode: StorageBufferNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        storageBufferNode: typeof storageBufferNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        storageBufferNode: typeof _storageBufferNode
    }
}



const storageBufferNode = ([
    'value',
    'bufferType',
    'bufferCount',
] as const).distinct()
consParams.storageBufferNode = storageBufferNode



const _storageBufferNode = ([...objProps.bufferNode,
    'bufferObject',
] as const).distinct()
objProps.storageBufferNode = _storageBufferNode

export type StorageBufferNodeProps = Node<StorageBufferNode, typeof StorageBufferNode, { value: StorageBufferAttribute | StorageInstancedBufferAttribute; bufferType: string; bufferCount?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        storageBufferNode: Partial<{ value: StorageBufferAttribute | StorageInstancedBufferAttribute; bufferType: string; bufferCount?: number; }>
    }
}

defaults.storageBufferNode = {}

