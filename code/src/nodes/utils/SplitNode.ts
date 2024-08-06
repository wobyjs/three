import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { SwizzleOption } from 'three/src/nodes/Nodes.js'
import SplitNode from 'three/src/nodes/utils/SplitNode.js'
export { SplitNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        SplitNode: typeof SplitNode
    }
}

Three.SplitNode = SplitNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            splitNode: SplitNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        splitNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        splitNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SplitNode.d.ts
/** swizzle node */

consParams.splitNode = [
    /**
     * @param node the input node
     * @param components swizzle like string, default = "x"
     */
    'node',
    'components',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\SplitNode.d.ts
/** swizzle node */

objParams.splitNode = [...objParams.node,
    'node',
    'components',
    /**
     * @param node the input node
     * @param components swizzle like string, default = "x"
     */
].distinct()

export type SplitNodeProps = Node<SplitNode, typeof SplitNode, { node: ENode; components?: SwizzleOption; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        splitNode: Partial<{ node?: ENode; components?: SwizzleOption; }>
    }
}

defaults.splitNode = {}

