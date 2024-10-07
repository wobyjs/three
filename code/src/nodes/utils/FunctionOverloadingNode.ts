import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import FunctionOverloadingNode from 'three/src/nodes/utils/FunctionOverloadingNode.js'
export { FunctionOverloadingNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        FunctionOverloadingNode: typeof FunctionOverloadingNode
    }
}

Three.FunctionOverloadingNode = FunctionOverloadingNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            functionOverloadingNode: FunctionOverloadingNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        functionOverloadingNode: typeof functionOverloadingNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        functionOverloadingNode: typeof _functionOverloadingNode
    }
}


const functionOverloadingNode = ([
    'functionNodes',
    'args',
] as const).distinct()
consParams.functionOverloadingNode = functionOverloadingNode


const _functionOverloadingNode = ([...objProps.node,
    'functionNodes',
    'parameterNodes',
] as const).distinct()
objProps.functionOverloadingNode = _functionOverloadingNode

export type FunctionOverloadingNodeProps = Node<FunctionOverloadingNode, typeof FunctionOverloadingNode, { functionNodes?: ENode[], parameterNodes: ENode[] }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        functionOverloadingNode: Partial<{ functionNodes?: ENode[], parameterNodes: ENode[] }>
    }
}

defaults.functionOverloadingNode = {}


