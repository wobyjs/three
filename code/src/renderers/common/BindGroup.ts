import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import BindGroup from 'three/src/renderers/common/BindGroup.js'
export * from 'three/src/renderers/common/BindGroup.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		BindGroup: typeof BindGroup
	}
}

Three.BindGroup = BindGroup

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			bindGroup: BindGroupProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		bindGroup: typeof bindGroup
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		bindGroup: typeof _bindGroup
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a name, bindings, an index, and a bindingsReference.
const bindGroup = ([
	'name',
	'bindings',
	'index',
	'bindingsReference',
] as const).distinct()
consParams.bindGroup = bindGroup

// ---[ Object Properties ]---

// This is a flat list of the class's properties.
const _bindGroup = ([
	'name',
	'bindings',
	'index',
	'bindingsReference',
	'id',
] as const).distinct()
objProps.bindGroup = _bindGroup


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type BindGroupArgs = {
	name?: string
	bindings?: any[] // Replace 'any' with a more specific type if possible
	index?: number
	bindingsReference?: any[] // Replace 'any' with a more specific type if possible
}

// The final Props type for the JSX component.
export type BindGroupProps = Node<BindGroup, typeof BindGroup, BindGroupArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		bindGroup: Partial<BindGroupArgs>
	}
}

// The constructor arguments are not all strictly required.
defaults.bindGroup = {}