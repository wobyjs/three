import { Node } from '../../../three-types'
import { CodeNodeInclude } from 'three/src/nodes/code/CodeNode.js'
import Node_ from 'three/src/nodes/core/Node.js'
import FunctionNode from 'three/src/nodes/code/FunctionNode.js'
export { FunctionNode }
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            functionNode: FunctionNodeProps<Node_[] | { [name: string]: Node_; }>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        functionNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        functionNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionNode.d.ts

consParams.functionNode = [
    'code',
    'includes',
    'language',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\FunctionNode.d.ts    

objParams.functionNode = [...objParams.codeNode,
    'keywords',
].distinct()

export type FunctionNodeProps<T extends Node_[] | { [name: string]: Node_; }> = Node<FunctionNode<T>, typeof FunctionNode<T>, { code?: string; includes?: CodeNodeInclude[]; language?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        functionNode: Partial<{ code?: string; includes?: CodeNodeInclude[]; language?: string; }>
    }
}

defaults.functionNode = {}

