import { MaterialNode } from './MaterialNode'
import { MeshBasicMaterial, MeshBasicMaterialParameters } from 'three/src/materials/MeshBasicMaterial.js'
export { MeshBasicMaterial } from 'three/src/materials/MeshBasicMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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

declare module '../../lib/3/objParams' {
    interface objParams {
        meshBasicMaterial: string[]
        meshBasicMaterialParameters: string[]
    }
}

consParams.meshBasicMaterial = { ...consParams.meshBasicMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\Materials.d.ts
//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\MeshBasicMaterial.d.ts
/**
 * parameters is an object with one or more properties defining the material's appearance.
 */

objParams.meshBasicMaterialParameters = [...objParams.materialParameters,
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
].distinct()


objParams.meshBasicMaterial = [...objParams.material,
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
].distinct()

export type MeshBasicMaterialProps = MaterialNode<MeshBasicMaterial, MeshBasicMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshBasicMaterial: Partial<MeshBasicMaterialParameters>
    }
}

defaults.meshBasicMaterial = {}
