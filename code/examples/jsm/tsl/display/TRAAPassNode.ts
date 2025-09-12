// 1. Imports
import TRAAPassNode from 'three/examples/jsm/tsl/display/TRAAPassNode.js'
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
			traapassNode: TRAAPassNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		traapassNode: typeof traapassNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		traapassNode: typeof _traapassNode
	}
}

// 3. Constructor and Object Property Arrays
const traapassNode = ([
	'scene',
	'camera',
] as const).distinct()
consParams.traapassNode = traapassNode

// Inherits from PassNode and adds its own specific properties
const _traapassNode = ([
	...objProps.passNode, // <-- Inherits parent properties
	'isTRAAPassNode',
	'clearColor',
	'clearAlpha',
] as const).distinct()
objProps.traapassNode = _traapassNode


// 4. Props Type Definition
export type TRAAPassNodeProps = Node<TRAAPassNode, typeof TRAAPassNode, {
	scene: Scene
	camera: Camera
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		traapassNode: Partial<{
			scene: Scene
			camera: Camera
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.traapassNode = {}