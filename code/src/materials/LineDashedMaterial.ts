import { MaterialNode } from './MaterialNode'
import { LineDashedMaterial, LineDashedMaterialParameters } from 'three/src/materials/LineDashedMaterial.js'
export { LineDashedMaterial } from 'three/src/materials/LineDashedMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objParams } from '../../lib/3/objParams'
import { defaults } from '../../lib/3/defaults'
import './LineBasicMaterial'
import '../../lib/three/extensions'
import { WrapAsString } from '../../three-types'

declare module '../../lib/3/three'
{
    interface Three {
        LineDashedMaterial: typeof LineDashedMaterial
    }
}

Three.LineDashedMaterial = LineDashedMaterial

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lineDashedMaterial: LineDashedMaterialProps,
        }
    }
}

declare module '../../lib/3/consParams' {
    interface consParams {
        lineDashedMaterial: WrapAsString<LineDashedMaterialParameters>
        lineDashedMaterialParameters: WrapAsString<LineDashedMaterialParameters>
    }
}

declare module '../../lib/3/objParams' {
    interface objParams {
        lineDashedMaterial: string[]
        lineDashedMaterialParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineDashedMaterial.d.ts

consParams.lineDashedMaterialParameters = (['scale',
    'dashSize',
    'gapSize',
] as const).toObject()


consParams.lineDashedMaterial = {
    ...consParams.lineBasicMaterial,
    ...([
        'scale',
        'dashSize',
        'gapSize',
    ] as const).toObject(),
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\src\materials\LineDashedMaterial.d.ts    

objParams.lineDashedMaterialParameters = [...objParams.lineBasicMaterialParameters,
    'scale',
    'dashSize',
    'gapSize',
].distinct()


objParams.lineDashedMaterial = [...objParams.lineBasicMaterial,
    /**
     * @default 'LineDashedMaterial'
     */
    'type',
    /**
     * @default 1
     */
    'scale',
    /**
     * @default 1
     */
    'dashSize',
    /**
     * @default 1
     */
    'gapSize',
].distinct()

export type LineDashedMaterialProps = MaterialNode<LineDashedMaterial, LineDashedMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        lineDashedMaterial: Partial<LineDashedMaterialParameters>
    }
}

defaults.lineDashedMaterial = {}
