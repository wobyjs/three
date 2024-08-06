import { MaterialNode } from '../../materials/MaterialNode'
import MeshBasicNodeMaterial from 'three/src/nodes/materials/MeshBasicNodeMaterial.js'
export * from 'three/src/nodes/materials/MeshBasicNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './NodeMaterial'
import '../../materials/MeshBasicMaterial'
import '../../materials/MeshNormalMaterial'
import { WrapAsString } from '../../../three-types'
import { MeshBasicMaterialParameters } from 'three/src/materials/MeshBasicMaterial'
import { MeshNormalMaterialParameters } from 'three/src/materials/MeshNormalMaterial'

declare module '../../../lib/3/three'
{
    interface Three {
        MeshBasicNodeMaterial: typeof MeshBasicNodeMaterial
    }
}

Three.MeshBasicNodeMaterial = MeshBasicNodeMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshBasicNodeMaterial: MeshBasicNodeMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        meshBasicNodeMaterial: WrapAsString<MeshBasicMaterialParameters & MeshNormalMaterialParameters>
        meshBasicNodeMaterialParameters: WrapAsString<MeshBasicMaterialParameters & MeshNormalMaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        meshBasicNodeMaterial: string[]
        meshBasicNodeMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshBasicNodeMaterial.d.ts

consParams.meshBasicNodeMaterialParameters = {
    ...consParams.nodeMaterialParameters, ...consParams.meshBasicMaterialParameters, ...consParams.meshNormalMaterialParameters
}


consParams.meshBasicNodeMaterial = { ...consParams.meshBasicNodeMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshBasicNodeMaterial.d.ts    

objParams.meshBasicNodeMaterialParameters = [...objParams.nodeMaterialParameters, ...objParams.meshBasicMaterialParameters,
].distinct()


objParams.meshBasicNodeMaterial = [...objParams.nodeMaterial,
    // Properties from MeshBasicMaterial
    'color',
    'map',
    'lightMap',
    'lightMapIntensity',
    'aoMap',
    'aoMapIntensity',
    'specularMap',
    'alphaMap',
    'envMap',
    'combine',
    'reflectivity',
    'refractionRatio',
    'wireframeLinecap',
    'wireframeLinejoin',
].distinct()

export type MeshBasicNodeMaterialProps = MaterialNode<MeshBasicNodeMaterial, typeof MeshBasicNodeMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        meshBasicNodeMaterial: Partial<MeshBasicNodeMaterial>
    }
}

defaults.meshBasicNodeMaterial = {}