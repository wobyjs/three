import { Node } from '../../../three-types'
// This is the main entry point for the renderer, specialized for node materials.
import WebGPURenderer from 'three/src/renderers/webgpu/WebGPURenderer.js'
export * from 'three/src/renderers/webgpu/WebGPURenderer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

// Import dependencies for type hints (not all may be necessary as direct imports)

declare module '../../../lib/3/three'
{
	interface Three {
		WebGPURenderer: typeof WebGPURenderer
	}
}

Three.WebGPURenderer = WebGPURenderer

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			webGPURenderer: WebGPURendererProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		webGPURenderer: typeof webGPURenderer
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		webGPURenderer: typeof _webGPURenderer
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes optional parameters.
const webGPURenderer = ([
	'parameters',
] as const).distinct()
consParams.webGPURenderer = webGPURenderer

// ---[ Object Properties ]---

// Lists the instance properties and methods.
const _webGPURenderer = ([
	'isWebGPURenderer',
	'library',
] as const).distinct()
objProps.webGPURenderer = _webGPURenderer


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
type WebGPURendererArgs = {
	parameters?: { // Because this is the entry point, some types like Backend are flexible, and the framework's defaults system will ensure they are correct.
		logarithmicDepthBuffer?: boolean
		alpha?: boolean
		depth?: boolean
		stencil?: boolean
		antialias?: boolean
		samples?: number
		forceWebGL?: boolean
		outputType?: number // can be a constant
		colorBufferType?: number // can be a constant
	}
}

// The final Props type for the JSX component.
export type WebGPURendererProps = Node<WebGPURenderer, typeof WebGPURenderer, WebGPURendererArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		webGPURenderer: Partial<WebGPURendererArgs>
	}
}

defaults.webGPURenderer = {}