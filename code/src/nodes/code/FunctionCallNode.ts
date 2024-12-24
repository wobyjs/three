import { Functionant, Node } from '../../../three-types'
import Node_ from 'three/src/nodes/core/Node.js'
import FunctionNode from 'three/src/nodes/code/FunctionNode.js'
import FunctionCallNode from 'three/src/nodes/code/FunctionCallNode.js'
export { FunctionCallNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            functionCallNode: FunctionCallNodeProps<Node_[] | { [name: string]: Node_; }>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        functionCallNode: typeof functionCallNode
    }
}
declare module '../../../lib/3/objProps' {
    interface objProps {
        functionCallNode: typeof _functionCallNode
    }
}



const functionCallNode = ([
    'functionNode',
    'parameters', //{ [name: string]: Node }
] as const).distinct()
consParams.functionCallNode = functionCallNode



const _functionCallNode = ([...objProps.tempNode,
    'functionNode',
    'parameters',
] as const).distinct()
objProps.functionCallNode = _functionCallNode

export type FunctionCallNodeProps<T extends Node_[] | { [name: string]: Node_; }> = Node<FunctionCallNode<T>, typeof FunctionCallNode<T>, { functionNode?: FunctionNode<T>; parameters?: Functionant<T>; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        functionCallNode: Partial<{ functionNode?: FunctionNode<any>; parameters?: any; }>
    }
}

defaults.functionCallNode = {}

