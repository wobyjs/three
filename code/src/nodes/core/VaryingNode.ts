import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import VaryingNode from 'three/src/nodes/core/VaryingNode.js'
export { VaryingNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        VaryingNode: typeof VaryingNode
    }
}

Three.VaryingNode = VaryingNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            varyingNode: VaryingNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        varyingNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        varyingNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VaryingNode.d.ts

consParams.varyingNode = [
    'node',
    'name',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\VaryingNode.d.ts    

objParams.varyingNode = [...objParams.node,
    'node',
    'name',
].distinct()

export type VaryingNodeProps = Node<VaryingNode, typeof VaryingNode, { node: ENode; name?: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        varyingNode: Partial<{ node: ENode; name?: string | null; }>
    }
}

defaults.varyingNode = {}

