import { Node } from '../../../three-types'
import { LightProbe } from 'three/src/lights/LightProbe.js'
import { LightProbeHelper } from 'three/examples/jsm/helpers/LightProbeHelper.js'
export * from 'three/examples/jsm/helpers/LightProbeHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LightProbeHelper: typeof LightProbeHelper
    }
}

Three.LightProbeHelper = LightProbeHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightProbeHelper: LightProbeHelperProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lightProbeHelper: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        lightProbeHelper: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\LightProbeHelper.d.ts

consParams.lightProbeHelper = [
    'lightProbe',
    'size',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\helpers\LightProbeHelper.d.ts    

objParams.lightProbeHelper = [...objParams.mesh,
    'lightProbe',
    'size',
].distinct()

export type LightProbeHelperProps = Node<LightProbeHelper, typeof LightProbeHelper, { lightProbe: LightProbe; size: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightProbeHelper: Partial<{ lightProbe: LightProbe; size: number; }>
    }
}

defaults.lightProbeHelper = {}

