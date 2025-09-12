import { Node } from '../../../three-types'
import ShadowBaseNode, { shadowPositionWorld } from 'three/src/nodes/lighting/ShadowBaseNode.js'
export * from 'three/src/nodes/lighting/ShadowBaseNode.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Light } from 'three/src/lights/Light.js'

declare module '../../../lib/3/three'
{
	interface Three {
		ShadowBaseNode: typeof ShadowBaseNode,
		shadowPositionWorld: typeof shadowPositionWorld
	}
}

// Make the class and the TSL constant available under the Three namespace.
Three.ShadowBaseNode = ShadowBaseNode
Three.shadowPositionWorld = shadowPositionWorld

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			shadowBaseNode: ShadowBaseNodeProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		shadowBaseNode: typeof shadowBaseNode
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		shadowBaseNode: typeof _shadowBaseNode
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a single 'light' argument.
const shadowBaseNode = ([
	'light',
] as const).distinct()
consParams.shadowBaseNode = shadowBaseNode

// ---[ Object Properties ]---

// Inherits from Node and adds its own properties and methods.
// Assumes `objProps.node` has been defined.
const _shadowBaseNode = ([
	...(objProps.node || []),
	'light',
	'updateBeforeType',
	'isShadowBaseNode',
	'setupShadowPosition',
	'dispose',
] as const).distinct()
objProps.shadowBaseNode = _shadowBaseNode


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type ShadowBaseNodeArgs = {
	light: Light
}

// The final Props type for the JSX component.
export type ShadowBaseNodeProps = Node<ShadowBaseNode, typeof ShadowBaseNode, ShadowBaseNodeArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		shadowBaseNode: Partial<ShadowBaseNodeArgs>
	}
}

// The 'light' argument is required, so the defaults object is empty.
defaults.shadowBaseNode = {}