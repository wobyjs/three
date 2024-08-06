import { Node } from '../../../three-types'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import GaussianBlurNode from 'three/src/nodes/display/GaussianBlurNode.js'
export { GaussianBlurNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

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
        gaussianBlurNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        gaussianBlurNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\GaussianBlurNode.d.ts

consParams.gaussianBlurNode = [
    'textureNode',
    'sigma',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\display\GaussianBlurNode.d.ts    

objParams.gaussianBlurNode = [...objParams.tempNode,
    'textureNode',
    'sigma',
    'directionNode',
    'resolution',
].distinct()

export type GaussianBlurNodeProps = Node<GaussianBlurNode, typeof GaussianBlurNode, { textureNode: TextureNode; sigma?: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        gaussianBlurNode: Partial<{ textureNode: TextureNode; sigma?: number; }>
    }
}

defaults.gaussianBlurNode = {}

