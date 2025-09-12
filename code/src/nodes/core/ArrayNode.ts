import { Node } from '../../../three-types'
import ArrayNode, { array } from 'three/src/nodes/core/ArrayNode.js'
export * from 'three/src/nodes/core/ArrayNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		ArrayNode: typeof ArrayNode,
		array: typeof array
	}
}

// Make the class and the factory function available under the Three namespace.
Three.ArrayNode = ArrayNode
Three.array = array

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			arrayNode: ArrayNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		arrayNode: typeof arrayNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		arrayNode: typeof _arrayNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor can take type/count or an array of values.
const arrayNode = ([
	'nodeType',
	'count',
	'values',
] as const).distinct()
consParams.arrayNode = arrayNode

// ---[ Object Properties ]---

// Inherits from TempNode and adds its own specific properties.
// Assumes `objProps.tempNode` has been defined.
const _arrayNode = ([
	...(objProps.tempNode || []),
	'count',
	'values',
	'isArrayNode',
	'getElementType',
	'generate',
] as const).distinct()
objProps.arrayNode = _arrayNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type ArrayNodeArgs = {
	nodeType?: string
	count?: number
	values?: TSLNode[]
}

// The final Props type for the JSX component.
export type ArrayNodeProps = Node<ArrayNode, typeof ArrayNode, ArrayNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		arrayNode: Partial<ArrayNodeArgs>
	}
}

defaults.arrayNode = {}