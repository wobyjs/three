import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import VarNode from 'three/src/nodes/core/VarNode.js'
export { VarNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        varNode: typeof varNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        varNode: typeof _varNode
    }
}



const varNode = ([
    'node',
    'name',
] as const).distinct()
consParams.varNode = varNode



const _varNode = ([...objProps.node,
    'node',
    'name',
] as const).distinct()
objProps.varNode = _varNode

export type VarNodeProps = Node<VarNode, typeof VarNode, { node: ENode; name?: string | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        varNode: Partial<{ node: ENode; name?: string | null; }>
    }
}

defaults.varNode = {}

