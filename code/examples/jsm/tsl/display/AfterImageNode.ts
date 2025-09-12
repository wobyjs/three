// 1. Imports
import AfterImageNode from 'three/examples/jsm/tsl/display/AfterImageNode.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import { Node } from '../../../../three-types' // Assuming this path is correct for your project
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			afterImageNode: AfterImageNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		afterImageNode: typeof afterImageNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		afterImageNode: typeof _afterImageNode
	}
}

// 3. Constructor and Object Property Arrays
const afterImageNode = ([
	'textureNode',
	'damp',
] as const).distinct()
consParams.afterImageNode = afterImageNode

// Assuming 'tempNode' is the correct base type in your objProps hierarchy
const _afterImageNode = ([
	...objProps.tempNode,
	'textureNode',
	'textureNodeOld',
	'damp',
	'updateBeforeType',
] as const).distinct()
objProps.afterImageNode = _afterImageNode


// 4. Props Type Definition
export type AfterImageNodeProps = Node<AfterImageNode, typeof AfterImageNode, {
	textureNode: TextureNode
	damp?: number
}>

// 5. Defaults (Corrected)
declare module '../../../../lib/3/defaults' {
	interface defaults {
		afterImageNode: Partial<{
			textureNode: TextureNode
			damp?: number
		}>
	}
}

// The 'damp' property is now set to its default value from the constructor.
defaults.afterImageNode = { damp: 0.96 }