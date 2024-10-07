import { MaterialNode } from './MaterialNode'
import { ShadowMaterial, ShadowMaterialParameters } from 'three/src/materials/ShadowMaterial.js'
export { ShadowMaterial } from 'three/src/materials/ShadowMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

import './Material'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        ShadowMaterial: typeof ShadowMaterial
    }
}

Three.ShadowMaterial = ShadowMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shadowMaterial: ShadowMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        shadowMaterial: WrapAsString<ShadowMaterialParameters>
        shadowMaterialParameters: WrapAsString<ShadowMaterialParameters>
    }
}

declare module '../../lib/3/objProps' {
    interface objProps {
        shadowMaterial: typeof _shadowMaterial
        shadowMaterialParameters: typeof _shadowMaterialParameters
    }
}



consParams.shadowMaterialParameters = {
    ...consParams.shaderMaterialParameters,
    ...(['color',
        'fog',
    ] as const).toObject()
}


consParams.shadowMaterial = {
    ...consParams.shadowMaterialParameters,
    ...([            /**
             * Read-only flag to check if a given object is of type {@link ShadowMaterial}.
             * @remarks This is a _constant_ value
             * @defaultValue `true`
             */
        /**
         * @default 'ShadowMaterial'
         */
        'type',
        /**
         * @default new THREE.Color( 0x000000 )
         */
        'color',
        /**
         * @default true
         */
        'transparent',
        /**
         * Whether the material is affected by fog. Default is true.
         * @default fog
         */
        'fog',
    ] as const).toObject()
}



const _shadowMaterialParameters = ([...objProps.materialParameters,
    'color',
    'fog',
] as const).distinct()
objProps.shadowMaterialParameters = _shadowMaterialParameters


const _shadowMaterial = ([...objProps.material,
    /**
     * @default 'ShadowMaterial'
     */
    'type',
    /**
     * @default new THREE.Color( 0x000000 )
     */
    'color',
    /**
     * @default true
     */
    'transparent',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default fog
     */
    'fog',
] as const).distinct()
objProps.shadowMaterial = _shadowMaterial

export type ShadowMaterialProps = MaterialNode<ShadowMaterial, ShadowMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        shadowMaterial: Partial<ShadowMaterialParameters>
    }
}

defaults.shadowMaterial = {}