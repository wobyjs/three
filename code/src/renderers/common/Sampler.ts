import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Sampler from 'three/src/renderers/common/Sampler.js'
export * from 'three/src/renderers/common/Sampler.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		Sampler: typeof Sampler
	}
}

Three.Sampler = Sampler

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			sampler: SamplerProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		sampler: typeof sampler
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		sampler: typeof _sampler
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a name and an optional texture.
const sampler = ([
	'name',
	'texture',
] as const).distinct()
consParams.sampler = sampler

// ---[ Object Properties ]---

// Inherits from Binding and adds its own properties.
// Assumes `objProps.binding` has been defined.
const _sampler = ([
	...(objProps.binding || []),
	'texture',
	'version',
	'isSampler',
] as const).distinct()
objProps.sampler = _sampler


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type SamplerArgs = {
	name: string
	texture?: any // Type can be Texture, but to prevent circularity in this file.
}

// The final Props type for the JSX component.
export type SamplerProps = Node<Sampler, typeof Sampler, SamplerArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		sampler: Partial<SamplerArgs>
	}
}

// The 'name' argument is required and the texture is optional, so just the 'texture' is in defaults.
defaults.sampler = {}