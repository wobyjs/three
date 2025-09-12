// 1. Imports
import SSAAPassNode from 'three/examples/jsm/tsl/display/SSAAPassNode.js'
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
			ssaapassNode: SSAAPassNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		ssaapassNode: typeof ssaapassNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		ssaapassNode: typeof _ssaapassNode
	}
}

// 3. Constructor and Object Property Arrays
const ssaapassNode = ([
	'scene',
	'camera',
] as const).distinct()
consParams.ssaapassNode = ssaapassNode

// Inherits from PassNode and adds its own specific properties
const _ssaapassNode = ([
	...objProps.passNode, // <-- Inherits parent properties
	'isSSAAPassNode',
	'sampleLevel',
	'unbiased',
	'clearColor',
	'clearAlpha',
	'sampleWeight',
] as const).distinct()
objProps.ssaapassNode = _ssaapassNode


// 4. Props Type Definition
export type SSAAPassNodeProps = Node<SSAAPassNode, typeof SSAAPassNode, {
	scene: Scene
	camera: Camera
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		ssaapassNode: Partial<{
			scene: Scene
			camera: Camera
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.ssaapassNode = {}