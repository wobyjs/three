import { Object3DNode } from '../../../three-types'
import ClippingNode, { ClippingNodeScope } from 'three/src/nodes/accessors/ClippingNode.js'
export { ClippingNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ClippingNode: typeof ClippingNode
    }
}

Three.ClippingNode = ClippingNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            clippingNode: ClippingNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        clippingNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        clippingNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ClippingNode.d.ts

consParams.clippingNode = [
    'scope',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\ClippingNode.d.ts    

objParams.clippingNode = [...objParams.node,
    'scope',
].distinct()

export type ClippingNodeProps = Object3DNode<ClippingNode, typeof ClippingNode, { scope?: ClippingNodeScope; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        clippingNode: { scope?: ClippingNodeScope; }
    }
}

defaults.clippingNode = {}

