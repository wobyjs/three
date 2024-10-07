import { Node as Object3DNode } from '../../../three-types'
import TextureSizeNode from 'three/src/nodes/accessors/TextureSizeNode.js'
export * from 'three/src/textures/Texture.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        TextureSizeNode: typeof TextureSizeNode
    }
}

Three.TextureSizeNode = TextureSizeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            textureSizeNode: TextureSizeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        textureSizeNode: typeof textureSizeNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        textureSizeNode: typeof _textureSizeNode
    }
}


const textureSizeNode = ([
    'isTextureSizeNode',
    'textureNode',
    'levelNode',
] as const).distinct()
consParams.textureSizeNode = textureSizeNode



const _textureSizeNode = ([...objProps.node,
    'textureNode',
    'levelNode',
] as const).distinct()
objProps.textureSizeNode = _textureSizeNode

export type TextureSizeNodeProps = Object3DNode<TextureSizeNode, typeof TextureSizeNode, { textureNode: Node, levelNode?: Node | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        textureSizeNode: Partial<{ textureNode: Node, levelNode?: Node | null }>
    }
}

defaults.textureSizeNode = {}

