// 1. Imports
import DepthOfFieldNode from 'three/examples/jsm/tsl/display/DepthOfFieldNode.js'
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
			depthOfFieldNode: DepthOfFieldNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		depthOfFieldNode: typeof depthOfFieldNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		depthOfFieldNode: typeof _depthOfFieldNode
	}
}

// 3. Constructor and Object Property Arrays
const depthOfFieldNode = ([
	'textureNode',
	'viewZNode',
	'focusNode',
	'apertureNode',
	'maxblurNode',
] as const).distinct()
consParams.depthOfFieldNode = depthOfFieldNode

// Inherits from TempNode and adds its own specific properties
const _depthOfFieldNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'textureNode',
	'viewZNode',
	'focusNode',
	'apertureNode',
	'maxblurNode',
	'updateBeforeType',
] as const).distinct()
objProps.depthOfFieldNode = _depthOfFieldNode


// 4. Props Type Definition
export type DepthOfFieldNodeProps = Node<DepthOfFieldNode, typeof DepthOfFieldNode, {
	textureNode: TextureNode
	viewZNode: TSLNode
	focus?: number | TSLNode
	aperture?: number | TSLNode
	maxblur?: number | TSLNode
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		depthOfFieldNode: Partial<{
			textureNode: TextureNode
			viewZNode: TSLNode
			focus?: number | TSLNode
			aperture?: number | TSLNode
			maxblur?: number | TSLNode
		}>
	}
}

// Set default values based on the 'dof' helper function's signature.
defaults.depthOfFieldNode = {
	focus: 1,
	aperture: 0.025,
	maxblur: 1,
}