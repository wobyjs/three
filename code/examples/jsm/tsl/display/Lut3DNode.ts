// 1. Imports
import Lut3DNode from 'three/examples/jsm/tsl/display/Lut3DNode.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			lut3DNode: Lut3DNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		lut3DNode: typeof lut3DNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		lut3DNode: typeof _lut3DNode
	}
}

// 3. Constructor and Object Property Arrays
const lut3DNode = ([
	'inputNode',
	'lutNode',
	'size',
	'intensityNode',
] as const).distinct()
consParams.lut3DNode = lut3DNode

// Inherits from TempNode and adds its own specific properties
const _lut3DNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'inputNode',
	'lutNode',
	'size',
	'intensityNode',
] as const).distinct()
objProps.lut3DNode = _lut3DNode


// 4. Props Type Definition
export type Lut3DNodeProps = Node<Lut3DNode, typeof Lut3DNode, {
	inputNode: TSLNode
	lutNode: TextureNode
	size: number
	intensityNode: TSLNode
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		lut3DNode: Partial<{
			inputNode: TSLNode
			lutNode: TextureNode
			size: number
			intensityNode: TSLNode
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.lut3DNode = {}