import { Node } from '../../../three-types'
import QuadMesh from 'three/src/renderers/common/QuadMesh.js'
export * from 'three/src/renderers/common/QuadMesh.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		QuadMesh: typeof QuadMesh
	}
}

Three.QuadMesh = QuadMesh

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			quadMesh: QuadMeshProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		quadMesh: typeof quadMesh
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		quadMesh: typeof _quadMesh
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes an optional 'material'.
const quadMesh = ([
	'material',
] as const).distinct()
consParams.quadMesh = quadMesh

// ---[ Object Properties ]---

// Inherits from Mesh and adds its own properties.
// Assumes `objProps.mesh` has been defined.
const _quadMesh = ([
	...(objProps.mesh || []),
	'camera',
	'isQuadMesh',
	'renderAsync',
	'render',
] as const).distinct()
objProps.quadMesh = _quadMesh


// ---[ Props & Defaults ]---

// Defines the settable properties for component creation.
type QuadMeshArgs = {
	material?: any // Replace with actual Material type
}

// The final Props type for the JSX component.
export type QuadMeshProps = Node<QuadMesh, typeof QuadMesh, QuadMeshArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		quadMesh: Partial<QuadMeshArgs>
	}
}

// The constructor argument is optional.
defaults.quadMesh = {}