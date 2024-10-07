import { MaterialNode } from './MaterialNode'
import { MeshPhongMaterial, MeshPhongMaterialParameters } from 'three/src/materials/MeshPhongMaterial.js'
export { MeshPhongMaterial } from 'three/src/materials/MeshPhongMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Material'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        MeshPhongMaterial: typeof MeshPhongMaterial
    }
}

Three.MeshPhongMaterial = MeshPhongMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshPhongMaterial: MeshPhongMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        meshPhongMaterial: WrapAsString<MeshPhongMaterialParameters>
        meshPhongMaterialParameters: WrapAsString<MeshPhongMaterialParameters>
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        meshPhongMaterial: typeof _meshPhongMaterial
        meshPhongMaterialParameters: typeof _meshPhongMaterialParameters
    }
}



consParams.meshPhongMaterialParameters = {
    ...consParams.materialParameters,
    /** geometry color in hexadecimal. Default is 0xffffff. */
    ...(['color',
        'specular',
        'shininess',
        'opacity',
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
        'flatShading',
    ] as const).toObject()
}


consParams.meshPhongMaterial = { ...consParams.meshPhongMaterialParameters }



const _meshPhongMaterialParameters = ([...objProps.materialParameters,
    /** geometry color in hexadecimal. Default is 0xffffff. */
    'color',
    'specular',
    'shininess',
    'opacity',
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
    'flatShading',
] as const).distinct()
objProps.meshPhongMaterialParameters = _meshPhongMaterialParameters


const _meshPhongMaterial = ([...objProps.material,
    /**
     * @default 'MeshNormalMaterial'
     */
    'type',
    /**
     * @default new THREE.Color( 0xffffff )
     */
    'color',
    /**
     * @default new THREE.Color( 0x111111 )
     */
    'specular',
    /**
     * @default 30
     */
    'shininess',
    /**
     * @default null
     */
    'map',
    /**
     * @default null
     */
    'lightMap',
    /**
     * @default null
     */
    'lightMapIntensity',
    /**
     * @default null
     */
    'aoMap',
    /**
     * @default null
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
     * Define whether the material is rendered with flat shading. Default is false.
     * @default false
     */
    'flatShading',
    /**
     * @deprecated Use {@link MeshStandardMaterial THREE.MeshStandardMaterial} instead.
     */
    'metal',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    'fog',
] as const).distinct()
objProps.meshPhongMaterial = _meshPhongMaterial

export type MeshPhongMaterialProps = MaterialNode<MeshPhongMaterial, MeshPhongMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshPhongMaterial: Partial<MeshPhongMaterialParameters>
    }
}

defaults.meshPhongMaterial = {}
