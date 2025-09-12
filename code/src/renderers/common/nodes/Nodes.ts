import { Node } from '../../../../three-types'
// This is an internal class for the renderer's node system.
import Nodes from 'three/src/renderers/common/nodes/Nodes.js'
export { Nodes } //'three/src/renderers/common/nodes/Nodes.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import { Renderer } from '../Renderer'
declare module '../../../../lib/3/three'
{
	interface Three {
		Nodes: typeof Nodes
	}
}

Three.Nodes = Nodes

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodes: NodesProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		nodes: typeof nodes
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		nodes: typeof _nodes
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a renderer and a backend.
const nodes = ([
	'renderer',
	'backend',
] as const).distinct()
consParams.nodes = nodes

// ---[ Object Properties ]---

// Inherits from DataMap and adds a large number of methods and properties for managing the node system.
// Assumes `objProps.dataMap` has been defined.
const _nodes = ([
	...(objProps.dataMap || []),
	'renderer',
	'backend',
	'nodeFrame',
	'nodeBuilderCache',
	'callHashCache',
	'groupsData',
	'cacheLib',
	'updateGroup',
	'getForRenderCacheKey',
	'getForRender',
	'delete',
	'getForCompute',
	'_createNodeBuilderState',
	'getEnvironmentNode',
	'getBackgroundNode',
	'getFogNode',
	'getCacheKey',
	'isToneMappingState', // getter
	'updateBackground',
	'getCacheNode',
	'updateFog',
	'updateEnvironment',
	'getNodeFrame',
	'getNodeFrameForRender',
	'getOutputCacheKey',
	'hasOutputChange',
	'getOutputNode',
	'updateBefore',
	'updateAfter',
	'updateForCompute',
	'updateForRender',
	'needsRefresh',
	'dispose',
] as const).distinct()
objProps.nodes = _nodes


// ---[ Props & Defaults ]---

// Defines the constructor arguments. Using 'any' for the internal 'backend' type for robustness.
type NodesArgs = {
	renderer: Renderer
	backend: any
}

// The final Props type for the JSX component.
export type NodesProps = Node<Nodes, typeof Nodes, NodesArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		nodes: Partial<NodesArgs>
	}
}

// The constructor arguments are required for this class to function, so defaults is empty.
defaults.nodes = {}