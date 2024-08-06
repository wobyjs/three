import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import StorageBufferNode from 'three/src/nodes/accessors/StorageBufferNode.js'
import StoargeArrayElementNode from 'three/src/nodes/utils/StorageArrayElementNode.js'
export { StoargeArrayElementNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './ArrayElementNode'

declare module '../../../lib/3/three'
{
    interface Three {
        StoargeArrayElementNode: typeof StoargeArrayElementNode
    }
}

Three.StoargeArrayElementNode = StoargeArrayElementNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            storageArrayElementNode: StoargeArrayElementNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        storageArrayElementNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        storageArrayElementNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\StoargeArrayElementNode.d.ts

consParams.storageArrayElementNode = [
    'storageBufferNode',
    'indexNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\StoargeArrayElementNode.d.ts    

objParams.storageArrayElementNode = [...objParams.arrayElementNode,
    'node',
    'storageBufferNode',
].distinct()

export type StoargeArrayElementNodeProps = Node<StoargeArrayElementNode, typeof StoargeArrayElementNode, { storageBufferNode: StorageBufferNode; indexNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stoargeArrayElementNode: Partial<{ storageBufferNode: StorageBufferNode; indexNode: ENode; }>
    }
}

defaults.stoargeArrayElementNode = {}

