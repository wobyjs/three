import { Node } from '../../../../three-types'
// This is an internal class for the renderer.
import FallbackWebGLExtensions from 'three/src/renderers/webgl-fallback/utils/WebGLExtensions.js'
export * from 'three/src/renderers/webgl-fallback/utils/WebGLExtensions.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
	interface Three {
		FallbackWebGLExtensions: typeof FallbackWebGLExtensions
	}
}

Three.FallbackWebGLExtensions = FallbackWebGLExtensions

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			fallbackWebGLExtensions: WebGLExtensionsProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		fallbackWebGLExtensions: typeof fallbackWebGLExtensions
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		fallbackWebGLExtensions: typeof _webGLExtensions
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a WebGLBackend instance.
const fallbackWebGLExtensions = ([
	'backend',
] as const).distinct()
consParams.fallbackWebGLExtensions = fallbackWebGLExtensions

// ---[ Object Properties ]---

// Lists the instance properties of the class.
const _webGLExtensions = ([
	'backend',
	'gl',
	'availableExtensions',
	'extensions',
	'get',
	'has',
] as const).distinct()
objProps.fallbackWebGLExtensions = _webGLExtensions


// ---[ Props & Defaults ]---

// Defines the constructor arguments.
type WebGLExtensionsArgs = {
	backend: any // needs to be WebGLBackend, but avoids circular dependency
}

// The final Props type for the JSX component.
export type WebGLExtensionsProps = Node<FallbackWebGLExtensions, typeof FallbackWebGLExtensions, WebGLExtensionsArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		fallbackWebGLExtensions: Partial<WebGLExtensionsArgs>
	}
}

// The 'backend' argument is required, so the defaults object is empty.
defaults.fallbackWebGLExtensions = {}