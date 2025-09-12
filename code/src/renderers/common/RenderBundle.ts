import { Node } from '../../../three-types'
// This is an internal class for the renderer.
import RenderBundle from 'three/src/renderers/common/RenderBundle.js'
export * from 'three/src/renderers/common/RenderBundle.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'
import { Camera } from 'three/src/cameras/Camera.js'

declare module '../../../lib/3/three'
{
	interface Three {
		RenderBundle: typeof RenderBundle
	}
}

Three.RenderBundle = RenderBundle

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			renderBundle: RenderBundleProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		renderBundle: typeof renderBundle
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		renderBundle: typeof _renderBundle
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes a bundleGroup and a camera.
const renderBundle = ([
	'bundleGroup',
	'camera',
] as const).distinct()
consParams.renderBundle = renderBundle

// ---[ Object Properties ]---

// Lists the instance properties.
const _renderBundle = ([
	'bundleGroup',
	'camera',
] as const).distinct()
objProps.renderBundle = _renderBundle


// ---[ Props & Defaults ]---

// Defines the constructor arguments for component creation.
type RenderBundleArgs = {
	bundleGroup: any // Replace 'any' with BundleGroup class when available
	camera: Camera
}

// The final Props type for the JSX component.
export type RenderBundleProps = Node<RenderBundle, typeof RenderBundle, RenderBundleArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		renderBundle: Partial<RenderBundleArgs>
	}
}

// All constructor arguments are required, so the defaults object is empty.
defaults.renderBundle = {}