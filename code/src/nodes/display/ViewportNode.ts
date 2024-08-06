import { Node } from '../../../three-types'
import ViewportNode, { ViewportNodeScope } from 'three/src/nodes/display/ViewportNode.js'
export { ViewportNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ViewportNode: typeof ViewportNode
    }
}

Three.ViewportNode = ViewportNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            viewportNode: ViewportNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        viewportNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        viewportNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportNode.d.ts

consParams.viewportNode = [
    'scope',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\ViewportNode.d.ts    

objParams.viewportNode = [...objParams.node,
    'scope',
    'isViewportNode',
].distinct()

export type ViewportNodeProps = Node<ViewportNode, typeof ViewportNode, { scope: ViewportNodeScope; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportNode: Partial<{ scope: ViewportNodeScope; }>
    }
}

defaults.viewportNode = {}

