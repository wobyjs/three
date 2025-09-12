import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Geometries from 'three/src/renderers/common/Geometries.js'
export * from 'three/src/renderers/common/Geometries.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
// Import dependency types
import { Attributes } from './Attributes'
import { Info } from './Info'

declare module '../../../lib/3/three'
{
	interface Three {
		Geometries: typeof Geometries
	}
}

Three.Geometries = Geometries

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			geometries: GeometriesProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		geometries: typeof geometries
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		geometries: typeof _geometries
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes an attributes and an info manager.
const geometries = ([
	'attributes',
	'info',
] as const).distinct()
consParams.geometries = geometries

// ---[ Object Properties ]---

// Inherits from DataMap and adds its own properties and methods.
// Assumes `objProps.dataMap` has been defined.
const _geometries = ([
	...(objProps.dataMap || []),
	'attributes',
	'info',
	'wireframes',
	'attributeCall',
	'has',
	'updateForRender',
	'initGeometry',
	'updateAttributes',
	'updateAttribute',
	'getIndirect',
	'getIndex',
] as const).distinct()
objProps.geometries = _geometries


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type GeometriesArgs = {
	attributes: Attributes
	info: Info
}

// The final Props type for the JSX component.
export type GeometriesProps = Node<Geometries, typeof Geometries, GeometriesArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		geometries: Partial<GeometriesArgs>
	}
}

// All constructor arguments are required, so the defaults object is empty.
defaults.geometries = {}