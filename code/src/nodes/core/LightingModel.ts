import { Node } from '../../../three-types'
import LightingModel from 'three/src/nodes/core/LightingModel.js'
export { LightingModel }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LightingModel: typeof LightingModel
    }
}

Three.LightingModel = LightingModel

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightingModel: LightingModelProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lightingModel: typeof lightingModel
        lightingModelReflectedLight: typeof lightingModelReflectedLight
        lightingModelDirectInput: typeof lightingModelDirectInput
        lightingModelIndirectInput: typeof lightingModelIndirectInput
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lightingModel: typeof _lightingModel
        lightingModelReflectedLight: typeof _lightingModelReflectedLight
        lightingModelDirectInput: typeof _lightingModelDirectInput
        lightingModelIndirectInput: typeof _lightingModelIndirectInput
    }
}



const lightingModelReflectedLight = ([
    'directDiffuse',
    'directSpecular',
    'indirectDiffuse',
    'indirectSpecular',
] as const).distinct()
consParams.lightingModelReflectedLight = lightingModelReflectedLight


const lightingModelDirectInput = ([
    'lightDirection',
    'lightColor',
    'reflectedLight',
    'shadowMask',
] as const).distinct()
consParams.lightingModelDirectInput = lightingModelDirectInput


const lightingModelIndirectInput = ([
    'radiance',
    'irradiance',
    'iblIrradiance',
    'ambientOcclusion',
    'reflectedLight',
    'backdrop',
    'backdropAlpha',
    'outgoingLight',
] as const).distinct()
consParams.lightingModelIndirectInput = lightingModelIndirectInput


const lightingModel = ([
] as const).distinct()
consParams.lightingModel = lightingModel



const _lightingModelReflectedLight = ([
    'directDiffuse',
    'directSpecular',
    'indirectDiffuse',
    'indirectSpecular',
] as const).distinct()
objProps.lightingModelReflectedLight = _lightingModelReflectedLight


const _lightingModelDirectInput = ([
    'lightDirection',
    'lightColor',
    'reflectedLight',
    'shadowMask',
] as const).distinct()
objProps.lightingModelDirectInput = _lightingModelDirectInput


const _lightingModelIndirectInput = ([
    'radiance',
    'irradiance',
    'iblIrradiance',
    'ambientOcclusion',
    'reflectedLight',
    'backdrop',
    'backdropAlpha',
    'outgoingLight',
] as const).distinct()
objProps.lightingModelIndirectInput = _lightingModelIndirectInput


const _lightingModel = ([
] as const).distinct()
objProps.lightingModel = _lightingModel

export type LightingModelProps = Node<LightingModel, typeof LightingModel, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightingModel: {}
    }
}

defaults.lightingModel = {}

