import { Node } from '../../../three-types'
import NodeFunctionInput from 'three/src/nodes/core/NodeFunctionInput.js'
export { NodeFunctionInput }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeFunctionInput: typeof NodeFunctionInput
    }
}

Three.NodeFunctionInput = NodeFunctionInput

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeFunctionInput: NodeFunctionInputProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeFunctionInput: typeof nodeFunctionInput
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        nodeFunctionInput: typeof _nodeFunctionInput
    }
}



const nodeFunctionInput = ([
    'type',
    'name',
    'count',
    'qualifier',
    'isConst',
] as const).distinct()
consParams.nodeFunctionInput = nodeFunctionInput



const _nodeFunctionInput = ([
    'isNodeFunctionInput',
    'count',
    'qualifier',
    'isConst',
] as const).distinct()
objProps.nodeFunctionInput = _nodeFunctionInput

export type NodeFunctionInputProps = Node<NodeFunctionInput, typeof NodeFunctionInput, { type: string; name: string; count?: number; qualifier?: string; isConst?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeFunctionInput: Partial<{ type: string; name: string; count?: number; qualifier?: string; isConst?: boolean; }>
    }
}

defaults.nodeFunctionInput = {}

