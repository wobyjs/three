import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import RenderLists from 'three/src/renderers/common/RenderLists.js'
export * from 'three/src/renderers/common/RenderLists.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

// Import dependency types
import { Lighting } from './Lighting'

declare module '../../../lib/3/three'
{
	interface Three {
		RenderLists: typeof RenderLists
	}
}

Three.RenderLists = RenderLists

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderLists: RenderListsProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		renderLists: typeof renderLists
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderLists: typeof _renderLists
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a lighting manager.
const renderLists = ([
	'lighting',
] as const).distinct()
consParams.renderLists = renderLists

// ---[ Object Properties ]---

// Inherits from ChainMap and adds its own methods.
// Assumes `objProps.chainMap` has been defined.
const _renderLists = ([
	...(objProps.chainMap || []),
	'lighting',
	'lists',
	'get',
	'dispose',
] as const).distinct()
objProps.renderLists = _renderLists


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type RenderListsArgs = {
	lighting: Lighting
}

// The final Props type for the JSX component.
export type RenderListsProps = Node<RenderLists, typeof RenderLists, RenderListsArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		renderLists: Partial<RenderListsArgs>
	}
}

// The 'lighting' argument is required, so the defaults object is empty.
defaults.renderLists = {}