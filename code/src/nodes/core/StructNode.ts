import { Node } from '../../../three-types'
import StructNode, { struct } from 'three/src/nodes/core/StructNode.js'
export * from 'three/src/nodes/core/StructNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import StructTypeNode from 'three/src/nodes/core/StructTypeNode.js'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		StructNode: typeof StructNode,
		struct: typeof struct
	}
}

// Make the class and the factory function available under the Three namespace.
Three.StructNode = StructNode
Three.struct = struct

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			structNode: StructNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		structNode: typeof structNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		structNode: typeof _structNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a layout node and the member values.
const structNode = ([
	'structLayoutNode',
	'values',
] as const).distinct()
consParams.structNode = structNode

// ---[ Object Properties ]---

// Inherits from Node and adds its own specific properties and methods.
// Assumes `objProps.node` has been defined.
const _structNode = ([
	...(objProps.node || []),
	'structLayoutNode',
	'values',
	'isStructNode',
	'getNodeType',
	'getMemberType',
	'generate',
] as const).distinct()
objProps.structNode = _structNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type StructNodeArgs = {
	structLayoutNode: StructTypeNode
	values: Record<string, TSLNode> | null
}

// The final Props type for the JSX component.
export type StructNodeProps = Node<StructNode, typeof StructNode, StructNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		structNode: Partial<StructNodeArgs>
	}
}

// The constructor arguments are essential, so the defaults object is empty.
defaults.structNode = {}