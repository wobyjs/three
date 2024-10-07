import { Node } from '../../../three-types'
import ReferenceBaseNode from 'three/src/nodes/accessors/ReferenceBaseNode.js'
export { ReferenceBaseNode }
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            referenceBaseNode: ReferenceBaseNodeProps<unknown>,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        referenceBaseNode: typeof referenceBaseNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        referenceBaseNode: typeof _referenceBaseNode
    }
}


const referenceBaseNode = ([
    'property',
    'uniformType',
    'object',
    'count',
] as const).distinct()
consParams.referenceBaseNode = referenceBaseNode



const _referenceBaseNode = ([...objProps.node,
    'property',
    'uniformType',
    'object',
    'count',
    'properties',
    'reference',
    'node',
] as const).distinct()
objProps.referenceBaseNode = _referenceBaseNode

export type ReferenceBaseNodeProps<T> = Node<ReferenceBaseNode<T>, typeof ReferenceBaseNode, { property: string, uniformType: string, object?: T | null, count?: number | null }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        referenceBaseNode: Partial<{ property: string, uniformType: string, object?: any | null, count?: number | null }>
    }
}

defaults.referenceBaseNode = {}

