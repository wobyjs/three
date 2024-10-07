import { Node as Object3DNode } from '../../../three-types'
import Texture3DNode from 'three/src/nodes/accessors/Texture3DNode.js'
export { Texture3DNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './TextureNode'
import { Texture } from './TextureNode'
import { ShaderNodeObject } from 'three/src/nodes/tsl/TSLCore'
import Node from "three/src/nodes/core/Node.js"

declare module '../../../lib/3/three'
{
    interface Three {
        Texture3DNode: typeof Texture3DNode
    }
}

Three.Texture3DNode = Texture3DNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            texture3dNode: Texture3DNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        texture3dNode: typeof texture3dNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        texture3dNode: typeof _texture3dNode
    }
}


const texture3dNode = ([
    'value',
    'uvNode',
    'levelNode',
] as const).distinct()
consParams.texture3dNode = texture3dNode


const _texture3dNode = ([...objProps.textureNode,
    'isTexture3DNode',
] as const).distinct()
objProps.texture3dNode = _texture3dNode

export type Texture3DNodeProps = Object3DNode<Texture3DNode, typeof Texture3DNode, { value: Texture, uvNode?: ShaderNodeObject<Node> | null, levelNode?: ShaderNodeObject<Node> | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        texture3dNode: Partial<{ value: Texture, uvNode?: ShaderNodeObject<Node> | null, levelNode?: ShaderNodeObject<Node> | null }>
    }
}

defaults.texture3dNode = {}

