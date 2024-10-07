import { Node } from '../../../three-types'
import PropertyNode from 'three/src/nodes/core/PropertyNode.js'
export { PropertyNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        PropertyNode: typeof PropertyNode
    }
}

Three.PropertyNode = PropertyNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            propertyNode: PropertyNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        propertyNode: typeof propertyNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        propertyNode: typeof _propertyNode
    }
}



const propertyNode = ([
    'nodeType',
    'name',
    'varying',
] as const).distinct()
consParams.propertyNode = propertyNode



const _propertyNode = ([...objProps.node,
    'name',
    'varying',
] as const).distinct()
objProps.propertyNode = _propertyNode

export type PropertyNodeProps = Node<PropertyNode, typeof PropertyNode, { nodeType?: string | null; name?: string | null; varying?: boolean; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        propertyNode: Partial<{ nodeType?: string | null; name?: string | null; varying?: boolean; }>
    }
}

defaults.propertyNode = {}

