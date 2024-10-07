import { CSM } from 'three/examples/jsm/csm/CSM.js'
import { Node } from '../../../three-types'
import { CSMHelper } from 'three/examples/jsm/csm/CSMHelper.js'
export * from 'three/examples/jsm/csm/CSMHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        CSMHelper: typeof CSMHelper
    }
}

Three.CSMHelper = CSMHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            csmHelper: CSMHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        csmHelper: typeof csmHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        csmHelper: typeof _csmHelper
    }
}



const csmHelper = ([
    'csm',
] as const).distinct()
consParams.csmHelper = csmHelper



const _csmHelper = ([...objProps.group,
    'csm',
    'displayFrustum',
    'displayPlanes',
    'displayShadowBounds',
    'frustumLines',
    'cascadeLines',
    'cascadePlanes',
    'shadowLines',
] as const).distinct()
objProps.csmHelper = _csmHelper

export type CSMHelperProps<TCSM extends CSM = CSM> = Node<CSMHelper<TCSM>, typeof CSMHelper<TCSM>, { csm: TCSM; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        csmHelper: Partial<{ csm: CSM }>
    }
}

defaults.csmHelper = {}

