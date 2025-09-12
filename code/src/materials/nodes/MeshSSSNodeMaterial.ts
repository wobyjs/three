import { Node } from '../../../three-types'
import MeshSSSNodeMaterial from 'three/src/materials/nodes/MeshSSSNodeMaterial.js'
export * from 'three/src/materials/nodes/MeshSSSNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		MeshSSSNodeMaterial: typeof MeshSSSNodeMaterial
	}
}

Three.MeshSSSNodeMaterial = MeshSSSNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			meshSssNodeMaterial: MeshSSSNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		meshSssNodeMaterial: typeof meshSssNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		meshSssNodeMaterial: typeof _meshSssNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// Inherits constructor from MeshPhysicalNodeMaterial
const meshSssNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.meshSssNodeMaterial = meshSssNodeMaterial

// ---[ Object Properties ]---

// Inherits from MeshPhysicalNodeMaterial and adds its own properties and methods.
// Assumes `objProps.meshPhysicalNodeMaterial` has been defined.
const _meshSssNodeMaterial = ([
	...(objProps.meshPhysicalNodeMaterial || []),
	'isMeshSSSNodeMaterial',
	'thicknessColorNode',
	'thicknessDistortionNode',
	'thicknessAmbientNode',
	'thicknessAttenuationNode',
	'thicknessPowerNode',
	'thicknessScaleNode',
	'useSSS', // getter
	'setupLightingModel',
	'copy',
] as const).distinct()
objProps.meshSssNodeMaterial = _meshSssNodeMaterial


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
// This extends the base material parameters with SSS-specific nodes.
type MeshSSSNodeMaterialArgs = NodeMaterialParameters & { // Note: Could also extend MeshPhysicalNodeMaterialArgs if it exists
	thicknessColorNode?: TSLNode | null
	thicknessDistortionNode?: TSLNode | null
	thicknessAmbientNode?: TSLNode | null
	thicknessAttenuationNode?: TSLNode | null
	thicknessPowerNode?: TSLNode | null
	thicknessScaleNode?: TSLNode | null
}

// The final Props type for the JSX component.
export type MeshSSSNodeMaterialProps = Node<MeshSSSNodeMaterial, typeof MeshSSSNodeMaterial, MeshSSSNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		meshSssNodeMaterial: Partial<MeshSSSNodeMaterialArgs>
	}
}

defaults.meshSssNodeMaterial = {}