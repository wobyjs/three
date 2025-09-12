import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import UniformBuffer from 'three/src/renderers/common/UniformBuffer.js'
export * from 'three/src/renderers/common/UniformBuffer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		UniformBuffer: typeof UniformBuffer
	}
}

Three.UniformBuffer = UniformBuffer

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			uniformBuffer: UniformBufferProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		uniformBuffer: typeof uniformBuffer
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		uniformBuffer: typeof _uniformBuffer
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a name and an optional buffer.
const uniformBuffer = ([
	'name',
	'buffer',
] as const).distinct()
consParams.uniformBuffer = uniformBuffer

// ---[ Object Properties ]---

// Inherits from Buffer and adds its own properties.
// Assumes `objProps.buffer` has been defined.
const _uniformBuffer = ([
	...(objProps.buffer || []),
	'isUniformBuffer',
] as const).distinct()
objProps.uniformBuffer = _uniformBuffer


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type UniformBufferArgs = {
	name: string
	buffer?: ArrayBufferView | null
}

// The final Props type for the JSX component.
export type UniformBufferProps = Node<UniformBuffer, typeof UniformBuffer, UniformBufferArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		uniformBuffer: Partial<UniformBufferArgs>
	}
}

// The 'name' argument is required.
defaults.uniformBuffer = {}