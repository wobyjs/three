import { Node } from '../../../three-types'
import ExpressionNode from 'three/src/nodes/code/ExpressionNode.js'
export { ExpressionNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ExpressionNode: typeof ExpressionNode
    }
}

Three.ExpressionNode = ExpressionNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            expressionNode: ExpressionNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        expressionNode: typeof expressionNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        expressionNode: typeof _expressionNode
    }
}



const expressionNode = ([
    'snipped',
    'nodeType',
] as const).distinct()
consParams.expressionNode = expressionNode



const _expressionNode = ([...objProps.tempNode,
    'snipped',
] as const).distinct()
objProps.expressionNode = _expressionNode

export type ExpressionNodeProps = Node<ExpressionNode, typeof ExpressionNode, { snipped?: string; nodeType?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        expressionNode: Partial<{ snipped?: string; nodeType?: string; }>
    }
}

defaults.expressionNode = {}

