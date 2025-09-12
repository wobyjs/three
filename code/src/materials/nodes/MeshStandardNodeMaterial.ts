import { Node } from '../../../three-types'
import MeshStandardNodeMaterial from 'three/src/materials/nodes/MeshStandardNodeMaterial.js'
export * from 'three/src/materials/nodes/MeshStandardNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		MeshStandardNodeMaterial: typeof MeshStandardNodeMaterial
	}
}

Three.MeshStandardNodeMaterial = MeshStandardNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			meshStandardNodeMaterial: MeshStandardNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		meshStandardNodeMaterial: typeof meshStandardNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		meshStandardNodeMaterial: typeof _meshStandardNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const meshStandardNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.meshStandardNodeMaterial = meshStandardNodeMaterial

// ---[ Object Properties ]---

// Inherits from NodeMaterial and adds its own properties and overridden methods.
// Assumes `objProps.nodeMaterial` has been defined.
const _meshStandardNodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isMeshStandardNodeMaterial',
	'emissiveNode',
	'metalnessNode',
	'roughnessNode',
	'setupEnvironment',
	'setupLightingModel',
	'setupSpecular',
	'setupVariants',
	'copy',
] as const).distinct()
objProps.meshStandardNodeMaterial = _meshStandardNodeMaterial


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
type MeshStandardNodeMaterialArgs = NodeMaterialParameters & {
	emissiveNode?: TSLNode | null
	metalnessNode?: TSLNode | null
	roughnessNode?: TSLNode | null
}

// The final Props type for the JSX component.
export type MeshStandardNodeMaterialProps = Node<MeshStandardNodeMaterial, typeof MeshStandardNodeMaterial, MeshStandardNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		meshStandardNodeMaterial: Partial<MeshStandardNodeMaterialArgs>
	}
}

defaults.meshStandardNodeMaterial = {}