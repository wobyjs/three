// 1. Imports
import RGBShiftNode from 'three/examples/jsm/tsl/display/RGBShiftNode.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			rgbShiftNode: RGBShiftNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		rgbShiftNode: typeof rgbShiftNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		rgbShiftNode: typeof _rgbShiftNode
	}
}

// 3. Constructor and Object Property Arrays
const rgbShiftNode = ([
	'textureNode',
	'amount',
	'angle',
] as const).distinct()
consParams.rgbShiftNode = rgbShiftNode

// Inherits from TempNode and adds its own specific properties
const _rgbShiftNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'textureNode',
	'amount',
	'angle',
] as const).distinct()
objProps.rgbShiftNode = _rgbShiftNode


// 4. Props Type Definition
export type RGBShiftNodeProps = Node<RGBShiftNode, typeof RGBShiftNode, {
	textureNode: TextureNode
	amount?: number
	angle?: number
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		rgbShiftNode: Partial<{
			textureNode: TextureNode
			amount?: number
			angle?: number
		}>
	}
}

// Set default values based on the constructor's signature.
defaults.rgbShiftNode = {
	amount: 0.005,
	angle: 0,
}