import { Node } from '../../../three-types'
import MeshLambertNodeMaterial from 'three/src/materials/nodes/MeshLambertNodeMaterial.js'
export * from 'three/src/materials/nodes/MeshLambertNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'

declare module '../../../lib/3/three'
{
	interface Three {
		MeshLambertNodeMaterial: typeof MeshLambertNodeMaterial
	}
}

Three.MeshLambertNodeMaterial = MeshLambertNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			meshLambertNodeMaterial: MeshLambertNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		meshLambertNodeMaterial: typeof meshLambertNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		meshLambertNodeMaterial: typeof _meshLambertNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const meshLambertNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.meshLambertNodeMaterial = meshLambertNodeMaterial

// ---[ Object Properties ]---

// Inherits from NodeMaterial and adds its own properties and overridden methods.
// Assumes `objProps.nodeMaterial` has been defined.
const _meshLambertNodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isMeshLambertNodeMaterial',
	'setupEnvironment',
	'setupLightingModel',
] as const).distinct()
objProps.meshLambertNodeMaterial = _meshLambertNodeMaterial


// ---[ Props & Defaults ]---

// The arguments are the same as the base NodeMaterial.
type MeshLambertNodeMaterialArgs = NodeMaterialParameters

// The final Props type for the JSX component.
export type MeshLambertNodeMaterialProps = Node<MeshLambertNodeMaterial, typeof MeshLambertNodeMaterial, MeshLambertNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		meshLambertNodeMaterial: Partial<MeshLambertNodeMaterialArgs>
	}
}

defaults.meshLambertNodeMaterial = {}