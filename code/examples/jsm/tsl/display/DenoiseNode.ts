// 1. Imports
import DenoiseNode from 'three/examples/jsm/tsl/display/DenoiseNode.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			denoiseNode: DenoiseNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		denoiseNode: typeof denoiseNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		denoiseNode: typeof _denoiseNode
	}
}

// 3. Constructor and Object Property Arrays
const denoiseNode = ([
	'textureNode',
	'depthNode',
	'normalNode',
	'camera',
] as const).distinct()
consParams.denoiseNode = denoiseNode

// Inherits from TempNode and adds its own specific properties
const _denoiseNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'textureNode',
	'depthNode',
	'normalNode',
	'noiseNode',
	'lumaPhi',
	'depthPhi',
	'normalPhi',
	'radius',
	'index',
	'updateBeforeType',
] as const).distinct()
objProps.denoiseNode = _denoiseNode


// 4. Props Type Definition
export type DenoiseNodeProps = Node<DenoiseNode, typeof DenoiseNode, {
	textureNode: TextureNode
	depthNode: TSLNode
	normalNode?: TSLNode
	camera: Camera
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		denoiseNode: Partial<{
			textureNode: TextureNode
			depthNode: TSLNode
			normalNode?: TSLNode
			camera: Camera
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.denoiseNode = {}