// 1. Imports
import SSRNode from 'three/examples/jsm/tsl/display/SSRNode.js'
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
			ssrNode: SSRNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		ssrNode: typeof ssrNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		ssrNode: typeof _ssrNode
	}
}

// 3. Constructor and Object Property Arrays
const ssrNode = ([
	'colorNode',
	'depthNode',
	'normalNode',
	'metalnessNode',
	'camera',
] as const).distinct()
consParams.ssrNode = ssrNode

// Inherits from TempNode and adds its own specific properties
const _ssrNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'colorNode',
	'depthNode',
	'normalNode',
	'metalnessNode',
	'camera',
	'resolutionScale',
	'updateBeforeType',
	'maxDistance',
	'thickness',
	'opacity',
] as const).distinct()
objProps.ssrNode = _ssrNode


// 4. Props Type Definition
export type SSRNodeProps = Node<SSRNode, typeof SSRNode, {
	colorNode: TSLNode
	depthNode: TSLNode
	normalNode: TSLNode
	metalnessNode: TSLNode
	camera: Camera
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		ssrNode: Partial<{
			colorNode: TSLNode
			depthNode: TSLNode
			normalNode: TSLNode
			metalnessNode: TSLNode
			camera: Camera
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.ssrNode = {}