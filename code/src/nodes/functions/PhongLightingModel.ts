import { Node } from '../../../three-types'
import PhongLightingModel from 'three/src/nodes/functions/PhongLightingModel.js'
export { PhongLightingModel }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PhongLightingModel: typeof PhongLightingModel
    }
}

Three.PhongLightingModel = PhongLightingModel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            phongLightingModel: PhongLightingModelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        phongLightingModel: typeof phongLightingModel
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        phongLightingModel: typeof _phongLightingModel
    }
}



const phongLightingModel = ([
    'specular',
] as const).distinct()
consParams.phongLightingModel = phongLightingModel



const _phongLightingModel = ([...objProps.lightingModel,
    'specular',
] as const).distinct()
objProps.phongLightingModel = _phongLightingModel

export type PhongLightingModelProps = Node<PhongLightingModel, typeof PhongLightingModel, { specular?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        phongLightingModel: { specular?: boolean; }
    }
}

defaults.phongLightingModel = {}

