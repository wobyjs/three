import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import ClippingContext from 'three/src/renderers/common/ClippingContext.js'
export * from 'three/src/renderers/common/ClippingContext.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		ClippingContext: typeof ClippingContext
	}
}

Three.ClippingContext = ClippingContext

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			clippingContext: ClippingContextProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		clippingContext: typeof clippingContext
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		clippingContext: typeof _clippingContext
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes an optional parentContext.
const clippingContext = ([
	'parentContext',
] as const).distinct()
consParams.clippingContext = clippingContext

// ---[ Object Properties ]---

// This class has no inheritance.
const _clippingContext = ([
	'version',
	'clipIntersection',
	'cacheKey',
	'shadowPass',
	'viewNormalMatrix',
	'clippingGroupContexts',
	'intersectionPlanes',
	'unionPlanes',
	'parentVersion',
	'projectPlanes',
	'updateGlobal',
	'update',
	'getGroupContext',
	'unionClippingCount', // getter
] as const).distinct()
objProps.clippingContext = _clippingContext


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type ClippingContextArgs = {
	parentContext?: ClippingContext | null
}

// The final Props type for the JSX component.
export type ClippingContextProps = Node<ClippingContext, typeof ClippingContext, ClippingContextArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		clippingContext: Partial<ClippingContextArgs>
	}
}

// The 'parentContext' is optional.
defaults.clippingContext = {}