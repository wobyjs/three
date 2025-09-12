// 1. Imports
import ParallaxBarrierPassNode from 'three/examples/jsm/tsl/display/ParallaxBarrierPassNode.js'
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
			parallaxBarrierPassNode: ParallaxBarrierPassNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		parallaxBarrierPassNode: typeof parallaxBarrierPassNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		parallaxBarrierPassNode: typeof _parallaxBarrierPassNode
	}
}

// 3. Constructor and Object Property Arrays
const parallaxBarrierPassNode = ([
	'scene',
	'camera',
] as const).distinct()
consParams.parallaxBarrierPassNode = parallaxBarrierPassNode

// Inherits from StereoCompositePassNode and adds its own specific property
const _parallaxBarrierPassNode = ([
	...objProps.stereoCompositePassNode, // <-- Inherits parent properties
	'isParallaxBarrierPassNode',
] as const).distinct()
objProps.parallaxBarrierPassNode = _parallaxBarrierPassNode


// 4. Props Type Definition
export type ParallaxBarrierPassNodeProps = Node<ParallaxBarrierPassNode, typeof ParallaxBarrierPassNode, {
	scene: Scene
	camera: Camera
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		parallaxBarrierPassNode: Partial<{
			scene: Scene
			camera: Camera
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.parallaxBarrierPassNode = {}