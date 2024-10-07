import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import MRTNode from 'three/src/nodes/core/MRTNode.js'
export { MRTNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './OutputStructNode'

declare module '../../../lib/3/three'
{
    interface Three {
        MRTNode: typeof MRTNode
    }
}

Three.MRTNode = MRTNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            mrtNode: MRTNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        mrtNode: typeof mrtNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        mrtNode: typeof _mrtNode
    }
}

const mrtNode = ([
    'name',
    'type',
] as const).distinct()
consParams.mrtNode = mrtNode


const _mrtNode = ([
    'outputNodes',
    'isMRTNode',
] as const).distinct()
objProps.mrtNode = _mrtNode

export type MRTNodeProps = Node<MRTNode, typeof MRTNode, { outputNodes: { [name: string]: ENode } }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        mrtNode: Partial<{ outputNodes: { [name: string]: ENode } }>
    }
}

defaults.mrtNode = {}

