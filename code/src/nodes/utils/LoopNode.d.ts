import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import LoopNode from 'three/src/nodes/utils/LoopNode.js'
export { LoopNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        LoopNode: typeof LoopNode
    }
}

Three.LoopNode = LoopNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            loopNode: LoopNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        loopNode: typeof loopNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        loopNode: typeof _loopNode
    }
}

const loopNode = ([
    'params',
] as const).distinct()
consParams.loopNode = loopNode

const _loopNode = ([...objProps.node,
    'params',
] as const).distinct()
objProps.loopNode = _loopNode

export type LoopNodeProps = Node<LoopNode, typeof LoopNode, { params?: unknown[] }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        loopNode: Partial<{ params?: unknown[] }>
    }
}

defaults.loopNode = {}


