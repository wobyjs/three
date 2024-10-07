import { Node } from '../../../three-types'
import ReferenceNode from 'three/src/nodes/accessors/ReferenceNode.js'
export { ReferenceNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            referenceNode: ReferenceNodeProps<unknown>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        referenceNode: typeof referenceNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        referenceNode: typeof _referenceNode
    }
}



const referenceNode = ([
    'property',
    'uniformType',
    'object',
    'count',
] as const).distinct()
consParams.referenceNode = referenceNode



const _referenceNode = ([...objProps.node,
    'property',
    'uniformType',
    'object',
    'count',
    'properties',
    'reference',
    'node',
] as const).distinct()
objProps.referenceNode = _referenceNode

export type ReferenceNodeProps<T> = Node<ReferenceNode<T>, typeof ReferenceNode, { property: string; uniformType: string; object?: T | null; count?: number | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        referenceNode: Partial<{ property: string; uniformType: string; object?: any | null; count?: number | null; }>
    }
}

defaults.referenceNode = {}

