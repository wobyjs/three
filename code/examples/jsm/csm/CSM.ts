import { CSMParameters, CSM } from 'three/examples/jsm/csm/CSM.js'
export * from 'three/examples/jsm/csm/CSM.js'
import { Node, WrapAsString } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        CSM: typeof CSM
    }
}

Three.CSM = CSM

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            csm: CSMProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        csm: typeof csm
        csmParameters: WrapAsString<CSMParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        csm: typeof _csm
        csmParameters: typeof _csmParameters
    }
}



consParams.csmParameters = ([
    'camera',
    'parent',
    'cascades',
    'maxFar',
    'mode',
    'shadowMapSize',
    'shadowBias',
    'lightDirection',
    'lightIntensity',
    'lightNear',
    'lightFar',
    'lightMargin',
    'customSplitsCallback',
] as const).toObject()


const csm = ([
    'data',
] as const).distinct()
consParams.csm = csm



const _csmParameters = ([
    'camera',
    'parent',
    'cascades',
    'maxFar',
    'mode',
    'shadowMapSize',
    'shadowBias',
    'lightDirection',
    'lightIntensity',
    'lightNear',
    'lightFar',
    'lightMargin',
] as const).distinct()
objProps.csmParameters = _csmParameters

const _csm = ([
    'camera',
    'parent',
    'cascades',
    'maxFar',
    'mode',
    'shadowMapSize',
    'shadowBias',
    'lightDirection',
    'lightIntensity',
    'lightNear',
    'lightFar',
    'lightMargin',
    'customSplitsCallback',
    'fade',
    'mainFrustum',
    'frustums',
    'breaks',
    'lights',
    'shaders',
] as const).distinct()
objProps.csm = _csm

export type CSMProps = Node<CSM, typeof CSM, { data: CSMParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cSM: Partial<{ data: CSMParameters; }>
    }
}

defaults.cSM = {}

