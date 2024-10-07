import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import ArrayElementNode from 'three/src/nodes/utils/ArrayElementNode.js'
export { ArrayElementNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        arrayElementNode: typeof arrayElementNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        arrayElementNode: typeof _arrayElementNode
    }
}

const arrayElementNode = ([
    'node',
    'indexNode',
] as const).distinct()
consParams.arrayElementNode = arrayElementNode

const _arrayElementNode = ([
    'node',
    'indexNode',
] as const).distinct()
objProps.arrayElementNode = _arrayElementNode


export type ArrayElementNodeProps = Node<ArrayElementNode, typeof ArrayElementNode, { node: ENode; indexNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        arrayElementNode: Partial<{ node: ENode; indexNode: ENode; }>
    }
}

defaults.arrayElementNode = {}

