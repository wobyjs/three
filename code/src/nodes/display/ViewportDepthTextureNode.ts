import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import ViewportDepthTextureNode from 'three/src/nodes/display/ViewportDepthTextureNode.js'
export { ViewportDepthTextureNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ViewportDepthTextureNode: typeof ViewportDepthTextureNode
    }
}

Three.ViewportDepthTextureNode = ViewportDepthTextureNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewportDepthTextureNode: ViewportDepthTextureNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        viewportDepthTextureNode: typeof viewportDepthTextureNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        viewportDepthTextureNode: typeof _viewportDepthTextureNode
    }
}



const viewportDepthTextureNode = ([
    'uvNode',
    'levelNode',
] as const).distinct()
consParams.viewportDepthTextureNode = viewportDepthTextureNode



const _viewportDepthTextureNode = ([...objProps.viewportTextureNode,
] as const).distinct()
objProps.viewportDepthTextureNode = _viewportDepthTextureNode

export type ViewportDepthTextureNodeProps = Node<ViewportDepthTextureNode, typeof ViewportDepthTextureNode, { uvNode?: ENode; levelNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportDepthTextureNode: { uvNode?: ENode; levelNode?: ENode | null; }
    }
}

defaults.viewportDepthTextureNode = {}

