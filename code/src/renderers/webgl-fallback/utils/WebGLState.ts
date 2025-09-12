import { Node } from '../../../../three-types'
// This is an internal class for the renderer.
import WebGLState from 'three/src/renderers/webgl-fallback/utils/WebGLState.js'
export * from 'three/src/renderers/webgl/WebGLState.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
	interface Three {
		WebGLState: typeof WebGLState
	}
}

Three.WebGLState = WebGLState

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			fallbackWebGLState: WebGLStateProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		fallbackWebGLState: typeof fallbackWebGLState
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		fallbackWebGLState: typeof _webGLState
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a WebGLBackend instance.
const fallbackWebGLState = ([
	'backend',
] as const).distinct()
consParams.fallbackWebGLState = fallbackWebGLState

// ---[ Object Properties ]---

// Lists the instance properties of the class.
const _webGLState = ([
	'backend',
	'gl',
	'enabled',
	'currentFlipSided',
	'currentCullFace',
	'currentProgram',
	'currentBlendingEnabled',
	'currentBlending',
	'currentBlendSrc',
	'currentBlendDst',
	'currentBlendSrcAlpha',
	'currentBlendDstAlpha',
	'currentPremultipledAlpha',
	'currentPolygonOffsetFactor',
	'currentPolygonOffsetUnits',
	'currentColorMask',
	'currentDepthFunc',
	'currentDepthMask',
	'currentStencilFunc',
	'currentStencilRef',
	'currentStencilFuncMask',
	'currentStencilFail',
	'currentStencilZFail',
	'currentStencilZPass',
	'currentStencilMask',
	'currentLineWidth',
	'currentClippingPlanes',
	'currentBoundFramebuffers',
	'currentDrawbuffers',
	'maxTextures',
	'currentTextureSlot',
	'currentBoundTextures',
	'currentBoundBufferBases',
	'_init',
	'enable',
	'disable',
	'setFlipSided',
	'setCullFace',
	'setLineWidth',
	'setBlending',
	'setColorMask',
	'setDepthTest',
	'setDepthMask',
	'setDepthFunc',
	'scissor',
	'viewport',
	'setScissorTest',
	'setStencilTest',
	'setStencilMask',
	'setStencilFunc',
	'setStencilOp',
	'setMaterial',
	'setPolygonOffset',
	'useProgram',
	'bindFramebuffer',
	'drawBuffers',
	'activeTexture',
	'bindTexture',
	'bindBufferBase',
	'unbindTexture',
] as const).distinct()
objProps.fallbackWebGLState = _webGLState


// ---[ Props & Defaults ]---

// Defines the constructor arguments.
type WebGLStateArgs = {
	backend: any // Type needs to be WebGLBackend, but avoid a circular dependency
}

// The final Props type for the JSX component.
export type WebGLStateProps = Node<WebGLState, typeof WebGLState, WebGLStateArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		fallbackWebGLState: Partial<WebGLStateArgs>
	}
}

// The 'backend' argument is required, so the defaults object is empty.
defaults.fallbackWebGLState = {}