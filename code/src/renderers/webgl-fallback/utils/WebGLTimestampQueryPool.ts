import { Node } from '../../../../three-types'
// This is an internal class for the renderer.
import WebGLTimestampQueryPool from 'three/src/renderers/webgl-fallback/utils/WebGLTimestampQueryPool.js'
export * from 'three/src/renderers/webgl-fallback/utils/WebGLTimestampQueryPool.js'
import { Three } from '../../../../lib/3/three'
import { consParams } from '../../../../lib/3/consParams'
import { objProps } from '../../../../lib/3/objProps'
import { defaults } from '../../../../lib/3/defaults'

declare module '../../../../lib/3/three'
{
	interface Three {
		WebGLTimestampQueryPool: typeof WebGLTimestampQueryPool
	}
}

Three.WebGLTimestampQueryPool = WebGLTimestampQueryPool

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			webGLTimestampQueryPool: WebGLTimestampQueryPoolProps,
		}
	}
}

declare module '../../../../lib/3/consParams' {
	interface consParams {
		webGLTimestampQueryPool: typeof webGLTimestampQueryPool
	}
}

declare module '../../../../lib/3/objProps' {
	interface objProps {
		webGLTimestampQueryPool: typeof _webGLTimestampQueryPool
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a WebGL context, a type, and an optional maxQueries value.
const webGLTimestampQueryPool = ([
	'gl',
	'type',
	'maxQueries',
] as const).distinct()
consParams.webGLTimestampQueryPool = webGLTimestampQueryPool

// ---[ Object Properties ]---

// Inherits from TimestampQueryPool and adds WebGL-specific methods and properties.
// Assumes `objProps.timestampQueryPool` has been defined.
const _webGLTimestampQueryPool = ([
	...(objProps.timestampQueryPool || []),
	'gl',
	'type',
	'ext',
	'queries',
	'activeQuery',
	'queryStates',
	'allocateQueriesForContext',
	'beginQuery',
	'endQuery',
	'resolveQueriesAsync',
	'resolveQuery',
	'dispose',
] as const).distinct()
objProps.webGLTimestampQueryPool = _webGLTimestampQueryPool


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type WebGLTimestampQueryPoolArgs = {
	gl: WebGL2RenderingContext
	type: string
	maxQueries?: number
}

// The final Props type for the JSX component.
export type WebGLTimestampQueryPoolProps = Node<WebGLTimestampQueryPool, typeof WebGLTimestampQueryPool, WebGLTimestampQueryPoolArgs>

declare module '../../../../lib/3/defaults' {
	interface defaults {
		webGLTimestampQueryPool: Partial<WebGLTimestampQueryPoolArgs>
	}
}

defaults.webGLTimestampQueryPool = {}