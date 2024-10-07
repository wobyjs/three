import { Node } from '../../../three-types'
import { Node as ENode, TextureNode } from 'three/src/nodes/Nodes.js'
import TransitionNode from 'three/src/nodes/display/TransitionNode.js'
export { TransitionNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        TransitionNode: typeof TransitionNode
    }
}

Three.TransitionNode = TransitionNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            transitionNode: TransitionNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        transitionNode: typeof transitionNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        transitionNode: typeof _transitionNode
    }
}


const transitionNode = ([
    'textureNodeA',
    'textureNodeB',
    'mixTextureNode',
    'mixRatioNode',
    'thresholdNode',
    'useTextureNode',
] as const).distinct()
consParams.transitionNode = transitionNode

const _transitionNode = ([...objProps.tempNode,
    'textureNodeA',
    'textureNodeB',
    'mixTextureNode',
    'mixRatioNode',
    'thresholdNode',
    'useTextureNode',
] as const).distinct()
objProps.transitionNode = _transitionNode

export type TransitionNodeProps = Node<TransitionNode, typeof TransitionNode, { textureNodeA: TextureNode, textureNodeB: TextureNode, mixTextureNode: TextureNode, mixRatioNode: ENode, thresholdNode: ENode, useTextureNode: ENode, }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        transitionNode: Partial<{ textureNodeA: TextureNode, textureNodeB: TextureNode, mixTextureNode: TextureNode, mixRatioNode: ENode, thresholdNode: ENode, useTextureNode: ENode, }>
    }
}

defaults.transitionNode = {}
