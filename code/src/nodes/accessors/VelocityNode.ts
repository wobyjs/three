import { Node } from '../../../three-types'
import VelocityNode from 'three/src/nodes/accessors/VelocityNode.js'
export { VelocityNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        VelocityNode: typeof VelocityNode
    }
}

Three.VelocityNode = VelocityNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            velocityNode: VelocityNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        velocityNode: typeof velocityNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        velocityNode: typeof _velocityNode
    }
}



const velocityNode = ([
] as const).distinct()
consParams.velocityNode = velocityNode



const _velocityNode = ([...objProps.tempNode,
    'previousProjectionMatrix',
    'previousModelViewMatrix',
] as const).distinct()
objProps.velocityNode = _velocityNode

export type VelocityNodeProps = Node<VelocityNode, typeof VelocityNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        velocityNode: {}
    }
}

defaults.velocityNode = {}

