import { Node, WrapAsString } from '../../../three-types'
import { CSMFrustum, CSMFrustumParameters } from 'three/examples/jsm/csm/CSMFrustum.js'
export default CSMFrustum
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../../../lib/three/extensions'

declare module '../../../lib/3/three'
{
    interface Three {
        CSMFrustum: typeof CSMFrustum
    }
}

Three.CSMFrustum = CSMFrustum

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            csmFrustum: CSMFrustumProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        csmFrustum: typeof csmFrustum
        csmFrustumVerticies: typeof csmFrustumVerticies
        csmFrustumParameters: WrapAsString<CSMFrustumParameters>
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        csmFrustum: typeof _csmFrustum
        csmFrustumVerticies: typeof _csmFrustumVerticies
        csmFrustumParameters: typeof _csmFrustumParameters
    }
}



const csmFrustumVerticies = ([
    'near',
    'far',
] as const).distinct()
consParams.csmFrustumVerticies = csmFrustumVerticies


consParams.csmFrustumParameters = ([
    'projectionMatrix',
    'maxFar',
] as const).toObject()


const csmFrustum = ([
    'data',
] as const).distinct()
consParams.csmFrustum = csmFrustum



const _csmFrustumVerticies = ([
    'near',
    'far',
] as const).distinct()
objProps.csmFrustumVerticies = _csmFrustumVerticies

const _csmFrustumParameters = ([
    'projectionMatrix',
    'maxFar',
] as const).distinct()
objProps.csmFrustumParameters = _csmFrustumParameters


const _csmFrustum = ([
    'vertices',
] as const).distinct()
objProps.csmFrustum = _csmFrustum

export type CSMFrustumProps = Node<CSMFrustum, typeof CSMFrustum, { data?: CSMFrustumParameters; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        cSMFrustum: Partial<{ data?: CSMFrustumParameters; }>
    }
}

defaults.cSMFrustum = {}

