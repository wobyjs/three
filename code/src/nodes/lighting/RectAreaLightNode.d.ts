import { Light } from 'three/src/lights/Light.js'
import { Node } from '../../../three-types'
import RectAreaLightNode from 'three/src/nodes/lighting/RectAreaLightNode.js'
import { Three } from '../../../lib/3/three'
export { RectAreaLightNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './AnalyticLightNode'

declare module '../../../lib/3/three'
{
    interface Three {
        RectAreaLightNode: typeof RectAreaLightNode
    }
}

Three.RectAreaLightNode = RectAreaLightNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            rectAreaLightNode: RectAreaLightNodeProps<Light>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        rectAreaLightNode: typeof rectAreaLightNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        rectAreaLightNode: typeof _rectAreaLightNode
    }
}


const rectAreaLightNode = ([
    "light"
] as const).distinct()
consParams.rectAreaLightNode = rectAreaLightNode

const _rectAreaLightNode = ([...objProps.analyticLightNode,
    'halfHeight',
    'halfWidth',
] as const).distinct()
objProps.rectAreaLightNode = _rectAreaLightNode

export type RectAreaLightNodeProps<T extends Light> = Node<RectAreaLightNode, typeof RectAreaLightNode, { light?: RectAreaLight | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        rectAreaLightNode: { light?: RectAreaLight | null }
    }
}

defaults.rectAreaLightNode = {}


