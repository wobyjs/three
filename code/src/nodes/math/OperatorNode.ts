import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import OperatorNode, { OperatorNodeOp } from 'three/src/nodes/math/OperatorNode.js'
export { OperatorNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        operatorNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        operatorNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\MathUtils.d.ts
// remapping functions
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\OperatorNode.d.ts

consParams.operatorNode = [
    'op',
    '...this.params',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\MathUtils.d.ts
// remapping functions
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\OperatorNode.d.ts    

objParams.operatorNode = [...objParams.tempNode,
    'aNode',
    'bNode',
    'op',
].distinct()

export type OperatorNodeProps = Node<OperatorNode, typeof OperatorNode, { op: OperatorNodeOp; params: [ENode, ENode, ...ENode[]]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        operatorNode: Partial<{ op: OperatorNodeOp; params: [ENode, ENode, ...ENode[]]; }>
    }
}

defaults.operatorNode = {}

