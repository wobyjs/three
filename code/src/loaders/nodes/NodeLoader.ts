import { Node } from '../../../three-types'
import NodeLoader from 'three/src/loaders/nodes/NodeLoader.js'
export * from 'three/src/loaders/nodes/NodeLoader.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { LoadingManager } from 'three/src/loaders/LoadingManager.js'
import { Texture } from 'three/src/textures/Texture.js'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		NodeLoader: typeof NodeLoader
	}
}

Three.NodeLoader = NodeLoader

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeLoader: NodeLoaderProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		nodeLoader: typeof nodeLoader
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		nodeLoader: typeof _nodeLoader
	}
}

// ---[ Constructor Parameters ]---

// Follows the standard Loader constructor pattern.
const nodeLoader = ([
	'manager',
] as const).distinct()
consParams.nodeLoader = nodeLoader

// ---[ Object Properties ]---

// Inherits from Loader and adds its own properties and methods.
// Assumes `objProps.loader` has been defined.
const _nodeLoader = ([
	...(objProps.loader || []),
	'textures',
	'nodes',
	'load',
	'parseNodes',
	'parse',
	'setTextures',
	'setNodes',
	'createNodeFromType',
] as const).distinct()
objProps.nodeLoader = _nodeLoader


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
type NodeLoaderArgs = {
	manager?: LoadingManager
	textures?: { [key: string]: Texture }
	nodes?: { [key: string]: new () => TSLNode }
}

// The final Props type for the JSX component.
export type NodeLoaderProps = Node<NodeLoader, typeof NodeLoader, NodeLoaderArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		nodeLoader: Partial<NodeLoaderArgs>
	}
}

defaults.nodeLoader = {}