import { MaterialNode } from './MaterialNode'
import { MeshLambertMaterial, MeshLambertMaterialParameters } from 'three/src/materials/MeshLambertMaterial.js'
export { MeshLambertMaterial } from 'three/src/materials/MeshLambertMaterial.js'
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
        MeshLambertMaterial: typeof MeshLambertMaterial
    }
}

Three.MeshLambertMaterial = MeshLambertMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshLambertMaterial: MeshLambertMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        meshLambertMaterial: WrapAsString<MeshLambertMaterialParameters>
        meshLambertMaterialParameters: WrapAsString<MeshLambertMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        meshLambertMaterial: string[]
        meshLambertMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshLambertMaterial.d.ts

consParams.meshLambertMaterialParameters = {
    ...consParams.materialParameters,
    ...(['bumpMap',
        'bumpScale',
        'color',
        'displacementMap',
        'displacementScale',
        'displacementBias',
        'emissive',
        'emissiveIntensity',
        'emissiveMap',
        'flatShading',
        'map',
        'lightMap',
        'lightMapIntensity',
        'normalMap',
        'normalScale',
        'aoMap',
        'aoMapIntensity',
        'specularMap',
        'alphaMap',
        'envMap',
        'envMapRotation',
        'combine',
        'reflectivity',
        'refractionRatio',
        'wireframe',
        'wireframeLinewidth',
        'wireframeLinecap',
        'wireframeLinejoin',
        'fog',
    ] as const).toObject()
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshLambertMaterial.d.ts    

objParams.meshLambertMaterialParameters = [...objParams.materialParameters,
    'bumpMap',
    'bumpScale',
    'color',
    'displacementMap',
    'displacementScale',
    'displacementBias',
    'emissive',
    'emissiveIntensity',
    'emissiveMap',
    'flatShading',
    'map',
    'lightMap',
    'lightMapIntensity',
    'normalMap',
    'normalScale',
    'aoMap',
    'aoMapIntensity',
    'specularMap',
    'alphaMap',
    'envMap',
    'envMapRotation',
    'combine',
    'reflectivity',
    'refractionRatio',
    'wireframe',
    'wireframeLinewidth',
    'wireframeLinecap',
    'wireframeLinejoin',
    'fog',
].distinct()


objParams.meshLambertMaterial = [...objParams.material,
    /**
     * @default 'MeshLambertMaterial'
     */
    'type',
    /**
     * @default new THREE.Color( 0xffffff )
     */
    'color',
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
     * @default new THREE.Color( 0x000000 )
     */
    'emissive',
    /**
     * @default 1
     */
    'emissiveIntensity',
    /**
     * @default null
     */
    'emissiveMap',
    /**
     * @default false
     */
    'flatShading',
    /**
     * @default null
     */
    'map',
    /**
     * @default null
     */
    'lightMap',
    /**
     * @default 1
     */
    'lightMapIntensity',
    /**
     * @default null
     */
    'normalMap',
    'normalMapType',
    /**
     * @default new THREE.Vector2( 1, 1 )
     */
    'normalScale',
    /**
     * @default null
     */
    'aoMap',
    /**
     * @default 1
     */
    'aoMapIntensity',
    /**
     * @default null
     */
    'specularMap',
    /**
     * @default null
     */
    'alphaMap',
    /**
     * @default null
     */
    'envMap',
    /**
     * The rotation of the environment map in radians. Default is `(0,0,0)`.
     */
    'envMapRotation',
    /**
     * @default THREE.MultiplyOperation
     */
    'combine',
    /**
     * @default 1
     */
    'reflectivity',
    /**
     * @default 0.98
     */
    'refractionRatio',
    /**
     * @default false
     */
    'wireframe',
    /**
     * @default 1
     */
    'wireframeLinewidth',
    /**
     * @default 'round'
     */
    'wireframeLinecap',
    /**
     * @default 'round'
     */
    'wireframeLinejoin',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    'fog',
].distinct()

consParams.meshLambertMaterial = { ...consParams.meshLambertMaterialParameters }

export type MeshLambertMaterialProps = MaterialNode<MeshLambertMaterial, MeshLambertMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshLambertMaterial: Partial<MeshLambertMaterialParameters>
    }
}

defaults.meshLambertMaterial = {}
