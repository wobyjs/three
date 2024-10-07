import { Node } from '../../../three-types'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import GaussianBlurNode from 'three/src/nodes/display/GaussianBlurNode.js'
export { GaussianBlurNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/TempNode'

declare module '../../../lib/3/three'
{
    interface Three {
        GaussianBlurNode: typeof GaussianBlurNode
    }
}

Three.GaussianBlurNode = GaussianBlurNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            gaussianBlurNode: GaussianBlurNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        gaussianBlurNode: typeof gaussianBlurNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        gaussianBlurNode: typeof _gaussianBlurNode
    }
}



const gaussianBlurNode = ([
    'textureNode',
    'sigma',
] as const).distinct()
consParams.gaussianBlurNode = gaussianBlurNode



const _gaussianBlurNode = ([...objProps.tempNode,
    'textureNode',
    'sigma',
    'directionNode',
    'resolution',
] as const).distinct()
objProps.gaussianBlurNode = _gaussianBlurNode

export type GaussianBlurNodeProps = Node<GaussianBlurNode, typeof GaussianBlurNode, { textureNode: TextureNode; sigma?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gaussianBlurNode: Partial<{ textureNode: TextureNode; sigma?: number; }>
    }
}

defaults.gaussianBlurNode = {}

