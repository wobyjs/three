import { Node } from '../../../three-types'
import NodeFunctionInput from 'three/src/nodes/core/NodeFunctionInput.js'
export { NodeFunctionInput }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        nodeFunctionInput: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeFunctionInput: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunctionInput.d.ts

consParams.nodeFunctionInput = [
    'type',
    'name',
    'count',
    'qualifier',
    'isConst',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeFunctionInput.d.ts

objParams.nodeFunctionInput = [
    'isNodeFunctionInput',
    'count',
    'qualifier',
    'isConst',
].distinct()

export type NodeFunctionInputProps = Node<NodeFunctionInput, typeof NodeFunctionInput, { type: string; name: string; count?: number; qualifier?: string; isConst?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeFunctionInput: Partial<{ type: string; name: string; count?: number; qualifier?: string; isConst?: boolean; }>
    }
}

defaults.nodeFunctionInput = {}

