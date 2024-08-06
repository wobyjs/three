import { Node } from '../../../three-types'
import ExpressionNode from 'three/src/nodes/code/ExpressionNode.js'
export { ExpressionNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        expressionNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        expressionNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\ExpressionNode.d.ts

consParams.expressionNode = [
    'snipped',
    'nodeType',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\code\ExpressionNode.d.ts    

objParams.expressionNode = [...objParams.tempNode,
    'snipped',
].distinct()

export type ExpressionNodeProps = Node<ExpressionNode, typeof ExpressionNode, { snipped?: string; nodeType?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        expressionNode: Partial<{ snipped?: string; nodeType?: string; }>
    }
}

defaults.expressionNode = {}

