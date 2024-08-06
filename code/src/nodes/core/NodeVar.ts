import { Node } from '../../../three-types'
import NodeVar from 'three/src/nodes/core/NodeVar.js'
export { NodeVar }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeVar: typeof NodeVar
    }
}

Three.NodeVar = NodeVar

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeVar: NodeVarProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeVar: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeVar: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVar.d.ts

consParams.nodeVar = [
    'name',
    'type',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVar.d.ts

objParams.nodeVar = [
    'isNodeVar',
    'name',
    'type',
].distinct()

export type NodeVarProps = Node<NodeVar, typeof NodeVar, { name: string; type: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeVar: Partial<{ name: string; type: string | null; }>
    }
}

defaults.nodeVar = {}

