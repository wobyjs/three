import { MaterialNode } from '../../materials/MaterialNode'
import MeshStandardNodeMaterial from 'three/src/nodes/materials/MeshStandardNodeMaterial.js'
export { MeshStandardNodeMaterial }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './NodeMaterial'
import '../../materials/MeshStandardMaterial'
import { WrapAsString } from '../../../three-types'
import { MeshStandardMaterialParameters } from 'three/src/materials/MeshStandardMaterial'

declare module '../../../lib/3/three'
{
    interface Three {
        MeshStandardNodeMaterial: typeof MeshStandardNodeMaterial
    }
}

Three.MeshStandardNodeMaterial = MeshStandardNodeMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshStandardNodeMaterial: MeshStandardNodeMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        meshStandardNodeMaterial: WrapAsString<MeshStandardMaterialParameters>
        meshStandardNodeMaterialParameters: WrapAsString<MeshStandardMaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        meshStandardNodeMaterial: string[]
        meshStandardNodeMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshStandardNodeMaterial.d.ts

consParams.meshStandardNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.meshStandardMaterialParameters
}

consParams.meshStandardNodeMaterial = { ...consParams.meshStandardNodeMaterialParameters }
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshStandardNodeMaterial.d.ts    

objParams.meshStandardNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.meshStandardMaterialParameters,
].distinct()

objParams.meshStandardNodeMaterial = [...objParams.nodeMaterial,
    'emissiveNode',
    'metalnessNode',
    'roughnessNode',
    // Properties from MeshStandardMaterial
    'color',
    'roughness',
    'metalness',
    'map',
    'lightMap',
    'lightMapIntensity',
    'aoMap',
    'aoMapIntensity',
    'emissive',
    'emissiveIntensity',
    'emissiveMap',
    'bumpMap',
    'bumpScale',
    'normalMap',
    'normalMapType',
    'normalScale',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'roughnessMap',
    'metalnessMap',
    'alphaMap',
    'envMap',
    'envMapIntensity',
    'wireframeLinecap',
    'wireframeLinejoin',
    'flatShading',
].distinct()

export type MeshStandardNodeMaterialProps = MaterialNode<MeshStandardNodeMaterial, typeof MeshStandardNodeMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        meshStandardNodeMaterial: Partial<MeshStandardNodeMaterial>
    }
}

defaults.meshStandardNodeMaterial = {}
