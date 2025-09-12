// 1. Imports
import OutlineNode from 'three/examples/jsm/tsl/display/OutlineNode.js'
import { Scene } from 'three/src/scenes/Scene.js'
import { Camera } from 'three/src/cameras/Camera.js'
import { Object3D } from 'three/src/core/Object3D.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

// Helper interface for the optional params object
interface OutlineParams {
	selectedObjects?: Object3D[]
	edgeThickness?: number | TSLNode
	edgeGlow?: number | TSLNode
	downSampleRatio?: number
}


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			outlineNode: OutlineNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		outlineNode: typeof outlineNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		outlineNode: typeof _outlineNode
	}
}

// 3. Constructor and Object Property Arrays
const outlineNode = ([
	'scene',
	'camera',
	'params',
] as const).distinct()
consParams.outlineNode = outlineNode

// Inherits from TempNode and adds its own specific properties
const _outlineNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'scene',
	'camera',
	'selectedObjects',
	'edgeThicknessNode',
	'edgeGlowNode',
	'downSampleRatio',
	'updateBeforeType',
	'visibleEdge',
	'hiddenEdge',
] as const).distinct()
objProps.outlineNode = _outlineNode


// 4. Props Type Definition
export type OutlineNodeProps = Node<OutlineNode, typeof OutlineNode, {
	scene: Scene
	camera: Camera
	params?: OutlineParams
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		outlineNode: Partial<{
			scene: Scene
			camera: Camera
			params?: OutlineParams
		}>
	}
}

// The 'params' parameter defaults to an empty object in the constructor.
defaults.outlineNode = {
	params: {},
}