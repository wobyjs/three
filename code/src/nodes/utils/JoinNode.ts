import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import JoinNode from 'three/src/nodes/utils/JoinNode.js'
export { JoinNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        JoinNode: typeof JoinNode
    }
}

Three.JoinNode = JoinNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            joinNode: JoinNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        joinNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        joinNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\JoinNode.d.ts
/**
 * This node constructs given type from elements, like vec3(a,b,c)
 */

consParams.joinNode = [
    'nodes',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\JoinNode.d.ts
/**
 * This node constructs given type from elements, like vec3(a,b,c)
 */

objParams.joinNode = [...objParams.tempNode,
    'nodes',
].distinct()

export type JoinNodeProps = Node<JoinNode, typeof JoinNode, { nodes: ENode[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        joinNode: Partial<{ nodes?: ENode[]; }>
    }
}

defaults.joinNode = {}

