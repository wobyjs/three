import { Node } from '../../../three-types'
import Line2NodeMaterial from 'three/src/materials/nodes/Line2NodeMaterial.js'
export { Line2NodeMaterial } //* from 'three/src/materials/nodes/Line2NodeMaterial.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import TSLNode from 'three/src/nodes/core/Node.js'
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js'

declare module '../../../lib/3/three'
{
	interface Three {
		Line2NodeMaterial: typeof Line2NodeMaterial
	}
}

Three.Line2NodeMaterial = Line2NodeMaterial

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			line2NodeMaterial: Line2NodeMaterialProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		line2NodeMaterial: typeof line2NodeMaterial
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		line2NodeMaterial: typeof _line2NodeMaterial
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional `parameters` object.
const line2NodeMaterial = ([
	'parameters',
] as const).distinct()
consParams.line2NodeMaterial = line2NodeMaterial

// ---[ Object Properties ]---

// Inherits from NodeMaterial and adds its own specific properties and methods.
// Assumes `objProps.nodeMaterial` has been defined.
const _line2NodeMaterial = ([
	...(objProps.nodeMaterial || []),
	'isLine2NodeMaterial',
	'useColor',
	'dashOffset',
	'lineWidth',
	'lineColorNode',
	'offsetNode',
	'dashScaleNode',
	'dashSizeNode',
	'gapSizeNode',
	'blending',
	'_useDash',
	'_useAlphaToCoverage',
	'_useWorldUnits',
	'setup',
	'worldUnits', // getter/setter
	'dashed', // getter/setter
	'alphaToCoverage', // getter/setter
] as const).distinct()
objProps.line2NodeMaterial = _line2NodeMaterial


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
// It extends the base NodeMaterial parameters.
type Line2NodeMaterialArgs = NodeMaterialParameters & {
	vertexColors?: boolean
	dashed?: boolean
	dashOffset?: number
	lineWidth?: number
	worldUnits?: boolean
	alphaToCoverage?: boolean
	lineColorNode?: TSLNode | null
	offsetNode?: TSLNode | null
	dashScaleNode?: TSLNode | null
	dashSizeNode?: TSLNode | null
	gapSizeNode?: TSLNode | null
}

// The final Props type for the JSX component.
export type Line2NodeMaterialProps = Node<Line2NodeMaterial, typeof Line2NodeMaterial, Line2NodeMaterialArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		line2NodeMaterial: Partial<Line2NodeMaterialArgs>
	}
}

defaults.line2NodeMaterial = {}