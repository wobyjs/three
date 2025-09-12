import { Node } from '../../three-types'
import { ClippingGroup } from 'three/src/objects/ClippingGroup.js'
export * from 'three/src/objects/ClippingGroup.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'
import { Plane } from 'three/src/math/Plane.js'

declare module '../../lib/3/three'
{
	interface Three {
		ClippingGroup: typeof ClippingGroup
	}
}

Three.ClippingGroup = ClippingGroup

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			clippingGroup: ClippingGroupProps,
		}
	}
}

declare module '../../lib/3/consParams' {
	interface consParams {
		clippingGroup: typeof clippingGroup
	}
}

declare module '../../lib/3/objProps' {
	interface objProps {
		clippingGroup: typeof _clippingGroup
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const clippingGroup = ([] as const).distinct()
consParams.clippingGroup = clippingGroup

// ---[ Object Properties ]---

// Inherits from Group and adds its own specific properties.
// Assumes `objProps.group` has been defined.
const _clippingGroup = ([
	...(objProps.group || []),
	'isClippingGroup',
	'clippingPlanes',
	'enabled',
	'clipIntersection',
	'clipShadows',
] as const).distinct()
objProps.clippingGroup = _clippingGroup


// ---[ Props & Defaults ]---

// Defines the settable properties for component creation.
type ClippingGroupArgs = {
	clippingPlanes?: Plane[]
	enabled?: boolean
	clipIntersection?: boolean
	clipShadows?: boolean
}

// The final Props type for the JSX component.
export type ClippingGroupProps = Node<ClippingGroup, typeof ClippingGroup, ClippingGroupArgs>

declare module '../../lib/3/defaults' {
	interface defaults {
		clippingGroup: Partial<ClippingGroupArgs>
	}
}

defaults.clippingGroup = {}