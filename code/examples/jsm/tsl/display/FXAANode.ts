// 1. Imports
import FXAANode from 'three/examples/jsm/tsl/display/FXAANode.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			fxaaNode: FXAANodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		fxaaNode: typeof fxaaNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		fxaaNode: typeof _fxaaNode
	}
}

// 3. Constructor and Object Property Arrays
const fxaaNode = ([
	'textureNode',
] as const).distinct()
consParams.fxaaNode = fxaaNode

// Inherits from TempNode and adds its own specific properties
const _fxaaNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'textureNode',
	'updateBeforeType',
] as const).distinct()
objProps.fxaaNode = _fxaaNode


// 4. Props Type Definition
export type FXAANodeProps = Node<FXAANode, typeof FXAANode, {
	textureNode: TextureNode
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		fxaaNode: Partial<{
			textureNode: TextureNode
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.fxaaNode = {}