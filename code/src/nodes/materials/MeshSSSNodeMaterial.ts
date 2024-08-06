import { MaterialNode } from '../../materials/MaterialNode'
import MeshSSSNodeMaterial from 'three/src/nodes/materials/MeshSSSNodeMaterial.js'
export * from 'three/src/nodes/materials/MeshSSSNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import './NodeMaterial'
import './MeshPhysicalNodeMaterial'
import { WrapAsString } from '../../../three-types'
import { MeshPhysicalMaterialParameters } from 'three/src/materials/MeshPhysicalMaterial'

declare module '../../../lib/3/three'
{
    interface Three {
        MeshSSSNodeMaterial: typeof MeshSSSNodeMaterial
    }
}

Three.MeshSSSNodeMaterial = MeshSSSNodeMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshSssNodeMaterial: MeshSSSNodeMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        meshSssNodeMaterial: WrapAsString<MeshPhysicalMaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        meshSssNodeMaterial: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshSSSNodeMaterial.d.ts

consParams.meshSssNodeMaterial = { ...consParams.meshPhysicalNodeMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\materials\MeshSSSNodeMaterial.d.ts    

objParams.meshSssNodeMaterial = [...objParams.meshPhysicalNodeMaterial,
    'thicknessColorNode',
    'thicknessDistortionNode',
    'thicknessAmbientNode',
    'thicknessAttenuationNode',
    'thicknessPowerNode',
    'thicknessScaleNode',
].distinct()

export type MeshSSSNodeMaterialProps = MaterialNode<MeshSSSNodeMaterial, typeof MeshSSSNodeMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        meshSssNodeMaterial: Partial<MeshSSSNodeMaterial>
    }
}

defaults.meshSssNodeMaterial = {}
