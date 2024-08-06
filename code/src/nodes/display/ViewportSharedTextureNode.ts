import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ViewportSharedTextureNode from 'three/src/nodes/display/ViewportSharedTextureNode.js'
export { ViewportSharedTextureNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        viewportSharedTextureNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        viewportSharedTextureNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportSharedTextureNode.d.ts

consParams.viewportSharedTextureNode = [
    'uvNode',
    'levelNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportSharedTextureNode.d.ts    

objParams.viewportSharedTextureNode = [...objParams.viewportTextureNode,
].distinct()

export type ViewportSharedTextureNodeProps = Node<ViewportSharedTextureNode, typeof ViewportSharedTextureNode, { uvNode?: ENode; levelNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportSharedTextureNode: Partial<{ uvNode?: ENode; levelNode?: ENode | null; }>
    }
}

defaults.viewportSharedTextureNode = {}

