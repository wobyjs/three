import { Node } from '../../../three-types'
import { PackedPhongMaterial } from 'three/examples/jsm/utils/PackedPhongMaterial.js'
export * from 'three/examples/jsm/utils/PackedPhongMaterial.js'

import { Three } from '../../../../lib/3/index'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
    interface Three {
        PackedPhongMaterial: typeof PackedPhongMaterial
    }
}

Three.PackedPhongMaterial = PackedPhongMaterial

declare global {
    namespace JSX {
        interface IntrinsicElements {
            packedPhongMaterial: PackedPhongMaterialProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        packedPhongMaterial: typeof packedPhongMaterial
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        packedPhongMaterial: typeof _packedPhongMaterial
    }
}



const packedPhongMaterial = ([
    'parameters',
] as const).distinct()
consParams.packedPhongMaterial = packedPhongMaterial



const _packedPhongMaterial = ([...objProps.meshPhongMaterialParameters,
] as const).distinct()
objProps.packedPhongMaterial = _packedPhongMaterial




/**
 * `PackedPhongMaterial` inherited from THREE.MeshPhongMaterial
 *
 * @param {Object} parameters
 */

const _packedPhongMaterial = ([...objProps.meshPhongMaterial,
] as const).distinct()
objProps.packedPhongMaterial = _packedPhongMaterial

export type PackedPhongMaterialProps = Node<PackedPhongMaterial, typeof PackedPhongMaterial, { parameters: MeshPhongMaterialParameters }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        packedPhongMaterial: Partial<{ parameters: MeshPhongMaterialParameters }>
    }
}

defaults.packedPhongMaterial = {}


declare module '../../../lib/3/defaults' {
    interface defaults {
        packedPhongMaterial: Partial<{ parameters: MeshPhongMaterialParameters }>
    }
}

defaults.packedPhongMaterial = { parameters: MeshPhongMaterialParameters }
