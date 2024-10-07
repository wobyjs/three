import { MaterialNode } from './MaterialNode'
import { LineDashedMaterial, LineDashedMaterialParameters } from 'three/src/materials/LineDashedMaterial.js'
export { LineDashedMaterial } from 'three/src/materials/LineDashedMaterial.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
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

declare module '../../lib/3/objProps' {
    interface objProps {
        lineDashedMaterial: typeof _lineDashedMaterial
        lineDashedMaterialParameters: typeof _lineDashedMaterialParameters
    }
}



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



const _lineDashedMaterialParameters = ([...objProps.lineBasicMaterialParameters,
    'scale',
    'dashSize',
    'gapSize',
] as const).distinct()
objProps.lineDashedMaterialParameters = _lineDashedMaterialParameters


const _lineDashedMaterial = ([...objProps.lineBasicMaterial,
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
] as const).distinct()
objProps.lineDashedMaterial = _lineDashedMaterial

export type LineDashedMaterialProps = MaterialNode<LineDashedMaterial, LineDashedMaterialParameters>

declare module '../../lib/3/defaults' {
    interface defaults {
        lineDashedMaterial: Partial<LineDashedMaterialParameters>
    }
}

defaults.lineDashedMaterial = {}
