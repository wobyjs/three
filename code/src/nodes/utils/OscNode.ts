import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import OscNode, { OscNodeMethod } from 'three/src/nodes/utils/OscNode.js'
export { OscNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        OscNode: typeof OscNode
    }
}

Three.OscNode = OscNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            oscNode: OscNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        oscNode: typeof oscNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        oscNode: typeof _oscNode
    }
}



const oscNode = ([
    'method',
    'timeNode',
] as const).distinct()
consParams.oscNode = oscNode



const _oscNode = ([...objProps.node,
    'method',
    'timeNode',
] as const).distinct()
objProps.oscNode = _oscNode

export type OscNodeProps = Node<OscNode, typeof OscNode, { method: OscNodeMethod; timeNode?: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        oscNode: Partial<{ method?: OscNodeMethod; timeNode?: ENode; }>
    }
}

defaults.oscNode = {}

