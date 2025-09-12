import { Node } from '../../three-types'
import { Layers } from 'three/src/core/Layers.js'
export * from 'three/src/core/Layers.js'
import { Three } from '../../lib/3/three'
import { consParams } from '../../lib/3/consParams'
import { objProps } from '../../lib/3/objProps'
import { defaults } from '../../lib/3/defaults'

declare module '../../lib/3/three'
{
	interface Three {
		Layers: typeof Layers
	}
}

Three.Layers = Layers

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			layers: LayersProps,
		}
	}
}

declare module '../../lib/3/consParams' {
	interface consParams {
		layers: typeof layers
	}
}

declare module '../../lib/3/objProps' {
	interface objProps {
		layers: typeof _layers
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const layers = ([] as const).distinct()
consParams.layers = layers

// ---[ Object Properties ]---

const _layers = ([
	'mask',
	'set',
	'enable',
	'enableAll',
	'toggle',
	'disable',
	'disableAll',
	'test',
	'isEnabled',
] as const).distinct()
objProps.layers = _layers


// ---[ Props & Defaults ]---

// The 'mask' property can be optionally set on creation.
export type LayersProps = Node<Layers, typeof Layers, { mask?: number }>

declare module '../../lib/3/defaults' {
	interface defaults {
		layers: Partial<{ mask?: number }>
	}
}

defaults.layers = {}