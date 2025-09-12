import { Node } from '../../../three-types'
import ScreenNode, { screenUV, screenSize, screenCoordinate, viewport, viewportSize, viewportCoordinate, viewportUV, viewportResolution, viewportTopLeft, viewportBottomLeft } from 'three/src/nodes/display/ScreenNode.js'
export * from 'three/src/nodes/display/ScreenNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		ScreenNode: typeof ScreenNode,

		// TSL Constants
		screenUV: typeof screenUV,
		screenSize: typeof screenSize,
		screenCoordinate: typeof screenCoordinate,
		viewport: typeof viewport,
		viewportSize: typeof viewportSize,
		viewportCoordinate: typeof viewportCoordinate,
		viewportUV: typeof viewportUV,

		// Deprecated TSL Constants
		viewportResolution: typeof viewportResolution,
		viewportTopLeft: typeof viewportTopLeft,
		viewportBottomLeft: typeof viewportBottomLeft
	}
}

// Make the class and all TSL constants available under the Three namespace.
Three.ScreenNode = ScreenNode
Three.screenUV = screenUV
Three.screenSize = screenSize
Three.screenCoordinate = screenCoordinate
Three.viewport = viewport
Three.viewportSize = viewportSize
Three.viewportCoordinate = viewportCoordinate
Three.viewportUV = viewportUV
Three.viewportResolution = viewportResolution
Three.viewportTopLeft = viewportTopLeft
Three.viewportBottomLeft = viewportBottomLeft

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			screenNode: ScreenNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		screenNode: typeof screenNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		screenNode: typeof _screenNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single 'scope' argument.
const screenNode = ([
	'scope',
] as const).distinct()
consParams.screenNode = screenNode

// ---[ Object Properties ]---

// Inherits from Node and adds its own properties and overridden methods.
// Assumes `objProps.node` has been defined.
const _screenNode = ([
	...(objProps.node || []),
	'scope',
	'isViewportNode',
	'getNodeType',
	'getUpdateType',
	'update',
	'setup',
	'generate',
] as const).distinct()
objProps.screenNode = _screenNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type ScreenNodeArgs = {
	scope: 'coordinate' | 'viewport' | 'size' | 'uv'
}

// The final Props type for the JSX component.
export type ScreenNodeProps = Node<ScreenNode, typeof ScreenNode, ScreenNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		screenNode: Partial<ScreenNodeArgs>
	}
}

// The 'scope' argument is required, so the defaults object is empty.
defaults.screenNode = {}