import { Node } from '../../../three-types'
import ComputeBuiltinNode, { numWorkgroups, workgroupId, globalId, localId, subgroupSize } from 'three/src/nodes/gpgpu/ComputeBuiltinNode.js'
export * from 'three/src/nodes/gpgpu/ComputeBuiltinNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		ComputeBuiltinNode: typeof ComputeBuiltinNode,

		// Factory functions
		numWorkgroups: typeof numWorkgroups,
		workgroupId: typeof workgroupId,
		globalId: typeof globalId,
		localId: typeof localId,
		subgroupSize: typeof subgroupSize
	}
}

// Make the class and all factory functions available under the Three namespace.
Three.ComputeBuiltinNode = ComputeBuiltinNode
Three.numWorkgroups = numWorkgroups
Three.workgroupId = workgroupId
Three.globalId = globalId
Three.localId = localId
Three.subgroupSize = subgroupSize

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			computeBuiltinNode: ComputeBuiltinNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		computeBuiltinNode: typeof computeBuiltinNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		computeBuiltinNode: typeof _computeBuiltinNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a 'builtinName' and 'nodeType'.
const computeBuiltinNode = ([
	'builtinName',
	'nodeType',
] as const).distinct()
consParams.computeBuiltinNode = computeBuiltinNode

// ---[ Object Properties ]---

// Inherits from Node and adds its own properties and overridden methods.
// Assumes `objProps.node` has been defined.
const _computeBuiltinNode = ([
	...(objProps.node || []),
	'isComputeBuiltinNode', // common pattern
	'_builtinName',
	'getHash',
	'getNodeType',
	'setBuiltinName',
	'getBuiltinName',
	'hasBuiltin',
	'generate',
	'serialize',
	'deserialize',
] as const).distinct()
objProps.computeBuiltinNode = _computeBuiltinNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type ComputeBuiltinNodeArgs = {
	builtinName: string
	nodeType: string
}

// The final Props type for the JSX component.
export type ComputeBuiltinNodeProps = Node<ComputeBuiltinNode, typeof ComputeBuiltinNode, ComputeBuiltinNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		computeBuiltinNode: Partial<ComputeBuiltinNodeArgs>
	}
}

// Both constructor arguments are required, so the defaults object is empty.
defaults.computeBuiltinNode = {}