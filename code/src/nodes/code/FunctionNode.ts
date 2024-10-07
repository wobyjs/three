import { Node } from '../../../three-types'
import { CodeNodeInclude } from 'three/src/nodes/code/CodeNode.js'
import Node_ from 'three/src/nodes/core/Node.js'
import FunctionNode from 'three/src/nodes/code/FunctionNode.js'
export { FunctionNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        functionNode: typeof functionNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        functionNode: typeof _functionNode
    }
}



const functionNode = ([
    'code',
    'includes',
    'language',
] as const).distinct()
consParams.functionNode = functionNode



const _functionNode = ([...objProps.codeNode,
    'keywords',
] as const).distinct()
objProps.functionNode = _functionNode

export type FunctionNodeProps<T extends Node_[] | { [name: string]: Node_; }> = Node<FunctionNode<T>, typeof FunctionNode<T>, { code?: string; includes?: CodeNodeInclude[]; language?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        functionNode: Partial<{ code?: string; includes?: CodeNodeInclude[]; language?: string; }>
    }
}

defaults.functionNode = {}

