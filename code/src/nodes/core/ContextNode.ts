import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import NodeBuilderContext from 'three/src/nodes/core/NodeBuilder.js'
import ContextNode from 'three/src/nodes/core/ContextNode.js'
export { ContextNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ContextNode: typeof ContextNode
    }
}

Three.ContextNode = ContextNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            contextNode: ContextNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        contextNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        contextNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\ContextNode.d.ts

consParams.contextNode = [
    'node',
    'context',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\ContextNode.d.ts    

objParams.contextNode = [...objParams.node,
    'isContextNode',
    'node',
    'context',
].distinct()

export type ContextNodeProps = Node<ContextNode, typeof ContextNode, { node: ENode; context: NodeBuilderContext; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        contextNode: Partial<{ node: ENode; context: NodeBuilderContext; }>
    }
}

defaults.contextNode = {}

