import { Node as ENode } from 'three/src/nodes/Nodes.js'
import LightingModel from 'three/src/nodes/core/LightingModel.js'
import { Node } from '../../../three-types'
import LightingContextNode from 'three/src/nodes/lighting/LightingContextNode.js'
export { LightingContextNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LightingContextNode: typeof LightingContextNode
    }
}

Three.LightingContextNode = LightingContextNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightingContextNode: LightingContextNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lightingContextNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lightingContextNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightingContextNode.d.ts

consParams.lightingContextNode = [

    'node',
    'lightingModel',
    'backdropNode',
    'backdropAlphaNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\lighting\LightingContextNode.d.ts    

objParams.lightingContextNode = [...objParams.contextNode,
    'lightingModelNode',
    'backdropNode',
    'backdropAlphaNode',
].distinct()

export type LightingContextNodeProps = Node<LightingContextNode, typeof LightingContextNode, { node: ENode; lightingModel?: LightingModel | null; backdropNode?: ENode | null; backdropAlphaNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightingContextNode: Partial<{ node: ENode; lightingModel?: LightingModel | null; backdropNode?: ENode | null; backdropAlphaNode?: ENode | null; }>
    }
}

defaults.lightingContextNode = {}

