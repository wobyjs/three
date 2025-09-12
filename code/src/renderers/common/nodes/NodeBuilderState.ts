import { Node } from '../../../../three-types'
// This is an internal class for the renderer's node system.
import NodeBuilderState from 'three/src/renderers/common/nodes/NodeBuilderState.js'
export * from 'three/src/renderers/common/nodes/NodeBuilderState.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import TSLNode from 'three/src/nodes/core/Node.js'
import NodeMaterialObserver from 'three/src/materials/nodes/manager/NodeMaterialObserver.js' // Assuming path from previous conversions

declare module '../../../../lib/3/three'
{
	interface Three {
		NodeBuilderState: typeof NodeBuilderState
	}
}

Three.NodeBuilderState = NodeBuilderState

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeBuilderState: NodeBuilderStateProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		nodeBuilderState: typeof nodeBuilderState
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		nodeBuilderState: typeof _nodeBuilderState
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes the full state of a compiled node material.
const nodeBuilderState = ([
	'vertexShader',
	'fragmentShader',
	'computeShader',
	'nodeAttributes',
	'bindings',
	'updateNodes',
	'updateBeforeNodes',
	'updateAfterNodes',
	'observer',
	'transforms',
] as const).distinct()
consParams.nodeBuilderState = nodeBuilderState

// ---[ Object Properties ]---

// This class has no inheritance, so it's a flat list of its properties and methods.
const _nodeBuilderState = ([
	'vertexShader',
	'fragmentShader',
	'computeShader',
	'transforms',
	'nodeAttributes',
	'bindings',
	'updateNodes',
	'updateBeforeNodes',
	'updateAfterNodes',
	'observer',
	'usedTimes',
	'createBindings',
] as const).distinct()
objProps.nodeBuilderState = _nodeBuilderState


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
// Using 'any' for very internal types like BindGroup to avoid import path fragility.
type NodeBuilderStateArgs = {
	vertexShader: string | null
	fragmentShader: string | null
	computeShader: string | null
	nodeAttributes: any[]
	bindings: any[]
	updateNodes: TSLNode[]
	updateBeforeNodes: TSLNode[]
	updateAfterNodes: TSLNode[]
	observer: NodeMaterialObserver
	transforms?: any[]
}

// The final Props type for the JSX component.
export type NodeBuilderStateProps = Node<NodeBuilderState, typeof NodeBuilderState, NodeBuilderStateArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		nodeBuilderState: Partial<NodeBuilderStateArgs>
	}
}

// All constructor arguments are required for a meaningful state, so defaults is empty.
defaults.nodeBuilderState = {}