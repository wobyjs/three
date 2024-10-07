import { Node } from '../../../three-types'
import FrontFacingNode from 'three/src/nodes/display/FrontFacingNode.js'
export { FrontFacingNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        FrontFacingNode: typeof FrontFacingNode
    }
}

Three.FrontFacingNode = FrontFacingNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            frontFacingNode: FrontFacingNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        frontFacingNode: typeof frontFacingNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        frontFacingNode: typeof _frontFacingNode
    }
}



const frontFacingNode = ([
] as const).distinct()
consParams.frontFacingNode = frontFacingNode



const _frontFacingNode = ([...objProps.node,
    'isFrontFacingNode',
] as const).distinct()
objProps.frontFacingNode = _frontFacingNode

export type FrontFacingNodeProps = Node<FrontFacingNode, typeof FrontFacingNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        frontFacingNode: {}
    }
}

defaults.frontFacingNode = {}

