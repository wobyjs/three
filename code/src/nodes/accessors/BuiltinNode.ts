import { Node } from '../../../three-types'
import BuiltinNode, { builtin } from 'three/src/nodes/accessors/BuiltinNode.js'
export * from 'three/src/nodes/accessors/BuiltinNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		BuiltinNode: typeof BuiltinNode,
		builtin: typeof builtin
	}
}

// Make the class and the factory function available under the Three namespace.
Three.BuiltinNode = BuiltinNode
Three.builtin = builtin

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			builtinNode: BuiltinNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		builtinNode: typeof builtinNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		builtinNode: typeof _builtinNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single 'name' argument.
const builtinNode = ([
	'name',
] as const).distinct()
consParams.builtinNode = builtinNode

// ---[ Object Properties ]---

// Inherits from Node and adds its own properties.
// Assumes `objProps.node` has been defined.
const _builtinNode = ([
	...(objProps.node || []),
	'name',
	'isBuiltinNode',
	'generate',
] as const).distinct()
objProps.builtinNode = _builtinNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type BuiltinNodeArgs = {
	name: string
}

// The final Props type for the JSX component.
export type BuiltinNodeProps = Node<BuiltinNode, typeof BuiltinNode, BuiltinNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		builtinNode: Partial<BuiltinNodeArgs>
	}
}

// 'name' is a required argument, so the defaults object is empty.
defaults.builtinNode = {}