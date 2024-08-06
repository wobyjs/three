import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import ArrayElementNode from 'three/src/nodes/utils/ArrayElementNode.js'
export { ArrayElementNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ArrayElementNode: typeof ArrayElementNode
    }
}

Three.ArrayElementNode = ArrayElementNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            arrayElementNode: ArrayElementNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        arrayElementNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        arrayElementNode: string[]
    }
}

consParams.arrayElementNode = [
    'node',
    'indexNode',
]

objParams.arrayElementNode = [
    'node',
    'indexNode',
]

export type ArrayElementNodeProps = Node<ArrayElementNode, typeof ArrayElementNode, { node: ENode; indexNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        arrayElementNode: Partial<{ node: ENode; indexNode: ENode; }>
    }
}

defaults.arrayElementNode = {}

