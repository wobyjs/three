import { Node } from '../../../three-types'
import ViewportNode, { ViewportNodeScope } from 'three/src/nodes/display/ViewportNode.js'
export { ViewportNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        viewportNode: typeof viewportNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        viewportNode: typeof _viewportNode
    }
}



const viewportNode = ([
    'scope',
] as const).distinct()
consParams.viewportNode = viewportNode



const _viewportNode = ([...objProps.node,
    'scope',
    'isViewportNode',
] as const).distinct()
objProps.viewportNode = _viewportNode

export type ViewportNodeProps = Node<ViewportNode, typeof ViewportNode, { scope: ViewportNodeScope; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        viewportNode: Partial<{ scope: ViewportNodeScope; }>
    }
}

defaults.viewportNode = {}

