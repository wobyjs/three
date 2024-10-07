import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import StorageBufferNode from 'three/src/nodes/accessors/StorageBufferNode.js'
import StoargeArrayElementNode from 'three/src/nodes/utils/StorageArrayElementNode.js'
export { StoargeArrayElementNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        storageArrayElementNode: typeof storageArrayElementNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        storageArrayElementNode: typeof _storageArrayElementNode
    }
}



const storageArrayElementNode = ([
    'storageBufferNode',
    'indexNode',
] as const).distinct()
consParams.storageArrayElementNode = storageArrayElementNode



const _storageArrayElementNode = ([...objProps.arrayElementNode,
    'node',
    'storageBufferNode',
] as const).distinct()
objProps.storageArrayElementNode = _storageArrayElementNode

export type StoargeArrayElementNodeProps = Node<StoargeArrayElementNode, typeof StoargeArrayElementNode, { storageBufferNode: StorageBufferNode; indexNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stoargeArrayElementNode: Partial<{ storageBufferNode: StorageBufferNode; indexNode: ENode; }>
    }
}

defaults.stoargeArrayElementNode = {}

