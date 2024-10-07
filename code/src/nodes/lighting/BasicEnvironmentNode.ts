import { Light } from 'three/src/lights/Light.js'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import BasicEnvironmentNode from 'three/src/nodes/lighting/BasicEnvironmentNode.js'
import { Three } from '../../../lib/3/three'
export { BasicEnvironmentNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './LightingNode'

declare module '../../../lib/3/three'
{
    interface Three {
        BasicEnvironmentNode: typeof BasicEnvironmentNode
    }
}

Three.BasicEnvironmentNode = BasicEnvironmentNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            basicEnvironmentNode: BasicEnvironmentNodeProps<Light>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        basicEnvironmentNode: typeof basicEnvironmentNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        basicEnvironmentNode: typeof _basicEnvironmentNode
    }
}


const basicEnvironmentNode = ([
    'envNode',
] as const).distinct()
consParams.basicEnvironmentNode = basicEnvironmentNode

const _basicEnvironmentNode = ([...objProps.lightingNode,
    'envNode',
] as const).distinct()
objProps.basicEnvironmentNode = _basicEnvironmentNode

export type BasicEnvironmentNodeProps<T extends Light> = Node<BasicEnvironmentNode, typeof BasicEnvironmentNode, { envNode?: ENode | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        basicEnvironmentNode: { envNode?: ENode | null }
    }
}

defaults.basicEnvironmentNode = {}



