import { MaterialNode } from '../../../src/materials/MaterialNode'
import { MeshPostProcessingMaterial } from 'three/examples/jsm/materials/MeshPostProcessingMaterial.js'
export * from 'three/examples/jsm/materials/MeshPostProcessingMaterial.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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

declare module '../../../lib/3/objProps' {
    interface objProps {
        meshPostProcessingMaterial: typeof _meshPostProcessingMaterial
        meshPostProcessingMaterialParameters: typeof _meshPostProcessingMaterialParameters
    }
}



consParams.meshPostProcessingMaterialParameters = { ...consParams.meshPhysicalMaterialParameters }


consParams.meshPostProcessingMaterial = { ...consParams.meshPostProcessingMaterialParameters }



const _meshPostProcessingMaterialParameters = ([...objProps.meshPhysicalMaterial,
    'aoPassMap',
    'aoPassMapScale',
] as const).distinct()
objProps.meshPostProcessingMaterialParameters = _meshPostProcessingMaterialParameters


const _meshPostProcessingMaterial = ([...objProps.meshPhysicalMaterial,
    'aoPassMap',
] as const).distinct()
objProps.meshPostProcessingMaterial = _meshPostProcessingMaterial

export type MeshPostProcessingMaterialProps = MaterialNode<MeshPostProcessingMaterial, typeof MeshPostProcessingMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        meshPostProcessingMaterial: Partial<MeshPostProcessingMaterial>
    }
}

defaults.meshPostProcessingMaterial = {}

