import { Node } from '../../../three-types'
import LoopNode, { Loop, Continue, Break, loop } from 'three/src/nodes/utils/LoopNode.js'
export * from 'three/src/nodes/utils/LoopNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		LoopNode: typeof LoopNode,

		// Factory and helper functions
		Loop: typeof Loop,
		Continue: typeof Continue,
		Break: typeof Break,
		loop: typeof loop // Deprecated
	}
}

// Make the class and all factory functions available under the Three namespace.
Three.LoopNode = LoopNode
Three.Loop = Loop
Three.Continue = Continue
Three.Break = Break
Three.loop = loop

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			loopNode: LoopNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		loopNode: typeof loopNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		loopNode: typeof _loopNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single 'params' array argument.
const loopNode = ([
	'params',
] as const).distinct()
consParams.loopNode = loopNode

// ---[ Object Properties ]---

// Inherits from Node and adds its own properties and methods.
// Assumes `objProps.node` has been defined.
const _loopNode = ([
	...(objProps.node || []),
	'params',
	'getVarName',
	'getProperties',
	'getNodeType',
	'setup',
	'generate',
] as const).distinct()
objProps.loopNode = _loopNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type LoopNodeArgs = {
	params?: any[]; // The params can be a mix of nodes, numbers, and config objects.
};

// The final Props type for the JSX component.
export type LoopNodeProps = Node<LoopNode, typeof LoopNode, LoopNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		loopNode: Partial<LoopNodeArgs>
	}
}

defaults.loopNode = {}