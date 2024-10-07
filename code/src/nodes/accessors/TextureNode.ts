import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
// import { ShaderNodeObject } from 'three/src/nodes/Nodes.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import { Texture } from 'three/src/textures/Texture.js'
export * from 'three/src/textures/Texture.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { ShaderNodeObject } from 'three/src/nodes/tsl/TSLCore'

declare module '../../../lib/3/three'
{
    interface Three {
        TextureNode: typeof TextureNode
    }
}

Three.TextureNode = TextureNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            textureNode: TextureNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        textureNode: typeof textureNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        textureNode: typeof _textureNode
    }
}



const textureNode = ([
    'value',
    'uvNode',
    'levelNode',
] as const).distinct()
consParams.textureNode = textureNode



const _textureNode = ([...objProps.uniformNode,
    'uvNode',
    'levelNode',
    'compareNode',
    'depthNode',
    'gradNode',
    'sampler',
    'updateMatrix',
    'referenceNode',
] as const).distinct()
objProps.textureNode = _textureNode

export type TextureNodeProps = Node<TextureNode, typeof TextureNode, { value: Texture; uvNode?: ShaderNodeObject<ENode> | null; levelNode?: ShaderNodeObject<ENode> | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        textureNode: Partial<{ value: Texture; uvNode?: ShaderNodeObject<ENode> | null; levelNode?: ShaderNodeObject<ENode> | null; }>
    }
}

defaults.textureNode = {}

