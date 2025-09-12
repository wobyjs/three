import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import StorageBuffer from 'three/src/renderers/common/StorageBuffer.js'
export * from 'three/src/renderers/common/StorageBuffer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { BufferAttribute } from 'three/src/core/BufferAttribute.js'

declare module '../../../lib/3/three'
{
	interface Three {
		StorageBuffer: typeof StorageBuffer
	}
}

Three.StorageBuffer = StorageBuffer

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			storageBuffer: StorageBufferProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		storageBuffer: typeof storageBuffer
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		storageBuffer: typeof _storageBuffer
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a name and an optional attribute.
const storageBuffer = ([
	'name',
	'attribute',
] as const).distinct()
consParams.storageBuffer = storageBuffer

// ---[ Object Properties ]---

// Inherits from Buffer and adds its own properties.
// Assumes `objProps.buffer` has been defined.
const _storageBuffer = ([
	...(objProps.buffer || []),
	'attribute',
	'isStorageBuffer',
] as const).distinct()
objProps.storageBuffer = _storageBuffer


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type StorageBufferArgs = {
	name: string
	attribute?: BufferAttribute | null
}

// The final Props type for the JSX component.
export type StorageBufferProps = Node<StorageBuffer, typeof StorageBuffer, StorageBufferArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		storageBuffer: Partial<StorageBufferArgs>
	}
}

// The 'name' argument is required and the attribute is optional.
defaults.storageBuffer = {}