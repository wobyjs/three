import { Node } from '../../../three-types'
import MeshToonNodeMaterial from 'three/src/materials/nodes/MeshToonNodeMaterial.js'
export * from 'three/src/materials/nodes/MeshToonNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'

declare module '../../../lib/3/three'
{
	interface Three {
		MeshToonNodeMaterial: typeof MeshToonNodeMaterial
	}
}

Three.MeshToonNodeMaterial = MeshToonNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			meshToonNodeMaterial: MeshToonNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		meshToonNodeMaterial: typeof meshToonNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		meshToonNodeMaterial: typeof _meshToonNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const meshToonNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.meshToonNodeMaterial = meshToonNodeMaterial

// ---[ Object Properties ]---

// Inherits from NodeMaterial and adds its own properties and overridden methods.
// Assumes `objProps.nodeMaterial` has been defined.
const _meshToonNodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isMeshToonNodeMaterial',
	'setupLightingModel',
] as const).distinct()
objProps.meshToonNodeMaterial = _meshToonNodeMaterial


// ---[ Props & Defaults ]---

// The arguments are the same as the base NodeMaterial.
type MeshToonNodeMaterialArgs = NodeMaterialParameters

// The final Props type for the JSX component.
export type MeshToonNodeMaterialProps = Node<MeshToonNodeMaterial, typeof MeshToonNodeMaterial, MeshToonNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		meshToonNodeMaterial: Partial<MeshToonNodeMaterialArgs>
	}
}

defaults.meshToonNodeMaterial = {}