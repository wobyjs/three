import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import RenderContext from 'three/src/renderers/common/RenderContext.js'
export * from 'three/src/renderers/common/RenderContext.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		RenderContext: typeof RenderContext
	}
}

Three.RenderContext = RenderContext

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderContext: RenderContextProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		renderContext: typeof renderContext
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderContext: typeof _renderContext
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const renderContext = ([] as const).distinct()
consParams.renderContext = renderContext

// ---[ Object Properties ]---

// This is a flat list of the class's properties and methods.
const _renderContext = ([
	'id',
	'color',
	'clearColor',
	'clearColorValue',
	'depth',
	'clearDepth',
	'clearDepthValue',
	'stencil',
	'clearStencil',
	'clearStencilValue',
	'viewport',
	'viewportValue',
	'scissor',
	'scissorValue',
	'renderTarget',
	'textures',
	'depthTexture',
	'activeCubeFace',
	'activeMipmapLevel',
	'sampleCount',
	'width',
	'height',
	'occlusionQueryCount',
	'clippingContext',
	'isRenderContext',
	'getCacheKey',
] as const).distinct()
objProps.renderContext = _renderContext


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type RenderContextArgs = {}

// The final Props type for the JSX component.
export type RenderContextProps = Node<RenderContext, typeof RenderContext, RenderContextArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		renderContext: Partial<RenderContextArgs>
	}
}

defaults.renderContext = {}