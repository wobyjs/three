import { Node } from '../../../../three-types'
// This is an internal class for the renderer.
import WebGLUtils from 'three/src/renderers/webgl-fallback/utils/WebGLUtils.js'
export * from 'three/src/renderers/webgl-fallback/utils/WebGLUtils.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
	interface Three {
		WebGLUtils: typeof WebGLUtils
	}
}

Three.WebGLUtils = WebGLUtils

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			fallbackWebGLUtils: WebGLUtilsProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		fallbackWebGLUtils: typeof fallbackWebGLUtils
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		fallbackWebGLUtils: typeof _webGLUtils
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a WebGLBackend instance.
const fallbackWebGLUtils = ([
	'backend',
] as const).distinct()
consParams.fallbackWebGLUtils = fallbackWebGLUtils

// ---[ Object Properties ]---

// Lists the instance properties and methods.
const _webGLUtils = ([
	'backend',
	'gl',
	'extensions',
	'_init',
	'convert',
	'_clientWaitAsync',
] as const).distinct()
objProps.fallbackWebGLUtils = _webGLUtils


// ---[ Props & Defaults ]---

// Defines the constructor arguments.
type WebGLUtilsArgs = {
	backend: any  // type needs to be WebGLBackend
}

// The final Props type for the JSX component.
export type WebGLUtilsProps = Node<WebGLUtils, typeof WebGLUtils, WebGLUtilsArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		fallbackWebGLUtils: Partial<WebGLUtilsArgs>
	}
}

// The 'backend' argument is required, so the defaults object is empty.
defaults.fallbackWebGLUtils = {}