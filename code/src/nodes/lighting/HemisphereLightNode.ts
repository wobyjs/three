import { HemisphereLight } from 'three/src/lights/HemisphereLight.js'
import { Node } from '../../../three-types'
import HemisphereLightNode from 'three/src/nodes/lighting/HemisphereLightNode.js'
export { HemisphereLightNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        HemisphereLightNode: typeof HemisphereLightNode
    }
}

Three.HemisphereLightNode = HemisphereLightNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            hemisphereLightNode: HemisphereLightNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        hemisphereLightNode: typeof hemisphereLightNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        hemisphereLightNode: typeof _hemisphereLightNode
    }
}



const hemisphereLightNode = ([
    'light',
] as const).distinct()
consParams.hemisphereLightNode = hemisphereLightNode



const _hemisphereLightNode = ([...objProps.analyticLightNode,
    'lightPositionNode',
    'lightDirectionNode',
    'groundColorNode',
] as const).distinct()
objProps.hemisphereLightNode = _hemisphereLightNode

export type HemisphereLightNodeProps = Node<HemisphereLightNode, typeof HemisphereLightNode, { light?: HemisphereLight | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        hemisphereLightNode: { light?: HemisphereLight | null; }
    }
}

defaults.hemisphereLightNode = {}

