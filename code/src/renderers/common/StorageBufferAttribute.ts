import { Node } from '../../../three-types'
import StorageBufferAttribute from 'three/src/renderers/common/StorageBufferAttribute.js'
export * from 'three/src/renderers/common/StorageBufferAttribute.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		StorageBufferAttribute: typeof StorageBufferAttribute
	}
}

Three.StorageBufferAttribute = StorageBufferAttribute

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			storageBufferAttribute: StorageBufferAttributeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		storageBufferAttribute: typeof storageBufferAttribute
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		storageBufferAttribute: typeof _storageBufferAttribute
	}
}

// ---[ Constructor Parameters ]---

// The constructor can take (count, itemSize, typeClass) or a typed array.
const storageBufferAttribute = ([
	'count',
	'itemSize',
	'typeClass',
] as const).distinct()
consParams.storageBufferAttribute = storageBufferAttribute

// ---[ Object Properties ]---

// Inherits from BufferAttribute and adds its own type flag.
// Assumes `objProps.bufferAttribute` has been defined.
const _storageBufferAttribute = ([
	...(objProps.bufferAttribute || []),
	'isStorageBufferAttribute',
] as const).distinct()
objProps.storageBufferAttribute = _storageBufferAttribute


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type StorageBufferAttributeArgs = {
	count: number | ArrayBufferView
	itemSize: number
	typeClass?: any // e.g., Float32Array constructor
}

// The final Props type for the JSX component.
export type StorageBufferAttributeProps = Node<StorageBufferAttribute, typeof StorageBufferAttribute, StorageBufferAttributeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		storageBufferAttribute: Partial<StorageBufferAttributeArgs>
	}
}

// The 'count' and 'itemSize' arguments are required, so the defaults object is empty.
defaults.storageBufferAttribute = {}