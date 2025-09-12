import { Node } from '../../../three-types'
// This is the WebGPU backend implementation.
import WebGPUBackend from 'three/src/renderers/webgpu/WebGPUBackend.js'
export * from 'three/src/renderers/webgpu/WebGPUBackend.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		WebGPUBackend: typeof WebGPUBackend
	}
}

Three.WebGPUBackend = WebGPUBackend

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			webGPUBackend: WebGPUBackendProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		webGPUBackend: typeof webGPUBackend
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		webGPUBackend: typeof _webGPUBackend
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes optional parameters.
const webGPUBackend = ([
	'parameters',
] as const).distinct()
consParams.webGPUBackend = webGPUBackend

// ---[ Object Properties ]---

// Lists the many properties and methods of the class.
const _webGPUBackend = ([
	'isWebGPUBackend',
	'parameters',
	'domElement',
	'device',
	'context',
	'colorBuffer',
	'defaultRenderPassdescriptor',
	'utils',
	'attributeUtils',
	'bindingUtils',
	'pipelineUtils',
	'textureUtils',
	'occludedResolveCache',
	'init',
	'coordinateSystem', // getter
	'getArrayBufferAsync',
	'getContext',
	'getDrawingBufferSize',
	'setScissorTest',
	'getClearColor',
	'setClearColor',
	'getClearAlpha',
	'setClearAlpha',
	'setDepthTest',
	'setDepthMask',
	'setDepthFunc',
	'setBlending',
	'setColorMask',
	'setPolygonOffset',
	'useProgram',
	'bindFramebuffer',
	'drawBuffers',
	'activeTexture',
	'bindTexture',
	'bindBufferBase',
	'unbindTexture',
	'hasFeature',
	'getMaxAnisotropy',
	'getDrawingBufferSize',
	'setScissorTest',
	'getClearColor',
	'setClearColor',
	'getClearAlpha',
	'setClearAlpha',
	'setDepthTest',
	'setDepthMask',
	'setDepthFunc',
	'setBlending',
	'setColorMask',
	'setPolygonOffset',
	'useProgram',
	'bindFramebuffer',
	'drawBuffers',
	'activeTexture',
	'bindTexture',
	'bindBufferBase',
	'unbindTexture',
	'beginRender',
	'finishRender',
	'beginCompute',
	'finishCompute',
	'draw',
	'compute',
	'createProgram',
	'destroyProgram',
	'createBindings',
	'updateBindings',
	'updateBinding',
	'createRenderPipeline',
	'createComputePipeline',
	'needsRenderUpdate',
	'getRenderCacheKey',
	'createNodeBuilder',
	'createSampler',
	'destroySampler',
	'createDefaultTexture',
	'createTexture',
	'updateTexture',
	'generateMipmaps',
	'destroyTexture',
	'copyTextureToBuffer',
	'copyTextureToTexture',
	'copyFramebufferToTexture',
	'createAttribute',
	'createIndexAttribute',
	'createStorageAttribute',
	'createIndirectStorageAttribute',
	'updateAttribute',
	'destroyAttribute',
	'updateSize',
	'updateViewport',
	'isOccluded',
	'resolveTimestampsAsync',
	'waitForGPU',
	'enable',
	'disable',
	'setFlipSided',
	'setCullFace',
	'setLineWidth',
] as const).distinct()
objProps.webGPUBackend = _webGPUBackend


// ---[ Props & Defaults ]---

// Defines the constructor arguments.
type WebGPUBackendArgs = {
	parameters?: object
}

// The final Props type for the JSX component.
export type WebGPUBackendProps = Node<WebGPUBackend, typeof WebGPUBackend, WebGPUBackendArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		webGPUBackend: Partial<WebGPUBackendArgs>
	}
}

defaults.webGPUBackend = {}