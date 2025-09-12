import { Node } from '../../../../three-types'
// This class is part of the WebGPU renderer implementation
import NodeMaterialObserver from 'three/src/materials/nodes/manager/NodeMaterialObserver.js'
export * from 'three/src/materials/nodes/manager/NodeMaterialObserver.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'
import { NodeBuilder } from '../../../../src/nodes/core/NodeBuilder.js'

declare module '../../../../lib/3/three'
{
	interface Three {
		NodeMaterialObserver: typeof NodeMaterialObserver
	}
}

Three.NodeMaterialObserver = NodeMaterialObserver

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeMaterialObserver: NodeMaterialObserverProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		nodeMaterialObserver: typeof nodeMaterialObserver
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		nodeMaterialObserver: typeof _nodeMaterialObserver
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single 'builder' argument.
const nodeMaterialObserver = ([
	'builder',
] as const).distinct()
consParams.nodeMaterialObserver = nodeMaterialObserver

// ---[ Object Properties ]---

// Lists all instance properties and methods of the class.
const _nodeMaterialObserver = ([
	'renderObjects',
	'hasNode',
	'hasAnimation',
	'refreshUniforms',
	'renderId',
	'firstInitialization',
	'getRenderObjectData',
	'getAttributesData',
	'containsNode',
	'getMaterialData',
	'equals',
	'needsRefresh',
] as const).distinct()
objProps.nodeMaterialObserver = _nodeMaterialObserver


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type NodeMaterialObserverArgs = {
	builder: NodeBuilder
}

// The final Props type for the JSX component.
export type NodeMaterialObserverProps = Node<NodeMaterialObserver, typeof NodeMaterialObserver, NodeMaterialObserverArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		nodeMaterialObserver: Partial<NodeMaterialObserverArgs>
	}
}

// The 'builder' argument is required, so the defaults object is empty.
defaults.nodeMaterialObserver = {}