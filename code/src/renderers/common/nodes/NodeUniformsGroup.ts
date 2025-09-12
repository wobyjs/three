import { Node } from '../../../../three-types'
// This is an internal class for the renderer's node system.
import NodeUniformsGroup from 'three/src/renderers/common/nodes/NodeUniformsGroup.js'
export * from 'three/src/renderers/common/nodes/NodeUniformsGroup.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import { UniformGroupNode } from '../../../nodes/core/UniformGroupNode.js'

declare module '../../../../lib/3/three'
{
	interface Three {
		NodeUniformsGroup: typeof NodeUniformsGroup
	}
}

Three.NodeUniformsGroup = NodeUniformsGroup

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeUniformsGroup: NodeUniformsGroupProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		nodeUniformsGroup: typeof nodeUniformsGroup
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		nodeUniformsGroup: typeof _nodeUniformsGroup
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a name and a groupNode.
const nodeUniformsGroup = ([
	'name',
	'groupNode',
] as const).distinct()
consParams.nodeUniformsGroup = nodeUniformsGroup

// ---[ Object Properties ]---

// Inherits from UniformsGroup and adds its own properties.
// Assumes `objProps.uniformsGroup` has been defined.
const _nodeUniformsGroup = ([
	...(objProps.uniformsGroup || []),
	'id',
	'groupNode',
	'isNodeUniformsGroup',
] as const).distinct()
objProps.nodeUniformsGroup = _nodeUniformsGroup


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type NodeUniformsGroupArgs = {
	name: string
	groupNode: UniformGroupNode
}

// The final Props type for the JSX component.
export type NodeUniformsGroupProps = Node<NodeUniformsGroup, typeof NodeUniformsGroup, NodeUniformsGroupArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		nodeUniformsGroup: Partial<NodeUniformsGroupArgs>
	}
}

// All constructor arguments are required, so the defaults object is empty.
defaults.nodeUniformsGroup = {}