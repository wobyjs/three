import { Node } from '../../../three-types'
import Node_ from 'three/src/nodes/core/Node.js'
import FunctionNode from 'three/src/nodes/code/FunctionNode.js'
import FunctionCallNode from 'three/src/nodes/code/FunctionCallNode.js'
export { FunctionCallNode }
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        functionCallNode: string[]
    }
}
declare module '../../../lib/3/objParams' {
    interface objParams {
        functionCallNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionCallNode.d.ts

consParams.functionCallNode = [
    'functionNode',
    'parameters', //{ [name: string]: Node }
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionCallNode.d.ts    

objParams.functionCallNode = [...objParams.tempNode,
    'functionNode',
    'parameters',
].distinct()

export type FunctionCallNodeProps<T extends Node_[] | { [name: string]: Node_; }> = Node<FunctionCallNode<T>, typeof FunctionCallNode<T>, { functionNode?: FunctionNode<T>; parameters?: T; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        functionCallNode: Partial<{ functionNode?: FunctionNode<any>; parameters?: any; }>
    }
}

defaults.functionCallNode = {}

