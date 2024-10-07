import { Node } from '../../../three-types'
import LightingNode from 'three/src/nodes/lighting/LightingNode.js'
export { LightingNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        LightingNode: typeof LightingNode
    }
}

Three.LightingNode = LightingNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            lightingNode: LightingNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        lightingNode: typeof lightingNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        lightingNode: typeof _lightingNode
    }
}



const lightingNode = ([
] as const).distinct()
consParams.lightingNode = lightingNode



const _lightingNode = ([...objProps.node,
] as const).distinct()
objProps.lightingNode = _lightingNode

export type LightingNodeProps = Node<LightingNode, typeof LightingNode, {}>

declare module '../../../lib/3/defaults' {
    interface defaults {
        lightingNode: {}
    }
}

defaults.lightingNode = {}

