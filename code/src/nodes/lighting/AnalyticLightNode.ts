import { Light } from 'three/src/lights/Light.js'
import { Node } from '../../../three-types'
import { Three } from '../../../lib/3/three'
import AnalyticLightNode from 'three/src/nodes/lighting/AnalyticLightNode.js'
export { AnalyticLightNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'


declare module '../../../lib/3/three'
{
    interface Three {
        AnalyticLightNode: typeof AnalyticLightNode
    }
}

Three.AnalyticLightNode = AnalyticLightNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            analyticLightNode: AnalyticLightNodeProps<Light>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        analyticLightNode: typeof analyticLightNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        analyticLightNode: typeof _analyticLightNode
    }
}



const analyticLightNode = ([
    'light',
] as const).distinct()
consParams.analyticLightNode = analyticLightNode



const _analyticLightNode = ([...objProps.lightingNode,
    'light',
] as const).distinct()
objProps.analyticLightNode = _analyticLightNode

export type AnalyticLightNodeProps<T extends Light> = Node<AnalyticLightNode<T>, typeof AnalyticLightNode<T>, { light?: T | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        analyticLightNode: { light?: Light }
    }
}

defaults.analyticLightNode = {}

