import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Buffer from 'three/src/renderers/common/Buffer.js'
export * from 'three/src/renderers/common/Buffer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		Buffer: typeof Buffer
	}
}

Three.Buffer = Buffer

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			buffer: BufferProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		buffer: typeof buffer
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		buffer: typeof _buffer
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a name and an optional buffer.
const buffer = ([
	'name',
	'buffer',
] as const).distinct()
consParams.buffer = buffer

// ---[ Object Properties ]---

// Inherits from Binding and adds its own properties and methods.
// Assumes `objProps.binding` has been defined.
const _buffer = ([
	...(objProps.binding || []),
	'isBuffer',
	'bytesPerElement',
	'_buffer',
	'byteLength', // getter
	'buffer', // getter
	'update',
] as const).distinct()
objProps.buffer = _buffer


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type BufferArgs = {
	name?: string
	buffer?: ArrayBufferView | null
}

// The final Props type for the JSX component.
export type BufferProps = Node<Buffer, typeof Buffer, BufferArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		buffer: Partial<BufferArgs>
	}
}

// The 'name' argument is optional.
defaults.buffer = {}