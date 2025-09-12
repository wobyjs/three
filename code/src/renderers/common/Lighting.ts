import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Lighting from 'three/src/renderers/common/Lighting.js'
export { Lighting }
export * from 'three/src/renderers/common/Lighting.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		Lighting: typeof Lighting
	}
}

Three.Lighting = Lighting

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			lighting: LightingProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		lighting: typeof lighting
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		lighting: typeof _lighting
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const lighting = ([] as const).distinct()
consParams.lighting = lighting

// ---[ Object Properties ]---

// Inherits from ChainMap and adds its own methods.
// Assumes `objProps.chainMap` has been defined.
const _lighting = ([
	...(objProps.chainMap || []),
	'createNode',
	'getNode',
] as const).distinct()
objProps.lighting = _lighting


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type LightingArgs = {}

// The final Props type for the JSX component.
export type LightingProps = Node<Lighting, typeof Lighting, LightingArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		lighting: Partial<LightingArgs>
	}
}

defaults.lighting = {}