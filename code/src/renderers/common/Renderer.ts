import { Node } from '../../../three-types'
// This is a core class for the renderer.
import Renderer from 'three/src/renderers/common/Renderer.js'
export { Renderer } //from 'three/src/renderers/common/Renderer.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
// import { ColorRepresentation } from 'three/src/utils.js'

declare module '../../../lib/3/three'
{
	interface Three {
		Renderer: typeof Renderer
	}
}

Three.Renderer = Renderer

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderer: RendererProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		renderer: typeof renderer
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderer: typeof _renderer
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a backend and an optional parameters object.
const renderer = ([
	'backend',
	'parameters',
] as const).distinct()
consParams.renderer = renderer

// ---[ Object Properties ]---

// This is a comprehensive list of all public and internal properties and methods of the Renderer class.
const _renderer = ([
	'isRenderer',
	'domElement',
	'backend',
	'samples',
	'autoClear',
	'autoClearColor',
	'autoClearDepth',
	'autoClearStencil',
	'alpha',
	'logarithmicDepthBuffer',
	'outputColorSpace',
	'toneMapping',
	'toneMappingExposure',
	'sortObjects',
	'depth',
	'stencil',
	'info',
	'nodes',
	'library',
	'lighting',
	'_getFallback',
	'_pixelRatio',
	'_width',
	'_height',
	'_viewport',
	'_scissor',
	'_scissorTest',
	'_attributes',
	'_geometries',
	'_nodes',
	'_animation',
	'_bindings',
	'_objects',
	'_pipelines',
	'_bundles',
	'_renderLists',
	'_renderContexts',
	'_textures',
	'_background',
	'_quad',
	'_currentRenderContext',
	'_opaqueSort',
	'_transparentSort',
	'_frameBufferTarget',
	'_clearColor',
	'_clearDepth',
	'_clearStencil',
	'_renderTarget',
	'_activeCubeFace',
	'_activeMipmapLevel',
	'_mrt',
	'_renderObjectFunction',
	'_currentRenderObjectFunction',
	'_currentRenderBundle',
	'_handleObjectFunction',
	'_isDeviceLost',
	'onDeviceLost',
	'_colorBufferType',
	'_initialized',
	'_initPromise',
	'_compilationPromises',
	'transparent',
	'opaque',
	'shadowMap',
	'xr',
	'debug',
	'init',
	'coordinateSystem', // getter
	'compileAsync',
	'renderAsync',
	'waitForGPU',
	'setMRT',
	'getMRT',
	'getColorBufferType',
	'_onDeviceLost',
	'render',
	'_getFrameBufferTarget',
	'_renderScene',
	'getMaxAnisotropy',
	'getActiveCubeFace',
	'getActiveMipmapLevel',
	'setAnimationLoop',
	'getArrayBufferAsync',
	'getContext',
	'getPixelRatio',
	'getDrawingBufferSize',
	'getSize',
	'setPixelRatio',
	'setDrawingBufferSize',
	'setSize',
	'setOpaqueSort',
	'setTransparentSort',
	'getScissor',
	'setScissor',
	'getScissorTest',
	'setScissorTest',
	'getViewport',
	'setViewport',
	'getClearColor',
	'setClearColor',
	'getClearAlpha',
	'setClearAlpha',
	'getClearDepth',
	'setClearDepth',
	'getClearStencil',
	'setClearStencil',
	'isOccluded',
	'clear',
	'clearColor',
	'clearDepth',
	'clearStencil',
	'clearAsync',
	'clearColorAsync',
	'clearDepthAsync',
	'clearStencilAsync',
	'currentToneMapping', // getter
	'currentColorSpace', // getter
	'dispose',
	'setRenderTarget',
	'getRenderTarget',
	'setRenderObjectFunction',
	'getRenderObjectFunction',
	'compute',
	'computeAsync',
	'hasFeatureAsync',
	'resolveTimestampsAsync',
	'hasFeature',
	'hasInitialized',
	'initTextureAsync',
	'initTexture',
	'copyFramebufferToTexture',
	'copyTextureToTexture',
	'readRenderTargetPixelsAsync',
	'_projectObject',
	'_renderBundles',
	'_renderTransparents',
	'_renderObjects',
	'renderObject',
	'_renderObjectDirect',
	'_createObjectPipeline',
	'compile', // getter
] as const).distinct()
objProps.renderer = _renderer


// ---[ Props & Defaults ]---

// Defines the constructor arguments and settable properties.
type RendererArgs = {
	backend: any
	parameters?: object
	autoClear?: boolean
	autoClearColor?: boolean
	autoClearDepth?: boolean
	autoClearStencil?: boolean
	outputColorSpace?: string
	toneMapping?: number
	toneMappingExposure?: number
	sortObjects?: boolean
	transparent?: boolean
	opaque?: boolean
	shadowMap?: { enabled?: boolean, type?: number }
	onDeviceLost?: (info: any) => void
}

// The final Props type for the JSX component.
export type RendererProps = Node<Renderer, typeof Renderer, RendererArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		renderer: Partial<RendererArgs>
	}
}

// The 'backend' is a required argument, so the defaults object only contains optional props.
defaults.renderer = {}