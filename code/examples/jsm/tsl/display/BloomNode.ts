// 1. Imports
import BloomNode from 'three/examples/jsm/tsl/display/BloomNode.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { Node } from '../../../../three-types'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'


// 2. Module Declarations
declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			bloomNode: BloomNodeProps
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		bloomNode: typeof bloomNode
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		bloomNode: typeof _bloomNode
	}
}

// 3. Constructor and Object Property Arrays
const bloomNode = ([
	'inputNode',
	'strength',
	'radius',
	'threshold',
] as const).distinct()
consParams.bloomNode = bloomNode

// Inherits from TempNode and adds its own specific properties
const _bloomNode = ([
	...objProps.tempNode, // <-- Inherits parent properties
	'inputNode',
	'strength',
	'radius',
	'threshold',
	'smoothWidth',
	'updateBeforeType',
] as const).distinct()
objProps.bloomNode = _bloomNode


// 4. Props Type Definition
export type BloomNodeProps = Node<BloomNode, typeof BloomNode, {
	inputNode: TSLNode
	strength?: number
	radius?: number
	threshold?: number
}>

// 5. Defaults
declare module '../../../../lib/3/defaults' {
	interface defaults {
		bloomNode: Partial<{
			inputNode: TSLNode
			strength?: number
			radius?: number
			threshold?: number
		}>
	}
}

// Set default values based on the constructor's signature.
defaults.bloomNode = {
	strength: 1,
	radius: 0,
	threshold: 0,
}