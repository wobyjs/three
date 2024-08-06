import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import VarNode from 'three/src/nodes/core/VarNode.js'
export { VarNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VarNode: typeof VarNode
    }
}

Three.VarNode = VarNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            varNode: VarNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        varNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        varNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VarNode.d.ts

consParams.varNode = [
    'node',
    'name',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VarNode.d.ts    

objParams.varNode = [...objParams.node,
    'node',
    'name',
].distinct()

export type VarNodeProps = Node<VarNode, typeof VarNode, { node: ENode; name?: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        varNode: Partial<{ node: ENode; name?: string | null; }>
    }
}

defaults.varNode = {}

