// 1. Imports
import StereoPassNode from 'three/examples/jsm/tsl/display/StereoPassNode.js'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			stereoPassNode: StereoPassNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		stereoPassNode: typeof stereoPassNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		stereoPassNode: typeof _stereoPassNode
	}
}

// 3. Constructor and Object Property Arrays
const stereoPassNode = ([
	'scene',
	'camera',
] as const).distinct()
consParams.stereoPassNode = stereoPassNode

// Inherits from PassNode and adds its own specific properties
const _stereoPassNode = ([
	...objProps.passNode, // <-- Inherits parent properties
	'isStereoPassNode',
	'stereo',
] as const).distinct()
objProps.stereoPassNode = _stereoPassNode


// 4. Props Type Definition
export type StereoPassNodeProps = Node<StereoPassNode, typeof StereoPassNode, {
	scene: Scene
	camera: Camera
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		stereoPassNode: Partial<{
			scene: Scene
			camera: Camera
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.stereoPassNode = {}