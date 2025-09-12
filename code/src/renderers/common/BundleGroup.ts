import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import BundleGroup from 'three/src/renderers/common/BundleGroup.js'
export * from 'three/src/renderers/common/BundleGroup.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		BundleGroup: typeof BundleGroup
	}
}

Three.BundleGroup = BundleGroup

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			bundleGroup: BundleGroupProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		bundleGroup: typeof bundleGroup
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		bundleGroup: typeof _bundleGroup
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const bundleGroup = ([] as const).distinct()
consParams.bundleGroup = bundleGroup

// ---[ Object Properties ]---

// Inherits from Group and adds its own properties.
// Assumes `objProps.group` has been defined.
const _bundleGroup = ([
	...(objProps.group || []),
	'isBundleGroup',
	'type',
	'static',
	'version', //getter/setter
	'needsUpdate',  // setter
] as const).distinct()
objProps.bundleGroup = _bundleGroup


// ---[ Props & Defaults ]---

// Defines the settable properties for component creation.
type BundleGroupArgs = {
	static?: boolean
}

// The final Props type for the JSX component.
export type BundleGroupProps = Node<BundleGroup, typeof BundleGroup, BundleGroupArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		bundleGroup: Partial<BundleGroupArgs>
	}
}

// The constructor takes no arguments and the properties are optional,
// so defaults is an empty object.
defaults.bundleGroup = {}