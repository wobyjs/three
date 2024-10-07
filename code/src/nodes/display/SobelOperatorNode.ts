import { Node } from '../../../three-types'
import { Node as ENode, TextureNode } from 'three/src/nodes/Nodes.js'
import SobelOperatorNode from 'three/src/nodes/display/SobelOperatorNode.js'
export { SobelOperatorNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        SobelOperatorNode: typeof SobelOperatorNode
    }
}

Three.SobelOperatorNode = SobelOperatorNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            sobelOperatorNode: SobelOperatorNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        sobelOperatorNode: typeof sobelOperatorNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        sobelOperatorNode: typeof _sobelOperatorNode
    }
}


const sobelOperatorNode = ([
    'textureNode',
] as const).distinct()
consParams.sobelOperatorNode = sobelOperatorNode

const _sobelOperatorNode = ([...objProps.tempNode,
    'textureNode',
] as const).distinct()
objProps.sobelOperatorNode = _sobelOperatorNode

export type SobelOperatorNodeProps = Node<SobelOperatorNode, typeof SobelOperatorNode, { textureNode: TextureNode }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        sobelOperatorNode: Partial<{ textureNode: TextureNode }>
    }
}

defaults.sobelOperatorNode = {}

