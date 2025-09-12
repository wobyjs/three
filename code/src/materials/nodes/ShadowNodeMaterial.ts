import { Node } from '../../../three-types'
import ShadowNodeMaterial from 'three/src/materials/nodes/ShadowNodeMaterial.js'
export * from 'three/src/materials/nodes/ShadowNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'

declare module '../../../lib/3/three'
{
	interface Three {
		ShadowNodeMaterial: typeof ShadowNodeMaterial
	}
}

Three.ShadowNodeMaterial = ShadowNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			shadowNodeMaterial: ShadowNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		shadowNodeMaterial: typeof shadowNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		shadowNodeMaterial: typeof _shadowNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const shadowNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.shadowNodeMaterial = shadowNodeMaterial

// ---[ Object Properties ]---

// Inherits from NodeMaterial and adds its own properties and overridden method.
// Assumes `objProps.nodeMaterial` has been defined.
const _shadowNodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isShadowNodeMaterial',
	'setupLightingModel',
] as const).distinct()
objProps.shadowNodeMaterial = _shadowNodeMaterial


// ---[ Props & Defaults ]---

// The arguments are the same as the base NodeMaterial.
type ShadowNodeMaterialArgs = NodeMaterialParameters

// The final Props type for the JSX component.
export type ShadowNodeMaterialProps = Node<ShadowNodeMaterial, typeof ShadowNodeMaterial, ShadowNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		shadowNodeMaterial: Partial<ShadowNodeMaterialArgs>
	}
}

defaults.shadowNodeMaterial = {}