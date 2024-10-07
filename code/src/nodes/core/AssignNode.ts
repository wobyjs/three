import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import AssignNode from 'three/src/nodes/core/AssignNode.js'
export { AssignNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AssignNode: typeof AssignNode
    }
}

Three.AssignNode = AssignNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            assignNode: AssignNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        assignNode: typeof assignNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        assignNode: typeof _assignNode
    }
}



const assignNode = ([
    'targetNode',
    'sourceNode',
] as const).distinct()
consParams.assignNode = assignNode



const _assignNode = ([...objProps.tempNode,
] as const).distinct()
objProps.assignNode = _assignNode

export type AssignNodeProps = Node<AssignNode, typeof AssignNode, { targetNode: ENode; sourceNode: ENode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        assignNode: Partial<{ targetNode: ENode; sourceNode: ENode; }>
    }
}

defaults.assignNode = {}

