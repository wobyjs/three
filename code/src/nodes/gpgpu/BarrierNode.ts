import { Node } from '../../../three-types'
import { BarrierNode, workgroupBarrier, storageBarrier, textureBarrier } from 'three/src/nodes/gpgpu/BarrierNode.js'
export * from 'three/src/nodes/gpgpu/BarrierNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		BarrierNode: typeof BarrierNode,
		workgroupBarrier: typeof workgroupBarrier,
		storageBarrier: typeof storageBarrier,
		textureBarrier: typeof textureBarrier
	}
}

// Make the class and all factory functions available under the Three namespace.
Three.BarrierNode = BarrierNode
Three.workgroupBarrier = workgroupBarrier
Three.storageBarrier = storageBarrier
Three.textureBarrier = textureBarrier

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			barrierNode: BarrierNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		barrierNode: typeof barrierNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		barrierNode: typeof _barrierNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single 'scope' argument.
const barrierNode = ([
	'scope',
] as const).distinct()
consParams.barrierNode = barrierNode

// ---[ Object Properties ]---

// Inherits from Node and adds its own properties and methods.
// Assumes `objProps.node` has been defined.
const _barrierNode = ([
	...(objProps.node || []),
	'scope',
	'generate',
] as const).distinct()
objProps.barrierNode = _barrierNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type BarrierNodeArgs = {
	scope: 'workgroup' | 'storage' | 'texture'
}

// The final Props type for the JSX component.
export type BarrierNodeProps = Node<BarrierNode, typeof BarrierNode, BarrierNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		barrierNode: Partial<BarrierNodeArgs>
	}
}

// 'scope' is a required argument, so the defaults object is empty.
defaults.barrierNode = {}