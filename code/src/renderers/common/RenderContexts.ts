import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import RenderContexts from 'three/src/renderers/common/RenderContexts.js'
export * from 'three/src/renderers/common/RenderContexts.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		RenderContexts: typeof RenderContexts
	}
}

Three.RenderContexts = RenderContexts

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderContexts: RenderContextsProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		renderContexts: typeof renderContexts
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderContexts: typeof _renderContexts
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const renderContexts = ([] as const).distinct()
consParams.renderContexts = renderContexts

// ---[ Object Properties ]---

// Lists the instance properties and methods.
const _renderContexts = ([
	'chainMaps',
	'get',
	'getForClear',
	'_getChainMap',
	'dispose',
] as const).distinct()
objProps.renderContexts = _renderContexts


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type RenderContextsArgs = {}

// The final Props type for the JSX component.
export type RenderContextsProps = Node<RenderContexts, typeof RenderContexts, RenderContextsArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		renderContexts: Partial<RenderContextsArgs>
	}
}

// This class has no constructor arguments, so the defaults object is empty.
defaults.renderContexts = {}