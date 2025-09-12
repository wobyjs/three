import { Node } from '../../../../three-types'
// This is an internal class for the renderer.
import WebGLTextureUtils from 'three/src/renderers/webgl-fallback/utils/WebGLTextureUtils.js'
export * from 'three/src/renderers/webgl-fallback/utils/WebGLTextureUtils.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
	interface Three {
		WebGLTextureUtils: typeof WebGLTextureUtils
	}
}

Three.WebGLTextureUtils = WebGLTextureUtils

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			webGLTextureUtils: WebGLTextureUtilsProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		webGLTextureUtils: typeof webGLTextureUtils
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		webGLTextureUtils: typeof _webGLTextureUtils
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a WebGLBackend instance.
const webGLTextureUtils = ([
	'backend',
] as const).distinct()
consParams.webGLTextureUtils = webGLTextureUtils

// ---[ Object Properties ]---

// Lists the instance properties of the class.
const _webGLTextureUtils = ([
	'backend',
	'gl',
	'extensions',
	'defaultTextures',
	'_init',
	'getGLTextureType',
	'getInternalFormat',
	'setTextureParameters',
	'createDefaultTexture',
	'createTexture',
	'updateTexture',
	'generateMipmaps',
	'destroyTexture',
	'copyTextureToBuffer',
	'copyTextureToTexture',
	'copyFramebufferToTexture',
	'createAttribute',
	'destroyAttribute',
	'deallocateRenderBuffers',
	'_getTypedArrayType',
	'_getBytesPerTexel',
] as const).distinct()
objProps.webGLTextureUtils = _webGLTextureUtils


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type WebGLTextureUtilsArgs = {
	backend: any // Type needs to be WebGLBackend, but avoids a circular dependency.
}

// The final Props type for the JSX component.
export type WebGLTextureUtilsProps = Node<WebGLTextureUtils, typeof WebGLTextureUtils, WebGLTextureUtilsArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		webGLTextureUtils: Partial<WebGLTextureUtilsArgs>
	}
}

// The 'backend' argument is required, so the defaults object is empty.
defaults.webGLTextureUtils = {}