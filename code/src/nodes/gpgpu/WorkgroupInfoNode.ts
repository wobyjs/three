import { Node } from '../../../three-types'
import WorkgroupInfoNode, { workgroupArray } from 'three/src/nodes/gpgpu/WorkgroupInfoNode.js'
export * from 'three/src/nodes/gpgpu/WorkgroupInfoNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		WorkgroupInfoNode: typeof WorkgroupInfoNode,
		workgroupArray: typeof workgroupArray
	}
}

// Make the class and factory function available under the Three namespace.
Three.WorkgroupInfoNode = WorkgroupInfoNode
Three.workgroupArray = workgroupArray

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			workgroupInfoNode: WorkgroupInfoNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		workgroupInfoNode: typeof workgroupInfoNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		workgroupInfoNode: typeof _workgroupInfoNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes scope, bufferType, and bufferCount.
const workgroupInfoNode = ([
	'scope',
	'bufferType',
	'bufferCount',
] as const).distinct()
consParams.workgroupInfoNode = workgroupInfoNode

// ---[ Object Properties ]---

// Inherits from Node and adds its own properties and methods.
// Assumes `objProps.node` has been defined.
const _workgroupInfoNode = ([
	...(objProps.node || []),
	'bufferType',
	'bufferCount',
	'isWorkgroupInfoNode',
	'elementType',
	'scope',
	'label',
	'setScope',
	'getElementType',
	'getInputType',
	'element',
	'generate',
] as const).distinct()
objProps.workgroupInfoNode = _workgroupInfoNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type WorkgroupInfoNodeArgs = {
	scope: string
	bufferType: string
	bufferCount?: number
}

// The final Props type for the JSX component.
export type WorkgroupInfoNodeProps = Node<WorkgroupInfoNode, typeof WorkgroupInfoNode, WorkgroupInfoNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		workgroupInfoNode: Partial<WorkgroupInfoNodeArgs>
	}
}

// The 'scope' and 'bufferType' arguments are required, so the defaults object is empty.
defaults.workgroupInfoNode = {}