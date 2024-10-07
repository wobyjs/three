import { Node } from '../../../three-types'
import StackNode from 'three/src/nodes/core/StackNode.js'
export { StackNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        StackNode: typeof StackNode
    }
}

Three.StackNode = StackNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            stackNode: StackNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        stackNode: typeof stackNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        stackNode: typeof _stackNode
    }
}



const stackNode = ([
] as const).distinct()
consParams.stackNode = stackNode



const _stackNode = ([...objProps.node,
    'isStackNode',
    'nodes',
    'outputNode',
] as const).distinct()
objProps.stackNode = _stackNode

export type StackNodeProps = Node<StackNode, typeof StackNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        stackNode: {}
    }
}

defaults.stackNode = {}

