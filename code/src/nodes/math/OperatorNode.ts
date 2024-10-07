import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import OperatorNode, { OperatorNodeOp } from 'three/src/nodes/math/OperatorNode.js'
export { OperatorNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        OperatorNode: typeof OperatorNode
    }
}

Three.OperatorNode = OperatorNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            operatorNode: OperatorNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        operatorNode: typeof operatorNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        operatorNode: typeof _operatorNode
    }
}


// remapping functions


const operatorNode = ([
    'op',
    '...this.params',
] as const).distinct()
consParams.operatorNode = operatorNode


// remapping functions


const _operatorNode = ([...objProps.tempNode,
    'aNode',
    'bNode',
    'op',
] as const).distinct()
objProps.operatorNode = _operatorNode

export type OperatorNodeProps = Node<OperatorNode, typeof OperatorNode, { op: OperatorNodeOp; params: [ENode, ENode, ...ENode[]]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        operatorNode: Partial<{ op: OperatorNodeOp; params: [ENode, ENode, ...ENode[]]; }>
    }
}

defaults.operatorNode = {}

