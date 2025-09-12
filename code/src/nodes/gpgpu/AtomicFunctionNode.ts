import { Node } from '../../../three-types'
import {
	AtomicFunctionNode,
	atomicFunc, atomicLoad, atomicStore, atomicAdd, atomicSub, atomicMax, atomicMin, atomicAnd, atomicOr, atomicXor
} from 'three/src/nodes/gpgpu/AtomicFunctionNode.js'
export * from 'three/src/nodes/gpgpu/AtomicFunctionNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		AtomicFunctionNode: typeof AtomicFunctionNode,

		// Factory functions
		atomicFunc: typeof atomicFunc,
		atomicLoad: typeof atomicLoad,
		atomicStore: typeof atomicStore,
		atomicAdd: typeof atomicAdd,
		atomicSub: typeof atomicSub,
		atomicMax: typeof atomicMax,
		atomicMin: typeof atomicMin,
		atomicAnd: typeof atomicAnd,
		atomicOr: typeof atomicOr,
		atomicXor: typeof atomicXor
	}
}

// Make the class and all factory functions available under the Three namespace.
Three.AtomicFunctionNode = AtomicFunctionNode
Three.atomicFunc = atomicFunc
Three.atomicLoad = atomicLoad
Three.atomicStore = atomicStore
Three.atomicAdd = atomicAdd
Three.atomicSub = atomicSub
Three.atomicMax = atomicMax
Three.atomicMin = atomicMin
Three.atomicAnd = atomicAnd
Three.atomicOr = atomicOr
Three.atomicXor = atomicXor

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			atomicFunctionNode: AtomicFunctionNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		atomicFunctionNode: typeof atomicFunctionNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		atomicFunctionNode: typeof _atomicFunctionNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes the method and several nodes as arguments.
const atomicFunctionNode = ([
	'method',
	'pointerNode',
	'valueNode',
	'storeNode',
] as const).distinct()
consParams.atomicFunctionNode = atomicFunctionNode

// ---[ Object Properties ]---

// Inherits from TempNode and adds its own specific properties and methods.
// Assumes `objProps.tempNode` has been defined.
const _atomicFunctionNode = ([
	...(objProps.tempNode || []),
	'method',
	'pointerNode',
	'valueNode',
	'storeNode',
	'getInputType',
	'getNodeType',
	'generate',
] as const).distinct()
objProps.atomicFunctionNode = _atomicFunctionNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type AtomicFunctionNodeArgs = {
	method: string
	pointerNode: TSLNode
	valueNode: TSLNode | null
	storeNode?: TSLNode | null
}

// The final Props type for the JSX component.
export type AtomicFunctionNodeProps = Node<AtomicFunctionNode, typeof AtomicFunctionNode, AtomicFunctionNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		atomicFunctionNode: Partial<AtomicFunctionNodeArgs>
	}
}

// The core constructor arguments are required, so the defaults object is empty.
defaults.atomicFunctionNode = {}