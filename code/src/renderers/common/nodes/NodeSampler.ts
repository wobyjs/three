import { Node } from '../../../../three-types'
// This is an internal class for the renderer's node system.
import NodeSampler from 'three/src/renderers/common/nodes/NodeSampler.js'
export * from 'three/src/renderers/common/nodes/NodeSampler.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import { TextureNode } from '../../../nodes/accessors/TextureNode.js'
import { UniformGroupNode } from '../../../nodes/core/UniformGroupNode.js'

declare module '../../../../lib/3/three'
{
	interface Three {
		NodeSampler: typeof NodeSampler
	}
}

Three.NodeSampler = NodeSampler

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeSampler: NodeSamplerProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		nodeSampler: typeof nodeSampler
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		nodeSampler: typeof _nodeSampler
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a name, a textureNode, and a groupNode.
const nodeSampler = ([
	'name',
	'textureNode',
	'groupNode',
] as const).distinct()
consParams.nodeSampler = nodeSampler

// ---[ Object Properties ]---

// Inherits from Sampler and adds its own properties and methods.
// Assumes `objProps.sampler` has been defined.
const _nodeSampler = ([
	...(objProps.sampler || []),
	'textureNode',
	'groupNode',
	'update',
] as const).distinct()
objProps.nodeSampler = _nodeSampler


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type NodeSamplerArgs = {
	name: string
	textureNode: TextureNode
	groupNode: UniformGroupNode
}

// The final Props type for the JSX component.
export type NodeSamplerProps = Node<NodeSampler, typeof NodeSampler, NodeSamplerArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		nodeSampler: Partial<NodeSamplerArgs>
	}
}

// All constructor arguments are required, so the defaults object is empty.
defaults.nodeSampler = {}