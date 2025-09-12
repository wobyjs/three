import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Bindings from 'three/src/renderers/common/Bindings.js'
export * from 'three/src/renderers/common/Bindings.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

// Import dependency types
// import { Backend } from 'three/src/renderers/common/Backend.js'
import { Nodes } from './nodes/Nodes.js'
import { Textures } from './Textures.js'
import { Attributes } from './Attributes.js'
import { Pipelines } from './Pipelines.js'
import { Info } from './Info.js'

declare module '../../../lib/3/three'
{
	interface Three {
		Bindings: typeof Bindings
	}
}

Three.Bindings = Bindings

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			bindings: BindingsProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		bindings: typeof bindings
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		bindings: typeof _bindings
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a backend, nodes manager, textures manager, attributes manager, pipelines manager, and info manager.
const bindings = ([
	'backend',
	'nodes',
	'textures',
	'attributes',
	'pipelines',
	'info',
] as const).distinct()
consParams.bindings = bindings

// ---[ Object Properties ]---

// Inherits from DataMap and adds its own properties and methods.
// Assumes `objProps.dataMap` has been defined.
const _bindings = ([
	...(objProps.dataMap || []),
	'backend',
	'textures',
	'pipelines',
	'attributes',
	'nodes',
	'info',
	'getForRender',
	'getForCompute',
	'updateForCompute',
	'updateForRender',
	'_updateBindings',
	'_init',
	'_update',
] as const).distinct()
objProps.bindings = _bindings


// ---[ Props & Defaults ]---

// Defines the constructor arguments. Using 'any' for the internal 'backend' type for robustness.
type BindingsArgs = {
	backend: any
	nodes: Nodes
	textures: Textures
	attributes: Attributes
	pipelines: Pipelines
	info: Info
}

// The final Props type for the JSX component.
export type BindingsProps = Node<Bindings, typeof Bindings, BindingsArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		bindings: Partial<BindingsArgs>
	}
}

// The constructor arguments are required for this class to function, so defaults is empty.
defaults.bindings = {}