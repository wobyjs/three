import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import RemapNode from 'three/src/nodes/utils/RemapNode.js'
export { RemapNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        RemapNode: typeof RemapNode
    }
}

Three.RemapNode = RemapNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            remapNode: RemapNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        remapNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        remapNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RemapNode.d.ts

consParams.remapNode = [
    'node',
    'inLowNode',
    'inHighNode',
    'outLowNode',
    'outHighNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\RemapNode.d.ts    

objParams.remapNode = [...objParams.node,
    'node',
    'inLowNode',
    'inHighNode',
    'outLowNode',
    'outHighNode',
    'doClamp',
].distinct()

export type RemapNodeProps = Node<RemapNode, typeof RemapNode, { node: ENode; inLowNode: ENode; inHighNode: ENode; outLowNode?: ENode; outHighNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        remapNode: Partial<{ node: ENode; inLowNode: ENode; inHighNode: ENode; outLowNode?: ENode; outHighNode?: ENode; }>
    }
}

defaults.remapNode = {}

