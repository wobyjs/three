import { Node } from '../../../three-types'
import VolumeNodeMaterial from 'three/src/materials/nodes/VolumeNodeMaterial.js'
export * from 'three/src/materials/nodes/VolumeNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'
import { Color } from 'three/src/math/Color.js'
import { Data3DTexture } from 'three/src/textures/Data3DTexture.js'

declare module '../../../lib/3/three'
{
	interface Three {
		VolumeNodeMaterial: typeof VolumeNodeMaterial
	}
}

Three.VolumeNodeMaterial = VolumeNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			volumeNodeMaterial: VolumeNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		volumeNodeMaterial: typeof volumeNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		volumeNodeMaterial: typeof _volumeNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const volumeNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.volumeNodeMaterial = volumeNodeMaterial

// ---[ Object Properties ]---

// Inherits from NodeMaterial and adds its own properties and overridden method.
// Assumes `objProps.nodeMaterial` has been defined.
const _volumeNodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isVolumeNodeMaterial',
	'base',
	'map',
	'steps',
	'testNode',
	'setup', // Overridden method
] as const).distinct()
objProps.volumeNodeMaterial = _volumeNodeMaterial


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
type VolumeNodeMaterialArgs = NodeMaterialParameters & {
	base?: Color
	map?: Data3DTexture | null
	steps?: number
	testNode?: Function | null // The callback function for raymarching tests.
}

// The final Props type for the JSX component.
export type VolumeNodeMaterialProps = Node<VolumeNodeMaterial, typeof VolumeNodeMaterial, VolumeNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		volumeNodeMaterial: Partial<VolumeNodeMaterialArgs>
	}
}

defaults.volumeNodeMaterial = {}