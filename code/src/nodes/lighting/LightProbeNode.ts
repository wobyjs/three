import { Light } from 'three/src/lights/Light.js'
import { Node } from '../../../three-types'
import LightProbeNode from 'three/src/nodes/lighting/LightProbeNode.js'
import { Three } from '../../../lib/3/three'
export { LightProbeNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './AnalyticLightNode'
import { LightProbe } from '../../lights/LightProbe'

declare module '../../../lib/3/three'
{
    interface Three {
        LightProbeNode: typeof LightProbeNode
    }
}

Three.LightProbeNode = LightProbeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightProbeNode: LightProbeNodeProps<Light>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lightProbeNode: typeof lightProbeNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lightProbeNode: typeof _lightProbeNode
    }
}


const lightProbeNode = ([
    'light',
] as const).distinct()
consParams.lightProbeNode = lightProbeNode

const _lightProbeNode = ([...objProps.analyticLightNode,
    'lightProbe',
] as const).distinct()
objProps.lightProbeNode = _lightProbeNode

export type LightProbeNodeProps<T extends Light> = Node<LightProbeNode, typeof LightProbeNode, { light?: LightProbe | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightProbeNode: { light?: LightProbe | null }
    }
}

defaults.lightProbeNode = {}

