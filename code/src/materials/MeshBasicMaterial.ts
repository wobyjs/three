import { MaterialNode } from './MaterialNode'
import { MeshBasicMaterial, MeshBasicMaterialParameters } from 'three/src/materials/MeshBasicMaterial.js'
export { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Material'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        MeshBasicMaterial: typeof MeshBasicMaterial
    }
}

Three.MeshBasicMaterial = MeshBasicMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshBasicMaterial: MeshBasicMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        meshBasicMaterial: WrapAsString<MeshBasicMaterialParameters>
        meshBasicMaterialParameters: WrapAsString<MeshBasicMaterialParameters>
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        meshBasicMaterial: typeof _meshBasicMaterial
        meshBasicMaterialParameters: typeof _meshBasicMaterialParameters
    }
}

consParams.meshBasicMaterial = { ...consParams.meshBasicMaterialParameters }



/**
 * parameters is an object with one or more properties defining the material's appearance.
 */

const _meshBasicMaterialParameters = ([...objProps.materialParameters,
    'color',
    'opacity',
    'map',
    'lightMap',
    'lightMapIntensity',
    'aoMap',
    'aoMapIntensity',
    'specularMap',
    'alphaMap',
    'fog',
    'envMap',
    'envMapRotation',
    'combine',
    'reflectivity',
    'refractionRatio',
    'wireframe',
    'wireframeLinewidth',
    'wireframeLinecap',
    'wireframeLinejoin',
] as const).distinct()
objProps.meshBasicMaterialParameters = _meshBasicMaterialParameters


const _meshBasicMaterial = ([...objProps.material,
    /**
     * @default 'MeshBasicMaterial'
     */
    'type',
    /**
     * @default new THREE.Color( 0xffffff )
     */
    'color',
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
] as const).distinct()
objProps.meshBasicMaterial = _meshBasicMaterial

export type MeshBasicMaterialProps = MaterialNode<MeshBasicMaterial, MeshBasicMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshBasicMaterial: Partial<MeshBasicMaterialParameters>
    }
}

defaults.meshBasicMaterial = {}
