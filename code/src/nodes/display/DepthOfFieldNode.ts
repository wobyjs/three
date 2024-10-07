import { Node } from '../../../three-types'
import { Node as ENode, TextureNode } from 'three/src/nodes/Nodes.js'
import DepthOfFieldNode from 'three/src/nodes/display/DepthOfFieldNode.js'
export { DepthOfFieldNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        DepthOfFieldNode: typeof DepthOfFieldNode
    }
}

Three.DepthOfFieldNode = DepthOfFieldNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            depthOfFieldNode: DepthOfFieldNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        depthOfFieldNode: typeof depthOfFieldNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        depthOfFieldNode: typeof _depthOfFieldNode
    }
}


const depthOfFieldNode = ([
    'textureNode',
    'viewZNode',
    'focusNode',
    'apertureNode',
    'maxblurNode',
] as const).distinct()
consParams.depthOfFieldNode = depthOfFieldNode



const _depthOfFieldNode = ([...objProps.tempNode,
    'textureNode',
    'viewZNode',
    'focus',
    'aperture',
    'maxblur',
] as const).distinct()
objProps.depthOfFieldNode = _depthOfFieldNode

export type DepthOfFieldNodeProps = Node<DepthOfFieldNode, typeof DepthOfFieldNode, { textureNode: TextureNode, viewZNode: ENode, focusNode: ENode, apertureNode: ENode, maxblurNode: ENode }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        depthOfFieldNode: Partial<{ textureNode: TextureNode, viewZNode: ENode, focusNode: ENode, apertureNode: ENode, maxblurNode: ENode }>
    }
}

defaults.depthOfFieldNode = {}

