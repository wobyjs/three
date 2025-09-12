import { Node } from '../../../../three-types'
// This is an internal class for the renderer.
import WebGLAttributeUtils from 'three/src/renderers/webgl-fallback/utils/WebGLAttributeUtils.js'
export * from 'three/src/renderers/webgl-fallback/utils/WebGLAttributeUtils.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

// Imports for type hints.

declare module '../../../../lib/3/three'
{
	interface Three {
		WebGLAttributeUtils: typeof WebGLAttributeUtils
	}
}

Three.WebGLAttributeUtils = WebGLAttributeUtils

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			webGLAttributeUtils: WebGLAttributeUtilsProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		webGLAttributeUtils: typeof webGLAttributeUtils
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		webGLAttributeUtils: typeof _webGLAttributeUtils
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a WebGLBackend instance.
const webGLAttributeUtils = ([
	'backend',
] as const).distinct()
consParams.webGLAttributeUtils = webGLAttributeUtils

// ---[ Object Properties ]---

// Lists the properties and methods of the class.
const _webGLAttributeUtils = ([
	'backend',
	'createAttribute',
	'updateAttribute',
	'destroyAttribute',
	'getArrayBufferAsync',
	'_createBuffer',
] as const).distinct()
objProps.webGLAttributeUtils = _webGLAttributeUtils


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type WebGLAttributeUtilsArgs = {
	backend: any  // needs to be typed WebGLBackend.  Avoid circular dependencies.
}

// The final Props type for the JSX component.
export type WebGLAttributeUtilsProps = Node<WebGLAttributeUtils, typeof WebGLAttributeUtils, WebGLAttributeUtilsArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		webGLAttributeUtils: Partial<WebGLAttributeUtilsArgs>
	}
}

// The 'backend' argument is required, so the defaults object is empty.
defaults.webGLAttributeUtils = {}