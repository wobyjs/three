// 1. Imports
// Path assumed based on its child AnaglyphPassNode's location
import StereoCompositePassNode from 'three/examples/jsm/tsl/display/StereoCompositePassNode.js'
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
			stereoCompositePassNode: StereoCompositePassNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		stereoCompositePassNode: typeof stereoCompositePassNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		stereoCompositePassNode: typeof _stereoCompositePassNode
	}
}

// 3. Constructor and Object Property Arrays
const stereoCompositePassNode = ([
	'scene',
	'camera',
] as const).distinct()
consParams.stereoCompositePassNode = stereoCompositePassNode

// Inherits from PassNode and adds its own specific properties
const _stereoCompositePassNode = ([
	...objProps.passNode, // <-- Inherits parent properties
	'isStereoCompositePassNode',
	'stereo',
] as const).distinct()
objProps.stereoCompositePassNode = _stereoCompositePassNode


// 4. Props Type Definition
export type StereoCompositePassNodeProps = Node<StereoCompositePassNode, typeof StereoCompositePassNode, {
	scene: Scene
	camera: Camera
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		stereoCompositePassNode: Partial<{
			scene: Scene
			camera: Camera
		}>
	}
}

// Constructor has no default parameters, so the defaults object is empty.
defaults.stereoCompositePassNode = {}