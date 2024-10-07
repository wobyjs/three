import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { CubeTexture } from 'three/src/textures/CubeTexture.js'
import CubeTextureNode from 'three/src/nodes/accessors/CubeTextureNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { ShaderNodeObject } from 'three/src/nodes/tsl/TSLCore'
export { CubeTextureNode, ShaderNodeObject }

declare module '../../../lib/3/three'
{
    interface Three {
        CubeTextureNode: typeof CubeTextureNode
    }
}

Three.CubeTextureNode = CubeTextureNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            cubeTextureNode: CubeTextureNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        cubeTextureNode: typeof cubeTextureNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        cubeTextureNode: typeof _cubeTextureNode
    }
}


const cubeTextureNode = ([
    'value',
    'uvNode',
    'levelNode',
] as const).distinct()
consParams.cubeTextureNode = cubeTextureNode



const _cubeTextureNode = ([...objProps.textureNode,
    'isCubeTextureNode',
    'uvNode',
    'levelNode',
] as const).distinct()
objProps.cubeTextureNode = _cubeTextureNode

export type CubeTextureNodeProps = Node<CubeTextureNode, typeof CubeTextureNode, { value: CubeTexture; uvNode?: ShaderNodeObject<ENode> | null; levelNode?: ShaderNodeObject<ENode> | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cubeTextureNode: Partial<{ value: CubeTexture; uvNode?: ShaderNodeObject<ENode> | null; levelNode?: ShaderNodeObject<ENode> | null; }>
    }
}

defaults.cubeTextureNode = {}

