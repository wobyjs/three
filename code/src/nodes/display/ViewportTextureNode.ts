import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ViewportTextureNode from 'three/src/nodes/display/ViewportTextureNode.js'
import { FramebufferTexture } from 'three/src/textures/FramebufferTexture.js'
export * from 'three/src/textures/FramebufferTexture.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        viewportTextureNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        viewportTextureNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportTextureNode.d.ts

consParams.viewportTextureNode = [
    'uvNode',
    'levelNode',
    'framebufferTexture',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportTextureNode.d.ts    

objParams.viewportTextureNode = [...objParams.textureNode,
    'generateMipmaps',
    'updateBeforeType',
].distinct()

export type ViewportTextureNodeProps = Node<ViewportTextureNode, typeof ViewportTextureNode, { uvNode?: ENode; levelNode?: ENode | null; framebufferTexture?: FramebufferTexture | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportTextureNode: Partial<{ uvNode?: ENode; levelNode?: ENode | null; framebufferTexture?: FramebufferTexture | null; }>
    }
}

defaults.viewportTextureNode = {}

