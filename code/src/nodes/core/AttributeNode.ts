import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import AttributeNode from 'three/src/nodes/core/AttributeNode.js'
export { AttributeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
    interface Three {
        AttributeNode: typeof AttributeNode
    }
}

Three.AttributeNode = AttributeNode

declare module 'woby' {
    namespace JSX {
        interface IntrinsicElements {
            attributeNode: AttributeNodeProps,
        }
    }
}

declare module '../../../lib/3/consParams' {
    interface consParams {
        attributeNode: typeof attributeNode
    }
}

declare module '../../../lib/3/objProps' {
    interface objProps {
        attributeNode: typeof _attributeNode
    }
}



const attributeNode = ([
    'attributeName',
    'nodeType',
] as const).distinct()
consParams.attributeNode = attributeNode



const _attributeNode = ([...objProps.node,
] as const).distinct()
objProps.attributeNode = _attributeNode

export type AttributeNodeProps = Node<AttributeNode, typeof AttributeNode, { attributeName: string; nodeType?: string | null; defaultNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        attributeNode: Partial<{ attributeName: string; nodeType?: string | null; defaultNode?: ENode | null; }>
    }
}

defaults.attributeNode = {}

