import { Node as ENode } from 'three/src/nodes/Nodes.js'
import LightingModel from 'three/src/nodes/core/LightingModel.js'
import { Node } from '../../../three-types'
import LightingContextNode from 'three/src/nodes/lighting/LightingContextNode.js'
export { LightingContextNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        lightingContextNode: typeof lightingContextNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lightingContextNode: typeof _lightingContextNode
    }
}



const lightingContextNode = ([

    'node',
    'lightingModel',
    'backdropNode',
    'backdropAlphaNode',
] as const).distinct()
consParams.lightingContextNode = lightingContextNode



const _lightingContextNode = ([...objProps.contextNode,
    'lightingModelNode',
    'backdropNode',
    'backdropAlphaNode',
] as const).distinct()
objProps.lightingContextNode = _lightingContextNode

export type LightingContextNodeProps = Node<LightingContextNode, typeof LightingContextNode, { node: ENode; lightingModel?: LightingModel | null; backdropNode?: ENode | null; backdropAlphaNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightingContextNode: Partial<{ node: ENode; lightingModel?: LightingModel | null; backdropNode?: ENode | null; backdropAlphaNode?: ENode | null; }>
    }
}

defaults.lightingContextNode = {}

