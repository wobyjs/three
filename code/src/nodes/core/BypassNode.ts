import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import BypassNode from 'three/src/nodes/core/BypassNode.js'
export { BypassNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        BypassNode: typeof BypassNode
    }
}

Three.BypassNode = BypassNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bypassNode: BypassNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        bypassNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        bypassNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\BypassNode.d.ts

consParams.bypassNode = [
    'returnNode',
    'callNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\BypassNode.d.ts    

objParams.bypassNode = [...objParams.node,
    'isBypassNode',
    'outputNode',
    'callNode',
].distinct()

export type BypassNodeProps = Node<BypassNode, typeof BypassNode, { returnNode: ENode; callNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bypassNode: Partial<{ returnNode: ENode; callNode: ENode; }>
    }
}

defaults.bypassNode = {}

