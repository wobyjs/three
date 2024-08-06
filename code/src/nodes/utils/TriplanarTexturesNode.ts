import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import { ShaderNodeObject } from 'three/src/nodes/Nodes.js'
import TriplanarTexturesNode from 'three/src/nodes/utils/TriplanarTexturesNode.js'
export { TriplanarTexturesNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

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
        triplanarTexturesNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        triplanarTexturesNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TriplanarTexturesNode.d.ts

consParams.triplanarTexturesNode = [

    'textureXNode',
    'textureYNode',
    'textureZNode',
    'scaleNode',
    'positionNode',
    'normalNode',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\utils\TriplanarTexturesNode.d.ts    

objParams.triplanarTexturesNode = [...objParams.node,
    'textureXNode',
    'textureYNode',
    'textureZNode',
    'scaleNode',
    'positionNode',
    'normalNode',
].distinct()

export type TriplanarTexturesNodeProps = Node<TriplanarTexturesNode, typeof TriplanarTexturesNode, { textureXNode: ENode; textureYNode?: TextureNode | null; textureZNode?: TextureNode | null; scaleNode?: ShaderNodeObject<ENode>; positionNode?: ShaderNodeObject<ENode>; normalNode?: ShaderNodeObject<ENode> }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        triplanarTexturesNode: Partial<{ textureXNode: ENode; textureYNode?: TextureNode | null; textureZNode?: TextureNode | null; scaleNode?: ShaderNodeObject<ENode>; positionNode?: ShaderNodeObject<ENode>; normalNode?: ShaderNodeObject<ENode> }>
    }
}

defaults.triplanarTexturesNode = {}

