import { PointLight } from 'three/src/lights/PointLight.js'
import { Node } from '../../../three-types'
import PointLightNode from 'three/src/nodes/lighting/PointLightNode.js'
export { PointLightNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PointLightNode: typeof PointLightNode
    }
}

Three.PointLightNode = PointLightNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            pointLightNode: PointLightNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        pointLightNode: typeof pointLightNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        pointLightNode: typeof _pointLightNode
    }
}



const pointLightNode = ([
    'light',
] as const).distinct()
consParams.pointLightNode = pointLightNode



const _pointLightNode = ([...objProps.analyticLightNode,
    'cutoffDistanceNode',
    'decayExponentNode',
    'directionNode',
    'coneCosNode',
    'penumbraCosNode',
    'cutoffDistanceNode',
    'decayExponentNode',
] as const).distinct()
objProps.pointLightNode = _pointLightNode

export type PointLightNodeProps = Node<PointLightNode, typeof PointLightNode, { light?: PointLight | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        pointLightNode: { light?: PointLight | null; }
    }
}

defaults.pointLightNode = {}

