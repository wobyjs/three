import { MaterialNode } from './MaterialNode'
import { MeshDepthMaterial, MeshDepthMaterialParameters } from 'three/src/materials/MeshDepthMaterial.js'
export { MeshDepthMaterial } from 'three/src/materials/MeshDepthMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './Material'
import '../../lib/three/extensions'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        MeshDepthMaterial: typeof MeshDepthMaterial
    }
}

Three.MeshDepthMaterial = MeshDepthMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshDepthMaterial: MeshDepthMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        meshDepthMaterial: WrapAsString<MeshDepthMaterialParameters>
        meshDepthMaterialParameters: WrapAsString<MeshDepthMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        meshDepthMaterial: string[]
        meshDepthMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDepthMaterial.d.ts

consParams.meshDepthMaterialParameters = {
    ...consParams.materialParameters,
    ... (['map',
        'alphaMap',
        'depthPacking',
        'displacementMap',
        'displacementScale',
        'displacementBias',
        'wireframe',
        'wireframeLinewidth',
    ] as const).toObject()
}


consParams.meshDepthMaterial = { ...consParams.meshDepthMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshDepthMaterial.d.ts    

objParams.meshDepthMaterialParameters = [...objParams.materialParameters,
    'map',
    'alphaMap',
    'depthPacking',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'wireframe',
    'wireframeLinewidth',
].distinct()


objParams.meshDepthMaterial = [...objParams.material,
    /**
     * @default 'MeshDepthMaterial'
     */
    'type',
    /**
     * @default null
     */
    'map',
    /**
     * @default null
     */
    'alphaMap',
    /**
     * @default THREE.BasicDepthPacking
     */
    'depthPacking',
    /**
     * @default null
     */
    'displacementMap',
    /**
     * @default 1
     */
    'displacementScale',
    /**
     * @default 0
     */
    'displacementBias',
    /**
     * @default false
     */
    'wireframe',
    /**
     * @default 1
     */
    'wireframeLinewidth',
    /**
     * @default false
     */
    'fog',
].distinct()

export type MeshDepthMaterialProps = MaterialNode<MeshDepthMaterial, MeshDepthMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshDepthMaterial: Partial<MeshDepthMaterialParameters>
    }
}

defaults.meshDepthMaterial = {}
