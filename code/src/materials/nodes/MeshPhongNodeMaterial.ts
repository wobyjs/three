import { Node } from '../../../three-types'
import MeshPhongNodeMaterial from 'three/src/materials/nodes/MeshPhongNodeMaterial.js'
export * from 'three/src/materials/nodes/MeshPhongNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		MeshPhongNodeMaterial: typeof MeshPhongNodeMaterial
	}
}

Three.MeshPhongNodeMaterial = MeshPhongNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			meshPhongNodeMaterial: MeshPhongNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		meshPhongNodeMaterial: typeof meshPhongNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		meshPhongNodeMaterial: typeof _meshPhongNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const meshPhongNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.meshPhongNodeMaterial = meshPhongNodeMaterial

// ---[ Object Properties ]---

// Inherits from NodeMaterial and adds its own properties and overridden methods.
// Assumes `objProps.nodeMaterial` has been defined.
const _meshPhongNodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isMeshPhongNodeMaterial',
	'shininessNode',
	'specularNode',
	'setupEnvironment',
	'setupLightingModel',
	'setupVariants',
	'copy',
] as const).distinct()
objProps.meshPhongNodeMaterial = _meshPhongNodeMaterial


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
type MeshPhongNodeMaterialArgs = NodeMaterialParameters & {
	shininessNode?: TSLNode | null
	specularNode?: TSLNode | null
}

// The final Props type for the JSX component.
export type MeshPhongNodeMaterialProps = Node<MeshPhongNodeMaterial, typeof MeshPhongNodeMaterial, MeshPhongNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		meshPhongNodeMaterial: Partial<MeshPhongNodeMaterialArgs>
	}
}

defaults.meshPhongNodeMaterial = {}