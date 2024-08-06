import { Object3DNode } from '../../../three-types'
import Renderer from 'three/src/renderers/common/Renderer.js'
import RendererReferenceNode from 'three/src/nodes/accessors/RendererReferenceNode.js'
export { RendererReferenceNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        rendererReferenceNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        rendererReferenceNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\RendererReferenceNode.d.ts

consParams.rendererReferenceNode = [
    'property',
    'inputType',
    'renderer',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\RendererReferenceNode.d.ts    

objParams.rendererReferenceNode = [...objParams.referenceNode,
    'renderer',
].distinct()

export type RendererReferenceNodeProps = Object3DNode<RendererReferenceNode, typeof RendererReferenceNode, { property: string; inputType: string; renderer?: Renderer | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rendererReferenceNode: { property?: string; inputType?: string; renderer?: Renderer | null; }
    }
}

defaults.rendererReferenceNode = {}

