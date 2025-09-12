import { Node } from '../../../../three-types'
// This is an internal class for the renderer's node system.
import NodeLibrary from 'three/src/renderers/common/nodes/NodeLibrary.js'
export * from 'three/src/renderers/common/nodes/NodeLibrary.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
	interface Three {
		NodeLibrary: typeof NodeLibrary
	}
}

Three.NodeLibrary = NodeLibrary

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			nodeLibrary: NodeLibraryProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		nodeLibrary: typeof nodeLibrary
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		nodeLibrary: typeof _nodeLibrary
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const nodeLibrary = ([] as const).distinct()
consParams.nodeLibrary = nodeLibrary

// ---[ Object Properties ]---

// This is a flat list of the class's properties and methods.
const _nodeLibrary = ([
	'lightNodes',
	'materialNodes',
	'toneMappingNodes',
	'fromMaterial',
	'addToneMapping',
	'getToneMappingFunction',
	'getMaterialNodeClass',
	'addMaterial',
	'getLightNodeClass',
	'addLight',
	'addType',
	'addClass',
] as const).distinct()
objProps.nodeLibrary = _nodeLibrary


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type NodeLibraryArgs = {}

// The final Props type for the JSX component.
export type NodeLibraryProps = Node<NodeLibrary, typeof NodeLibrary, NodeLibraryArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		nodeLibrary: Partial<NodeLibraryArgs>
	}
}

defaults.nodeLibrary = {}