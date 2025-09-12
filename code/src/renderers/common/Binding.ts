import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Binding from 'three/src/renderers/common/Binding.js'
export * from 'three/src/renderers/common/Binding.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		Binding: typeof Binding
	}
}

Three.Binding = Binding

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			binding: BindingProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		binding: typeof binding
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		binding: typeof _binding
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes an optional name.
const binding = (['name'] as const).distinct()
consParams.binding = binding

// ---[ Object Properties ]---

// Lists the instance properties of the class.
const _binding = ([
	'name',
	'visibility',
	'setVisibility',
	'clone',
] as const).distinct()
objProps.binding = _binding


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type BindingArgs = {
	name?: string
}

// The final Props type for the JSX component.
export type BindingProps = Node<Binding, typeof Binding, BindingArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		binding: Partial<BindingArgs>
	}
}

// The 'name' argument is optional.
defaults.binding = {}