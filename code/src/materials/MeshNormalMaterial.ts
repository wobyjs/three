import { MaterialNode } from './MaterialNode'
import { MeshNormalMaterial, MeshNormalMaterialParameters } from 'three/src/materials/MeshNormalMaterial.js'
export { MeshNormalMaterial } from 'three/src/materials/MeshNormalMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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

declare module '../../lib/3/objProps' {
    interface objProps {
        meshNormalMaterial: typeof _meshNormalMaterial
        meshNormalMaterialParameters: typeof _meshNormalMaterialParameters
    }
}



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



const _meshNormalMaterialParameters = ([...objProps.materialParameters,
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
] as const).distinct()
objProps.meshNormalMaterialParameters = _meshNormalMaterialParameters

const _meshNormalMaterial = ([...objProps.material,
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
] as const).distinct()
objProps.meshNormalMaterial = _meshNormalMaterial

export type MeshNormalMaterialProps = MaterialNode<MeshNormalMaterial, MeshNormalMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        meshNormalMaterial: Partial<MeshNormalMaterialParameters>
    }
}

defaults.meshNormalMaterial = {}
