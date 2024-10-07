import { Node } from '../../../three-types'
import Renderer from 'three/src/renderers/common/Renderer.js'
import RendererReferenceNode from 'three/src/nodes/accessors/RendererReferenceNode.js'
export { RendererReferenceNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        RendererReferenceNode: typeof RendererReferenceNode
    }
}

Three.RendererReferenceNode = RendererReferenceNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rendererReferenceNode: RendererReferenceNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rendererReferenceNode: typeof rendererReferenceNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        rendererReferenceNode: typeof _rendererReferenceNode
    }
}



const rendererReferenceNode = ([
    'property',
    'inputType',
    'renderer',
] as const).distinct()
consParams.rendererReferenceNode = rendererReferenceNode



const _rendererReferenceNode = ([...objProps.referenceNode,
    'renderer',
] as const).distinct()
objProps.rendererReferenceNode = _rendererReferenceNode

export type RendererReferenceNodeProps = Node<RendererReferenceNode, typeof RendererReferenceNode, { property: string; inputType: string; renderer?: Renderer | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rendererReferenceNode: { property?: string; inputType?: string; renderer?: Renderer | null; }
    }
}

defaults.rendererReferenceNode = {}

