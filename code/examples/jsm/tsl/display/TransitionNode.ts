// 1. Imports
import TransitionNode from 'three/examples/jsm/tsl/display/TransitionNode.js'
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
			transitionNode: TransitionNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		transitionNode: typeof transitionNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		transitionNode: typeof _transitionNode
	}
}

// 3. Constructor and Object Property Arrays
const transitionNode = ([
	'textureNodeA',
	'textureNodeB',
	'mixTextureNode',
	'mixRatioNode',
	'thresholdNode',
	'useTextureNode',
] as const).distinct()
consParams.transitionNode = transitionNode

// Inherits from TempNode and adds its own specific properties
const _transitionNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'textureNodeA',
	'textureNodeB',
	'mixTextureNode',
	'mixRatioNode',
	'thresholdNode',
	'useTextureNode',
] as const).distinct()
objProps.transitionNode = _transitionNode


// 4. Props Type Definition
export type TransitionNodeProps = Node<TransitionNode, typeof TransitionNode, {
	textureNodeA: TextureNode
	textureNodeB: TextureNode
	mixTextureNode: TextureNode
	mixRatioNode: TSLNode
	thresholdNode: TSLNode
	useTextureNode: TSLNode
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		transitionNode: Partial<{
			textureNodeA: TextureNode
			textureNodeB: TextureNode
			mixTextureNode: TextureNode
			mixRatioNode: TSLNode
			thresholdNode: TSLNode
			useTextureNode: TSLNode
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.transitionNode = {}