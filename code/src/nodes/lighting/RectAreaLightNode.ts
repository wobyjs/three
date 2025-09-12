import { Node } from '../../../three-types'
import RectAreaLightNode from 'three/src/nodes/lighting/RectAreaLightNode.js'
export * from 'three/src/nodes/lighting/RectAreaLightNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { RectAreaLight } from 'three/src/lights/RectAreaLight.js'

declare module '../../../lib/3/three'
{
	interface Three {
		RectAreaLightNode: typeof RectAreaLightNode
	}
}

// Make the class available under the Three namespace.
// This also exposes the static `setLTC` method.
Three.RectAreaLightNode = RectAreaLightNode

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			rectAreaLightNode: RectAreaLightNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		rectAreaLightNode: typeof rectAreaLightNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		rectAreaLightNode: typeof _rectAreaLightNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single optional 'light' argument.
const rectAreaLightNode = ([
	'light',
] as const).distinct()
consParams.rectAreaLightNode = rectAreaLightNode

// ---[ Object Properties ]---

// Inherits from AnalyticLightNode and adds its own properties and methods.
// Assumes `objProps.analyticLightNode` has been defined.
const _rectAreaLightNode = ([
	...(objProps.analyticLightNode || []),
	'halfHeight',
	'halfWidth',
	'updateType',
	'update',
	'setup',
] as const).distinct()
objProps.rectAreaLightNode = _rectAreaLightNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type RectAreaLightNodeArgs = {
	light?: RectAreaLight | null
}

// The final Props type for the JSX component.
export type RectAreaLightNodeProps = Node<RectAreaLightNode, typeof RectAreaLightNode, RectAreaLightNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		rectAreaLightNode: Partial<RectAreaLightNodeArgs>
	}
}

defaults.rectAreaLightNode = {}