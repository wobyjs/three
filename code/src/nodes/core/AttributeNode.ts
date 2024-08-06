import { Node } from '../../../three-types'
import { Node as ENode } from 'three/src/nodes/Nodes.js'
import AttributeNode from 'three/src/nodes/core/AttributeNode.js'
export { AttributeNode }
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objParams } from '../../../lib/3/objParams'
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
        attributeNode: string[]
    }
}

declare module '../../../lib/3/objParams' {
    interface objParams {
        attributeNode: string[]
    }
}

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AttributeNode.d.ts

consParams.attributeNode = [
    'attributeName',
    'nodeType',
].distinct()

//D:\Developments\FengShui\meta-suyen\packages\woby-three\node_modules\@types\three\examples\jsm\nodes\core\AttributeNode.d.ts    

objParams.attributeNode = [...objParams.node,
].distinct()

export type AttributeNodeProps = Node<AttributeNode, typeof AttributeNode, { attributeName: string; nodeType?: string | null; defaultNode?: ENode | null; }>

declare module '../../../lib/3/defaults' {
    interface defaults {
        attributeNode: Partial<{ attributeName: string; nodeType?: string | null; defaultNode?: ENode | null; }>
    }
}

defaults.attributeNode = {}

