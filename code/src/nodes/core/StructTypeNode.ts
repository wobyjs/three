import { Node } from '../../../three-types'
import StructTypeNode from 'three/src/nodes/core/StructTypeNode.js'
export { StructTypeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './NodeAttribute'


declare module '../../../lib/3/three'
{
    interface Three {
        StructTypeNode: typeof StructTypeNode
    }
}

Three.StructTypeNode = StructTypeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            structTypeNode: StructTypeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        structTypeNode: typeof structTypeNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        structTypeNode: typeof _structTypeNode
    }
}


const structTypeNode = ([
    'type',
] as const).distinct()
consParams.structTypeNode = structTypeNode



const _structTypeNode = ([...objProps.node,
    'isStructTypeNode',
] as const).distinct()
objProps.structTypeNode = _structTypeNode

export type StructTypeNodeProps = Node<StructTypeNode, typeof StructTypeNode, { type: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        structTypeNode: Partial<{ type: string | null; }>
    }
}

defaults.structTypeNode = {}

