import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import TriplanarTexturesNode from 'three/src/nodes/utils/TriplanarTexturesNode.js'
export { TriplanarTexturesNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'
import { ShaderNodeObject } from 'three/src/nodes/tsl/TSLCore'

declare module '../../../lib/3/three'
{
    interface Three {
        TriplanarTexturesNode: typeof TriplanarTexturesNode
    }
}

Three.TriplanarTexturesNode = TriplanarTexturesNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            triplanarTexturesNode: TriplanarTexturesNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        triplanarTexturesNode: typeof triplanarTexturesNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        triplanarTexturesNode: typeof _triplanarTexturesNode
    }
}



const triplanarTexturesNode = ([

    'textureXNode',
    'textureYNode',
    'textureZNode',
    'scaleNode',
    'positionNode',
    'normalNode',
] as const).distinct()
consParams.triplanarTexturesNode = triplanarTexturesNode



const _triplanarTexturesNode = ([...objProps.node,
    'textureXNode',
    'textureYNode',
    'textureZNode',
    'scaleNode',
    'positionNode',
    'normalNode',
] as const).distinct()
objProps.triplanarTexturesNode = _triplanarTexturesNode

export type TriplanarTexturesNodeProps = Node<TriplanarTexturesNode, typeof TriplanarTexturesNode, { textureXNode: ENode; textureYNode?: TextureNode | null; textureZNode?: TextureNode | null; scaleNode?: ShaderNodeObject<ENode>; positionNode?: ShaderNodeObject<ENode>; normalNode?: ShaderNodeObject<ENode> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        triplanarTexturesNode: Partial<{ textureXNode: ENode; textureYNode?: TextureNode | null; textureZNode?: TextureNode | null; scaleNode?: ShaderNodeObject<ENode>; positionNode?: ShaderNodeObject<ENode>; normalNode?: ShaderNodeObject<ENode> }>
    }
}

defaults.triplanarTexturesNode = {}

