import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import CheckerNode from 'three/src/nodes/procedural/CheckerNode.js'
export { CheckerNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CheckerNode: typeof CheckerNode
    }
}

Three.CheckerNode = CheckerNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            checkerNode: CheckerNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        checkerNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        checkerNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\procedural\CheckerNode.d.ts

consParams.checkerNode = [
    'uvNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\procedural\CheckerNode.d.ts    

objParams.checkerNode = [...objParams.tempNode,
    'uvNode',
].distinct()

export type CheckerNodeProps = Node<CheckerNode, typeof CheckerNode, { uvNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        checkerNode: Partial<{ uvNode?: ENode; }>
    }
}

defaults.checkerNode = {}

