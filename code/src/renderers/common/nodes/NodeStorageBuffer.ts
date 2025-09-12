import { Node } from '../../../../three-types'
// This is an internal class for the renderer's node system.
import NodeStorageBuffer from 'three/src/renderers/common/nodes/NodeStorageBuffer.js'
export * from 'three/src/renderers/common/nodes/NodeStorageBuffer.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import { StorageBufferNode } from '../../../nodes/accessors/StorageBufferNode.js'
import { UniformGroupNode } from '../../../nodes/core/UniformGroupNode.js'

declare module '../../../../lib/3/three'
{
	interface Three {
		NodeStorageBuffer: typeof NodeStorageBuffer
	}
}

Three.NodeStorageBuffer = NodeStorageBuffer

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeStorageBuffer: NodeStorageBufferProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		nodeStorageBuffer: typeof nodeStorageBuffer
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		nodeStorageBuffer: typeof _nodeStorageBuffer
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a nodeUniform and a groupNode.
const nodeStorageBuffer = ([
	'nodeUniform',
	'groupNode',
] as const).distinct()
consParams.nodeStorageBuffer = nodeStorageBuffer

// ---[ Object Properties ]---

// Inherits from StorageBuffer and adds its own properties.
// Assumes `objProps.storageBuffer` has been defined.
const _nodeStorageBuffer = ([
	...(objProps.storageBuffer || []),
	'nodeUniform',
	'access',
	'groupNode',
	'buffer', // getter
] as const).distinct()
objProps.nodeStorageBuffer = _nodeStorageBuffer


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type NodeStorageBufferArgs = {
	nodeUniform: StorageBufferNode
	groupNode: UniformGroupNode
}

// The final Props type for the JSX component.
export type NodeStorageBufferProps = Node<NodeStorageBuffer, typeof NodeStorageBuffer, NodeStorageBufferArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		nodeStorageBuffer: Partial<NodeStorageBufferArgs>
	}
}

// All constructor arguments are required, so the defaults object is empty.
defaults.nodeStorageBuffer = {}