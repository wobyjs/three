import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import FogExp2Node from 'three/src/nodes/fog/FogExp2Node.js'
export { FogExp2Node }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FogExp2Node: typeof FogExp2Node
    }
}

Three.FogExp2Node = FogExp2Node

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fogExp2Node: FogExp2NodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        fogExp2Node: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        fogExp2Node: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogExp2Node.d.ts

consParams.fogExp2Node = [
    'colorNode',
    'densityNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogExp2Node.d.ts    

objParams.fogExp2Node = [...objParams.fogNode,
    'isFogExp2Node',
    'densityNode',
].distinct()

export type FogExp2NodeProps = Node<FogExp2Node, typeof FogExp2Node, { colorNode: ENode; densityNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fogExp2Node: Partial<{ colorNode: ENode; densityNode: ENode; }>
    }
}

defaults.fogExp2Node = {}

