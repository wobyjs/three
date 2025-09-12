import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import RenderObjects from 'three/src/renderers/common/RenderObjects.js'
export * from 'three/src/renderers/common/RenderObjects.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'


declare module '../../../lib/3/three'
{
	interface Three {
		RenderObjects: typeof RenderObjects
	}
}

Three.RenderObjects = RenderObjects

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderObjects: RenderObjectsProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		renderObjects: typeof renderObjects
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderObjects: typeof _renderObjects
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes renderer components.
const renderObjects = ([
	'renderer',
	'nodes',
	'geometries',
	'pipelines',
	'bindings',
	'info',
] as const).distinct()
consParams.renderObjects = renderObjects

// ---[ Object Properties ]---

// Lists the instance properties and methods.
const _renderObjects = ([
	'renderer',
	'nodes',
	'geometries',
	'pipelines',
	'bindings',
	'info',
	'chainMaps',
	'get',
	'getChainMap',
	'dispose',
	'createRenderObject',
] as const).distinct()
objProps.renderObjects = _renderObjects


// ---[ Props & Defaults ]---

// Defines the constructor arguments. Using 'any' for some to avoid circular dependencies.
type RenderObjectsArgs = {
	renderer: any
	nodes: any
	geometries: any
	pipelines: any
	bindings: any
	info: any
}

// The final Props type for the JSX component.
export type RenderObjectsProps = Node<RenderObjects, typeof RenderObjects, RenderObjectsArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		renderObjects: Partial<RenderObjectsArgs>
	}
}

// All constructor arguments are required for this class to function, so defaults is empty.
defaults.renderObjects = {}