// 1. Imports
import AnaglyphPassNode from 'three/examples/jsm/tsl/display/AnaglyphPassNode.js'
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
			anaglyphPassNode: AnaglyphPassNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		anaglyphPassNode: typeof anaglyphPassNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		anaglyphPassNode: typeof _anaglyphPassNode
	}
}

// 3. Constructor and Object Property Arrays
const anaglyphPassNode = ([
	'scene',
	'camera',
] as const).distinct()
consParams.anaglyphPassNode = anaglyphPassNode

// Inherits from StereoCompositePassNode and adds its own specific properties
const _anaglyphPassNode = ([
	...objProps.stereoCompositePassNode, // <-- Inherits parent properties
	'isAnaglyphPassNode',
] as const).distinct()
objProps.anaglyphPassNode = _anaglyphPassNode


// 4. Props Type Definition
export type AnaglyphPassNodeProps = Node<AnaglyphPassNode, typeof AnaglyphPassNode, {
	scene: Scene
	camera: Camera
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		anaglyphPassNode: Partial<{
			scene: Scene
			camera: Camera
		}>
	}
}

// Constructor has no default parameters, so the defaults object is empty.
defaults.anaglyphPassNode = {}