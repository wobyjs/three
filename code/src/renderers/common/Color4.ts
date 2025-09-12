import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Color4 from 'three/src/renderers/common/Color4.js'
export * from 'three/src/renderers/common/Color4.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { ColorRepresentation } from '../../../src/math/Color'

declare module '../../../lib/3/three'
{
	interface Three {
		Color4: typeof Color4
	}
}

Three.Color4 = Color4

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			color4: Color4Props,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		color4: typeof color4
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		color4: typeof _color4
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes r, g, b, and an optional alpha.
const color4 = ([
	'r',
	'g',
	'b',
	'a',
] as const).distinct()
consParams.color4 = color4

// ---[ Object Properties ]---

// Inherits from Color and adds its own properties.
// Assumes `objProps.color` has been defined.
const _color4 = ([
	...(objProps.color || []),
	'a',
	'set', // Overridden method
	'copy', // Overridden method
	'clone', // Overridden method
] as const).distinct()
objProps.color4 = _color4


// ---[ Props & Defaults ]---

// Defines the settable properties for component creation.
type Color4Args = {
	r?: ColorRepresentation
	g?: number
	b?: number
	a?: number
}

// The final Props type for the JSX component.
export type Color4Props = Node<Color4, typeof Color4, Color4Args>

declare module '../../../lib/3/defaults' {
	interface defaults {
		color4: Partial<Color4Args>
	}
}

// The 'r', 'g', and 'b' can be a color, but it may be easier for the user to declare an empty default.
defaults.color4 = {}