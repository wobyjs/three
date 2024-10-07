import { MaterialNode } from './MaterialNode'
import { MeshStandardMaterial, MeshStandardMaterialParameters } from 'three/src/materials/MeshStandardMaterial.js'
export { MeshStandardMaterial } from 'three/src/materials/MeshStandardMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Material'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        MeshStandardMaterial: typeof MeshStandardMaterial
    }
}

Three.MeshStandardMaterial = MeshStandardMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshStandardMaterial: MeshStandardMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        meshStandardMaterial: WrapAsString<MeshStandardMaterialParameters>
        meshStandardMaterialParameters: WrapAsString<MeshStandardMaterialParameters>
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        meshStandardMaterial: typeof _meshStandardMaterial
        meshStandardMaterialParameters: typeof _meshStandardMaterialParameters
    }
}



consParams.meshStandardMaterialParameters = (['color',
    'roughness',
    'metalness',
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
    'roughnessMap',
    'metalnessMap',
    'alphaMap',
    'envMap',
    'envMapRotation',
    'envMapIntensity',
    'wireframe',
    'wireframeLinewidth',
    'fog',
    'flatShading',
] as const).toObject()


consParams.meshStandardMaterial = { ...consParams.meshStandardMaterialParameters }



const _meshStandardMaterialParameters = ([...objProps.materialParameters,
    'color',
    'roughness',
    'metalness',
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
    'roughnessMap',
    'metalnessMap',
    'alphaMap',
    'envMap',
    'envMapRotation',
    'envMapIntensity',
    'wireframe',
    'wireframeLinewidth',
    'fog',
    'flatShading',
] as const).distinct()
objProps.meshStandardMaterialParameters = _meshStandardMaterialParameters


const _meshStandardMaterial = ([...objProps.material,
    /**
     * @default 'MeshStandardMaterial'
     */
    'type',
    /**
     * @default { 'STANDARD': '' }
     */
    'defines',
    /**
     * @default new THREE.Color( 0xffffff )
     */
    'color',
    /**
     * @default 1
     */
    'roughness',
    /**
     * @default 0
     */
    'metalness',
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
    'aoMap',
    /**
     * @default 1
     */
    'aoMapIntensity',
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
     * @default null
     */
    'roughnessMap',
    /**
     * @default null
     */
    'metalnessMap',
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
     * @default 1
     */
    'envMapIntensity',
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
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    'flatShading',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    'fog',
] as const).distinct()
objProps.meshStandardMaterial = _meshStandardMaterial

export type MeshStandardMaterialProps = MaterialNode<MeshStandardMaterial, MeshStandardMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshStandardMaterial: Partial<MeshStandardMaterialParameters>
    }
}

defaults.meshStandardMaterial = {}
