import { Object3DNode } from '../../../three-types'
import BufferNode from 'three/src/nodes/accessors/BufferNode.js'
export { BufferNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        bufferNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        bufferNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BufferNode.d.ts

consParams.bufferNode = [
    'value',
    'bufferType',
    'bufferCount',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\BufferNode.d.ts    

objParams.bufferNode = [...objParams.uniformNode,
    'isBufferNode',
    'bufferType',
    'bufferCount',
].distinct()

export type BufferNodeProps = Object3DNode<BufferNode, typeof BufferNode, { value: unknown; bufferType: string; bufferCount?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bufferNode: Partial<{ value: unknown; bufferType: string; bufferCount?: number; }>
    }
}

defaults.bufferNode = {}

