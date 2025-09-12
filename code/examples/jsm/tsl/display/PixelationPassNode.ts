// 1. Imports
import PixelationPassNode from 'three/examples/jsm/tsl/display/PixelationPassNode.js'
import TextureNode from 'three/src/nodes/accessors/TextureNode.js'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations for PixelationPassNode
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			pixelationPassNode: PixelationPassNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		pixelationPassNode: typeof pixelationPassNode
		// Also add the internal node for completeness, even if not directly used in JSX
		pixelationNode: typeof _internal_pixelationNode_params
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		pixelationPassNode: typeof _pixelationPassNode
		// Also add the internal node for completeness
		pixelationNode: typeof _internal_pixelationNode_props
	}
}

// 3. Constructor and Object Property Arrays

// --- For PixelationPassNode (public) ---
const pixelationPassNode = ([
	'scene',
	'camera',
	'pixelSize',
	'normalEdgeStrength',
	'depthEdgeStrength',
] as const).distinct()
consParams.pixelationPassNode = pixelationPassNode

const _pixelationPassNode = ([
	...objProps.passNode, // <-- Inherits from PassNode
	'pixelSize',
	'normalEdgeStrength',
	'depthEdgeStrength',
	'isPixelationPassNode',
] as const).distinct()
objProps.pixelationPassNode = _pixelationPassNode


// --- For PixelationNode (internal) ---
const _internal_pixelationNode_params = ([
	'textureNode',
	'depthNode',
	'normalNode',
	'pixelSize',
	'normalEdgeStrength',
	'depthEdgeStrength',
] as const).distinct()
consParams.pixelationNode = _internal_pixelationNode_params

const _internal_pixelationNode_props = ([
	...objProps.tempNode, // <-- Inherits from TempNode
	'textureNode',
	'depthNode',
	'normalNode',
	'pixelSize',
	'normalEdgeStrength',
	'depthEdgeStrength',
	'updateBeforeType',
] as const).distinct()
objProps.pixelationNode = _internal_pixelationNode_props


// 4. Props Type Definition for PixelationPassNode
export type PixelationPassNodeProps = Node<PixelationPassNode, typeof PixelationPassNode, {
	scene: Scene
	camera: Camera
	pixelSize?: number | TSLNode
	normalEdgeStrength?: number | TSLNode
	depthEdgeStrength?: number | TSLNode
}>

// 5. Defaults for PixelationPassNode
declare module '../../../../lib/3/defaults' {
	interface defaults {
		pixelationPassNode: Partial<{
			scene: Scene
			camera: Camera
			pixelSize?: number | TSLNode
			normalEdgeStrength?: number | TSLNode
			depthEdgeStrength?: number | TSLNode
		}>
	}
}

// Set default values based on the constructor's signature.
defaults.pixelationPassNode = {
	pixelSize: 6,
	normalEdgeStrength: 0.3,
	depthEdgeStrength: 0.4,
}