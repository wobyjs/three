import { Node } from '../../../three-types'
import NodeMaterialLoader from 'three/src/loaders/nodes/NodeMaterialLoader.js'
export * from 'three/src/loaders/nodes/NodeMaterialLoader.js'
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
		NodeMaterialLoader: typeof NodeMaterialLoader
	}
}

Three.NodeMaterialLoader = NodeMaterialLoader

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeMaterialLoader: NodeMaterialLoaderProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		nodeMaterialLoader: typeof nodeMaterialLoader
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		nodeMaterialLoader: typeof _nodeMaterialLoader
	}
}

// ---[ Constructor Parameters ]---

// Inherits the standard Loader constructor pattern.
const nodeMaterialLoader = ([
	'manager',
] as const).distinct()
consParams.nodeMaterialLoader = nodeMaterialLoader

// ---[ Object Properties ]---

// Inherits from MaterialLoader and adds its own properties and methods.
// Assumes `objProps.materialLoader` has been defined.
const _nodeMaterialLoader = ([
	...(objProps.materialLoader || []),
	'nodes',
	'nodeMaterials',
	'parse',
	'setNodes',
	'setNodeMaterials',
	'createMaterialFromType',
] as const).distinct()
objProps.nodeMaterialLoader = _nodeMaterialLoader


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
type NodeMaterialLoaderArgs = {
	manager?: LoadingManager
	nodes?: { [key: string]: new () => TSLNode }
	nodeMaterials?: { [key: string]: new () => NodeMaterial }
}

// The final Props type for the JSX component.
export type NodeMaterialLoaderProps = Node<NodeMaterialLoader, typeof NodeMaterialLoader, NodeMaterialLoaderArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		nodeMaterialLoader: Partial<NodeMaterialLoaderArgs>
	}
}

defaults.nodeMaterialLoader = {}