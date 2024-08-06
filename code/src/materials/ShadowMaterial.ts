import { MaterialNode } from './MaterialNode'
import { ShadowMaterial, ShadowMaterialParameters } from 'three/src/materials/ShadowMaterial.js'
export { ShadowMaterial } from 'three/src/materials/ShadowMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
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

declare module '../../lib/3/objParams' {
    interface objParams {
        shadowMaterial: string[]
        shadowMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\ShadowMaterial.d.ts

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

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\ShadowMaterial.d.ts    

objParams.shadowMaterialParameters = [...objParams.materialParameters,
    'color',
    'fog',
].distinct()


objParams.shadowMaterial = [...objParams.material,
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
].distinct()

export type ShadowMaterialProps = MaterialNode<ShadowMaterial, ShadowMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        shadowMaterial: Partial<ShadowMaterialParameters>
    }
}

defaults.shadowMaterial = {}