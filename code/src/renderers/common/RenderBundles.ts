import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import RenderBundles from 'three/src/renderers/common/RenderBundles.js'
export * from 'three/src/renderers/common/RenderBundles.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		RenderBundles: typeof RenderBundles
	}
}

Three.RenderBundles = RenderBundles

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderBundles: RenderBundlesProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		renderBundles: typeof renderBundles
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderBundles: typeof _renderBundles
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes no arguments.
const renderBundles = ([] as const).distinct()
consParams.renderBundles = renderBundles

// ---[ Object Properties ]---

// Inherits from ChainMap and adds its own methods.
// Assumes `objProps.chainMap` and `objProps.renderBundle` have been defined.
const _renderBundles = ([
	...(objProps.chainMap || []),
	'bundles',
	'get',
	'dispose',
] as const).distinct()
objProps.renderBundles = _renderBundles


// ---[ Props & Defaults ]---

// This class has no configurable parameters in its constructor.
type RenderBundlesArgs = {}

// The final Props type for the JSX component.
export type RenderBundlesProps = Node<RenderBundles, typeof RenderBundles, RenderBundlesArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		renderBundles: Partial<RenderBundlesArgs>
	}
}

// This class has no constructor arguments, so the defaults object is empty.
defaults.renderBundles = {}