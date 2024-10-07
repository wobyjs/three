import { Node } from '../../../three-types'
import ShadowMaskModel from 'three/src/nodes/functions/ShadowMaskModel.js'
export { ShadowMaskModel }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        ShadowMaskModel: typeof ShadowMaskModel
    }
}

Three.ShadowMaskModel = ShadowMaskModel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            shadowMaskModel: ShadowMaskModelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        shadowMaskModel: typeof shadowMaskModel
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        shadowMaskModel: typeof _shadowMaskModel
    }
}



const shadowMaskModel = ([
] as const).distinct()
consParams.shadowMaskModel = shadowMaskModel



const _shadowMaskModel = ([...objProps.lightingModel,
    'shadowNode',
] as const).distinct()
objProps.shadowMaskModel = _shadowMaskModel

export type ShadowMaskModelProps = Node<ShadowMaskModel, typeof ShadowMaskModel, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        shadowMaskModel: {}
    }
}

defaults.shadowMaskModel = {}

