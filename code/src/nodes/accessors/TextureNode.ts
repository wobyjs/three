import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Object3DNode } from '../../../three-types'
import { ShaderNodeObject } from 'three/src/nodes/Nodes.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import { Texture } from 'three/src/textures/Texture.js'
export * from 'three/src/textures/Texture.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

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
        textureNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        textureNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureNode.d.ts

consParams.textureNode = [
    'value',
    'uvNode',
    'levelNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\TextureNode.d.ts    

objParams.textureNode = [...objParams.uniformNode,
    'uvNode',
    'levelNode',
    'compareNode',
    'depthNode',
    'gradNode',
    'sampler',
    'updateMatrix',
    'referenceNode',
].distinct()

export type TextureNodeProps = Object3DNode<TextureNode, typeof TextureNode, { value: Texture; uvNode?: ShaderNodeObject<ENode> | null; levelNode?: ShaderNodeObject<ENode> | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        textureNode: Partial<{ value: Texture; uvNode?: ShaderNodeObject<ENode> | null; levelNode?: ShaderNodeObject<ENode> | null; }>
    }
}

defaults.textureNode = {}

