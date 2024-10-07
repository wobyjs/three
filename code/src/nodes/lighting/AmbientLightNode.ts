import { Light } from 'three/src/lights/Light.js'
import { Node } from '../../../three-types'
import AmbientLightNode from 'three/src/nodes/lighting/AmbientLightNode.js'
import { Three } from '../../../lib/3/three'
export { AmbientLightNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { AmbientLight } from '../../lights/AmbientLight'
import './AnalyticLightNode'

declare module '../../../lib/3/three'
{
    interface Three {
        AmbientLightNode: typeof AmbientLightNode
    }
}

Three.AmbientLightNode = AmbientLightNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            ambientLightNode: AmbientLightNodeProps<Light>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        ambientLightNode: typeof ambientLightNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        ambientLightNode: typeof _ambientLightNode
    }
}



const ambientLightNode = ([
    'light',
] as const).distinct()
consParams.ambientLightNode = ambientLightNode



const _ambientLightNode = ([...objProps.analyticLightNode,
] as const).distinct()
objProps.ambientLightNode = _ambientLightNode

export type AmbientLightNodeProps<T extends Light> = Node<AmbientLightNode, typeof AmbientLightNode, { light?: AmbientLight | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        ambientLightNode: { light?: AmbientLight | null }
    }
}

defaults.ambientLightNode = {}


