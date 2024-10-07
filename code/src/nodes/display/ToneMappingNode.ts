import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ToneMappingNode from 'three/src/nodes/display/ToneMappingNode.js'
import { ToneMapping } from 'three/src/constants.js'
export * from 'three/src/constants.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

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
        toneMappingNode: typeof toneMappingNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        toneMappingNode: typeof _toneMappingNode
    }
}


// exposure only

const toneMappingNode = ([
    'toneMapping',
    'exposureNode',
    'colorNode',
] as const).distinct()
consParams.toneMappingNode = toneMappingNode


// exposure only    

const _toneMappingNode = ([...objProps.tempNode,
    'toneMapping',
    'exposureNode',
    'colorNode',
] as const).distinct()
objProps.toneMappingNode = _toneMappingNode

export type ToneMappingNodeProps = Node<ToneMappingNode, typeof ToneMappingNode, { toneMapping: ToneMapping; exposureNode?: ENode; colorNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        toneMappingNode: Partial<{ toneMapping: ToneMapping; exposureNode?: ENode; colorNode?: ENode | null; }>
    }
}

defaults.toneMappingNode = {}

