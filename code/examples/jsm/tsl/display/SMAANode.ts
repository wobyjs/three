// 1. Imports
import { SMAANode } from 'three/examples/jsm/tsl/display/SMAANode.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			smaaNode: SMAANodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		smaaNode: typeof smaaNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		smaaNode: typeof _smaaNode
	}
}

// 3. Constructor and Object Property Arrays
const smaaNode = ([
	'textureNode',
] as const).distinct()
consParams.smaaNode = smaaNode

// Inherits from TempNode and adds its own specific properties
const _smaaNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'textureNode',
	'updateBeforeType',
] as const).distinct()
objProps.smaaNode = _smaaNode


// 4. Props Type Definition
export type SMAANodeProps = Node<SMAANode, typeof SMAANode, {
	textureNode: TextureNode
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		smaaNode: Partial<{
			textureNode: TextureNode
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.smaaNode = {}