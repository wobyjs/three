// 1. Imports
import DotScreenNode from 'three/examples/jsm/tsl/display/DotScreenNode.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			dotScreenNode: DotScreenNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		dotScreenNode: typeof dotScreenNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		dotScreenNode: typeof _dotScreenNode
	}
}

// 3. Constructor and Object Property Arrays
const dotScreenNode = ([
	'inputNode',
	'angle',
	'scale',
] as const).distinct()
consParams.dotScreenNode = dotScreenNode

// Inherits from TempNode and adds its own specific properties
const _dotScreenNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'inputNode',
	'angle',
	'scale',
] as const).distinct()
objProps.dotScreenNode = _dotScreenNode


// 4. Props Type Definition
export type DotScreenNodeProps = Node<DotScreenNode, typeof DotScreenNode, {
	inputNode: TSLNode
	angle?: number
	scale?: number
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		dotScreenNode: Partial<{
			inputNode: TSLNode
			angle?: number
			scale?: number
		}>
	}
}

// Set default values based on the constructor's signature.
defaults.dotScreenNode = {
	angle: 1.57,
	scale: 1,
}