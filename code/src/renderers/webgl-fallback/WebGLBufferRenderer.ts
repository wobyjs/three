import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import { WebGLBufferRenderer } from 'three/src/renderers/webgl/WebGLBufferRenderer.js'
export * from 'three/src/renderers/webgl/WebGLBufferRenderer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		WebGLBufferRenderer: typeof WebGLBufferRenderer
	}
}

Three.WebGLBufferRenderer = WebGLBufferRenderer

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			fallbackWebGLBufferRenderer: WebGLBufferRendererProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		fallbackWebGLBufferRenderer: typeof fallbackWebGLBufferRenderer
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		fallbackWebGLBufferRenderer: typeof _webGLBufferRenderer
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a backend.
const fallbackWebGLBufferRenderer = ([
	'backend',
] as const).distinct()
consParams.fallbackWebGLBufferRenderer = fallbackWebGLBufferRenderer

// ---[ Object Properties ]---

// Lists the instance properties and methods.
const _webGLBufferRenderer = ([
	'gl',
	'extensions',
	'info',
	'mode',
	'index',
	'type',
	'object',
	'render',
	'renderInstances',
	'renderMultiDraw',
	'renderMultiDrawInstances',
] as const).distinct()
objProps.fallbackWebGLBufferRenderer = _webGLBufferRenderer


// ---[ Props & Defaults ]---

// Defines the constructor arguments.
type WebGLBufferRendererArgs = {
	backend: any // type can be WebGLBackend - but avoid circular dependency
}

// The final Props type for the JSX component.
export type WebGLBufferRendererProps = Node<WebGLBufferRenderer, typeof WebGLBufferRenderer, WebGLBufferRendererArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		fallbackWebGLBufferRenderer: Partial<WebGLBufferRendererArgs>
	}
}

// The 'backend' argument is required, so the defaults object is empty.
defaults.fallbackWebGLBufferRenderer = {}