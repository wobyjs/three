import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import ViewportDepthNode, { ViewportDepthNodeScope } from 'three/src/nodes/display/ViewportDepthNode.js'
export { ViewportDepthNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        viewportDepthNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        viewportDepthNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthNode.d.ts

consParams.viewportDepthNode = [
    'scope',
    'valueNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportDepthNode.d.ts    

objParams.viewportDepthNode = [...objParams.node,
    'scope',
    'valueNode',
].distinct()

export type ViewportDepthNodeProps = Node<ViewportDepthNode, typeof ViewportDepthNode, { scope: ViewportDepthNodeScope; valueNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportDepthNode: Partial<{ scope: ViewportDepthNodeScope; valueNode?: ENode | null; }>
    }
}

defaults.viewportDepthNode = {}

