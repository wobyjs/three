import { Node } from '../../../three-types'
import FlipNode from 'three/src/nodes/utils/FlipNode.js'
export * from 'three/src/nodes/utils/FlipNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		FlipNode: typeof FlipNode
	}
}

Three.FlipNode = FlipNode

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			flipNode: FlipNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		flipNode: typeof flipNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		flipNode: typeof _flipNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a sourceNode and a components string.
const flipNode = ([
	'sourceNode',
	'components',
] as const).distinct()
consParams.flipNode = flipNode

// ---[ Object Properties ]---

// Inherits from TempNode and adds its own properties and methods.
// Assumes `objProps.tempNode` has been defined.
const _flipNode = ([
	...(objProps.tempNode || []),
	'sourceNode',
	'components',
	'getNodeType',
	'generate',
] as const).distinct()
objProps.flipNode = _flipNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type FlipNodeArgs = {
	sourceNode: TSLNode;
	components: string;
};

// The final Props type for the JSX component.
export type FlipNodeProps = Node<FlipNode, typeof FlipNode, FlipNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		flipNode: Partial<FlipNodeArgs>
	}
}

// Both constructor arguments are required, so the defaults object is empty.
defaults.flipNode = {}