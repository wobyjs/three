import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Backend from 'three/src/renderers/common/Backend.js'
export * from 'three/src/renderers/common/Backend.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
// import { Renderer } from './Renderer'

declare module '../../../lib/3/three'
{
	interface Three {
		Backend: typeof Backend
	}
}

Three.Backend = Backend

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			backend: BackendProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		backend: typeof backend
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		backend: typeof _backend
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes an optional 'parameters' object.
const backend = ([
	'parameters',
] as const).distinct()
consParams.backend = backend

// ---[ Object Properties ]---

// This is a flat list of the class's properties and the full abstract/implemented method interface.
const _backend = ([
	'parameters',
	'data',
	'renderer',
	'domElement',
	'timestampQueryPool',
	'init',
	'coordinateSystem', // abstract getter
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
	'updateAttribute',
	'destroyAttribute',
	'getContext',
	'updateSize',
	'updateViewport',
	'isOccluded',
	'resolveTimestampsAsync',
	'waitForGPU',
	'getArrayBufferAsync',
	'hasFeatureAsync',
	'hasFeature',
	'getMaxAnisotropy',
	'getDrawingBufferSize',
	'setScissorTest',
	'getClearColor',
	'getDomElement',
	'set',
	'get',
	'has',
	'delete',
	'dispose',
] as const).distinct()
objProps.backend = _backend


// ---[ Props & Defaults ]---

// Defines the constructor arguments. Using a generic object for 'parameters' for robustness.
type BackendArgs = {
	parameters?: Record<string, any>
}

// The final Props type for the JSX component.
export type BackendProps = Node<Backend, typeof Backend, BackendArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		backend: Partial<BackendArgs>
	}
}

defaults.backend = {}