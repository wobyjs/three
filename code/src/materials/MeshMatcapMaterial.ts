import { MaterialNode } from './MaterialNode'
import { MeshMatcapMaterial, MeshMatcapMaterialParameters } from 'three/src/materials/MeshMatcapMaterial.js'
export { MeshMatcapMaterial } from 'three/src/materials/MeshMatcapMaterial.js'
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
        MeshMatcapMaterial: typeof MeshMatcapMaterial
    }
}

Three.MeshMatcapMaterial = MeshMatcapMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshMatcapMaterial: MeshMatcapMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        meshMatcapMaterial: WrapAsString<MeshMatcapMaterialParameters>
        meshMatcapMaterialParameters: WrapAsString<MeshMatcapMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        meshMatcapMaterial: string[]
        meshMatcapMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshMatcapMaterial.d.ts

consParams.meshMatcapMaterialParameters = {
    ...consParams.materialParameters,
    ...(['color',
        'matcap',
        'map',
        'bumpMap',
        'bumpScale',
        'normalMap',
        'normalMapType',
        'normalScale',
        'displacementMap',
        'displacementScale',
        'displacementBias',
        'alphaMap',
        'fog',
        'flatShading',
    ] as const).toObject()
}


consParams.meshMatcapMaterial = { ...consParams.meshMatcapMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshMatcapMaterial.d.ts    

objParams.meshMatcapMaterialParameters = [...objParams.materialParameters,
    'color',
    'matcap',
    'map',
    'bumpMap',
    'bumpScale',
    'normalMap',
    'normalMapType',
    'normalScale',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'alphaMap',
    'fog',
    'flatShading',
].distinct()


objParams.meshMatcapMaterial = [...objParams.material,
    /**
     * @default 'MeshMatcapMaterial'
     */
    'type',
    /**
     * @default { 'MATCAP': '' }
     */
    'defines',
    /**
     * @default new THREE.Color( 0xffffff )
     */
    'color',
    /**
     * @default null
     */
    'matcap',
    /**
     * @default null
     */
    'map',
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
     * @default new Vector2( 1, 1 )
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
     * @default null
     */
    'alphaMap',
    /**
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    'flatShading',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    'fog',
].distinct()

export type MeshMatcapMaterialProps = MaterialNode<MeshMatcapMaterial, MeshMatcapMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshMatcapMaterial: Partial<MeshMatcapMaterialParameters>
    }
}

defaults.meshMatcapMaterial = {}
