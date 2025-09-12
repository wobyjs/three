import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import Background from 'three/src/renderers/common/Background.js'
export * from 'three/src/renderers/common/Background.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Renderer } from './Renderer.js'
import { Nodes } from './nodes/Nodes.js'

declare module '../../../lib/3/three'
{
	interface Three {
		Background: typeof Background
	}
}

Three.Background = Background

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			background: BackgroundProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		background: typeof background
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		background: typeof _background
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a renderer and a nodes manager.
const background = ([
	'renderer',
	'nodes',
] as const).distinct()
consParams.background = background

// ---[ Object Properties ]---

// Inherits from DataMap and adds its own properties and methods.
// Assumes `objProps.dataMap` has been defined.
const _background = ([
	...(objProps.dataMap || []),
	'renderer',
	'nodes',
	'update',
] as const).distinct()
objProps.background = _background


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type BackgroundArgs = {
	renderer: Renderer
	nodes: Nodes
}

// The final Props type for the JSX component.
export type BackgroundProps = Node<Background, typeof Background, BackgroundArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		background: Partial<BackgroundArgs>
	}
}

// All constructor arguments are required, so the defaults object is empty.
defaults.background = {}