import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import BypassNode from 'three/src/nodes/core/BypassNode.js'
export { BypassNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        BypassNode: typeof BypassNode
    }
}

Three.BypassNode = BypassNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            bypassNode: BypassNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        bypassNode: typeof bypassNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        bypassNode: typeof _bypassNode
    }
}



const bypassNode = ([
    'returnNode',
    'callNode',
] as const).distinct()
consParams.bypassNode = bypassNode



const _bypassNode = ([...objProps.node,
    'isBypassNode',
    'outputNode',
    'callNode',
] as const).distinct()
objProps.bypassNode = _bypassNode

export type BypassNodeProps = Node<BypassNode, typeof BypassNode, { returnNode: ENode; callNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        bypassNode: Partial<{ returnNode: ENode; callNode: ENode; }>
    }
}

defaults.bypassNode = {}

