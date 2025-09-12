import { Node } from '../../../three-types'
import IndirectStorageBufferAttribute from 'three/src/renderers/common/IndirectStorageBufferAttribute.js'
export * from 'three/src/renderers/common/IndirectStorageBufferAttribute.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		IndirectStorageBufferAttribute: typeof IndirectStorageBufferAttribute
	}
}

Three.IndirectStorageBufferAttribute = IndirectStorageBufferAttribute

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			indirectStorageBufferAttribute: IndirectStorageBufferAttributeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		indirectStorageBufferAttribute: typeof indirectStorageBufferAttribute
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		indirectStorageBufferAttribute: typeof _indirectStorageBufferAttribute
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a count and an itemSize.
const indirectStorageBufferAttribute = ([
	'count',
	'itemSize',
] as const).distinct()
consParams.indirectStorageBufferAttribute = indirectStorageBufferAttribute

// ---[ Object Properties ]---

// Inherits from StorageBufferAttribute and adds its own type flag.
// Assumes `objProps.storageBufferAttribute` has been defined.
const _indirectStorageBufferAttribute = ([
	...(objProps.storageBufferAttribute || []),
	'isIndirectStorageBufferAttribute',
] as const).distinct()
objProps.indirectStorageBufferAttribute = _indirectStorageBufferAttribute


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type IndirectStorageBufferAttributeArgs = {
	count: number | Uint32Array
	itemSize: number
}

// The final Props type for the JSX component.
export type IndirectStorageBufferAttributeProps = Node<IndirectStorageBufferAttribute, typeof IndirectStorageBufferAttribute, IndirectStorageBufferAttributeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		indirectStorageBufferAttribute: Partial<IndirectStorageBufferAttributeArgs>
	}
}

// The constructor arguments are required, so the defaults object is empty.
defaults.indirectStorageBufferAttribute = {}