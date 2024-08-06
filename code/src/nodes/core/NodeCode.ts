import { Node } from '../../../three-types'
import NodeCode from 'three/src/nodes/core/NodeCode.js'
export { NodeCode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        NodeCode: typeof NodeCode
    }
}

Three.NodeCode = NodeCode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            nodeCode: NodeCodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        nodeCode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        nodeCode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCode.d.ts

consParams.nodeCode = [
    'name',
    'type',
    'code',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\NodeCode.d.ts

objParams.nodeCode = [
    'isNodeCode',
].distinct()

export type NodeCodeProps = Node<NodeCode, typeof NodeCode, { name: string; type: string; code?: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        nodeCode: Partial<{ name: string; type: string; code?: string; }>
    }
}

defaults.nodeCode = {}

