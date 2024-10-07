import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ViewportDepthNode, { ViewportDepthNodeScope } from 'three/src/nodes/display/ViewportDepthNode.js'
export { ViewportDepthNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ViewportDepthNode: typeof ViewportDepthNode
    }
}

Three.ViewportDepthNode = ViewportDepthNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewportDepthNode: ViewportDepthNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        viewportDepthNode: typeof viewportDepthNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        viewportDepthNode: typeof _viewportDepthNode
    }
}



const viewportDepthNode = ([
    'scope',
    'valueNode',
] as const).distinct()
consParams.viewportDepthNode = viewportDepthNode



const _viewportDepthNode = ([...objProps.node,
    'scope',
    'valueNode',
] as const).distinct()
objProps.viewportDepthNode = _viewportDepthNode

export type ViewportDepthNodeProps = Node<ViewportDepthNode, typeof ViewportDepthNode, { scope: ViewportDepthNodeScope; valueNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportDepthNode: Partial<{ scope: ViewportDepthNodeScope; valueNode?: ENode | null; }>
    }
}

defaults.viewportDepthNode = {}

