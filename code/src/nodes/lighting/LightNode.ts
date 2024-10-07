import { Light } from 'three/src/lights/Light.js'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import LightNode, { LightNodeScope } from 'three/src/nodes/lighting/LightNode.js'
import { Three } from '../../../lib/3/three'
export { LightNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import '../core/NodeAttribute'

declare module '../../../lib/3/three'
{
    interface Three {
        LightNode: typeof LightNode
    }
}

Three.LightNode = LightNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightNode: LightNodeProps<Light>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lightNode: typeof lightNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lightNode: typeof _lightNode
    }
}


const lightNode = ([
    'scope',
    'light',
] as const).distinct()
consParams.lightNode = lightNode

const _lightNode = ([...objProps.node,
    'scope',
    'light',
] as const).distinct()
objProps.lightNode = _lightNode

export type LightNodeProps<T extends Light> = Node<LightNode, typeof LightNode, { scope?: LightNodeScope, light?: Light | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightNode: { scope?: LightNodeScope, light?: Light | null }
    }
}

defaults.lightNode = {}

