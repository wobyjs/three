import {
    LightProbe,
} from 'three'
import { LightProbeHelper } from 'three/examples/jsm/helpers/LightProbeHelper.js'

import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three' {
    interface Three {
        LightProbeHelper: typeof LightProbeHelper
    }
}

Three.LightProbeHelper = LightProbeHelper

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            LightProbeHelper: LightProbeHelperProps
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        LightProbeHelper: typeof _LightProbeHelper
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        LightProbeHelper: typeof _LightProbeHelper
    }
}

const _LightProbeHelper = ([...objProps.mesh,
    'lightProbe',
    'size'
] as const).distinct()

consParams.LightProbeHelper = _LightProbeHelper


objProps.LightProbeHelper = _LightProbeHelper

export type LightProbeHelperProps = {
    lightProbe: LightProbe
    size?: number
}

declare module '../../../lib/3/defaults' {
    interface defaults {
        LightProbeHelper: Partial<LightProbeHelperProps>
    }
}

defaults.LightProbeHelper = {
    size: 1
}

