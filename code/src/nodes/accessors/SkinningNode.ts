import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js'
import { Object3DNode } from '../../../three-types'
import SkinningNode from 'three/src/nodes/accessors/SkinningNode.js'
export { SkinningNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        SkinningNode: typeof SkinningNode
    }
}

Three.SkinningNode = SkinningNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            skinningNode: SkinningNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        skinningNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        skinningNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\SkinningNode.d.ts

consParams.skinningNode = [
    'skinnedMesh',
    'useReference',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\accessors\SkinningNode.d.ts    

objParams.skinningNode = [...objParams.node,
    'skinnedMesh',
    'useReference',
    'skinIndexNode',
    'skinWeightNode',
    'bindMatrixNode',
    'bindMatrixInverseNode',
    'boneMatricesNode',
].distinct()

export type SkinningNodeProps = Object3DNode<SkinningNode, typeof SkinningNode, { skinnedMesh: SkinnedMesh; useReference?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        skinningNode: { skinnedMesh?: SkinnedMesh; useReference?: boolean; }
    }
}

defaults.skinningNode = {}

