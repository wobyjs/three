import { Node } from '../../../three-types'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import MaxMipLevelNode from 'three/src/nodes/utils/MaxMipLevelNode.js'
export { MaxMipLevelNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        maxMipLevelNode: typeof maxMipLevelNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        maxMipLevelNode: typeof _maxMipLevelNode
    }
}



const maxMipLevelNode = ([
    'textureNode',
] as const).distinct()
consParams.maxMipLevelNode = maxMipLevelNode



const _maxMipLevelNode = ([...objProps.uniformNode,
    'textureNode',
] as const).distinct()
objProps.maxMipLevelNode = _maxMipLevelNode

export type MaxMipLevelNodeProps = Node<MaxMipLevelNode, typeof MaxMipLevelNode, { textureNode: TextureNode; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        maxMipLevelNode: Partial<{ textureNode?: TextureNode; }>
    }
}

defaults.maxMipLevelNode = {}

