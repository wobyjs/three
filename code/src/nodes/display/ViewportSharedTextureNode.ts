import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ViewportSharedTextureNode from 'three/src/nodes/display/ViewportSharedTextureNode.js'
export { ViewportSharedTextureNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ViewportSharedTextureNode: typeof ViewportSharedTextureNode
    }
}

Three.ViewportSharedTextureNode = ViewportSharedTextureNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewportSharedTextureNode: ViewportSharedTextureNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        viewportSharedTextureNode: typeof viewportSharedTextureNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        viewportSharedTextureNode: typeof _viewportSharedTextureNode
    }
}



const viewportSharedTextureNode = ([
    'uvNode',
    'levelNode',
] as const).distinct()
consParams.viewportSharedTextureNode = viewportSharedTextureNode



const _viewportSharedTextureNode = ([...objProps.viewportTextureNode,
] as const).distinct()
objProps.viewportSharedTextureNode = _viewportSharedTextureNode

export type ViewportSharedTextureNodeProps = Node<ViewportSharedTextureNode, typeof ViewportSharedTextureNode, { uvNode?: ENode; levelNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportSharedTextureNode: Partial<{ uvNode?: ENode; levelNode?: ENode | null; }>
    }
}

defaults.viewportSharedTextureNode = {}

