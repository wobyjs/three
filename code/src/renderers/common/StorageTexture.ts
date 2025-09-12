import { Node } from '../../../three-types'
import StorageTexture from 'three/src/renderers/common/StorageTexture.js'
export * from 'three/src/renderers/common/StorageTexture.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		StorageTexture: typeof StorageTexture
	}
}

Three.StorageTexture = StorageTexture

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			storageTexture: StorageTextureProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		storageTexture: typeof storageTexture
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		storageTexture: typeof _storageTexture
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes optional width and height.
const storageTexture = ([
	'width',
	'height',
] as const).distinct()
consParams.storageTexture = storageTexture

// ---[ Object Properties ]---

// Inherits from Texture and adds its own properties.
// Assumes `objProps.texture` has been defined.
const _storageTexture = ([
	...(objProps.texture || []),
	'image',
	'magFilter',
	'minFilter',
	'isStorageTexture',
] as const).distinct()
objProps.storageTexture = _storageTexture


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type StorageTextureArgs = {
	width?: number
	height?: number
}

// The final Props type for the JSX component.
export type StorageTextureProps = Node<StorageTexture, typeof StorageTexture, StorageTextureArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		storageTexture: Partial<StorageTextureArgs>
	}
}

defaults.storageTexture = {}