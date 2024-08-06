import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import AssignNode from 'three/src/nodes/core/AssignNode.js'
export { AssignNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AssignNode: typeof AssignNode
    }
}

Three.AssignNode = AssignNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            assignNode: AssignNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        assignNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        assignNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AssignNode.d.ts

consParams.assignNode = [
    'targetNode',
    'sourceNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AssignNode.d.ts    

objParams.assignNode = [...objParams.tempNode,
].distinct()

export type AssignNodeProps = Node<AssignNode, typeof AssignNode, { targetNode: ENode; sourceNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        assignNode: Partial<{ targetNode: ENode; sourceNode: ENode; }>
    }
}

defaults.assignNode = {}

