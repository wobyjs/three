import { Node } from '../../../three-types'
import MeshBasicNodeMaterial from 'three/src/materials/nodes/MeshBasicNodeMaterial.js'
export * from 'three/src/materials/nodes/MeshBasicNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'

declare module '../../../lib/3/three'
{
	interface Three {
		MeshBasicNodeMaterial: typeof MeshBasicNodeMaterial
	}
}

Three.MeshBasicNodeMaterial = MeshBasicNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			meshBasicNodeMaterial: MeshBasicNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		meshBasicNodeMaterial: typeof meshBasicNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		meshBasicNodeMaterial: typeof _meshBasicNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const meshBasicNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.meshBasicNodeMaterial = meshBasicNodeMaterial

// ---[ Object Properties ]---

// Inherits from NodeMaterial and adds its own properties and overridden methods.
// Assumes `objProps.nodeMaterial` has been defined.
const _meshBasicNodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isMeshBasicNodeMaterial',
	'setupNormal',
	'setupEnvironment',
	'setupLightMap',
	'setupOutgoingLight',
	'setupLightingModel',
] as const).distinct()
objProps.meshBasicNodeMaterial = _meshBasicNodeMaterial


// ---[ Props & Defaults ]---

// The arguments are the same as the base NodeMaterial.
type MeshBasicNodeMaterialArgs = NodeMaterialParameters

// The final Props type for the JSX component.
export type MeshBasicNodeMaterialProps = Node<MeshBasicNodeMaterial, typeof MeshBasicNodeMaterial, MeshBasicNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		meshBasicNodeMaterial: Partial<MeshBasicNodeMaterialArgs>
	}
}

defaults.meshBasicNodeMaterial = {}