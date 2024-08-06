import { CSM } from 'three/examples/jsm/csm/CSM.js'
import { Node } from '../../../three-types'
import { CSMHelper } from 'three/examples/jsm/csm/CSMHelper.js'
export * from 'three/examples/jsm/csm/CSMHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        csmHelper: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        csmHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMHelper.d.ts

consParams.csmHelper = [
    'csm',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\csm\CSMHelper.d.ts    

objParams.csmHelper = [...objParams.group,
    'csm',
    'displayFrustum',
    'displayPlanes',
    'displayShadowBounds',
    'frustumLines',
    'cascadeLines',
    'cascadePlanes',
    'shadowLines',
].distinct()

export type CSMHelperProps<TCSM extends CSM = CSM> = Node<CSMHelper<TCSM>, typeof CSMHelper<TCSM>, { csm: TCSM; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        csmHelper: Partial<{ csm: CSM }>
    }
}

defaults.csmHelper = {}

