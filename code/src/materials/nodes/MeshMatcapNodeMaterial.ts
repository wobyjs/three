import { Node } from '../../../three-types'
import MeshMatcapNodeMaterial from 'three/src/materials/nodes/MeshMatcapNodeMaterial.js'
export * from 'three/src/materials/nodes/MeshMatcapNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		MeshMatcapNodeMaterial: typeof MeshMatcapNodeMaterial
	}
}

Three.MeshMatcapNodeMaterial = MeshMatcapNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			meshMatcapNodeMaterial: MeshMatcapNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		meshMatcapNodeMaterial: typeof meshMatcapNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		meshMatcapNodeMaterial: typeof _meshMatcapNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

const meshMatcapNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.meshMatcapNodeMaterial = meshMatcapNodeMaterial

// ---[ Object Properties ]---

const _meshMatcapNodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isMeshMatcapNodeMaterial',
	'setupVariants',
] as const).distinct()
objProps.meshMatcapNodeMaterial = _meshMatcapNodeMaterial


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type MeshMatcapNodeMaterialArgs = {
	parameters?: any
}

// The final Props type for the JSX component.
export type MeshMatcapNodeMaterialProps = Node<MeshMatcapNodeMaterial, typeof MeshMatcapNodeMaterial, MeshMatcapNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		meshMatcapNodeMaterial: Partial<MeshMatcapNodeMaterialArgs>
	}
}

defaults.meshMatcapNodeMaterial = {}