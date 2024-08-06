import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import CondNode from 'three/src/nodes/math/CondNode.js'
export { CondNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CondNode: typeof CondNode
    }
}

Three.CondNode = CondNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            condNode: CondNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        condNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        condNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\CondNode.d.ts

consParams.condNode = [
    'condNode',
    'ifNode',
    'elseNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\math\CondNode.d.ts    

objParams.condNode = [...objParams.node,
    'condNode',
    'ifNode',
    'elseNode',
].distinct()

export type CondNodeProps = Node<CondNode, typeof CondNode, { condNode: ENode; ifNode: ENode; elseNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        condNode: Partial<{ condNode: ENode; ifNode: ENode; elseNode: ENode; }>
    }
}

defaults.condNode = {}

