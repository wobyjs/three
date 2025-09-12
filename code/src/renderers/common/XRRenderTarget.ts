import { Node } from '../../../three-types'
// This is an internal class for XR management.
import { XRRenderTarget } from 'three/src/renderers/common/XRRenderTarget.js'
export * from 'three/src/renderers/common/XRRenderTarget.js'
import { Three } from '../../../lib/3/three'
import { consParams } from '../../../lib/3/consParams'
import { objProps } from '../../../lib/3/objProps'
import { defaults } from '../../../lib/3/defaults'

declare module '../../../lib/3/three'
{
	interface Three {
		XRRenderTarget: typeof XRRenderTarget
	}
}

Three.XRRenderTarget = XRRenderTarget

declare module 'woby' {
	namespace JSX {
		interface IntrinsicElements {
			xRRenderTarget: XRRenderTargetProps,
		}
	}
}

declare module '../../../lib/3/consParams' {
	interface consParams {
		xRRenderTarget: typeof xRRenderTarget
	}
}

declare module '../../../lib/3/objProps' {
	interface objProps {
		xRRenderTarget: typeof _xRRenderTarget
	}
}

// ---[ Constructor Parameters ]---

// The constructor takes an optional width, height, and options object.
const xRRenderTarget = ([
	'width',
	'height',
	'options',
] as const).distinct()
consParams.xRRenderTarget = xRRenderTarget

// ---[ Object Properties ]---

// Inherits from RenderTarget and adds its own properties.
// Assumes `objProps.renderTarget` has been defined.
const _xRRenderTarget = ([
	...(objProps.renderTarget || []),
	'isXRRenderTarget',
	'hasExternalTextures',
	'autoAllocateDepthBuffer',
	'copy',
] as const).distinct()
objProps.xRRenderTarget = _xRRenderTarget


// ---[ Props & Defaults ]---

// Defines the settable properties for component creation.
// type XRRenderTargetArgs = RenderTargetArgs & {
type XRRenderTargetArgs = {
	width?: number
	height?: number
	options?: { [key: string]: any }
	hasExternalTextures?: boolean
	autoAllocateDepthBuffer?: boolean
}

// The final Props type for the JSX component.
export type XRRenderTargetProps = Node<XRRenderTarget, typeof XRRenderTarget, XRRenderTargetArgs>

declare module '../../../lib/3/defaults' {
	interface defaults {
		xRRenderTarget: Partial<XRRenderTargetArgs>
	}
}

// The width, height, and options are optional.
defaults.xRRenderTarget = {}