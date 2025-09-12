import { Node } from '../../../three-types'
import LineBasicNodeMaterial from 'three/src/materials/nodes/LineBasicNodeMaterial.js'
export * from 'three/src/materials/nodes/LineBasicNodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'

declare module '../../../lib/3/three'
{
	interface Three {
		LineBasicNodeMaterial: typeof LineBasicNodeMaterial
	}
}

Three.LineBasicNodeMaterial = LineBasicNodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			lineBasicNodeMaterial: LineBasicNodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		lineBasicNodeMaterial: typeof lineBasicNodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		lineBasicNodeMaterial: typeof _lineBasicNodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const lineBasicNodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.lineBasicNodeMaterial = lineBasicNodeMaterial

// ---[ Object Properties ]---

// Inherits from NodeMaterial and adds its own type flag.
// Assumes `objProps.nodeMaterial` has been defined.
const _lineBasicNodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isLineBasicNodeMaterial',
] as const).distinct()
objProps.lineBasicNodeMaterial = _lineBasicNodeMaterial


// ---[ Props & Defaults ]---

// The arguments are the same as the base NodeMaterial.
type LineBasicNodeMaterialArgs = NodeMaterialParameters

// The final Props type for the JSX component.
export type LineBasicNodeMaterialProps = Node<LineBasicNodeMaterial, typeof LineBasicNodeMaterial, LineBasicNodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		lineBasicNodeMaterial: Partial<LineBasicNodeMaterialArgs>
	}
}

defaults.lineBasicNodeMaterial = {}