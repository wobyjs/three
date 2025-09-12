import { Node } from '../../../../three-types'
// This is an internal class for the renderer's node system.
import NodeUniformBuffer from 'three/src/renderers/common/nodes/NodeUniformBuffer.js'
export * from 'three/src/renderers/common/nodes/NodeUniformBuffer.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import { BufferNode } from '../../../nodes/accessors/BufferNode.js'
import { UniformGroupNode } from '../../../nodes/core/UniformGroupNode.js'

declare module '../../../../lib/3/three'
{
	interface Three {
		NodeUniformBuffer: typeof NodeUniformBuffer
	}
}

Three.NodeUniformBuffer = NodeUniformBuffer

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeUniformBuffer: NodeUniformBufferProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		nodeUniformBuffer: typeof nodeUniformBuffer
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		nodeUniformBuffer: typeof _nodeUniformBuffer
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a nodeUniform and a groupNode.
const nodeUniformBuffer = ([
	'nodeUniform',
	'groupNode',
] as const).distinct()
consParams.nodeUniformBuffer = nodeUniformBuffer

// ---[ Object Properties ]---

// Inherits from UniformBuffer and adds its own properties.
// Assumes `objProps.uniformBuffer` has been defined.
const _nodeUniformBuffer = ([
	...(objProps.uniformBuffer || []),
	'nodeUniform',
	'groupNode',
	'buffer', // getter
] as const).distinct()
objProps.nodeUniformBuffer = _nodeUniformBuffer


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type NodeUniformBufferArgs = {
	nodeUniform: BufferNode<unknown>
	groupNode: UniformGroupNode
}

// The final Props type for the JSX component.
export type NodeUniformBufferProps = Node<NodeUniformBuffer, typeof NodeUniformBuffer, NodeUniformBufferArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		nodeUniformBuffer: Partial<NodeUniformBufferArgs>
	}
}

// All constructor arguments are required, so the defaults object is empty.
defaults.nodeUniformBuffer = {}