// 1. Imports
import GaussianBlurNode from 'three/examples/jsm/tsl/display/GaussianBlurNode.js'
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
			gaussianBlurNode: GaussianBlurNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		gaussianBlurNode: typeof gaussianBlurNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		gaussianBlurNode: typeof _gaussianBlurNode
	}
}

// 3. Constructor and Object Property Arrays
const gaussianBlurNode = ([
	'textureNode',
	'directionNode',
	'sigma',
] as const).distinct()
consParams.gaussianBlurNode = gaussianBlurNode

// Inherits from TempNode and adds its own specific properties
const _gaussianBlurNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'textureNode',
	'directionNode',
	'sigma',
	'updateBeforeType',
	'resolution',
	'premultipliedAlpha',
] as const).distinct()
objProps.gaussianBlurNode = _gaussianBlurNode


// 4. Props Type Definition
export type GaussianBlurNodeProps = Node<GaussianBlurNode, typeof GaussianBlurNode, {
	textureNode: TextureNode
	directionNode?: TSLNode
	sigma?: number
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		gaussianBlurNode: Partial<{
			textureNode: TextureNode
			directionNode?: TSLNode
			sigma?: number
		}>
	}
}

// Set default values based on the constructor's signature.
defaults.gaussianBlurNode = {
	directionNode: null,
	sigma: 2,
}