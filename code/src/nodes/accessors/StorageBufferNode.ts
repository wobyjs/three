import { Object3DNode } from '../../../three-types'
import StorageBufferAttribute from 'three/src/renderers/common/StorageBufferAttribute.js'
import StorageInstancedBufferAttribute from 'three/src/renderers/common/StorageInstancedBufferAttribute.js'
import StorageBufferNode from 'three/src/nodes/accessors/StorageBufferNode.js'
export { StorageBufferNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        storageBufferNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        storageBufferNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\StorageBufferNode.d.ts

consParams.storageBufferNode = [
    'value',
    'bufferType',
    'bufferCount',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\StorageBufferNode.d.ts    

objParams.storageBufferNode = [...objParams.bufferNode,
    'bufferObject',
].distinct()

export type StorageBufferNodeProps = Object3DNode<StorageBufferNode, typeof StorageBufferNode, { value: StorageBufferAttribute | StorageInstancedBufferAttribute; bufferType: string; bufferCount?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        storageBufferNode: Partial<{ value: StorageBufferAttribute | StorageInstancedBufferAttribute; bufferType: string; bufferCount?: number; }>
    }
}

defaults.storageBufferNode = {}

