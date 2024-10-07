import { MaterialNode } from '../../../src/materials/MaterialNode'
import { MeshGouraudMaterial } from 'three/examples/jsm/materials/MeshGouraudMaterial.js'
export * from 'three/examples/jsm/materials/MeshGouraudMaterial.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { WrapAsString } from '../../../three-types'
import { ShaderMaterialParameters } from 'three/src/materials/ShaderMaterial'

declare module '../../../lib/3/three'
{
    interface Three {
        MeshGouraudMaterial: typeof MeshGouraudMaterial
    }
}

Three.MeshGouraudMaterial = MeshGouraudMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            meshGouraudMaterial: MeshGouraudMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        meshGouraudMaterial: WrapAsString<ShaderMaterialParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        meshGouraudMaterial: typeof _meshGouraudMaterial
    }
}


/**
 * MeshGouraudMaterial
 *
 * Lambert illumination model with Gouraud (per-vertex) shading
 */

consParams.meshGouraudMaterial = { ...consParams.shaderMaterialParameters }


/**
 * MeshGouraudMaterial
 *
 * Lambert illumination model with Gouraud (per-vertex) shading
 */

const _meshGouraudMaterial = ([...objProps.shaderMaterial,
    'isMeshGouraudMaterial',
] as const).distinct()
objProps.meshGouraudMaterial = _meshGouraudMaterial

export type MeshGouraudMaterialProps = MaterialNode<MeshGouraudMaterial, typeof MeshGouraudMaterial>

declare module '../../../lib/3/defaults' {
    interface defaults {
        meshGouraudMaterial: Partial<MeshGouraudMaterial>
    }
}

defaults.meshGouraudMaterial = {}
