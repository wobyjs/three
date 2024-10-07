import { Light } from 'three/src/lights/Light.js'
import { Node } from '../../../three-types'
import IESSpotLightNode from 'three/src/nodes/lighting/IESSpotLightNode.js'
import { Three } from '../../../lib/3/three'
export { IESSpotLightNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './PointLightNode'

declare module '../../../lib/3/three'
{
    interface Three {
        IESSpotLightNode: typeof IESSpotLightNode
    }
}

Three.IESSpotLightNode = IESSpotLightNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            iesSpotLightNode: IESSpotLightNodeProps<Light>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        iesSpotLightNode: typeof iesSpotLightNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        iesSpotLightNode: typeof _iesSpotLightNode
    }
}


const iesSpotLightNode = ([
] as const).distinct()
consParams.iesSpotLightNode = iesSpotLightNode

const _iesSpotLightNode = ([...objProps.pointLightNode,
] as const).distinct()
objProps.iesSpotLightNode = _iesSpotLightNode

export type IESSpotLightNodeProps<T extends Light> = Node<IESSpotLightNode, typeof IESSpotLightNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        iesSpotLightNode: {}
    }
}

defaults.iesSpotLightNode = {}


