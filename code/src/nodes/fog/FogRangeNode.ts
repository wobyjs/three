import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import FogRangeNode from 'three/src/nodes/fog/FogRangeNode.js'
export { FogRangeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        FogRangeNode: typeof FogRangeNode
    }
}

Three.FogRangeNode = FogRangeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            fogRangeNode: FogRangeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        fogRangeNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        fogRangeNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogRangeNode.d.ts

consParams.fogRangeNode = [
    'colorNode',
    'nearNode',
    'farNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\fog\FogRangeNode.d.ts    

objParams.fogRangeNode = [...objParams.fogNode,
    'isFogRangeNode',
    'nearNode',
    'farNode',
].distinct()

export type FogRangeNodeProps = Node<FogRangeNode, typeof FogRangeNode, { colorNode: ENode | null; nearNode: ENode | null; farNode: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        fogRangeNode: Partial<{ colorNode: ENode | null; nearNode: ENode | null; farNode: ENode | null; }>
    }
}

defaults.fogRangeNode = {}

