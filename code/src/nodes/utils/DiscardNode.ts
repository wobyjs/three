import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import DiscardNode from 'three/src/nodes/utils/DiscardNode.js'
export { DiscardNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../math/CondNode'

declare module '../../../lib/3/three'
{
    interface Three {
        DiscardNode: typeof DiscardNode
    }
}

Three.DiscardNode = DiscardNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            discardNode: DiscardNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        discardNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        discardNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\DiscardNode.d.ts

consParams.discardNode = [
    'condNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\DiscardNode.d.ts    

objParams.discardNode = [...objParams.condNode,
].distinct()

export type DiscardNodeProps = Node<DiscardNode, typeof DiscardNode, { condNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        discardNode: Partial<{ condNode: ENode; }>
    }
}

defaults.discardNode = {}

