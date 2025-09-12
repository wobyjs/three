import { Node } from '../../../../three-types'
// This is an internal class for the renderer.
import FallbackWebGLCapabilities from 'three/src/renderers/webgl-fallback/utils/WebGLCapabilities.js'
export * from 'three/src/renderers/webgl/WebGLCapabilities.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
	interface Three {
		FallbackWebGLCapabilities: typeof FallbackWebGLCapabilities
	}
}

Three.FallbackWebGLCapabilities = FallbackWebGLCapabilities

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			fallbackWebGLCapabilities: WebGLCapabilitiesProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		fallbackWebGLCapabilities: typeof fallbackWebGLCapabilities
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		fallbackWebGLCapabilities: typeof _webGLCapabilities
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a WebGLBackend instance.
const fallbackWebGLCapabilities = ([
	'backend',
] as const).distinct()
consParams.fallbackWebGLCapabilities = fallbackWebGLCapabilities

// ---[ Object Properties ]---

// Lists the instance properties of the class.
const _webGLCapabilities = ([
	'backend',
	'maxAnisotropy',
	'getMaxAnisotropy',
] as const).distinct()
objProps.fallbackWebGLCapabilities = _webGLCapabilities


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type WebGLCapabilitiesArgs = {
	backend: any // type needs to be WebGLBackend - but avoid circular dependency.
}

// The final Props type for the JSX component.
export type WebGLCapabilitiesProps = Node<FallbackWebGLCapabilities, typeof FallbackWebGLCapabilities, WebGLCapabilitiesArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		fallbackWebGLCapabilities: Partial<WebGLCapabilitiesArgs>
	}
}

// The 'backend' argument is required, so the defaults object is empty.
defaults.fallbackWebGLCapabilities = {}