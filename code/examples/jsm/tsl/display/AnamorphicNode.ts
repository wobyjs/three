// 1. Imports
import AnamorphicNode from 'three/examples/jsm/tsl/display/AnamorphicNode.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import TSLNode from 'three/src/nodes/core/Node.js' // Aliased to avoid name clash
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			anamorphicNode: AnamorphicNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		anamorphicNode: typeof anamorphicNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		anamorphicNode: typeof _anamorphicNode
	}
}

// 3. Constructor and Object Property Arrays
const anamorphicNode = ([
	'textureNode',
	'tresholdNode',
	'scaleNode',
	'samples',
] as const).distinct()
consParams.anamorphicNode = anamorphicNode

// Inherits from TempNode and adds its own specific properties
const _anamorphicNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'textureNode',
	'tresholdNode',
	'scaleNode',
	'colorNode',
	'samples',
	'resolution',
	'updateBeforeType',
] as const).distinct()
objProps.anamorphicNode = _anamorphicNode


// 4. Props Type Definition
export type AnamorphicNodeProps = Node<AnamorphicNode, typeof AnamorphicNode, {
	textureNode: TextureNode
	tresholdNode: TSLNode
	scaleNode: TSLNode
	samples: number
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		anamorphicNode: Partial<{
			textureNode: TextureNode
			tresholdNode: TSLNode
			scaleNode: TSLNode
			samples: number
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.anamorphicNode = {}