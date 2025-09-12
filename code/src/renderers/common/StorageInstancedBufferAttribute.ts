import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import StorageInstancedBufferAttribute from 'three/src/renderers/common/StorageInstancedBufferAttribute.js'
export * from 'three/src/renderers/common/StorageInstancedBufferAttribute.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		StorageInstancedBufferAttribute: typeof StorageInstancedBufferAttribute
	}
}

Three.StorageInstancedBufferAttribute = StorageInstancedBufferAttribute

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			storageInstancedBufferAttribute: StorageInstancedBufferAttributeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		storageInstancedBufferAttribute: typeof storageInstancedBufferAttribute
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		storageInstancedBufferAttribute: typeof _storageInstancedBufferAttribute
	}
}

// ---[ Constructor Parameters ]---

// The constructor can take (count, itemSize, typeClass) or a typed array.
const storageInstancedBufferAttribute = ([
	'count',
	'itemSize',
	'typeClass',
] as const).distinct()
consParams.storageInstancedBufferAttribute = storageInstancedBufferAttribute

// ---[ Object Properties ]---

// Inherits from InstancedBufferAttribute and adds its own type flag.
// Assumes `objProps.instancedBufferAttribute` has been defined.
const _storageInstancedBufferAttribute = ([
	...(objProps.instancedBufferAttribute || []),
	'isStorageInstancedBufferAttribute',
] as const).distinct()
objProps.storageInstancedBufferAttribute = _storageInstancedBufferAttribute


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type StorageInstancedBufferAttributeArgs = {
	count: number | ArrayBufferView
	itemSize: number
	typeClass?: any // e.g., Float32Array constructor
}

// The final Props type for the JSX component.
export type StorageInstancedBufferAttributeProps = Node<StorageInstancedBufferAttribute, typeof StorageInstancedBufferAttribute, StorageInstancedBufferAttributeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		storageInstancedBufferAttribute: Partial<StorageInstancedBufferAttributeArgs>
	}
}

// The 'count' and 'itemSize' arguments are required, so the defaults object is empty.
defaults.storageInstancedBufferAttribute = {}