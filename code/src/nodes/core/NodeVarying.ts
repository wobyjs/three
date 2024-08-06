import { Node } from '../../../three-types'
import NodeVarying from 'three/src/nodes/core/NodeVarying.js'
export { NodeVarying }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeVarying: typeof NodeVarying
    }
}

Three.NodeVarying = NodeVarying

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeVarying: NodeVaryingProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeVarying: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeVarying: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVarying.d.ts

consParams.nodeVarying = [
    'name',
    'type',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeVarying.d.ts    

objParams.nodeVarying = [...objParams.nodeVar,
    'needsInterpolation',
    'isNodeVarying',
].distinct()

export type NodeVaryingProps = Node<NodeVarying, typeof NodeVarying, { name: string; type: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeVarying: Partial<{ name: string; type: string | null; }>
    }
}

defaults.nodeVarying = {}

