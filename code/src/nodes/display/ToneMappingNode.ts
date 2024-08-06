import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ToneMappingNode from 'three/src/nodes/display/ToneMappingNode.js'
import { ToneMapping } from 'three/src/constants.js'
export * from 'three/src/constants.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ToneMappingNode: typeof ToneMappingNode
    }
}

Three.ToneMappingNode = ToneMappingNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            toneMappingNode: ToneMappingNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        toneMappingNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        toneMappingNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ToneMappingNode.d.ts
// exposure only

consParams.toneMappingNode = [
    'toneMapping',
    'exposureNode',
    'colorNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ToneMappingNode.d.ts
// exposure only    

objParams.toneMappingNode = [...objParams.tempNode,
    'toneMapping',
    'exposureNode',
    'colorNode',
].distinct()

export type ToneMappingNodeProps = Node<ToneMappingNode, typeof ToneMappingNode, { toneMapping: ToneMapping; exposureNode?: ENode; colorNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        toneMappingNode: Partial<{ toneMapping: ToneMapping; exposureNode?: ENode; colorNode?: ENode | null; }>
    }
}

defaults.toneMappingNode = {}

