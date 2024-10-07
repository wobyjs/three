import { Light } from 'three/src/lights/Light.js'
import { Node } from '../../../three-types'
import DirectionalLightNode from 'three/src/nodes/lighting/DirectionalLightNode.js'
import { Three } from '../../../lib/3/three'
export { DirectionalLightNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './AnalyticLightNode'
import { DirectionalLight } from 'three/src/lights/DirectionalLight'

declare module '../../../lib/3/three'
{
    interface Three {
        DirectionalLightNode: typeof DirectionalLightNode
    }
}

Three.DirectionalLightNode = DirectionalLightNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            directionalLightNode: DirectionalLightNodeProps<Light>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        directionalLightNode: typeof directionalLightNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        directionalLightNode: typeof _directionalLightNode
    }
}


const directionalLightNode = ([
    'light',
] as const).distinct()
consParams.directionalLightNode = directionalLightNode

const _directionalLightNode = ([...objProps.analyticLightNode,
] as const).distinct()
objProps.directionalLightNode = _directionalLightNode

export type DirectionalLightNodeProps<T extends Light> = Node<DirectionalLightNode, typeof DirectionalLightNode, { light?: DirectionalLight | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        directionalLightNode: { light?: DirectionalLight | null }
    }
}

defaults.directionalLightNode = {}


