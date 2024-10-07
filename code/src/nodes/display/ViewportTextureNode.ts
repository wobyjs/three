import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ViewportTextureNode from 'three/src/nodes/display/ViewportTextureNode.js'
import { FramebufferTexture } from 'three/src/textures/FramebufferTexture.js'
export * from 'three/src/textures/FramebufferTexture.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ViewportTextureNode: typeof ViewportTextureNode
    }
}

Three.ViewportTextureNode = ViewportTextureNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewportTextureNode: ViewportTextureNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        viewportTextureNode: typeof viewportTextureNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        viewportTextureNode: typeof _viewportTextureNode
    }
}



const viewportTextureNode = ([
    'uvNode',
    'levelNode',
    'framebufferTexture',
] as const).distinct()
consParams.viewportTextureNode = viewportTextureNode



const _viewportTextureNode = ([...objProps.textureNode,
    'generateMipmaps',
    'updateBeforeType',
] as const).distinct()
objProps.viewportTextureNode = _viewportTextureNode

export type ViewportTextureNodeProps = Node<ViewportTextureNode, typeof ViewportTextureNode, { uvNode?: ENode; levelNode?: ENode | null; framebufferTexture?: FramebufferTexture | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportTextureNode: Partial<{ uvNode?: ENode; levelNode?: ENode | null; framebufferTexture?: FramebufferTexture | null; }>
    }
}

defaults.viewportTextureNode = {}

