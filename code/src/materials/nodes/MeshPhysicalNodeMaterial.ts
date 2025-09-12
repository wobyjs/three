import { Node } from '../../../three-types'
import MeshPhysicalNodeMaterial from 'three/src/materials/nodes/MeshPhysicalNodeMaterial.js'
export * from 'three/src/materials/nodes/MeshPhysicalNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		MeshPhysicalNodeMaterial: typeof MeshPhysicalNodeMaterial
	}
}

Three.MeshPhysicalNodeMaterial = MeshPhysicalNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			meshPhysicalNodeMaterial: MeshPhysicalNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		meshPhysicalNodeMaterial: typeof meshPhysicalNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		meshPhysicalNodeMaterial: typeof _meshPhysicalNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const meshPhysicalNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.meshPhysicalNodeMaterial = meshPhysicalNodeMaterial

// ---[ Object Properties ]---

// Inherits from MeshStandardNodeMaterial and adds many new properties and methods.
// Assumes `objProps.meshStandardNodeMaterial` has been defined.
const _meshPhysicalNodeMaterial = ([
	...(objProps.meshStandardNodeMaterial || []),
	'isMeshPhysicalNodeMaterial',
	'clearcoatNode',
	'clearcoatRoughnessNode',
	'clearcoatNormalNode',
	'sheenNode',
	'sheenRoughnessNode',
	'iridescenceNode',
	'iridescenceIORNode',
	'iridescenceThicknessNode',
	'specularIntensityNode',
	'specularColorNode',
	'iorNode',
	'transmissionNode',
	'thicknessNode',
	'attenuationDistanceNode',
	'attenuationColorNode',
	'dispersionNode',
	'anisotropyNode',
	'useClearcoat', // getter
	'useIridescence', // getter
	'useSheen', // getter
	'useAnisotropy', // getter
	'useTransmission', // getter
	'useDispersion', // getter
	'setupSpecular',
	'setupLightingModel',
	'setupVariants',
	'setupClearcoatNormal',
	'setup',
	'copy',
] as const).distinct()
objProps.meshPhysicalNodeMaterial = _meshPhysicalNodeMaterial


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties, extending the base material.
type MeshPhysicalNodeMaterialArgs = NodeMaterialParameters & {
	clearcoatNode?: TSLNode | null
	clearcoatRoughnessNode?: TSLNode | null
	clearcoatNormalNode?: TSLNode | null
	sheenNode?: TSLNode | null
	sheenRoughnessNode?: TSLNode | null
	iridescenceNode?: TSLNode | null
	iridescenceIORNode?: TSLNode | null
	iridescenceThicknessNode?: TSLNode | null
	specularIntensityNode?: TSLNode | null
	specularColorNode?: TSLNode | null
	iorNode?: TSLNode | null
	transmissionNode?: TSLNode | null
	thicknessNode?: TSLNode | null
	attenuationDistanceNode?: TSLNode | null
	attenuationColorNode?: TSLNode | null
	dispersionNode?: TSLNode | null
	anisotropyNode?: TSLNode | null
}

// The final Props type for the JSX component.
export type MeshPhysicalNodeMaterialProps = Node<MeshPhysicalNodeMaterial, typeof MeshPhysicalNodeMaterial, MeshPhysicalNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		meshPhysicalNodeMaterial: Partial<MeshPhysicalNodeMaterialArgs>
	}
}

defaults.meshPhysicalNodeMaterial = {}