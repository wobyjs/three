import { Node as FrameworkNode } from '../../../three-types'
import Node from 'three/src/nodes/core/Node.js'
export * from 'three/src/nodes/core/Node.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		Node: typeof Node
	}
}

Three.Node = Node

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			node: NodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		node: typeof node
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		node: typeof _node
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional 'nodeType' string.
const node = ([
	'nodeType',
] as const).distinct()
consParams.node = node

// ---[ Object Properties ]---

// This lists all properties and methods of the base Node class,
// inheriting from EventDispatcher.
// Assumes `objProps.eventDispatcher` has been defined.
const _node = ([
	...(objProps.eventDispatcher || []),
	'isNode',
	'nodeType',
	'updateType',
	'updateBeforeType',
	'updateAfterType',
	'uuid',
	'version',
	'global',
	'id',
	'needsUpdate', // getter/setter
	'type', // getter
	'onUpdate',
	'onFrameUpdate',
	'onRenderUpdate',
	'onObjectUpdate',
	'onReference',
	'getSelf',
	'updateReference',
	'isGlobal',
	'getChildren',
	'dispose',
	'traverse',
	'getCacheKey',
	'customCacheKey',
	'getScope',
	'getHash',
	'getUpdateType',
	'getUpdateBeforeType',
	'getUpdateAfterType',
	'getElementType',
	'getMemberType',
	'getNodeType',
	'getShared',

	// Lifecycle methods
	'setup',
	'analyze',
	'generate',
	'build',

	// Update methods
	'updateBefore',
	'updateAfter',
	'update',

	// Serialization methods
	'getSerializeChildren',
	'serialize',
	'deserialize',
	'toJSON',
] as const).distinct()
objProps.node = _node


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type NodeArgs = {
	nodeType?: string | null
}

// The final Props type for the JSX component.
export type NodeProps = FrameworkNode<Node, typeof Node, NodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		node: Partial<NodeArgs>
	}
}

defaults.node = {}