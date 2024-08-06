import { Node } from '../../../three-types'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import MaxMipLevelNode from 'three/src/nodes/utils/MaxMipLevelNode.js'
export { MaxMipLevelNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../core/UniformNode'

declare module '../../../lib/3/three'
{
    interface Three {
        MaxMipLevelNode: typeof MaxMipLevelNode
    }
}

Three.MaxMipLevelNode = MaxMipLevelNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            maxMipLevelNode: MaxMipLevelNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        maxMipLevelNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        maxMipLevelNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MaxMipLevelNode.d.ts

consParams.maxMipLevelNode = [
    'textureNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\MaxMipLevelNode.d.ts    

objParams.maxMipLevelNode = [...objParams.uniformNode,
    'textureNode',
].distinct()

export type MaxMipLevelNodeProps = Node<MaxMipLevelNode, typeof MaxMipLevelNode, { textureNode: TextureNode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        maxMipLevelNode: Partial<{ textureNode?: TextureNode; }>
    }
}

defaults.maxMipLevelNode = {}

