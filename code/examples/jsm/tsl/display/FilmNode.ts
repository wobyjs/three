// 1. Imports
import FilmNode from 'three/examples/jsm/tsl/display/FilmNode.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			filmNode: FilmNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		filmNode: typeof filmNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		filmNode: typeof _filmNode
	}
}

// 3. Constructor and Object Property Arrays
const filmNode = ([
	'inputNode',
	'intensityNode',
	'uvNode',
] as const).distinct()
consParams.filmNode = filmNode

// Inherits from TempNode and adds its own specific properties
const _filmNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'inputNode',
	'intensityNode',
	'uvNode',
] as const).distinct()
objProps.filmNode = _filmNode


// 4. Props Type Definition
export type FilmNodeProps = Node<FilmNode, typeof FilmNode, {
	inputNode: TSLNode
	intensityNode?: TSLNode
	uvNode?: TSLNode
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		filmNode: Partial<{
			inputNode: TSLNode
			intensityNode?: TSLNode
			uvNode?: TSLNode
		}>
	}
}

// Set default values based on the constructor's signature.
defaults.filmNode = {
	intensityNode: null,
	uvNode: null,
}