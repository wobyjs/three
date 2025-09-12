import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Attributes from 'three/src/renderers/common/Attributes.js'
export { Attributes } //'three/src/renderers/common/Attributes.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import './DataMap'

declare module '../../../lib/3/three'
{
	interface Three {
		Attributes: typeof Attributes
	}
}

Three.Attributes = Attributes

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			attributes: AttributesProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		attributes: typeof attributes
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		attributes: typeof _attributes
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a backend.
const attributes = ([
	'backend',
] as const).distinct()
consParams.attributes = attributes

// ---[ Object Properties ]---

// Inherits from DataMap and adds its own properties and methods.
// Assumes `objProps.dataMap` has been defined.
const _attributes = ([
	...(objProps.dataMap || []),
	'backend',
	'delete',
	'update',
	'_getBufferAttribute',
] as const).distinct()
objProps.attributes = _attributes


// ---[ Props & Defaults ]---

// Defines the constructor arguments. Using 'any' for the internal 'backend' type for robustness.
type AttributesArgs = {
	backend: any
}

// The final Props type for the JSX component.
export type AttributesProps = Node<Attributes, typeof Attributes, AttributesArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		attributes: Partial<AttributesArgs>
	}
}

// The 'backend' argument is required, so the defaults object is empty.
defaults.attributes = {}