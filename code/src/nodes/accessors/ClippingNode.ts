import { Node } from '../../../three-types'
import ClippingNode, { ClippingNodeScope } from 'three/src/nodes/accessors/ClippingNode.js'
export { ClippingNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ClippingNode: typeof ClippingNode
    }
}

Three.ClippingNode = ClippingNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            clippingNode: ClippingNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        clippingNode: typeof clippingNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        clippingNode: typeof _clippingNode
    }
}



const clippingNode = ([
    'scope',
] as const).distinct()
consParams.clippingNode = clippingNode



const _clippingNode = ([...objProps.node,
    'scope',
] as const).distinct()
objProps.clippingNode = _clippingNode

export type ClippingNodeProps = Node<ClippingNode, typeof ClippingNode, { scope?: ClippingNodeScope; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        clippingNode: { scope?: ClippingNodeScope; }
    }
}

defaults.clippingNode = {}

