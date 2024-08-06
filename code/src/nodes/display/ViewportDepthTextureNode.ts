import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import ViewportDepthTextureNode from 'three/src/nodes/display/ViewportDepthTextureNode.js'
export { ViewportDepthTextureNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        viewportDepthTextureNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        viewportDepthTextureNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthTextureNode.d.ts

consParams.viewportDepthTextureNode = [
    'uvNode',
    'levelNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthTextureNode.d.ts    

objParams.viewportDepthTextureNode = [...objParams.viewportTextureNode,
].distinct()

export type ViewportDepthTextureNodeProps = Node<ViewportDepthTextureNode, typeof ViewportDepthTextureNode, { uvNode?: ENode; levelNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportDepthTextureNode: { uvNode?: ENode; levelNode?: ENode | null; }
    }
}

defaults.viewportDepthTextureNode = {}

