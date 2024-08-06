import { MaterialNode } from './MaterialNode'
import { LineBasicMaterial, LineBasicMaterialParameters } from 'three/src/materials/LineBasicMaterial'
export * from 'three/src/materials/LineBasicMaterial'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './Material'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        LineBasicMaterial: typeof LineBasicMaterial
    }
}

Three.LineBasicMaterial = LineBasicMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineBasicMaterial: LineBasicMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        lineBasicMaterial: WrapAsString<LineBasicMaterialParameters>
        lineBasicMaterialParameters: WrapAsString<LineBasicMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        lineBasicMaterial: string[]
        lineBasicMaterialParameters: string[]
    }
}


consParams.lineBasicMaterial = (['color',
    'fog',
    'linewidth',
    'linecap',
    'linejoin',
] as const).toObject() //as LineBasicMaterialParameters


objParams.lineBasicMaterial = [...objParams.material,
    /**
     * @default 'LineBasicMaterial'
     */
    'type',
    /**
     * @default 0xffffff
     */
    'color',
    /**
     * Whether the material is affected by fog. Default is true.
     * @default true
     */
    'fog',
    /**
     * @default 1
     */
    'linewidth',
    /**
     * @default 'round'
     */
    'linecap',
    /**
     * @default 'round'
     */
    'linejoin',
    /**
     * Sets the color of the lines using data from a {@link Texture}.
     */
    'map',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineBasicMaterial.d.ts

consParams.lineBasicMaterialParameters = {
    ...consParams.materialParameters,
    ...(['color',
        'fog',
        'linewidth',
        'linecap',
        'linejoin',
    ] as const).toObject()
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineBasicMaterial.d.ts    

objParams.lineBasicMaterialParameters = [...objParams.materialParameters,
    'color',
    'fog',
    'linewidth',
    'linecap',
    'linejoin',
].distinct()

export type LineBasicMaterialProps = MaterialNode<LineBasicMaterial, LineBasicMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        lineBasicMaterialParameters: Partial<LineBasicMaterialParameters>
    }
}

defaults.lineBasicMaterialParameters = {}
