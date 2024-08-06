import { CSMParameters, CSM } from 'three/examples/jsm/csm/CSM.js'
export * from 'three/examples/jsm/csm/CSM.js'
import { Node, WrapAsString } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        csm: string[]
        csmParameters: WrapAsString<CSMParameters>
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        csm: string[]
        csmParameters: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSM.d.ts

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


consParams.csm = [
    'data',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSM.d.ts

objParams.csmParameters = [
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
].distinct()

objParams.csm = [
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
].distinct()

export type CSMProps = Node<CSM, typeof CSM, { data: CSMParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cSM: Partial<{ data: CSMParameters; }>
    }
}

defaults.cSM = {}

