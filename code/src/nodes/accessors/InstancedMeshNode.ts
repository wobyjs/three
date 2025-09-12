import { Node } from '../../../three-types'
import InstancedMeshNode, { instancedMesh } from 'three/src/nodes/accessors/InstancedMeshNode.js'
export * from 'three/src/nodes/accessors/InstancedMeshNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { InstancedMesh } from 'three/src/objects/InstancedMesh.js'

declare module '../../../lib/3/three'
{
	interface Three {
		InstancedMeshNode: typeof InstancedMeshNode,
		instancedMesh: typeof instancedMesh
	}
}

// Make the class and the factory function available under the Three namespace.
Three.InstancedMeshNode = InstancedMeshNode
Three.instancedMesh = instancedMesh

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			instancedMeshNode: InstancedMeshNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		instancedMeshNode: typeof instancedMeshNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		instancedMeshNode: typeof _instancedMeshNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single 'instancedMesh' object argument.
const instancedMeshNode = ([
	'instancedMesh',
] as const).distinct()
consParams.instancedMeshNode = instancedMeshNode

// ---[ Object Properties ]---

// Inherits from InstanceNode and adds its own specific properties.
// Assumes `objProps.instanceNode` has been defined.
const _instancedMeshNode = ([
	...(objProps.instanceNode || []),
	'instancedMesh',
] as const).distinct()
objProps.instancedMeshNode = _instancedMeshNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type InstancedMeshNodeArgs = {
	instancedMesh: InstancedMesh
}

// The final Props type for the JSX component.
export type InstancedMeshNodeProps = Node<InstancedMeshNode, typeof InstancedMeshNode, InstancedMeshNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		instancedMeshNode: Partial<InstancedMeshNodeArgs>
	}
}

// The 'instancedMesh' argument is required, so the defaults object is empty.
defaults.instancedMeshNode = {}