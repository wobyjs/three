import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Textures from 'three/src/renderers/common/Textures.js'
export { Textures } //* from 'three/src/renderers/common/Textures.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

// Import dependencies for type hints (not all may be necessary as direct imports)
import { Info } from './Info'

declare module '../../../lib/3/three'
{
	interface Three {
		Textures: typeof Textures
	}
}

Three.Textures = Textures

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			textures: TexturesProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		textures: typeof textures
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		textures: typeof _textures
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a renderer, a backend, and an info manager.
const textures = ([
	'renderer',
	'backend',
	'info',
] as const).distinct()
consParams.textures = textures

// ---[ Object Properties ]---

const _textures = ([
	...(objProps.dataMap || []),
	'renderer',
	'backend',
	'info',
	'updateRenderTarget',
	'updateTexture',
	'getSize',
	'getMipLevels',
	'needsMipmaps',
	'isEnvironmentTexture',
	'_destroyTexture',
] as const).distinct()
objProps.textures = _textures

// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type TexturesArgs = {
	renderer: any // Type hint: Renderer - avoid circular dependency
	backend: any  // Type hint: Backend - avoid circular dependency
	info: Info
}

// The final Props type for the JSX component.
export type TexturesProps = Node<Textures, typeof Textures, TexturesArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		textures: Partial<TexturesArgs>
	}
}

// The constructor arguments are required for this class to function, so defaults is empty.
defaults.textures = {}