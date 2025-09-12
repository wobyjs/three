// 1. Imports
import GTAONode from 'three/examples/jsm/tsl/display/GTAONode.js'
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
			gtaoNode: GTAONodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		gtaoNode: typeof gtaoNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		gtaoNode: typeof _gtaoNode
	}
}

// 3. Constructor and Object Property Arrays
const gtaoNode = ([
	'depthNode',
	'normalNode',
	'camera',
] as const).distinct()
consParams.gtaoNode = gtaoNode

// Inherits from TempNode and adds its own specific properties
const _gtaoNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'depthNode',
	'normalNode',
	'resolutionScale',
	'updateBeforeType',
	'radius',
	'resolution',
	'thickness',
	'distanceExponent',
	'distanceFallOff',
	'scale',
	'samples',
] as const).distinct()
objProps.gtaoNode = _gtaoNode


// 4. Props Type Definition
export type GTAONodeProps = Node<GTAONode, typeof GTAONode, {
	depthNode: TSLNode
	normalNode?: TSLNode
	camera: Camera
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		gtaoNode: Partial<{
			depthNode: TSLNode
			normalNode?: TSLNode
			camera: Camera
		}>
	}
}

// The constructor has no default parameters, so the defaults object is empty.
defaults.gtaoNode = {}