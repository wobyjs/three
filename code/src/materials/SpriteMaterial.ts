import { MaterialNode } from './MaterialNode'
import { SpriteMaterial, SpriteMaterialParameters } from 'three/src/materials/SpriteMaterial.js'
export { SpriteMaterial } from 'three/src/materials/SpriteMaterial.js'
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
        SpriteMaterial: typeof SpriteMaterial
    }
}

Three.SpriteMaterial = SpriteMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            spriteMaterial: SpriteMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        spriteMaterial: WrapAsString<SpriteMaterialParameters>
        spriteMaterialParameters: WrapAsString<SpriteMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        spriteMaterial: string[]
        spriteMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\SpriteMaterial.d.ts

consParams.spriteMaterialParameters = {
    ...consParams.materialParameters,
    ...(['color',
        'map',
        'alphaMap',
        'rotation',
        'sizeAttenuation',
        'fog',
    ] as const).toObject()
}


consParams.spriteMaterial = { ...consParams.spriteMaterialParameters }

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\SpriteMaterial.d.ts    

objParams.spriteMaterialParameters = [...objParams.materialParameters,
    'color',
    'map',
    'alphaMap',
    'rotation',
    'sizeAttenuation',
    'fog',
].distinct()


objParams.spriteMaterial = [...objParams.material,
    /**
     * @default 'SpriteMaterial'
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
    'alphaMap',
    /**
     * @default 0
     */
    'rotation',
    /**
     * @default true
     */
    'sizeAttenuation',
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

export type SpriteMaterialProps = MaterialNode<SpriteMaterial, SpriteMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        spriteMaterial: Partial<SpriteMaterialParameters>
    }
}

defaults.spriteMaterial = {}