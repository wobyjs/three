import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import JoinNode from 'three/src/nodes/utils/JoinNode.js'
export { JoinNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        JoinNode: typeof JoinNode
    }
}

Three.JoinNode = JoinNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            joinNode: JoinNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        joinNode: typeof joinNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        joinNode: typeof _joinNode
    }
}


/**
 * This node constructs given type from elements, like vec3(a,b,c)
 */

const joinNode = ([
    'nodes',
] as const).distinct()
consParams.joinNode = joinNode


/**
 * This node constructs given type from elements, like vec3(a,b,c)
 */

const _joinNode = ([...objProps.tempNode,
    'nodes',
] as const).distinct()
objProps.joinNode = _joinNode

export type JoinNodeProps = Node<JoinNode, typeof JoinNode, { nodes: ENode[]; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        joinNode: Partial<{ nodes?: ENode[]; }>
    }
}

defaults.joinNode = {}

