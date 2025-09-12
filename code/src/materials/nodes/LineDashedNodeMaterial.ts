import { Node } from '../../../three-types'
import LineDashedNodeMaterial from 'three/src/materials/nodes/LineDashedNodeMaterial.js'
export * from 'three/src/materials/nodes/LineDashedNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'
import TSLNode from 'three/src/nodes/core/Node.js'

declare module '../../../lib/3/three'
{
	interface Three {
		LineDashedNodeMaterial: typeof LineDashedNodeMaterial
	}
}

Three.LineDashedNodeMaterial = LineDashedNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			lineDashedNodeMaterial: LineDashedNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		lineDashedNodeMaterial: typeof lineDashedNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		lineDashedNodeMaterial: typeof _lineDashedNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const lineDashedNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.lineDashedNodeMaterial = lineDashedNodeMaterial

// ---[ Object Properties ]---

// Inherits from NodeMaterial and adds its own specific properties and methods.
// Assumes `objProps.nodeMaterial` has been defined.
const _lineDashedNodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isLineDashedNodeMaterial',
	'dashOffset',
	'offsetNode',
	'dashScaleNode',
	'dashSizeNode',
	'gapSizeNode',
	'setupVariants', // Overridden method
] as const).distinct()
objProps.lineDashedNodeMaterial = _lineDashedNodeMaterial


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
// It extends the base NodeMaterial parameters.
type LineDashedNodeMaterialArgs = NodeMaterialParameters & {
	dashOffset?: number
	offsetNode?: TSLNode | null
	dashScaleNode?: TSLNode | null
	dashSizeNode?: TSLNode | null
	gapSizeNode?: TSLNode | null
}

// The final Props type for the JSX component.
export type LineDashedNodeMaterialProps = Node<LineDashedNodeMaterial, typeof LineDashedNodeMaterial, LineDashedNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		lineDashedNodeMaterial: Partial<LineDashedNodeMaterialArgs>
	}
}

defaults.lineDashedNodeMaterial = {}