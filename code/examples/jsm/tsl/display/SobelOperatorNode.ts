// 1. Imports
import SobelOperatorNode from 'three/examples/jsm/tsl/display/SobelOperatorNode.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			sobelOperatorNode: SobelOperatorNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		sobelOperatorNode: typeof sobelOperatorNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		sobelOperatorNode: typeof _sobelOperatorNode
	}
}

// 3. Constructor and Object Property Arrays
const sobelOperatorNode = ([
	'textureNode',
] as const).distinct()
consParams.sobelOperatorNode = sobelOperatorNode

// Inherits from TempNode and adds its own specific properties
const _sobelOperatorNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'textureNode',
	'updateBeforeType',
] as const).distinct()
objProps.sobelOperatorNode = _sobelOperatorNode


// 4. Props Type Definition
export type SobelOperatorNodeProps = Node<SobelOperatorNode, typeof SobelOperatorNode, {
	textureNode: TextureNode
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		sobelOperatorNode: Partial<{
			textureNode: TextureNode
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.sobelOperatorNode = {}