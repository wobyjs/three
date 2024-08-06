import { MaterialNode } from './MaterialNode'
import { MeshPhysicalMaterial, MeshPhysicalMaterialParameters } from 'three/src/materials/MeshPhysicalMaterial.js'
export { MeshPhysicalMaterial } from 'three/src/materials/MeshPhysicalMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './MeshStandardMaterial'
import './Material'
import './MeshStandardMaterial'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        MeshPhysicalMaterial: typeof MeshPhysicalMaterial
    }
}

Three.MeshPhysicalMaterial = MeshPhysicalMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshPhysicalMaterial: MeshPhysicalMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        meshPhysicalMaterial: WrapAsString<MeshPhysicalMaterialParameters>
        meshPhysicalMaterialParameters: WrapAsString<MeshPhysicalMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        meshPhysicalMaterial: string[]
        meshPhysicalMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshPhysicalMaterial.d.ts

consParams.meshPhysicalMaterialParameters = {
    ...consParams.meshStandardMaterialParameters,
    ...(['anisotropyRotation',
        'anisotropyMap',
        'clearcoatMap',
        'clearcoatRoughness',
        'clearcoatRoughnessMap',
        'clearcoatNormalScale',
        'clearcoatNormalMap',
        'ior',
        'reflectivity',
        'iridescenceMap',
        'iridescenceIOR',
        'iridescenceThicknessRange',
        'iridescenceThicknessMap',
        'sheenColor',
        'sheenColorMap',
        'sheenRoughness',
        'sheenRoughnessMap',
        'transmissionMap',
        'thickness',
        'thicknessMap',
        'attenuationDistance',
        'attenuationColor',
        'specularIntensity',
        'specularIntensityMap',
        'specularColor',
        'specularColorMap',
        'anisotropy',
        'clearcoat',
        'iridescence',
        'dispersion',
        'sheen',
        'transmission',
    ] as const).toObject()
}


consParams.meshPhysicalMaterial = { ...consParams.meshPhysicalMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshPhysicalMaterial.d.ts    

objParams.meshPhysicalMaterialParameters = [...objParams.meshStandardMaterialParameters,
    'anisotropyRotation',
    'anisotropyMap',
    'clearcoatMap',
    'clearcoatRoughness',
    'clearcoatRoughnessMap',
    'clearcoatNormalScale',
    'clearcoatNormalMap',
    'ior',
    'reflectivity',
    'iridescenceMap',
    'iridescenceIOR',
    'iridescenceThicknessRange',
    'iridescenceThicknessMap',
    'sheenColor',
    'sheenColorMap',
    'sheenRoughness',
    'sheenRoughnessMap',
    'transmissionMap',
    'thickness',
    'thicknessMap',
    'attenuationDistance',
    'attenuationColor',
    'specularIntensity',
    'specularIntensityMap',
    'specularColor',
    'specularColorMap',
    'anisotropy',
    'clearcoat',
    'iridescence',
    'dispersion',
    'sheen',
    'transmission',
].distinct()


objParams.meshPhysicalMaterial = [...objParams.meshStandardMaterial,
    /**
     * @default { 'STANDARD': '', 'PHYSICAL': '' }
     */
    'defines',
    /**
     * @default 'MeshPhysicalMaterial'
     */
    'type',
    /**
     * @default 0
     */
    'anisotropyRotation',
    /**
     * @default null
     */
    'anisotropyMap',
    /**
     * @default null
     */
    'clearcoatMap',
    /**
     * @default 0
     */
    'clearcoatRoughness',
    /**
     * @default null
     */
    'clearcoatRoughnessMap',
    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    'clearcoatNormalScale',
    /**
     * @default null
     */
    'clearcoatNormalMap',
    /**
     * @default 1.5
     */
    'ior',
    /**
     * @default 0.5
     */
    'reflectivity',
    /**
     * @default null
     */
    'iridescenceMap',
    /**
     * @default 1.3
     */
    'iridescenceIOR',
    /**
     * @default [100, 400].distinct()
     */
    'iridescenceThicknessRange',
    /**
     * @default null
     */
    'iridescenceThicknessMap',
    /**
     * @default Color( 0x000000 )
     */
    'sheenColor',
    /**
     * @default null
     */
    'sheenColorMap',
    /**
     * @default 1.0
     */
    'sheenRoughness',
    /**
     * @default null
     */
    'sheenRoughnessMap',
    /**
     * @default null
     */
    'transmissionMap',
    /**
     * @default 0.01
     */
    'thickness',
    /**
     * @default null
     */
    'thicknessMap',
    /**
     * @default 0.0
     */
    'attenuationDistance',
    /**
     * @default Color( 1, 1, 1 )
     */
    'attenuationColor',
    /**
     * @default 1.0
     */
    'specularIntensity',
    /**
     * @default null
     */
    'specularIntensityMap',
    /**
     * @default Color(1, 1, 1)
     */
    'specularColor',
    /**
     * @default null
     */
    'specularColorMap',
    /**
     * @default 0
     */
    'anisotropy',
    /**
     * @default 0
     */
    'clearcoat',
    /**
     * @default 0
     */
    'getiridescence',
    /**
     * @default 0
     */
    'dispersion',
    /**
     * @default 0.0
     */
    'getsheen',
    /**
     * @default 0
     */
    'transmission',
].distinct()

export type MeshPhysicalMaterialProps = MaterialNode<MeshPhysicalMaterial, MeshPhysicalMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshPhysicalMaterial: Partial<MeshPhysicalMaterialParameters>
    }
}

defaults.meshPhysicalMaterial = {}
