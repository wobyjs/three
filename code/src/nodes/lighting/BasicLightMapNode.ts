import { Light } from 'three/src/lights/Light.js'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import { Node } from '../../../three-types'
import BasicLightMapNode from 'three/src/nodes/lighting/BasicLightMapNode.js'
import { Three } from '../../../lib/3/three'
export { BasicLightMapNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './LightingNode'

declare module '../../../lib/3/three'
{
    interface Three {
        BasicLightMapNode: typeof BasicLightMapNode
    }
}

Three.BasicLightMapNode = BasicLightMapNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            basicLightMapNode: BasicLightMapNodeProps<Light>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        basicLightMapNode: typeof basicLightMapNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        basicLightMapNode: typeof _basicLightMapNode
    }
}


const basicLightMapNode = ([
    'lightMapNode',
] as const).distinct()
consParams.basicLightMapNode = basicLightMapNode

const _basicLightMapNode = ([...objProps.lightingNode,
] as const).distinct()
objProps.basicLightMapNode = _basicLightMapNode

export type BasicLightMapNodeProps<T extends Light> = Node<BasicLightMapNode, typeof BasicLightMapNode, { lightMapNode?: ENode | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        basicLightMapNode: { lightMapNode?: ENode | null }
    }
}

defaults.basicLightMapNode = {}


