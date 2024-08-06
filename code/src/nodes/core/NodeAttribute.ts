import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import NodeAttribute from 'three/src/nodes/core/NodeAttribute.js'
export { NodeAttribute }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeAttribute: typeof NodeAttribute
    }
}

Three.NodeAttribute = NodeAttribute

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeAttribute: NodeAttributeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeAttribute: string[]
        node: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeAttribute: string[]
        node: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\Node.d.ts

consParams.node = [
    'nodeType',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\Node.d.ts

objParams.node = [
    'nodeType',
    'updateType',
    'updateBeforeType',
    'uuid',
    'version',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeAttribute.d.ts

consParams.nodeAttribute = [
    'name',
    'type',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeAttribute.d.ts

objParams.nodeAttribute = [
    'isNodeAttribute',
    'name',
    'type',
].distinct()

export type NodeAttributeProps = Node<NodeAttribute, typeof NodeAttribute, { name: string; type: string | null; node?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeAttribute: Partial<{ name: string; type: string | null; node?: ENode | null; }>
    }
}

defaults.nodeAttribute = {}

