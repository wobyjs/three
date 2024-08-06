import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import ConvertNode from 'three/src/nodes/utils/ConvertNode.js'
export { ConvertNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        ConvertNode: typeof ConvertNode
    }
}

Three.ConvertNode = ConvertNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            convertNode: ConvertNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        convertNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        convertNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ConvertNode.d.ts

consParams.convertNode = [
    'node',
    'convertTo',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\ConvertNode.d.ts    

objParams.convertNode = [...objParams.node,
    'node',
    'convertTo',
].distinct()

export type ConvertNodeProps = Node<ConvertNode, typeof ConvertNode, { node: ENode; convertTo: string; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        convertNode: Partial<{ node: ENode; convertTo: string; }>
    }
}

defaults.convertNode = {}

