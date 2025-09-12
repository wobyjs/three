import { Node } from '../../../three-types'
import MeshNormalNodeMaterial from 'three/src/materials/nodes/MeshNormalNodeMaterial.js'
export * from 'three/src/materials/nodes/MeshNormalNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		MeshNormalNodeMaterial: typeof MeshNormalNodeMaterial
	}
}

Three.MeshNormalNodeMaterial = MeshNormalNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			meshNormalNodeMaterial: MeshNormalNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		meshNormalNodeMaterial: typeof meshNormalNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		meshNormalNodeMaterial: typeof _meshNormalNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const meshNormalNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.meshNormalNodeMaterial = meshNormalNodeMaterial

// ---[ Object Properties ]---

const _meshNormalNodeMaterial = ([
	...(objProps.nodeMaterial || []), // Inherit properties from NodeMaterial
	'isMeshNormalNodeMaterial',
	'isMeshNormalMaterial',  // Added from the original source
	'bumpMap',               // Added from the original source
	'bumpScale',             // Added from the original source
	'normalMap',             // Added from the original source
	'normalMapType',          // Added from the original source
	'normalScale',           // Added from the original source
	'displacementMap',       // Added from the original source
	'displacementScale',     // Added from the original source
	'displacementBias',      // Added from the original source
	'wireframe',             // Added from the original source
	'wireframeLinewidth',    // Added from the original source
	'flatShading',           // Added from the original source
] as const).distinct()
objProps.meshNormalNodeMaterial = _meshNormalNodeMaterial

// ---[ Props & Defaults ]---

type MeshNormalNodeMaterialParameters = {
	// ... parameters from NodeMaterial
	// ... parameters from MeshNormalMaterial (directly copied here because it's not in our framework)
	bumpMap?: any
	bumpScale?: number
	normalMap?: any
	normalMapType?: any
	normalScale?: any
	displacementMap?: any
	displacementScale?: number
	displacementBias?: number
	wireframe?: boolean
	wireframeLinewidth?: number
	flatShading?: boolean
} & { [key: string]: any }

type MeshNormalNodeMaterialArgs = MeshNormalNodeMaterialParameters

// The final Props type for the JSX component.
export type MeshNormalNodeMaterialProps = Node<MeshNormalNodeMaterial, typeof MeshNormalNodeMaterial, MeshNormalNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		meshNormalNodeMaterial: Partial<MeshNormalNodeMaterialArgs>
	}
}

defaults.meshNormalNodeMaterial = {}