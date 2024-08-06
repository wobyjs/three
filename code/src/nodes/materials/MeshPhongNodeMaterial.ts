import { MaterialNode } from '../../materials/MaterialNode'
import MeshPhongNodeMaterial from 'three/src/nodes/materials/MeshPhongNodeMaterial.js'
export * from 'three/src/nodes/materials/MeshPhongNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './NodeMaterial'
import '../../materials/MeshPhongMaterial'
import { WrapAsString } from '../../../three-types'
import { NodeMaterialParameters } from 'three/src/nodes/materials/NodeMaterial'
import { MeshPhongMaterialParameters } from 'three/src/materials/MeshPhongMaterial'

declare module '../../../lib/3/three'
{
    interface Three {
        MeshPhongNodeMaterial: typeof MeshPhongNodeMaterial
    }
}

Three.MeshPhongNodeMaterial = MeshPhongNodeMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshPhongNodeMaterial: MeshPhongNodeMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        meshPhongNodeMaterial: WrapAsString<NodeMaterialParameters & MeshPhongMaterialParameters>
        meshPhongNodeMaterialParameters: WrapAsString<NodeMaterialParameters & MeshPhongMaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        meshPhongNodeMaterial: string[]
        meshPhongNodeMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshPhongNodeMaterial.d.ts

consParams.meshPhongNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.meshPhongMaterialParameters
}


consParams.meshPhongNodeMaterial = { ...consParams.meshPhongNodeMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshPhongNodeMaterial.d.ts    

objParams.meshPhongNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.meshPhongMaterialParameters,
].distinct()


objParams.meshPhongNodeMaterial = [...objParams.nodeMaterial,
    'shininessNode',
    'specularNode',
    // Properties from MeshPhongMaterial
    'color',
    'specular',
    'shininess',
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
    'specularMap',
    'alphaMap',
    'envMap',
    'combine',
    'reflectivity',
    'refractionRatio',
    'wireframeLinecap',
    'wireframeLinejoin',
    'flatShading',
    'metal',
].distinct()

export type MeshPhongNodeMaterialProps = MaterialNode<MeshPhongNodeMaterial, typeof MeshPhongNodeMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        meshPhongNodeMaterial: Partial<MeshPhongNodeMaterial>
    }
}

defaults.meshPhongNodeMaterial = {}