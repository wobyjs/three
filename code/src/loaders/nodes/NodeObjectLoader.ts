import { Node } from '../../../three-types'
import NodeObjectLoader from 'three/src/loaders/nodes/NodeObjectLoader.js'
export * from 'three/src/loaders/nodes/NodeObjectLoader.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import TSLNode from 'three/src/nodes/core/Node.js'
import { NodeMaterial } from '../../materials/nodes/NodeMaterial.js'

declare module '../../../lib/3/three'
{
	interface Three {
		NodeObjectLoader: typeof NodeObjectLoader
	}
}

Three.NodeObjectLoader = NodeObjectLoader

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeObjectLoader: NodeObjectLoaderProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		nodeObjectLoader: typeof nodeObjectLoader
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		nodeObjectLoader: typeof _nodeObjectLoader
	}
}

// ---[ Constructor Parameters ]---

// Inherits the standard Loader constructor pattern.
const nodeObjectLoader = ([
	'manager',
] as const).distinct()
consParams.nodeObjectLoader = nodeObjectLoader

// ---[ Object Properties ]---

// Inherits from ObjectLoader and adds/overrides its own properties and methods.
// Assumes `objProps.objectLoader` has been defined.
const _nodeObjectLoader = ([
	...(objProps.objectLoader || []),
	'nodes',
	'nodeMaterials',
	'_nodesJSON',
	'setNodes',
	'setNodeMaterials',
	'parse',
	'parseNodes',
	'parseMaterials',
] as const).distinct()
objProps.nodeObjectLoader = _nodeObjectLoader


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
type NodeObjectLoaderArgs = {
	manager?: LoadingManager
	nodes?: { [key: string]: new () => TSLNode }
	nodeMaterials?: { [key: string]: new () => NodeMaterial }
}

// The final Props type for the JSX component.
export type NodeObjectLoaderProps = Node<NodeObjectLoader, typeof NodeObjectLoader, NodeObjectLoaderArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		nodeObjectLoader: Partial<NodeObjectLoaderArgs>
	}
}

defaults.nodeObjectLoader = {}