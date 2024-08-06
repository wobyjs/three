import { MaterialNode } from '../../../src/materials/MaterialNode'
import { MeshPostProcessingMaterial } from 'three/examples/jsm/materials/MeshPostProcessingMaterial.js'
export * from 'three/examples/jsm/materials/MeshPostProcessingMaterial.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'
import { WrapAsString } from '../../../three-types'
import { MeshPhysicalMaterialParameters } from 'three/src/materials/MeshPhysicalMaterial'

declare module '../../../lib/3/three'
{
    interface Three {
        MeshPostProcessingMaterial: typeof MeshPostProcessingMaterial
    }
}

Three.MeshPostProcessingMaterial = MeshPostProcessingMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshPostProcessingMaterial: MeshPostProcessingMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        meshPostProcessingMaterial: WrapAsString<MeshPhysicalMaterialParameters>
        meshPostProcessingMaterialParameters: WrapAsString<MeshPhysicalMaterialParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        meshPostProcessingMaterial: string[]
        meshPostProcessingMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\materials\MeshPostProcessingMaterial.d.ts

consParams.meshPostProcessingMaterialParameters = { ...consParams.meshPhysicalMaterialParameters }


consParams.meshPostProcessingMaterial = { ...consParams.meshPostProcessingMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\materials\MeshPostProcessingMaterial.d.ts    

objParams.meshPostProcessingMaterialParameters = [...objParams.meshPhysicalMaterial,
    'aoPassMap',
    'aoPassMapScale',
].distinct()


objParams.meshPostProcessingMaterial = [...objParams.meshPhysicalMaterial,
    'aoPassMap',
].distinct()

export type MeshPostProcessingMaterialProps = MaterialNode<MeshPostProcessingMaterial, typeof MeshPostProcessingMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        meshPostProcessingMaterial: Partial<MeshPostProcessingMaterial>
    }
}

defaults.meshPostProcessingMaterial = {}

