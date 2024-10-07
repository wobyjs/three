import { Node as Object3DNode } from '../../../three-types'
import StorageTextureNode from 'three/src/nodes/accessors/StorageTextureNode.js'
export { StorageTextureNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './TextureNode'
import { Texture } from './TextureNode'
import { ShaderNodeObject } from 'three/src/nodes/tsl/TSLCore'
import Node from "three/src/nodes/core/Node.js";

declare module '../../../lib/3/three'
{
    interface Three {
        StorageTextureNode: typeof StorageTextureNode
    }
}

Three.StorageTextureNode = StorageTextureNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            storageTextureNode: StorageTextureNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        storageTextureNode: typeof storageTextureNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        storageTextureNode: typeof _storageTextureNode
    }
}


const storageTextureNode = ([
    'value',
    'uvNode',
    'storeNode',
] as const).distinct()
consParams.storageTextureNode = storageTextureNode


const _storageTextureNode = ([...objProps.textureNode,
    'storeNode',
    'isStorageTextureNode',
    'access',
] as const).distinct()
objProps.storageTextureNode = _storageTextureNode

export type StorageTextureNodeProps = Object3DNode<StorageTextureNode, typeof StorageTextureNode, { value: Texture, uvNode?: ShaderNodeObject<Node> | null, storeNode?: Node | null, }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        storageTextureNode: Partial<{ value: Texture, uvNode?: ShaderNodeObject<Node> | null, storeNode?: Node | null, }>
    }
}

defaults.storageTextureNode = {}

