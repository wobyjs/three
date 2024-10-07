import { Node } from '../../../three-types'
import { LightProbe } from 'three/src/lights/LightProbe.js'
import { LightProbeHelper } from 'three/examples/jsm/helpers/LightProbeHelper.js'
export * from 'three/examples/jsm/helpers/LightProbeHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
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
        lightProbeHelper: typeof lightProbeHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lightProbeHelper: typeof _lightProbeHelper
    }
}



const lightProbeHelper = ([
    'lightProbe',
    'size',
] as const).distinct()
consParams.lightProbeHelper = lightProbeHelper



const _lightProbeHelper = ([...objProps.mesh,
    'lightProbe',
    'size',
] as const).distinct()
objProps.lightProbeHelper = _lightProbeHelper

export type LightProbeHelperProps = Node<LightProbeHelper, typeof LightProbeHelper, { lightProbe: LightProbe; size: number; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightProbeHelper: Partial<{ lightProbe: LightProbe; size: number; }>
    }
}

defaults.lightProbeHelper = {}

