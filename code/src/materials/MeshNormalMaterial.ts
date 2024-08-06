import { MaterialNode } from './MaterialNode'
import { MeshNormalMaterial, MeshNormalMaterialParameters } from 'three/src/materials/MeshNormalMaterial.js'
export { MeshNormalMaterial } from 'three/src/materials/MeshNormalMaterial.js'
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
        MeshNormalMaterial: typeof MeshNormalMaterial
    }
}

Three.MeshNormalMaterial = MeshNormalMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshNormalMaterial: MeshNormalMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        meshNormalMaterial: WrapAsString<MeshNormalMaterialParameters>
        meshNormalMaterialParameters: WrapAsString<MeshNormalMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        meshNormalMaterial: string[]
        meshNormalMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshNormalMaterial.d.ts

consParams.meshNormalMaterialParameters = {
    ...consParams.materialParameters,
    ...(['bumpMap',
        'bumpScale',
        'normalMap',
        'normalMapType',
        'normalScale',
        'displacementMap',
        'displacementScale',
        'displacementBias',
        'wireframe',
        'wireframeLinewidth',
        'flatShading',
    ] as const).toObject()
}


consParams.meshNormalMaterial = { ...consParams.meshNormalMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshNormalMaterial.d.ts    

objParams.meshNormalMaterialParameters = [...objParams.materialParameters,
    'bumpMap',
    'bumpScale',
    'normalMap',
    'normalMapType',
    'normalScale',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'wireframe',
    'wireframeLinewidth',
    'flatShading',
].distinct()

objParams.meshNormalMaterial = [...objParams.material,
    /**
     * @default 'MeshNormalMaterial'
     */
    'type',
    /**
     * @default null
     */
    'bumpMap',
    /**
     * @default 1
     */
    'bumpScale',
    /**
     * @default null
     */
    'normalMap',
    /**
     * @default THREE.TangentSpaceNormalMap
     */
    'normalMapType',
    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    'normalScale',
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
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    'flatShading',
].distinct()

export type MeshNormalMaterialProps = MaterialNode<MeshNormalMaterial, MeshNormalMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshNormalMaterial: Partial<MeshNormalMaterialParameters>
    }
}

defaults.meshNormalMaterial = {}
