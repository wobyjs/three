import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js'
import { Node } from '../../../three-types'
import SkinningNode from 'three/src/nodes/accessors/SkinningNode.js'
export { SkinningNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        skinningNode: typeof skinningNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        skinningNode: typeof _skinningNode
    }
}



const skinningNode = ([
    'skinnedMesh',
    'useReference',
] as const).distinct()
consParams.skinningNode = skinningNode



const _skinningNode = ([...objProps.node,
    'skinnedMesh',
    'useReference',
    'skinIndexNode',
    'skinWeightNode',
    'bindMatrixNode',
    'bindMatrixInverseNode',
    'boneMatricesNode',
] as const).distinct()
objProps.skinningNode = _skinningNode

export type SkinningNodeProps = Node<SkinningNode, typeof SkinningNode, { skinnedMesh: SkinnedMesh; useReference?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        skinningNode: { skinnedMesh?: SkinnedMesh; useReference?: boolean; }
    }
}

defaults.skinningNode = {}

